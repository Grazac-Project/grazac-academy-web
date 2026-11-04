// "Apply now" and "Log in" both ask whether the learner is on a virtual or a
// physical course before sending them anywhere. Virtual courses live on Grazac
// Learn (enrol from the catalogue, sign in there); physical ones use the
// cohort sign-up and dashboard on this site.
//
// ApplyLink is a real link to /apply, so a new tab, a shared link or a click
// before the app loads still reaches the same choice as a page. A plain click
// opens it as a dialog instead. Log in only exists as the dialog.

import { createContext, forwardRef, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiExternalLink, FiMessageCircle, FiMonitor, FiUsers, FiX } from "react-icons/fi";
import { announcement, contact, links } from "../data/site";
import { coursesByMode } from "../data/courses";
import useVirtualCourses from "../hooks/useVirtualCourses";
import { formatPrice } from "../../lib/courseFormat";

export const APPLY_PATH = "/apply";
export const VIRTUAL_PATH = "/courses?mode=virtual";

const readChoice = (key) => {
  try {
    const v = localStorage.getItem(key);
    return v === "virtual" || v === "onsite" ? v : null;
  } catch (e) {
    return null;
  }
};

const saveChoice = (key, event, choice) => {
  try {
    localStorage.setItem(key, choice);
  } catch (e) {
    // storage unavailable; nothing to remember
  }
  if (typeof window.gtag === "function") window.gtag("event", event, { choice });
};

// "7 courses open · from ₦50,000", from what the API actually returns.
const virtualSummary = ({ status, items, total }) => {
  if (status !== "ready" || !total) return null;
  const count = `${total} ${total === 1 ? "course" : "courses"} open`;
  if (items.some((c) => formatPrice(c) === "Free")) return `${count} · some are free`;
  const paid = items.filter((c) => formatPrice(c) && c.currency === items[0].currency);
  if (!paid.length) return count;
  const cheapest = paid.reduce((a, b) => (b.price < a.price ? b : a));
  return `${count} · from ${formatPrice(cheapest)}`;
};

const physicalCount = coursesByMode("onsite").length;

const cardIcon = { virtual: FiMonitor, onsite: FiUsers };

// One option. `to` is a route on this site, `href` a page elsewhere.
const ChoiceCard = forwardRef(({ kind, to, href, last, title, text, fact, go, onClick }, ref) => {
  const Icon = cardIcon[kind];
  const body = (
    <>
      {last && <span className="gz-choose__last">Your last choice</span>}
      <span className="gz-choose__icon" aria-hidden="true">
        <Icon size={26} />
      </span>
      <strong className="gz-choose__title">{title}</strong>
      <span className="gz-choose__text">{text}</span>
      {fact && <span className="gz-choose__fact">{fact}</span>}
      <span className="gz-choose__go">
        {go} {href ? <FiExternalLink /> : <FiArrowRight />}
      </span>
    </>
  );
  const className = `gz-choose__card gz-choose__card--${kind}`;
  return href ? (
    <a ref={ref} href={href} className={className} onClick={onClick}>
      {body}
    </a>
  ) : (
    <Link ref={ref} to={to} className={className} onClick={onClick}>
      {body}
    </Link>
  );
});
ChoiceCard.displayName = "ChoiceCard";

// Shared by both choosers: remembers the last pick, focuses it when opened
// in a dialog, and reports the pick to analytics.
const useChoice = ({ storageKey, event, onChoose, autoFocus }) => {
  const [last] = useState(() => readChoice(storageKey));
  const refs = useRef({});

  useEffect(() => {
    if (autoFocus) (refs.current[last] || refs.current.virtual)?.focus();
  }, [autoFocus, last]);

  return {
    last,
    card: (kind) => ({
      kind,
      last: last === kind,
      ref: (el) => {
        refs.current[kind] = el;
      },
      onClick: () => {
        saveChoice(storageKey, event, kind);
        if (onChoose) onChoose(kind);
      },
    }),
  };
};

const Help = ({ onChoose, children }) => (
  <a
    href={contact.whatsappChat}
    target="_blank"
    rel="noopener noreferrer"
    className="gz-choose__help"
    onClick={() => onChoose && onChoose(null)}
  >
    <FiMessageCircle /> {children}
  </a>
);

