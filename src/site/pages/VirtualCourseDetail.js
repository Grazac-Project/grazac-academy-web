import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiMonitor, FiTag } from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { Check, CtaBand, SectionHeading } from "../components/ui";
import { EnrolButton, VirtualCourseCard } from "../components/VirtualCourses";
import { contact, links } from "../data/site";
import useVirtualCourses from "../hooks/useVirtualCourses";
import { isAbort } from "../../api/client";
import { getVirtualCourse } from "../../api/virtualCourses";
import { excerpt, formatPrice, paragraphs, safeEnrollmentUrl } from "../../lib/courseFormat";

const catalogueHref = "/courses?mode=virtual";

const lessonType = {
  live: "Live session",
  "on-demand": "Video lesson",
  assignment: "Assignment",
};

// Instructor photos are admin-entered; only load https images.
const safePhoto = (url) => {
  try {
    return url && new URL(url).protocol === "https:" ? url : null;
  } catch (e) {
    return null;
  }
};

const Crumbs = ({ title }) => (
  <nav className="gz-crumbs" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/courses">Courses</Link> <span>/</span>
    <Link to={catalogueHref}>Virtual</Link> <span>/</span>
    <span>{title}</span>
  </nav>
);

const Related = ({ course }) => {
  const category = course.categories[0];
  const { items } = useVirtualCourses({ category, limit: 4, enabled: Boolean(category) });
  const others = items.filter((c) => c.id !== course.id).slice(0, 3);
  if (!others.length) return null;
  return (
    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Keep exploring"
          title={`More in ${category}`}
          action={
            <Link to={catalogueHref} className="gz-link">
              All virtual courses <FiArrowRight />
            </Link>
          }
        />
        <div className="gz-grid gz-grid--3">
          {others.map((c) => (
            <VirtualCourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Unavailable = ({ legacy }) => (
  <Layout
    title={legacy ? legacy.title : "Course not found"}
    description={legacy ? legacy.summary : "Browse Grazac Academy's virtual courses."}
  >
    <section className="gz-page-hero">
      <CircuitPattern className="gz-hero__pattern" seed={11} />
      <div className="gz-container">
        <Crumbs title={legacy ? legacy.title : "Course"} />
        {legacy && <p className="gz-eyebrow">{legacy.category}</p>}
        <h1 className="gz-h1">{legacy ? legacy.title : "This course isn't available"}</h1>
        {legacy && <p className="gz-lead">{legacy.summary}</p>}
      </div>
    </section>
    <section className="gz-section">
      <div className="gz-container">
        <div className="gz-state">
          <h3 className="gz-h3">
            {legacy ? "Enrolment for this course isn't open right now" : "We couldn't find that course"}
          </h3>
          <p>
            Virtual courses now run on Grazac Learn, our learning portal. Browse the courses that are
            open, or ask us when this one will run next.
          </p>
          <div className="gz-btn-row">
            <Link to={catalogueHref} className="gz-btn gz-btn--primary">
              Browse virtual courses
            </Link>
            <a href={contact.whatsappChat} target="_blank" rel="noopener noreferrer" className="gz-btn gz-btn--secondary">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

const VirtualCourseDetail = ({ slug, legacy }) => {
  const [state, setState] = useState({ status: "loading", course: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", course: null });
    getVirtualCourse(slug, controller.signal)
      .then((course) => setState({ status: "ready", course }))
      .catch((err) => {
        if (isAbort(err)) return;
        setState({ status: err.status === 404 ? "missing" : "error", course: null });
      });
    return () => controller.abort();
  }, [slug, attempt]);

  const { status, course } = state;

  if (status === "missing") return <Unavailable legacy={legacy} />;

  if (status !== "ready") {
    const title = legacy ? legacy.title : "Virtual course";
    return (
      <Layout title={title} description={legacy ? legacy.summary : "Online courses from Grazac Academy."}>
        <section className="gz-page-hero">
          <CircuitPattern className="gz-hero__pattern" seed={11} />
          <div className="gz-container">
            <Crumbs title={title} />
            {status === "loading" ? (
              <div aria-busy="true" aria-label="Loading course">
                <div className="gz-skeleton" style={{ height: 56, maxWidth: 620, opacity: 0.25 }} />
                <div className="gz-skeleton" style={{ height: 22, maxWidth: 520, marginTop: 18, opacity: 0.2 }} />
              </div>
            ) : (
              <h1 className="gz-h1">{title}</h1>
            )}
          </div>
        </section>
        {status === "error" && (
          <section className="gz-section">
            <div className="gz-container">
              <div className="gz-state" role="alert">
                <h3 className="gz-h3">We couldn't load this course</h3>
                <p>Please check your connection and try again.</p>
                <div className="gz-btn-row">
                  <button type="button" className="gz-btn gz-btn--primary" onClick={() => setAttempt((n) => n + 1)}>
                    Try again
                  </button>
                  <Link to={catalogueHref} className="gz-btn gz-btn--secondary">
                    Browse virtual courses
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </Layout>
    );
  }

  const price = formatPrice(course);
  const canEnrol = Boolean(safeEnrollmentUrl(course.enrollmentUrl));
  const about = paragraphs(course.description);
  const category = course.categories[0];
  const outcomes = (course.outcomes || []).filter(Boolean);
  const instructors = (course.instructors || []).filter((p) => p && p.name);
  const lessons = [...(course.curriculum || [])].filter((l) => l && l.name).sort((a, b) => a.order - b.order);

  return (
    <Layout
      title={course.title}
      // Always set: Layout leaves the previous page's description in place otherwise.
      description={
        excerpt(course.description, 155) ||
        `${course.title}: an online course from Grazac Academy. Enrol on Grazac Learn and learn from anywhere.`
      }
    >
      <section className="gz-page-hero">
        <CircuitPattern className="gz-hero__pattern" seed={11} />
        <div className="gz-container">
          <Crumbs title={course.title} />
          {category && <p className="gz-eyebrow">{category}</p>}
          <h1 className="gz-h1">{course.title}</h1>

          <div className="gz-detail-hero__meta">
            <span className="gz-chip">
              <FiMonitor /> Virtual
            </span>
            {price && (
              <span className="gz-chip">
                <FiTag /> {price}
              </span>
            )}
          </div>

          <div className="gz-btn-row">
            <EnrolButton course={course} className="gz-btn gz-btn--primary gz-btn--lg">
              Enrol now
            </EnrolButton>
            <Link to={catalogueHref} className="gz-btn gz-btn--ghost gz-btn--lg">
              <FiArrowLeft /> All virtual courses
            </Link>
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container gz-detail">
          <div>
            <SectionHeading eyebrow="About this course" title="What this course covers" />
            {about.length ? (
              <div className="gz-prose">
                {about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              !lessons.length && (
                <p className="gz-muted">The full course outline is on the course page on Grazac Learn.</p>
              )
            )}

            {outcomes.length > 0 && (
              <div style={{ marginTop: 40 }}>
                <h3 className="gz-h3">What you'll be able to do</h3>
                <ul className="gz-aside__list" style={{ marginTop: 14 }}>
                  {outcomes.map((o) => (
                    <li key={o}>
                      <Check /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {lessons.length > 0 && (
              <div style={{ marginTop: 40 }}>
                <h3 className="gz-h3">Curriculum</h3>
                <p className="gz-muted" style={{ marginTop: 6 }}>
                  {lessons.length} {lessons.length === 1 ? "lesson" : "lessons"}
                </p>
                <ol className="gz-modules" style={{ marginTop: 16 }}>
                  {lessons.map((l, i) => (
                    <li className="gz-module" key={`${l.order}-${l.name}`}>
                      <span className="gz-module__num">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{l.name}</h3>
                        {lessonType[l.type] && <p>{lessonType[l.type]}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {instructors.length > 0 && (
              <div style={{ marginTop: 40 }}>
                <h3 className="gz-h3">{instructors.length === 1 ? "Your instructor" : "Your instructors"}</h3>
                <div className="gz-instructors">
                  {instructors.map((p) => (
                    <div className="gz-instructor" key={p.name}>
                      {safePhoto(p.photoUrl) ? (
                        <img src={safePhoto(p.photoUrl)} alt="" className="gz-instructor__photo" loading="lazy" />
                      ) : (
                        <span className="gz-instructor__photo gz-instructor__photo--initial" aria-hidden="true">
                          {p.name.charAt(0)}
                        </span>
                      )}
                      <div>
                        <strong>{p.name}</strong>
                        {p.title && <span className="gz-instructor__title">{p.title}</span>}
                        {p.bio && <p>{p.bio}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="gz-aside">
            <div className="gz-card">
              {course.thumbnailUrl && (
                <img
                  src={course.thumbnailUrl}
                  alt=""
                  style={{ width: "100%", borderRadius: 14, marginBottom: 18, aspectRatio: "16 / 9", objectFit: "cover" }}
                />
              )}
              <p className="gz-eyebrow" style={{ marginBottom: 8 }}>
                Virtual course
              </p>
              {price && <h3 className="gz-h3">{price}</h3>}
              <ul className="gz-aside__list">
                <li>
                  <Check /> Create your Grazac Learn account
                </li>
                {course.isPaid && (
                  <li>
                    <Check /> Pay securely on Grazac Learn
                  </li>
                )}
                <li>
                  <Check /> Learn, take assessments and track your progress there
                </li>
              </ul>
              <div className="gz-grid" style={{ gap: 10 }}>
                <EnrolButton course={course} className="gz-btn gz-btn--primary gz-btn--block">
                  Enrol now
                </EnrolButton>
                <a href={links.learn} className="gz-btn gz-btn--secondary gz-btn--block">
                  Already enrolled? My Learning
                </a>
              </div>
              {!canEnrol && (
                <p className="gz-muted" style={{ marginTop: 14, fontSize: 14 }}>
                  We're finishing the enrolment page for this course. Message us and we'll let you
                  know when it opens.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>

      <Related course={course} />

      <CtaBand
        title="Not sure this is the right course?"
        text="Book a free 30-minute call with our program manager, or send us a WhatsApp message."
        action={{ href: links.learn, label: "Go to My Learning" }}
      />
    </Layout>
  );
};

export default VirtualCourseDetail;
