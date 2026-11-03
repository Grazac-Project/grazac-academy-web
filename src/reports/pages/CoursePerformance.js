import { useMemo, useState } from "react";
import { getCourseStats } from "../../api/adminAnalytics";
import useAdminQuery from "../useAdminQuery";
import { DataTable, EmptyState, ErrorState, ExportButton, Pagination, useSort } from "../components";
import { number, percent, rate } from "../format";

const PAGE_SIZE = 15;

const columns = [
  { key: "title", label: "Course", sortValue: (c) => c.title.toLowerCase(), render: (c) => <strong>{c.title}</strong> },
  {
    key: "published",
    label: "Status",
    sortValue: (c) => (c.published ? 1 : 0),
    render: (c) => (
      <span className={`gz-rp-pill gz-rp-pill--${c.published ? "success" : "none"}`}>
        {c.published ? "Published" : "Unpublished"}
      </span>
    ),
  },
  { key: "enrollments", label: "Enrolments", align: "right", sortValue: (c) => c.enrollments, render: (c) => number(c.enrollments) },
  { key: "distinctLearners", label: "Learners", align: "right", sortValue: (c) => c.distinctLearners, render: (c) => number(c.distinctLearners) },
  { key: "completedEnrollments", label: "Completions", align: "right", sortValue: (c) => c.completedEnrollments, render: (c) => number(c.completedEnrollments) },
  { key: "completionRate", label: "Completion %", align: "right", sortValue: (c) => c.completionRate, render: (c) => rate(c.completionRate) },
  {
    key: "averageCompletionPercentage",
    label: "Avg progress",
    align: "right",
    sortValue: (c) => c.averageCompletionPercentage,
    render: (c) => percent(c.averageCompletionPercentage),
  },
  { key: "certificatesIssued", label: "Certificates", align: "right", sortValue: (c) => c.certificatesIssued, render: (c) => number(c.certificatesIssued) },
  {
    key: "tests",
    label: "Tests passed / failed / pending",
    align: "right",
    sortValue: (c) => (c.tests ? c.tests.passed : null),
    render: (c) => (c.tests ? `${number(c.tests.passed)} / ${number(c.tests.failed)} / ${number(c.tests.pending)}` : "—"),
  },
  {
    key: "testAverage",
    label: "Avg test score",
    align: "right",
    sortValue: (c) => (c.tests ? c.tests.averagePercentage : null),
    render: (c) => percent(c.tests && c.tests.averagePercentage),
  },
];

const CoursePerformance = () => {
  const { status, data, error, reload } = useAdminQuery((token, signal) => getCourseStats(token, signal));
  const [search, setSearch] = useState("");
  const [onlyPublished, setOnlyPublished] = useState(false);
  const [page, setPage] = useState(1);
  const { sort, onSort, apply } = useSort({ key: "enrollments", dir: "desc" });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return (data || []).filter((c) => (!q || c.title.toLowerCase().includes(q)) && (!onlyPublished || c.published));
  }, [data, search, onlyPublished]);
  const sorted = apply(filtered, columns);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const rows = sorted.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <>
      <div className="gz-rp-head">
        <div>
          <h1 className="gz-rp-title">Course performance</h1>
          <p className="gz-rp-muted">Enrolment and completion for every course synced from TrainerCentral.</p>
        </div>
        <div className="gz-rp-actions">
          <ExportButton type="courses">Export courses</ExportButton>
          <ExportButton type="tests">Export test results</ExportButton>
        </div>
      </div>

      <div className="gz-rp-toolbar">
        <label className="gz-rp-field gz-rp-field--grow">
          <span>Search</span>
          <input
            type="search"
            value={search}
            placeholder="Course name"
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </label>
        <label className="gz-rp-check">
          <input
            type="checkbox"
            checked={onlyPublished}
            onChange={(e) => {
              setOnlyPublished(e.target.checked);
              setPage(1);
            }}
          />
          Published only
        </label>
      </div>

      {status === "error" ? (
        <ErrorState error={error} onRetry={reload} />
      ) : status === "loading" && !data ? (
        <div className="gz-skeleton" style={{ height: 320 }} aria-label="Loading courses" />
      ) : !sorted.length ? (
        <EmptyState
          title={data && data.length ? "No courses match" : "No courses synced yet"}
          text={data && data.length ? "Try a different search." : "Courses appear after the first TrainerCentral sync."}
        />
      ) : (
        <>
          <DataTable caption="Course performance" columns={columns} rows={rows} rowKey={(c) => c.trainerCentralCourseId} sort={sort} onSort={onSort} />
          <Pagination page={current} totalPages={totalPages} total={sorted.length} onPage={setPage} label="courses" />
        </>
      )}
    </>
  );
};

export default CoursePerformance;
