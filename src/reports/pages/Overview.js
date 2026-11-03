import { useState } from "react";
import { getOverview } from "../../api/adminAnalytics";
import useAdminQuery from "../useAdminQuery";
import { ErrorState, ExportButton, LastSync, MetricCard } from "../components";
import { date, dateTime, number, oldestSuccess, percent, rate } from "../format";

const jobLabels = { courses: "Courses", learners: "Learners", enrollments: "Enrolments", tests: "Test results" };

// Dates are sent as YYYY-MM-DD; the backend treats `to` as the whole day.
const isoDay = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return isoDay(d);
};
const presets = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 90 days", days: 90 },
  { label: "Last 12 months", days: 365 },
];

const Overview = () => {
  const [range, setRange] = useState({ from: daysAgo(30), to: isoDay(new Date()) });
  const valid = range.from && range.to && range.from <= range.to;
  const { status, data, error, reload } = useAdminQuery(
    (token, signal) => getOverview(token, valid ? range : {}, signal),
    [range.from, range.to]
  );
  const loading = status === "loading" && !data;
  const inRange = data && data.range ? `${date(data.range.from)} – ${date(data.range.to)}` : "the selected dates";
  const tests = data && data.assessments;

  return (
    <>
      <div className="gz-rp-head">
        <div>
          <h1 className="gz-rp-title">Overview</h1>
          <LastSync at={data && oldestSuccess(data.dataFreshness)} />
        </div>
        <div className="gz-rp-actions">
          <ExportButton type="enrollments">Export enrolments</ExportButton>
        </div>
      </div>

      <div className="gz-rp-toolbar">
        <label className="gz-rp-field">
          <span>From</span>
          <input type="date" value={range.from} max={range.to} onChange={(e) => setRange((r) => ({ ...r, from: e.target.value }))} />
        </label>
        <label className="gz-rp-field">
          <span>To</span>
          <input type="date" value={range.to} min={range.from} onChange={(e) => setRange((r) => ({ ...r, to: e.target.value }))} />
        </label>
        <div className="gz-rp-presets" role="group" aria-label="Date presets">
          {presets.map((p) => (
            <button
              key={p.days}
              type="button"
              className="gz-btn gz-btn--secondary gz-btn--sm"
              onClick={() => setRange({ from: daysAgo(p.days), to: isoDay(new Date()) })}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      {!valid && (
        <p className="gz-rp-error" role="alert">
          "From" must be on or before "To".
        </p>
      )}

      {status === "error" ? (
        <ErrorState error={error} onRetry={reload} />
      ) : (
        <>
          <h2 className="gz-rp-subtitle">All time</h2>
          <div className="gz-rp-metrics">
            <MetricCard label="Total learners" value={data && number(data.totalLearners)} hint="Active accounts on Grazac Learn" loading={loading} />
            <MetricCard
              label="Total courses"
              value={data && number(data.totalCourses.published)}
              hint={data ? `Published · ${number(data.totalCourses.unpublished)} unpublished` : "Published"}
              loading={loading}
            />
            <MetricCard label="Total enrolments" value={data && number(data.totalEnrollments)} hint="Registered course enrolments" loading={loading} />
            <MetricCard label="Completed courses" value={data && number(data.completedEnrollments)} hint="Enrolments at 100% completion" loading={loading} />
            <MetricCard label="Completion rate" value={data && rate(data.completionRate)} hint="Completed ÷ total enrolments" loading={loading} />
            <MetricCard label="Certificates issued" value={data && number(data.certificatesIssued)} loading={loading} />
          </div>

          <h2 className="gz-rp-subtitle">In {inRange}</h2>
          <div className="gz-rp-metrics">
            <MetricCard label="Active learners" value={data && number(data.activeLearners)} hint="Signed in during these dates" loading={loading} />
            <MetricCard label="New learners" value={data && number(data.newLearners)} hint="Signed up during these dates" loading={loading} />
            <MetricCard label="New enrolments" value={data && number(data.newEnrollments)} loading={loading} />
            <MetricCard label="Completions" value={data && number(data.completionsInRange)} hint="Courses completed during these dates" loading={loading} />
          </div>

          <h2 className="gz-rp-subtitle">Assessments</h2>
          <div className="gz-rp-metrics">
            <MetricCard label="Passed" value={tests && number(tests.passed)} loading={loading} />
            <MetricCard label="Failed" value={tests && number(tests.failed)} loading={loading} />
            <MetricCard label="Awaiting marking" value={tests && number(tests.pending)} loading={loading} />
            <MetricCard label="Average score" value={tests && percent(tests.averagePercentage)} loading={loading} />
          </div>

          {data && (
            <div className="gz-rp-panel">
              <h2 className="gz-rp-subtitle" style={{ marginTop: 0 }}>
                Data freshness
              </h2>
              <ul className="gz-rp-fresh">
                {Object.entries(data.dataFreshness || {}).map(([job, f]) => (
                  <li key={job}>
                    <strong>{jobLabels[job] || job}</strong>
                    <span className={`gz-rp-pill gz-rp-pill--${f.lastStatus || "none"}`}>{f.lastStatus || "never run"}</span>
                    <span className="gz-rp-muted">{dateTime(f.lastSuccessAt)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Overview;
