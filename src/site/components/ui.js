import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiMessageCircle,
  FiMonitor,
  FiPlay,
  FiPlus,
  FiUsers,
} from "react-icons/fi";
import { categories, courseHref, courses } from "../data/courses";
import { contact, links } from "../data/site";

export const Check = (props) => <FiCheck size={18} aria-hidden="true" {...props} />;

export const SectionHeading = ({ eyebrow, title, lead, center, action }) => (
  <div
    className={`gz-heading${center ? " gz-center" : ""}${
      action ? " gz-heading--row" : ""
    }`}
  >
    <div>
      {eyebrow && <p className="gz-eyebrow">{eyebrow}</p>}
      <h2 className="gz-h2">{title}</h2>
      {lead && <p className="gz-lead">{lead}</p>}
    </div>
    {action}
  </div>
);

const modeLabel = { onsite: "Physical", virtual: "Virtual" };

export const CourseCard = ({ course, mode }) => (
  <Link to={courseHref(course.slug, mode)} className="gz-course">
    <div className={`gz-course__media${course.image ? "" : " gz-course__media--icon"}`}>
      {course.image ? (
        <img src={course.image} alt="" loading="lazy" />
      ) : (
        <span className="gz-course__glyph" aria-hidden="true">
          <course.icon size={40} />
        </span>
      )}
      {course.isNew && <span className="gz-badge gz-badge--new">New</span>}
    </div>
    <div className="gz-course__body">
      <p className="gz-course__cat">{course.category}</p>
      <h3 className="gz-h3 gz-course__title">{course.title}</h3>
      <p className="gz-course__summary">{course.summary}</p>
      <div className="gz-course__foot">
        <span className="gz-course__modes">
          {(mode ? [mode] : course.modes).map((m) => (
            <span key={m} className="gz-badge">
              {m === "virtual" ? <FiMonitor size={12} /> : <FiUsers size={12} />}
              {modeLabel[m]}
            </span>
          ))}
        </span>
        <span className="gz-link">
          Details <FiArrowRight />
        </span>
      </div>
    </div>
  </Link>
);

export const CourseExplorer = ({ mode, limit }) => {
  const [active, setActive] = useState("All");
  const available = useMemo(
    () => (mode ? courses.filter((c) => c.modes.includes(mode)) : courses),
    [mode]
  );
  const tabs = [
    "All",
    ...categories.filter((t) => available.some((c) => c.category === t)),
  ];
  const shown =
    active === "All" ? available : available.filter((c) => c.category === active);
  const list = limit ? shown.slice(0, limit) : shown;

  return (
    <div>
      <div className="gz-tabs" role="tablist" aria-label="Course categories">
        {tabs.map((t) => {
          const count =
            t === "All"
              ? available.length
              : available.filter((c) => c.category === t).length;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active === t}
              className={`gz-tab${active === t ? " is-active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
              <span className="gz-tab__count">{count}</span>
            </button>
          );
        })}
      </div>
      <div className="gz-grid gz-grid--3">
        {list.map((c) => (
          <CourseCard key={c.slug} course={c} mode={mode} />
        ))}
      </div>
    </div>
  );
};

export const FaqList = ({ items }) => (
  <div className="gz-faq">
    {items.map((item) => (
      <details key={item.q}>
        <summary>
          {item.q}
          <span className="gz-faq__icon" aria-hidden="true">
            <FiPlus size={18} />
          </span>
        </summary>
        <div className="gz-faq__answer">
          <p>{item.a}</p>
          {item.link && (
            <Link to={item.link.to} className="gz-link">
              {item.link.label} <FiArrowRight />
            </Link>
          )}
        </div>
      </details>
    ))}
  </div>
);

const ACRONYMS = ["UX", "UI", "QA", "AI", "ML", "US", "UK"];

// Normalises roles like "Data ANALYST" or " UX designer " to "Data Analyst" / "UX Designer".
const formatRole = (role) =>
  role
    .trim()
    .split(/\s+/)
    .map((w) =>
      ACRONYMS.includes(w.toUpperCase())
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join(" ");

export const PeopleGrid = ({ people }) => (
  <div className="gz-people">
    {people.map((p) => (
      <div className="gz-person" key={p.name}>
        <div className="gz-person__photo">
          <img src={p.image} alt={p.name.trim()} loading="lazy" />
        </div>
        <h3>{p.name.trim()}</h3>
        <p className="gz-person__role">{formatRole(p.role)}</p>
        <p className="gz-person__company">{p.company}</p>
      </div>
    ))}
  </div>
);

// Shows a YouTube thumbnail and only loads the heavy player on click.
export const LiteVideo = ({ id, title }) => {
  const [play, setPlay] = useState(false);
  if (play) {
    return (
      <div className="gz-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      className="gz-video"
      onClick={() => setPlay(true)}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
      />
      <span className="gz-video__play">
        <span>
          <FiPlay size={24} />
        </span>
      </span>
    </button>
  );
};

export const CtaBand = ({
  title = "Ready to start your tech career?",
  text = "Create an account, take the short assessment and join the next cohort — onsite or virtual.",
  dark,
}) => (
  <section className="gz-section gz-section--tight">
    <div className="gz-container">
      <div className={`gz-cta${dark ? " gz-cta--dark" : ""}`}>
        <div>
          <h2 className="gz-h2">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="gz-btn-row">
          <Link to={links.apply} className="gz-btn gz-btn--yellow gz-btn--lg">
            Apply now <FiArrowRight />
          </Link>
          <a
            href={contact.whatsappChat}
            target="_blank"
            rel="noopener noreferrer"
            className="gz-btn gz-btn--secondary gz-btn--lg"
          >
            <FiMessageCircle /> Chat with us
          </a>
        </div>
      </div>
    </div>
  </section>
);
