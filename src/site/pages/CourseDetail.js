import { useEffect, useMemo, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiDownload,
  FiMonitor,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import { Check, CourseCard, CtaBand, SectionHeading } from "../components/ui";
import { courseHref, courses, findCourse } from "../data/courses";
import { contact, links } from "../data/site";

const API = "https://grazac-academy-back-end-ej7s.onrender.com/api/v1/user";

const included = {
  onsite: [
    "4 months of immersive, instructor-led training",
    "2 months building a real project",
    "Free workspace access for 6 months",
    "1:1 mentorship with industry experts",
    "Placement support: CV review, soft skills, salary negotiation",
    "ACTD accredited certification",
  ],
  virtual: [
    "3 months of live, immersive online training",
    "1:1 mentorship with virtual experts",
    "Learn from the comfort of your space",
    "Placement support: CV review, soft skills, salary negotiation",
    "ACTD accredited certification",
  ],
};

// The old site stored the chosen mode in sessionStorage before navigating here;
// the IT program page still does. Fall back to it when the URL has no `mode`.
const storedMode = () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem("learning_mode"));
    return saved && saved.class_option
      ? saved.class_option.toLowerCase()
      : null;
  } catch (e) {
    return null;
  }
};

const parseOutline = (raw) => {
  try {
    const list = typeof raw === "string" ? JSON.parse(raw) : raw;
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
};

const CourseDetail = () => {
  const { search } = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(search);
  const slug = params.get("course") || "";
  const known = findCourse(slug);
  const available = known ? known.modes : ["onsite", "virtual"];
  const requested = (params.get("mode") || storedMode() || "").toLowerCase();
  const mode = available.includes(requested) ? requested : available[0];

  const [state, setState] = useState({ status: "loading", course: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    // Courses no longer on offer (or mistyped links) skip the API entirely.
    if (!known) {
      setState({ status: "missing", course: null });
      return undefined;
    }
    if (!known.api) {
      setState({ status: "pending", course: null });
      return undefined;
    }
    const controller = new AbortController();
    setState({ status: "loading", course: null });
    const endpoint = mode === "virtual" ? "getCourseVirtual" : "getCourse";
    fetch(`${API}/${endpoint}/${encodeURIComponent(known.api)}`, {
      signal: controller.signal,
    })
      .then((r) => {
        if (r.status === 404) return {};
        return r.ok ? r.json() : Promise.reject(new Error(r.status));
      })
      .then((data) => {
        if (!data || !data.details) {
          setState({ status: "missing", course: null });
          return;
        }
        setState({ status: "ready", course: data.details });
      })
      .catch((err) => {
        if (err.name !== "AbortError")
          setState({ status: "error", course: null });
      });
    return () => controller.abort();
  }, [known, mode, attempt]);

  const setMode = (m) => {
    try {
      sessionStorage.setItem(
        "learning_mode",
        JSON.stringify({
          class_option: m === "virtual" ? "Virtual" : "Onsite",
        }),
      );
    } catch (e) {
      // ignore storage errors
    }
    history.replace(courseHref(known.slug, m));
  };

  const { status, course } = state;
  const outline = useMemo(
    () => parseOutline(course && course.outline),
    [course],
  );
  const title =
    (known && known.title) || (course && course.name) || "Course details";
  const description =
    (course && course.description) || (known && known.summary) || "";
  const related = courses
    .filter(
      (c) => known && c.slug !== known.slug && c.category === known.category,
    )
    .slice(0, 3);

  return (
    <Layout title={title} description={description}>
      <section className="gz-page-hero">
        <div className="gz-container">
          <nav className="gz-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/courses">Courses</Link> <span>/</span>
            <span>{known ? known.title : "Course"}</span>
          </nav>
          {known && <p className="gz-eyebrow">{known.category}</p>}
          <h1 className="gz-h1">{title}</h1>
          {description && <p className="gz-lead">{description}</p>}

          {available.length > 1 && (
            <div style={{ marginTop: 28 }}>
              <div
                className="gz-segment"
                role="group"
                aria-label="Learning mode"
              >
                {available.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={mode === m ? "is-active" : ""}
                    aria-pressed={mode === m}
                    onClick={() => setMode(m)}
                  >
                    {m === "virtual" ? "Virtual" : "Physical"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {known && (
            <div className="gz-detail-hero__meta">
              <span className="gz-chip">
                {mode === "virtual" ? <FiMonitor /> : <FiUsers />}
                {mode === "virtual"
                  ? "Virtual · 3 months"
                  : "Physical · 6 months, Abeokuta"}
              </span>
              <span className="gz-chip">
                <Check /> No prior experience required
              </span>
              <span className="gz-chip">
                <Check /> ACTD accredited
              </span>
            </div>
          )}

          <div className="gz-btn-row">
            <Link
              to={links.apply}
              className="gz-btn gz-btn--primary gz-btn--lg"
            >
              Apply now <FiArrowRight />
            </Link>
            {course && course.brochure && (
              <a
                href={course.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="gz-btn gz-btn--ghost gz-btn--lg"
              >
                <FiDownload /> Download brochure
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container gz-detail">
          <div>
            <SectionHeading
              eyebrow="Curriculum"
              title="What you'll learn"
              lead={
                status === "ready" && outline.length
                  ? `${outline.length} modules, taught through projects, assessments and mentorship.`
                  : null
              }
            />

            {status === "loading" && (
              <div
                className="gz-modules"
                aria-busy="true"
                aria-label="Loading curriculum"
              >
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="gz-skeleton" style={{ height: 96 }} />
                ))}
              </div>
            )}

            {status === "error" && (
              <div className="gz-state" role="alert">
                <h3 className="gz-h3">We couldn't load the curriculum</h3>
                <p>Please check your connection and try again.</p>
                <div className="gz-btn-row">
                  <button
                    type="button"
                    className="gz-btn gz-btn--primary"
                    onClick={() => setAttempt((n) => n + 1)}
                  >
                    Try again
                  </button>
                  <a
                    href={contact.whatsappChat}
                    className="gz-btn gz-btn--secondary"
                  >
                    Ask us on WhatsApp
                  </a>
                </div>
              </div>
            )}

            {status === "missing" && (
              <div className="gz-state">
                <h3 className="gz-h3">This course isn't on offer right now</h3>
                <p>
                  It may have been replaced in our current lineup. Browse the
                  courses we're running this cohort.
                </p>
                <div className="gz-btn-row">
                  <Link to="/courses" className="gz-btn gz-btn--primary">
                    Browse courses
                  </Link>
                </div>
              </div>
            )}

            {status === "pending" && (
              <div className="gz-state" style={{ textAlign: "left" }}>
                <span className="gz-badge gz-badge--new">
                  Curriculum coming soon
                </span>
                <h3 className="gz-h3" style={{ marginTop: 14 }}>
                  The full module breakdown is being finalised
                </h3>
                <p>
                  Talk to our program manager for the course outline, schedule
                  and requirements for the upcoming cohort.
                </p>
                {known.stacks && (
                  <div style={{ marginTop: 20 }}>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "var(--gz-text)",
                        marginBottom: 10,
                      }}
                    >
                      Choose your stack
                    </p>
                    <div
                      className="gz-btn-row"
                      style={{
                        gap: 8,
                        justifyContent: "flex-start",
                        marginTop: 0,
                      }}
                    >
                      {known.stacks.map((t) => (
                        <span key={t} className="gz-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div
                  className="gz-btn-row"
                  style={{ justifyContent: "flex-start" }}
                >
                  <a
                    href={contact.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gz-btn gz-btn--primary"
                  >
                    Book a session
                  </a>
                  <a
                    href={contact.whatsappChat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gz-btn gz-btn--secondary"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            )}

            {status === "ready" && (
              <ol className="gz-modules">
                {outline.map((item, i) => (
                  <li className="gz-module" key={`${item.topic}-${i}`}>
                    <span className="gz-module__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{item.topic}</h3>
                      {item.summary && <p>{item.summary}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <aside className="gz-aside">
            <div className="gz-card">
              <p className="gz-eyebrow" style={{ marginBottom: 8 }}>
                {mode === "virtual" ? "Virtual program" : "Physical program"}
              </p>
              <h3 className="gz-h3">What's included</h3>
              <ul className="gz-aside__list">
                {included[mode].map((t) => (
                  <li key={t}>
                    <Check /> {t}
                  </li>
                ))}
              </ul>
              <div className="gz-grid" style={{ gap: 10 }}>
                <Link
                  to={links.apply}
                  className="gz-btn gz-btn--primary gz-btn--block"
                >
                  Apply now
                </Link>
                <Link
                  to="/pricing"
                  className="gz-btn gz-btn--secondary gz-btn--block"
                >
                  See {mode === "virtual" ? "virtual" : "physical"} pricing
                </Link>
              </div>
            </div>
            <div className="gz-card">
              <span className="gz-icon gz-icon--yellow">
                <FiCalendar size={22} />
              </span>
              <h3 className="gz-h3">Have more questions?</h3>
              <p style={{ marginBottom: 20 }}>
                Book a free 30-minute session with our program manager.
              </p>
              <a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="gz-link"
              >
                Book a session <FiArrowRight />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="gz-section gz-section--soft">
          <div className="gz-container">
            <SectionHeading
              eyebrow="Keep exploring"
              title={`More in ${known.category}`}
              action={
                <Link to="/courses" className="gz-link">
                  All courses <FiArrowRight />
                </Link>
              }
            />
            <div className="gz-grid gz-grid--3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </Layout>
  );
};

export default CourseDetail;
