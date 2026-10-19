import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiMessageCircle,
  FiMonitor,
  FiPlus,
  FiUsers,
} from "react-icons/fi";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import avatarPlaceholder from "../img/avatars/placeholder.svg";
import { categories, courseHref, courses } from "../data/courses";
import { contact, links } from "../data/site";

export const Check = (props) => <FiCheck size={18} aria-hidden="true" {...props} />;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fades children in the first time they scroll into view.
export const Reveal = ({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    if (shown || !ref.current || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        // Also reveal anything the visitor jumped past (anchor links, fast scrolling).
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`gz-reveal${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Cycles through `words` in place. Screen readers get the full list once.
export const Rotator = ({ words, interval = 2200 }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="gz-rotator">
      <span className="gz-sr">{words.join(", ")}</span>
      <span className="gz-rotator__word" key={i} aria-hidden="true">
        {words[i]}
      </span>
    </span>
  );
};

export const SectionHeading = ({ index, eyebrow, title, lead, center, action }) => (
  <div
    className={`gz-heading${center ? " gz-center" : ""}${
      action ? " gz-heading--row" : ""
    }`}
  >
    <div>
      {eyebrow && (
        <p className="gz-eyebrow">
          {index && <span className="gz-eyebrow__index">{index}</span>}
          {eyebrow}
        </p>
      )}
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

// Wraps each match of `term` in <mark>.
const highlight = (text, term) => {
  if (!term) return text;
  const safe = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.split(new RegExp(`(${safe})`, "gi")).map((part, i) =>
    part.toLowerCase() === term.toLowerCase() ? <mark key={i}>{part}</mark> : part
  );
};

export const FaqList = ({ items, term = "", variant, openFirst }) => (
  <div className={`gz-faq${variant ? ` gz-faq--${variant}` : ""}`}>
    {items.map((item, i) => (
      <details key={item.q} open={Boolean(term) || (openFirst && i === 0) || undefined}>
        <summary>
          <span>{highlight(item.q, term)}</span>
          <span className="gz-faq__icon" aria-hidden="true">
            <FiPlus size={18} />
          </span>
        </summary>
        <div className="gz-faq__answer">
          <p>{highlight(item.a, term)}</p>
          {item.link &&
            (item.link.href ? (
              <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="gz-link">
                {item.link.label} <FiArrowRight />
              </a>
            ) : (
              <Link to={item.link.to} className="gz-link">
                {item.link.label} <FiArrowRight />
              </Link>
            ))}
        </div>
      </details>
    ))}
  </div>
);

const ACRONYMS = ["UX", "UI", "QA", "AI", "ML", "US", "UK"];

// The source data has inconsistent casing ("Data ANALYST", " UX designer ").
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

export const CtaBand = ({
  title = "Applications for the next cohort are open",
  text = "Applying takes a few minutes. If you're unsure which course to pick, message us first and we'll help you decide.",
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

// Rows of cards drifting sideways; alternate rows move the other way. Each row
// is repeated so a single track is wider than any screen, and rendered twice so
// the loop is seamless. The second copy is hidden from screen readers.
const MarqueeRow = ({ items, reverse, label, render, repeat = 2 }) => {
  const filled = Array.from({ length: repeat }, () => items).flat();
  return (
    <div className={`gz-marquee__row${reverse ? " gz-marquee__row--reverse" : ""}`}>
      <ul className="gz-marquee__track" aria-label={label}>
        {filled.map((item, i) => (
          <li key={i} aria-hidden={i >= items.length || undefined}>
            {render(item)}
          </li>
        ))}
      </ul>
      <ul className="gz-marquee__track" aria-hidden="true">
        {filled.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
};

const LogoCard = ({ company }) => (
  <div className="gz-logo-card">
    {company.logo ? (
      <img className="gz-logo-card__wordmark" src={company.logo} alt={company.name} loading="lazy" />
    ) : (
      <>
        {company.icon && <img className="gz-logo-card__icon" src={company.icon} alt="" loading="lazy" />}
        <span className="gz-logo-card__name">{company.name}</span>
      </>
    )}
  </div>
);

export const LogoMarquee = ({ rows }) => (
  <div className="gz-marquee">
    {rows.map((row, r) => (
      <MarqueeRow
        key={r}
        items={row}
        reverse={r % 2 === 1}
        label={r === 0 ? "Companies where our graduates work" : undefined}
        render={(c) => <LogoCard company={c} />}
      />
    ))}
  </div>
);

const TestimonialCard = ({ t }) => (
  <figure className="gz-quote">
    <FaQuoteLeft className="gz-quote__mark" size={24} aria-hidden="true" />
    <blockquote>{t.quote}</blockquote>
    <figcaption>
      <img className="gz-quote__avatar" src={t.photo || avatarPlaceholder} alt="" loading="lazy" />
      <span>
        <strong>{t.name}</strong>
        <span>{t.role}</span>
      </span>
    </figcaption>
  </figure>
);

export const TestimonialMarquee = ({ items }) => {
  // Second row starts partway through the list so the rows don't line up.
  const shifted = [...items.slice(2), ...items.slice(0, 2)];
  return (
    <div className="gz-marquee gz-marquee--quotes">
      <MarqueeRow items={items} label="What people say about Grazac" render={(t) => <TestimonialCard t={t} />} />
      <MarqueeRow items={shifted} reverse render={(t) => <TestimonialCard t={t} />} />
    </div>
  );
};

const StoryCard = ({ story }) => {
  const [play, setPlay] = useState(false);
  return (
    <article className="gz-story">
      <div className="gz-story__media">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${story.id}?autoplay=1&rel=0`}
            title={`${story.name}: ${story.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="gz-story__poster"
            onClick={() => setPlay(true)}
            aria-label={`Play ${story.name}'s story: ${story.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${story.id}/maxresdefault.jpg`}
              onError={(e) => {
                // not every video has a full-size thumbnail
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://i.ytimg.com/vi/${story.id}/hqdefault.jpg`;
              }}
              alt=""
              loading="lazy"
            />
            <span className="gz-story__play" aria-hidden="true">
              <FaPlay size={18} />
            </span>
          </button>
        )}
      </div>
      <div className="gz-story__body">
        <p className="gz-story__label">Watch {story.name}&apos;s story</p>
        <h3>{story.title}</h3>
        <p>{story.text}</p>
      </div>
    </article>
  );
};

// A row of story cards that scrolls sideways, with arrow buttons on wider screens.
export const StoryCarousel = ({ stories }) => {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollBy = (dir) => {
    const el = ref.current;
    const card = el && el.querySelector(".gz-story");
    if (!card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <div className="gz-stories">
      <div className="gz-stories__track" ref={ref} onScroll={update}>
        {stories.map((s) => (
          <StoryCard key={s.id} story={s} />
        ))}
      </div>
      <div className="gz-stories__nav">
        <button type="button" onClick={() => scrollBy(-1)} disabled={edge.start} aria-label="Previous stories">
          <FiArrowLeft size={20} />
        </button>
        <button type="button" onClick={() => scrollBy(1)} disabled={edge.end} aria-label="More stories">
          <FiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

