import { Link, useHistory, useLocation } from "react-router-dom";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiBriefcase,
  FiClock,
  FiCloud,
  FiCode,
  FiCpu,
  FiGrid,
  FiLayers,
  FiLayout,
  FiMonitor,
  FiPenTool,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { CtaBand } from "../components/ui";
import { categories, courseHref, courses } from "../data/courses";

const categoryStyle = {
  "AI & Data": { icon: FiCpu, tone: "violet" },
  "Cloud & Security": { icon: FiShield, tone: "night" },
  "Business & Product": { icon: FiBriefcase, tone: "gold" },
  "Software Engineering": { icon: FiCode, tone: "lilac" },
};

const courseIcon = {
  "ai-automation-bootcamp": FiCpu,
  cybersecurity: FiShield,
  "data-analysis": FiBarChart2,
  "business-analysis-project-management": FiTrendingUp,
  "cloud-engineering-aws": FiCloud,
  "backend-development": FiServer,
  "mobile-application-development": FiSmartphone,
  "frontend-web-development": FiLayout,
  "product-management": FiLayers,
  "product-designing-ui-ux": FiPenTool,
};

const modes = [
  { key: "all", label: "All" },
  { key: "onsite", label: "Physical", icon: FiUsers },
  { key: "virtual", label: "Virtual", icon: FiMonitor },
];

const duration = (mode) => (mode === "virtual" ? "3 months" : "6 months");

// Course artwork drawn in code, so every course (including new ones) gets a
// consistent card without needing a designed image.
const CourseArt = ({ course, seed }) => {
  const Icon = courseIcon[course.slug] || FiCode;
  const tone = (categoryStyle[course.category] || {}).tone || "violet";
  const [first, ...rest] = course.short.split(" ");
  return (
    <div className={`gz-art gz-art--${tone}`} aria-hidden="true">
      <CircuitPattern className="gz-art__pattern" seed={seed} />
      <div className="gz-art__panel">
        <span className="gz-art__brand">grazac</span>
        <span className="gz-art__learn">Learn</span>
        <span className="gz-art__name">
          {first}
          {rest.length > 0 && <br />}
          {rest.join(" ")}
        </span>
      </div>
      <span className="gz-art__icon">
        <Icon size={58} strokeWidth={1.6} />
      </span>
      {course.isNew && <span className="gz-art__new">New</span>}
    </div>
  );
};

const CourseTile = ({ course, index }) => {
  const mode = course.modes[0];
  const tone = (categoryStyle[course.category] || {}).tone || "violet";
  return (
    <Link to={courseHref(course.slug)} className="gz-tile">
      <CourseArt course={course} seed={index * 7 + 3} />
      <div className="gz-tile__meta">
        <span className={`gz-tile__tag gz-tile__tag--${tone}`}>{course.category}</span>
        <span className="gz-tile__time">
          <FiClock size={15} /> {duration(mode)}
        </span>
      </div>
      <h3 className="gz-tile__title">{course.title}</h3>
      <p className="gz-tile__summary">{course.summary}</p>
      <div className="gz-tile__foot">
        <span className="gz-tile__mode">
          {mode === "virtual" ? <FiMonitor size={15} /> : <FiUsers size={15} />}
          {mode === "virtual" ? "Live online" : "Abeokuta campus"}
        </span>
        <span className="gz-tile__go">
          <FiArrowUpRight size={20} />
        </span>
      </div>
    </Link>
  );
};

const Courses = () => {
  const { search } = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(search);
  const mode = ["onsite", "virtual"].includes(params.get("mode")) ? params.get("mode") : "all";
  const category = categories.includes(params.get("category")) ? params.get("category") : "All";

  const setFilter = (next) => {
    const q = new URLSearchParams();
    const m = next.mode ?? mode;
    const c = next.category ?? category;
    if (m !== "all") q.set("mode", m);
    if (c !== "All") q.set("category", c);
    const qs = q.toString();
    history.replace(`/courses${qs ? `?${qs}` : ""}`);
  };

  const byMode = mode === "all" ? courses : courses.filter((c) => c.modes.includes(mode));
  const shown = category === "All" ? byMode : byMode.filter((c) => c.category === category);
  const countFor = (m) => (m === "all" ? courses.length : courses.filter((c) => c.modes.includes(m)).length);

  return (
    <Layout
      title="Courses"
      description="Grazac Academy courses in AI automation, cybersecurity, data, cloud, software engineering and product. Physical classes in Abeokuta or live online."
    >
      <section className="gz-catalog">
        <div className="gz-container">
          <div className="gz-catalog__head">
            <h1 className="gz-catalog__title">
              Start your tech career
              <br />
              with <mark>Grazac</mark>
            </h1>

            <div className="gz-catalog__modes" role="group" aria-label="Learning mode">
              {modes.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  className={mode === key ? "is-active" : ""}
                  aria-pressed={mode === key}
                  onClick={() => setFilter({ mode: key })}
                >
                  {Icon && <Icon size={16} />}
                  {label}
                  <span>{countFor(key)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="gz-catalog__cats" role="group" aria-label="Course category">
            <button
              type="button"
              className={category === "All" ? "is-active" : ""}
              aria-pressed={category === "All"}
              onClick={() => setFilter({ category: "All" })}
            >
              <FiGrid size={17} /> All categories
            </button>
            {categories.map((c) => {
              const Icon = categoryStyle[c].icon;
              return (
                <button
                  key={c}
                  type="button"
                  className={category === c ? "is-active" : ""}
                  aria-pressed={category === c}
                  onClick={() => setFilter({ category: c })}
                >
                  <Icon size={17} /> {c}
                </button>
              );
            })}
          </div>

          <p className="gz-catalog__count" role="status">
            Showing {shown.length} {shown.length === 1 ? "course" : "courses"}
            {mode === "onsite" && " at our Abeokuta campus"}
            {mode === "virtual" && " taught live online"}
          </p>

          {shown.length ? (
            <div className="gz-catalog__grid">
              {shown.map((c, i) => (
                <CourseTile key={c.slug} course={c} index={i} />
              ))}
            </div>
          ) : (
            <div className="gz-state">
              <h3 className="gz-h3">No courses match those filters</h3>
              <p>Try another category or learning mode.</p>
              <div className="gz-btn-row">
                <button
                  type="button"
                  className="gz-btn gz-btn--primary"
                  onClick={() => history.replace("/courses")}
                >
                  Show all courses
                </button>
              </div>
            </div>
          )}
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
