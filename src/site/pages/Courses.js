import { Link, useHistory, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { CourseExplorer, CtaBand } from "../components/ui";
import { coursesByMode } from "../data/courses";

const modes = [
  { key: "onsite", label: "Physical (onsite)" },
  { key: "virtual", label: "Virtual" },
];

const Courses = () => {
  const { search } = useLocation();
  const history = useHistory();
  const mode = new URLSearchParams(search).get("mode") === "virtual" ? "virtual" : "onsite";
  const setMode = (m) => history.replace(`/courses?mode=${m}`);
  const count = coursesByMode(mode).length;

  return (
    <Layout
      title="Courses"
      description="Grazac Academy courses in AI automation, cybersecurity, data, cloud, software engineering and product. Physical classes in Abeokuta or live online."
    >
      <section className="gz-page-hero">
        <CircuitPattern className="gz-hero__pattern" seed={11} />
        <div className="gz-container">
          <nav className="gz-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Courses</span>
          </nav>
          <h1 className="gz-h1">Choose a course</h1>
          <p className="gz-lead">
            Physical courses run for six months at our Abeokuta campus.
            Virtual courses run for three months, live online.
          </p>
          <div style={{ marginTop: 32 }}>
            <div className="gz-segment" role="group" aria-label="Learning mode">
              {modes.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  className={mode === m.key ? "is-active" : ""}
                  aria-pressed={mode === m.key}
                  onClick={() => setMode(m.key)}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container">
          <p className="gz-muted" style={{ marginBottom: 24 }}>
            {count} {mode === "virtual" ? "virtual courses, taught live online" : "physical courses at our Abeokuta campus"} ·{" "}
            <Link to="/pricing" className="gz-link">
              See {mode === "virtual" ? "virtual" : "physical"} pricing <FiArrowRight />
            </Link>
          </p>
          <CourseExplorer key={mode} mode={mode} />
        </div>
      </section>

      <CtaBand
        title="Can't decide between two courses?"
        text="Book a free 30-minute call with our program manager, or send us a WhatsApp message."
      />
    </Layout>
  );
};

export default Courses;
