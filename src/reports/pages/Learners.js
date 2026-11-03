import { useEffect, useState } from "react";
import { getCourseStats, getLearners } from "../../api/adminAnalytics";
import useAdminQuery from "../useAdminQuery";
import { DataTable, EmptyState, ErrorState, ExportButton, Pagination } from "../components";
import { date, learnerStatus, percent } from "../format";

const PAGE_SIZE = 20;

const Progress = ({ value }) => (
  <span className="gz-rp-progress" title={percent(value)}>
    <span className="gz-rp-progress__bar" style={{ width: `${Math.max(0, Math.min(100, value || 0))}%` }} />
  </span>
);

const enrolments = (l) => l.enrollments.filter((e) => e.status === 50);
const testLabel = { PASS: "Passed", FAIL: "Failed", PENDING: "Awaiting marking" };
const testTone = { PASS: "success", FAIL: "failed", PENDING: "partial" };

const columns = [
  {
    key: "name",
    label: "Learner",
    render: (l) => (
      <>
        <strong>{l.name || "—"}</strong>
        <span className="gz-rp-cell-sub">{l.email || "—"}</span>
      </>
    ),
  },
  { key: "status", label: "Status", render: (l) => learnerStatus[l.status] || "—" },
  {
    key: "courses",
    label: "Enrolled courses and progress",
    render: (l) => {
      const list = enrolments(l);
      if (!list.length) return <span className="gz-rp-muted">No enrolments</span>;
      return (
        <ul className="gz-rp-enrol">
          {list.map((e) => (
            <li key={e.trainerCentralCourseId}>
              <span className="gz-rp-enrol__title">{e.courseTitle || e.trainerCentralCourseId}</span>
              <Progress value={e.completionPercentage} />
              <span className="gz-rp-enrol__pct">{percent(e.completionPercentage)}</span>
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    key: "completion",
    label: "Completion",
    render: (l) => {
      const list = enrolments(l);
      const done = list.filter((e) => e.completedAt || e.completionPercentage >= 100).length;
      if (!list.length) return "—";
      return (
        <span className={`gz-rp-pill gz-rp-pill--text gz-rp-pill--${done === list.length ? "success" : "none"}`}>
          {done} of {list.length} completed
        </span>
      );
    },
  },
  {
    key: "assessments",
    label: "Assessments",
    render: (l) => {
      const results = l.testResults || [];
      if (!results.length) return <span className="gz-rp-muted">None taken</span>;
      return (
        <ul className="gz-rp-tests">
          {results.map((t, i) => (
            <li key={`${t.trainerCentralCourseId}-${t.testId || i}`}>
              <span className={`gz-rp-pill gz-rp-pill--${testTone[t.result] || "none"}`}>{testLabel[t.result] || "No result"}</span>
              <span>
                {percent(t.percentage)}
                <span className="gz-rp-cell-sub">{t.courseTitle || t.trainerCentralCourseId}</span>
              </span>
            </li>
          ))}
        </ul>
      );
    },
  },
  { key: "lastLoginAt", label: "Last sign-in", render: (l) => date(l.lastLoginAt) },
];

// Waits until typing pauses before searching: the learners endpoint is audited
// and rate limited, so every keystroke shouldn't be a request.
const useDebounced = (value, ms = 350) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return debounced;
};

const Learners = () => {
  const [search, setSearch] = useState("");
  const [courseId, setCourseId] = useState("");
  const [status, setStatus] = useState("");
  const [completed, setCompleted] = useState("");
  const term = useDebounced(search.trim());
  // Any filter change returns to page 1 in the same render, so there's no
  // extra request for the old page.
  const filterKey = JSON.stringify([term, courseId, status, completed]);
  const [paging, setPaging] = useState({ filterKey, page: 1 });
  const page = paging.filterKey === filterKey ? paging.page : 1;
  const setPage = (p) => setPaging({ filterKey, page: p });

  const courses = useAdminQuery((token, signal) => getCourseStats(token, signal));
  const learners = useAdminQuery(
    (token, signal) => getLearners(token, { page, limit: PAGE_SIZE, search: term, courseId, status, completed }, signal),
    [page, term, courseId, status, completed]
  );
  const data = learners.data;

  return (
    <>
      <div className="gz-rp-head">
        <div>
          <h1 className="gz-rp-title">Learner analytics</h1>
          <p className="gz-rp-muted">
            Progress per enrolment and test results, synced from TrainerCentral.
          </p>
        </div>
        <div className="gz-rp-actions">
          <ExportButton type="learners">Export learners</ExportButton>
          <ExportButton type="enrollments">Export enrolments</ExportButton>
          <ExportButton type="tests">Export test results</ExportButton>
        </div>
      </div>

      <div className="gz-rp-toolbar">
        <label className="gz-rp-field gz-rp-field--grow">
          <span>Search</span>
          <input type="search" value={search} maxLength={100} placeholder="Name or email" onChange={(e) => setSearch(e.target.value)} />
        </label>
        <label className="gz-rp-field">
          <span>Course</span>
          <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
            <option value="">All courses</option>
            {(courses.data || []).map((c) => (
              <option key={c.trainerCentralCourseId} value={c.trainerCentralCourseId}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <label className="gz-rp-field">
          <span>Account</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Any status</option>
            <option value="1">Active</option>
            <option value="2">Invited</option>
            <option value="-1">Blocked</option>
          </select>
        </label>
        <label className="gz-rp-field">
          <span>Completion</span>
          <select value={completed} onChange={(e) => setCompleted(e.target.value)}>
            <option value="">Any</option>
            <option value="true">Completed a course</option>
            <option value="false">Not completed</option>
          </select>
        </label>
      </div>

      {learners.status === "error" ? (
        <ErrorState error={learners.error} onRetry={learners.reload} />
      ) : learners.status === "loading" && !data ? (
        <div className="gz-skeleton" style={{ height: 420 }} aria-label="Loading learners" />
      ) : !data || !data.items.length ? (
        <EmptyState title="No learners match" text="Try clearing the filters." />
      ) : (
        <>
          <DataTable
            caption="Learners"
            columns={columns}
            rows={data.items}
            rowKey={(l) => l.orgMemberId}
            loading={learners.status === "loading"}
          />
          <Pagination
            page={data.pagination.page}
            totalPages={data.pagination.totalPages}
            total={data.pagination.total}
            onPage={setPage}
            label="learners"
          />
        </>
      )}
    </>
  );
};

export default Learners;
