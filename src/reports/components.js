import { useState } from "react";
import { FiAlertTriangle, FiChevronLeft, FiChevronRight, FiDownload, FiRefreshCw } from "react-icons/fi";
import { exportCsv } from "../api/adminAnalytics";
import { usingMocks } from "../api/client";
import { SESSION_EXPIRED, useAuth } from "./auth";
import { relative, dateTime } from "./format";

export const MetricCard = ({ label, value, hint, loading }) => (
  <div className="gz-rp-metric">
    <p className="gz-rp-metric__label">{label}</p>
    {loading ? (
      <div className="gz-skeleton" style={{ height: 36, width: "60%", marginTop: 6 }} aria-hidden="true" />
    ) : (
      <p className="gz-rp-metric__value">{value}</p>
    )}
    {hint && <p className="gz-rp-metric__hint">{hint}</p>}
  </div>
);

export const ErrorState = ({ error, onRetry }) => (
  <div className="gz-state" role="alert">
    <h3 className="gz-h3">
      <FiAlertTriangle aria-hidden="true" /> We couldn't load this report
    </h3>
    <p>{error && error.message ? error.message : "Something went wrong."}</p>
    {onRetry && (
      <div className="gz-btn-row">
        <button type="button" className="gz-btn gz-btn--primary gz-btn--sm" onClick={onRetry}>
          <FiRefreshCw /> Try again
        </button>
      </div>
    )}
  </div>
);

export const EmptyState = ({ title, text }) => (
  <div className="gz-state">
    <h3 className="gz-h3">{title}</h3>
    {text && <p>{text}</p>}
  </div>
);

export const SampleDataBanner = () =>
  usingMocks ? (
    <p className="gz-rp-banner" role="note">
      Sample data from the development mocks. None of these figures are real.
    </p>
  ) : null;

export const LastSync = ({ at, label = "Data last synced from TrainerCentral" }) => (
  <p className="gz-rp-sync" title={dateTime(at)}>
    {label}: <strong>{at ? `${relative(at)} (${dateTime(at)})` : "not yet"}</strong>
  </p>
);

/**
 * columns: [{ key, label, render?(row), sortValue?(row), align?: "right" }]
 * Tables scroll sideways on small screens; each cell also carries its label
 * so the stacked mobile layout stays readable.
 */
export const DataTable = ({ columns, rows, rowKey, sort, onSort, caption, loading }) => (
  <div className="gz-rp-table-wrap" aria-busy={loading || undefined}>
    <table className="gz-rp-table">
      {caption && <caption className="gz-rp-sr">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((c) => {
            const sortable = onSort && c.sortValue;
            const active = sort && sort.key === c.key;
            return (
              <th
                key={c.key}
                scope="col"
                className={c.align === "right" ? "is-num" : undefined}
                aria-sort={active ? (sort.dir === "asc" ? "ascending" : "descending") : undefined}
              >
                {sortable ? (
                  <button type="button" onClick={() => onSort(c.key)}>
                    {c.label}
                    <span aria-hidden="true">{active ? (sort.dir === "asc" ? " ▲" : " ▼") : ""}</span>
                  </button>
                ) : (
                  c.label
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={rowKey(row)}>
            {columns.map((c) => (
              <td key={c.key} data-label={c.label} className={c.align === "right" ? "is-num" : undefined}>
                {c.render ? c.render(row) : row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Pagination = ({ page, totalPages, total, onPage, label = "results" }) => {
  if (!totalPages || totalPages <= 1) {
    return total ? <p className="gz-rp-pager__info">{total} {label}</p> : null;
  }
  return (
    <nav className="gz-rp-pager" aria-label="Pagination">
      <p className="gz-rp-pager__info">
        Page {page} of {totalPages} · {total} {label}
      </p>
      <div className="gz-btn-row" style={{ marginTop: 0 }}>
        <button
          type="button"
          className="gz-btn gz-btn--secondary gz-btn--sm"
          onClick={() => onPage(page - 1)}
          disabled={page <= 1}
        >
          <FiChevronLeft /> Previous
        </button>
        <button
          type="button"
          className="gz-btn gz-btn--secondary gz-btn--sm"
          onClick={() => onPage(page + 1)}
          disabled={page >= totalPages}
        >
          Next <FiChevronRight />
        </button>
      </div>
    </nav>
  );
};

export const downloadBlob = ({ blob, filename }) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

/** Downloads the backend's CSV (it escapes spreadsheet formulas server-side). */
export const ExportButton = ({ type, children }) => {
  const { token, signOut } = useAuth();
  const [state, setState] = useState({ busy: false, error: "" });

  const run = async () => {
    setState({ busy: true, error: "" });
    try {
      downloadBlob(await exportCsv(token, type));
      setState({ busy: false, error: "" });
    } catch (err) {
      if (err.status === 401) {
        signOut(SESSION_EXPIRED);
        return;
      }
      setState({ busy: false, error: err.message || "Export failed" });
    }
  };

  return (
    <span className="gz-rp-export">
      <button type="button" className="gz-btn gz-btn--secondary gz-btn--sm" onClick={run} disabled={state.busy}>
        <FiDownload /> {state.busy ? "Preparing…" : children}
      </button>
      {state.error && (
        <span className="gz-rp-export__error" role="alert">
          {state.error}
        </span>
      )}
    </span>
  );
};

// Client-side sorting for tables the API returns in one go.
export const useSort = (initial) => {
  const [sort, setSort] = useState(initial);
  const onSort = (key) =>
    setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" }));
  const apply = (rows, columns) => {
    const col = columns.find((c) => c.key === sort.key);
    if (!col || !col.sortValue) return rows;
    const dir = sort.dir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const x = col.sortValue(a);
      const y = col.sortValue(b);
      if (x === y) return 0;
      if (x === null || x === undefined) return 1;
      if (y === null || y === undefined) return -1;
      return (typeof x === "string" ? x.localeCompare(y) : x - y) * dir;
    });
  };
  return { sort, onSort, apply };
};
