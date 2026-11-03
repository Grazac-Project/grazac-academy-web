// Cards and states for virtual courses served by the backend. Enrolment
// happens on Grazac Learn (TrainerCentral); this site only links there.

import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiExternalLink, FiMonitor } from "react-icons/fi";
import { courseHref } from "../data/courses";
import { contact, links } from "../data/site";
import { excerpt, formatPrice, safeEnrollmentUrl } from "../../lib/courseFormat";

export const virtualHref = (course) => courseHref(course.slug, "virtual");

/** Enrol Now, or an "opening soon" note when there's no safe enrolment link. */
export const EnrolButton = ({ course, className = "gz-btn gz-btn--primary", children = "Enrol now" }) => {
  const url = safeEnrollmentUrl(course && course.enrollmentUrl);
  if (!url) {
    return (
      <span className="gz-enrol-soon" role="note">
        Enrolment opening soon
      </span>
    );
  }
  return (
    <a href={url} className={className} rel="noopener">
      {children} <FiExternalLink aria-hidden="true" />
    </a>
  );
};

const PriceTag = ({ course }) => {
  const price = formatPrice(course);
  return price ? <span className="gz-price">{price}</span> : null;
};

const Thumb = ({ course, className }) => (
  <div className={`${className}${course.thumbnailUrl ? "" : ` ${className}--icon`}`}>
    {course.thumbnailUrl ? (
      <img src={course.thumbnailUrl} alt="" loading="lazy" />
    ) : (
      <span className="gz-course__glyph" aria-hidden="true">
        <FiMonitor size={40} />
      </span>
    )}
    {course.isFeatured && <span className="gz-badge gz-badge--new">Featured</span>}
  </div>
);

/** Matches CourseCard (ui.js) in layout; the body links to the details page. */
export const VirtualCourseCard = ({ course }) => (
  <article className="gz-course gz-course--virtual">
    <Link to={virtualHref(course)} className="gz-course__hit" aria-label={`${course.title}: details`}>
      <Thumb course={course} className="gz-course__media" />
    </Link>
    <div className="gz-course__body">
      {course.categories[0] && <p className="gz-course__cat">{course.categories[0]}</p>}
      <h3 className="gz-h3 gz-course__title">
        <Link to={virtualHref(course)}>{course.title}</Link>
      </h3>
      {course.description && <p className="gz-course__summary">{excerpt(course.description, 140)}</p>}
      <div className="gz-course__foot">
        <span className="gz-course__modes">
          <span className="gz-badge">
            <FiMonitor size={12} /> Virtual
          </span>
          <PriceTag course={course} />
        </span>
      </div>
      <div className="gz-course__actions">
        <Link to={virtualHref(course)} className="gz-btn gz-btn--secondary gz-btn--sm">
          View details
        </Link>
        <EnrolButton course={course} className="gz-btn gz-btn--primary gz-btn--sm" />
      </div>
    </div>
  </article>
);

/** Matches CourseTile on the courses page. */
export const VirtualCourseTile = ({ course }) => (
  <article className="gz-tile gz-tile--virtual">
    <Link to={virtualHref(course)} className="gz-tile__hit" aria-label={`${course.title}: details`}>
      <Thumb course={course} className="gz-tile__thumb" />
    </Link>
    <div className="gz-tile__meta">
      {course.categories[0] ? (
        <span className="gz-tile__tag gz-tile__tag--lilac">{course.categories[0]}</span>
      ) : (
        <span />
      )}
      <PriceTag course={course} />
    </div>
    <h3 className="gz-tile__title">
      <Link to={virtualHref(course)}>{course.title}</Link>
    </h3>
    {course.description && <p className="gz-tile__summary">{excerpt(course.description, 150)}</p>}
    <div className="gz-tile__foot gz-tile__foot--actions">
      <Link to={virtualHref(course)} className="gz-btn gz-btn--secondary gz-btn--sm">
        View details <FiArrowUpRight />
      </Link>
      <EnrolButton course={course} className="gz-btn gz-btn--primary gz-btn--sm" />
    </div>
  </article>
);

export const CourseSkeletons = ({ count = 3, height = 380 }) =>
  Array.from({ length: count }, (_, i) => (
    <div key={`skeleton-${i}`} className="gz-skeleton" style={{ height }} aria-hidden="true" />
  ));

export const VirtualCoursesError = ({ onRetry }) => (
  <div className="gz-state" role="alert">
    <h3 className="gz-h3">We couldn't load our virtual courses</h3>
    <p>Please check your connection and try again. You can also browse them on Grazac Learn.</p>
    <div className="gz-btn-row">
      <button type="button" className="gz-btn gz-btn--primary" onClick={onRetry}>
        Try again
      </button>
      <a href={links.learn} className="gz-btn gz-btn--secondary">
        Go to Grazac Learn <FiArrowRight />
      </a>
    </div>
  </div>
);

export const VirtualCoursesEmpty = () => (
  <div className="gz-state">
    <h3 className="gz-h3">No virtual courses are open right now</h3>
    <p>New courses are added regularly. Message us and we'll tell you when the next one opens.</p>
    <div className="gz-btn-row">
      <a href={contact.whatsappChat} target="_blank" rel="noopener noreferrer" className="gz-btn gz-btn--primary">
        Ask on WhatsApp
      </a>
    </div>
  </div>
);
