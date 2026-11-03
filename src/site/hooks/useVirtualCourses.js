import { useCallback, useEffect, useState } from "react";
import { isAbort } from "../../api/client";
import { listVirtualCourses, MAX_PAGE_SIZE } from "../../api/virtualCourses";
import { uniqueById } from "../../lib/courseFormat";

/**
 * Published virtual courses, a page at a time.
 * status: "loading" | "ready" | "error". `loadingMore` covers later pages.
 */
const EMPTY = { status: "ready", items: [], total: 0, page: 1, totalPages: 1, error: null };

const useVirtualCourses = ({ limit = MAX_PAGE_SIZE, category, enabled = true } = {}) => {
  const [state, setState] = useState(enabled ? { ...EMPTY, status: "loading" } : EMPTY);
  const [loadingMore, setLoadingMore] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setState(EMPTY);
      return undefined;
    }
    const controller = new AbortController();
    setState((s) => ({ ...s, status: "loading", error: null }));
    listVirtualCourses({ page: 1, limit, category }, controller.signal)
      .then(({ items, pagination }) =>
        setState({
          status: "ready",
          items: uniqueById(items),
          total: pagination.total,
          page: pagination.page,
          totalPages: pagination.totalPages,
          error: null,
        })
      )
      .catch((error) => {
        if (!isAbort(error)) setState({ status: "error", items: [], total: 0, page: 1, totalPages: 1, error });
      });
    return () => controller.abort();
  }, [limit, category, attempt, enabled]);

  const loadMore = useCallback(() => {
    if (loadingMore || state.page >= state.totalPages) return;
    setLoadingMore(true);
    listVirtualCourses({ page: state.page + 1, limit, category })
      .then(({ items, pagination }) =>
        setState((s) => ({
          ...s,
          items: uniqueById([...s.items, ...items]),
          total: pagination.total,
          page: pagination.page,
          totalPages: pagination.totalPages,
        }))
      )
      .catch(() => {
        // Keep what's already shown; the button stays so the learner can retry.
      })
      .finally(() => setLoadingMore(false));
  }, [loadingMore, state.page, state.totalPages, limit, category]);

  return {
    ...state,
    loadingMore,
    hasMore: state.status === "ready" && state.page < state.totalPages,
    loadMore,
    retry: () => setAttempt((n) => n + 1),
  };
};

export default useVirtualCourses;
