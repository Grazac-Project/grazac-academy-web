import { useCallback, useEffect, useState } from "react";
import { isAbort } from "../api/client";
import { SESSION_EXPIRED, useAuth } from "./auth";

/**
 * Runs `fetcher(token, signal)` and re-runs it when `deps` change. A 401 signs
 * the user out: the token has expired, or the account was disabled.
 */
const useAdminQuery = (fetcher, deps = []) => {
  const { token, signOut } = useAuth();
  const [state, setState] = useState({ status: "loading", data: null, error: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!token) return undefined;
    const controller = new AbortController();
    setState((s) => ({ status: "loading", data: s.data, error: null }));
    fetcher(token, controller.signal)
      .then((data) => setState({ status: "ready", data, error: null }))
      .catch((error) => {
        if (isAbort(error)) return;
        if (error.status === 401) {
          signOut(SESSION_EXPIRED);
          return;
        }
        setState({ status: "error", data: null, error });
      });
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, attempt, ...deps]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);
  return { ...state, reload };
};

export default useAdminQuery;
