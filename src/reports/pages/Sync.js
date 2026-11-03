import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { getSyncStatus, triggerSync } from "../../api/adminAnalytics";
import useAdminQuery from "../useAdminQuery";
import { SESSION_EXPIRED, useAuth } from "../auth";
import { DataTable, EmptyState, ErrorState } from "../components";
import { dateTime, relative } from "../format";

const jobLabels = { courses: "Courses", learners: "Learners", enrollments: "Enrolments", tests: "Test results" };

const runColumns = [
  { key: "job", label: "Job", render: (r) => jobLabels[r.job] || r.job },
  { key: "trigger", label: "Trigger", render: (r) => (r.trigger === "manual" ? "Manual" : "Scheduled") },
  { key: "startedAt", label: "Started", render: (r) => dateTime(r.startedAt) },
  { key: "status", label: "Result", render: (r) => <span className={`gz-rp-pill gz-rp-pill--${r.status}`}>{r.status}</span> },
  {
    key: "counts",
    label: "Fetched / updated / removed / failed",
    render: (r) =>
      r.counts ? `${r.counts.fetched} / ${r.counts.created + r.counts.updated} / ${r.counts.removed} / ${r.counts.failed}` : "—",
  },
];

const Sync = () => {
  const { token, signOut } = useAuth();
  const { status, data, error, reload } = useAdminQuery((k, signal) => getSyncStatus(k, signal));
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState("");

  const start = async (job) => {
    setBusy(job);
    setMessage("");
    try {
      await triggerSync(token, job);
      setMessage(`${jobLabels[job]} sync started. Refresh in a minute to see the result.`);
    } catch (err) {
      if (err.status === 401) return signOut(SESSION_EXPIRED);
      setMessage(err.message || "Couldn't start the sync.");
    } finally {
      setBusy("");
    }
    return undefined;
  };

  return (
    <>
      <div className="gz-rp-head">
        <div>
          <h1 className="gz-rp-title">Synchronisation</h1>
          <p className="gz-rp-muted">
            The backend copies data from TrainerCentral on a schedule: courses every 6 hours, learners every 30 minutes,
            enrolments hourly and test results every 6 hours.
          </p>
        </div>
        <div className="gz-rp-actions">
          <button type="button" className="gz-btn gz-btn--secondary gz-btn--sm" onClick={reload}>
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>

      {message && (
        <p className="gz-rp-banner gz-rp-banner--info" role="status">
          {message}
        </p>
      )}

      {status === "error" ? (
        <ErrorState error={error} onRetry={reload} />
      ) : status === "loading" && !data ? (
        <div className="gz-skeleton" style={{ height: 260 }} aria-label="Loading sync status" />
      ) : (
        <>
          <div className="gz-rp-metrics">
            {Object.keys(jobLabels).map((job) => {
              const s = (data.jobs || []).find((j) => j.job === job);
              return (
                <div className="gz-rp-metric" key={job}>
                  <p className="gz-rp-metric__label">{jobLabels[job]}</p>
                  <p className="gz-rp-metric__value gz-rp-metric__value--sm">
                    <span className={`gz-rp-pill gz-rp-pill--${(s && s.lastStatus) || "none"}`}>
                      {(s && s.lastStatus) || "never run"}
                    </span>
                  </p>
                  <p className="gz-rp-metric__hint">
                    Last success {relative(s && s.lastSuccessAt)}
                    {s && s.consecutiveFailures > 0 && ` · ${s.consecutiveFailures} failures in a row`}
                  </p>
                  <button
                    type="button"
                    className="gz-btn gz-btn--secondary gz-btn--sm"
                    style={{ marginTop: 12 }}
                    onClick={() => start(job)}
                    disabled={Boolean(busy)}
                  >
                    {busy === job ? "Starting…" : "Sync now"}
                  </button>
                </div>
              );
            })}
          </div>

          <h2 className="gz-rp-subtitle">Recent runs</h2>
          {data.recentRuns && data.recentRuns.length ? (
            <DataTable caption="Recent sync runs" columns={runColumns} rows={data.recentRuns} rowKey={(r) => `${r.job}-${r.startedAt}`} />
          ) : (
            <EmptyState title="No sync runs yet" />
          )}
        </>
      )}
    </>
  );
};

export default Sync;