/** Where to apply. Used inside the dialog and on the /apply page. */
export const ApplyChoices = ({ onChoose, autoFocus }) => {
  const { card } = useChoice({ storageKey: "gz-apply-choice", event: "apply_choice", onChoose, autoFocus });
  const summary = virtualSummary(useVirtualCourses());

  return (
    <div className="gz-choose">
      <div className="gz-choose__grid">
        <ChoiceCard
          {...card("virtual")}
          to={VIRTUAL_PATH}
          title="Learn online"
          text="Pick a course and enrol on Grazac Learn. Learn from anywhere and track your progress there."
          fact={summary}
          go="Browse virtual courses"
        />
        <ChoiceCard
          {...card("onsite")}
          to={links.apply}
          title="Learn in Abeokuta"
          text="Six months of classes at our campus, with mentors in the room. Create an account to apply."
          fact={`${physicalCount} courses${announcement.text ? ` · ${announcement.text.split(".")[0]}` : ""}`}
          go="Start your application"
        />
      </div>
      <Help onChoose={onChoose}>Not sure which suits you? Chat with us on WhatsApp</Help>
    </div>
  );
};

/** Where to sign in. */
export const LoginChoices = ({ onChoose, autoFocus }) => {
  const { card } = useChoice({ storageKey: "gz-login-choice", event: "login_choice", onChoose, autoFocus });

  return (
    <div className="gz-choose">
      <div className="gz-choose__grid">
        <ChoiceCard
          {...card("virtual")}
          href={links.learn}
          title="Virtual course"
          text="Sign in to Grazac Learn to continue your lessons, take assessments and get your certificate."
          fact="My Learning on Grazac Learn"
          go="Go to My Learning"
        />
        <ChoiceCard
          {...card("onsite")}
          to={links.login}
          title="Physical cohort"
          text="Sign in to your class dashboard for our Abeokuta campus courses."
          go="Log in to your dashboard"
        />
      </div>
      <Help onChoose={onChoose}>Trouble signing in? Chat with us on WhatsApp</Help>
    </div>
  );
};

const dialogs = {
  apply: { eyebrow: "Apply to Grazac Academy", title: "How would you like to learn?", Choices: ApplyChoices },
  login: { eyebrow: "Log in to Grazac Academy", title: "Which course are you on?", Choices: LoginChoices },
};

const ChoiceDialog = ({ kind, onClose }) => {
  const { eyebrow, title, Choices } = dialogs[kind];
  const panel = useRef(null);
  // Read while rendering: by the time effects run, the choices have moved focus.
  const [opener] = useState(() => document.activeElement);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      // Keep focus inside the dialog.
      const focusable = panel.current.querySelectorAll("a[href], button");
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    // The mobile menu may already have locked scrolling; put back what was there.
    const overflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      if (opener && opener.focus) opener.focus();
    };
  }, [onClose, opener]);

  return (
    <div className="gz-apply" onClick={onClose}>
      <div
        ref={panel}
        className="gz-apply__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gz-choice-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="gz-apply__head">
          <div>
            <p className="gz-eyebrow">{eyebrow}</p>
            <h2 id="gz-choice-title" className="gz-h3">
              {title}
            </h2>
          </div>
          <button type="button" className="gz-drawer__close" aria-label="Close" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>
        <Choices onChoose={onClose} autoFocus />
      </div>
    </div>
  );
};

const ChoiceContext = createContext(null);

export const ApplyProvider = ({ children }) => {
  const [open, setOpen] = useState(null);
  const { pathname, search } = useLocation();
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    setOpen(null);
  }, [pathname, search]);

  return (
    <ChoiceContext.Provider value={setOpen}>
      {children}
      {open && <ChoiceDialog kind={open} onClose={close} />}
    </ChoiceContext.Provider>
  );
};

/** "Apply now" when we don't know whether the learner wants virtual or physical. */
export const ApplyLink = ({ onClick, children, ...props }) => {
  const setOpen = useContext(ChoiceContext);
  const handle = (e) => {
    if (onClick) onClick(e);
    // Let modified clicks (new tab, etc.) follow the /apply link.
    if (!setOpen || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    setOpen("apply");
  };
  return (
    <Link to={APPLY_PATH} onClick={handle} {...props}>
      {children}
    </Link>
  );
};

/** "Log in": asks virtual or physical, then goes to Grazac Learn or /login. */
export const LoginButton = ({ onClick, children, ...props }) => {
  const setOpen = useContext(ChoiceContext);
  const handle = (e) => {
    if (onClick) onClick(e);
    setOpen("login");
  };
  return (
    <button type="button" aria-haspopup="dialog" onClick={handle} {...props}>
      {children}
    </button>
  );
};
