import { Link, useHistory, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Layout from "../components/Layout";
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
      description="Explore Grazac Academy's courses in software engineering, AI, product, data, cloud and cybersecurity — onsite in Abeokuta or virtual."
    >
      <section className="gz-page-hero">
        <div className="gz-container">
          <nav className="gz-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Courses</span>
          </nav>
          <h1 className="gz-h1">Courses built for today&apos;s tech jobs</h1>
          <p className="gz-lead">
            Pick a track, choose how you want to learn, and get hands-on with
            the tools real teams use.
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
        title="Not sure which course is right for you?"
        text="Book a free 30-minute session with our program manager, or chat with us on WhatsApp."
      />
    </Layout>
  );
};

export default Courses;
