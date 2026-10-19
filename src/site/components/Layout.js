import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronDown,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../images/svg/grazac-logo.svg";
import actdLogo from "../../images/footer-bird.png";
import terms from "../../images/newsletter/terms.pdf";
import {
  accreditation,
  announcement,
  contact,
  links,
  socials,
} from "../data/site";
import CircuitPattern from "./CircuitPattern";
import "../site.css";

const primaryNav = [
  { to: "/courses", label: "Courses" },
  { to: "/virtual", label: "Virtual classes" },
  { to: "/pricing", label: "Pricing" },
  { to: "/hire", label: "Hire talent" },
  { to: "/about-us", label: "About" },
  { to: "/faq", label: "FAQs" },
];

const moreNav = [
  { to: "/it", label: "IT / SIWES program" },
  { to: "/web3", label: "Web3 & Blockchain" },
  { href: links.blog, label: "Blog" },
  { to: "/contact", label: "Contact us" },
];

const socialIcons = {
  X: FaXTwitter,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  TikTok: FaTiktok,
};

const ANNOUNCE_KEY = `gz-announce-dismissed:${announcement.text}`;

const readDismissed = () => {
  try {
    return sessionStorage.getItem(ANNOUNCE_KEY) === "1";
  } catch (e) {
    return false;
  }
};

const Announcement = () => {
  const [hidden, setHidden] = useState(readDismissed);
  if (!announcement.text || hidden) return null;

  const dismiss = () => {
    setHidden(true);
    try {
      sessionStorage.setItem(ANNOUNCE_KEY, "1");
    } catch (e) {
      // storage unavailable; dismissal lasts until reload
    }
  };

  return (
    <div className="gz-announce" role="region" aria-label="Announcement">
      <div className="gz-container gz-announce__inner">
        <p className="gz-announce__text">
          {announcement.text}{" "}
          <Link className="gz-announce__cta" to={announcement.href}>
            {announcement.cta}
          </Link>
        </p>
        <button
          type="button"
          className="gz-announce__close"
          onClick={dismiss}
          aria-label="Dismiss announcement"
        >
          <FiX size={16} />
        </button>
      </div>
    </div>
  );
};

const NavAnchor = ({ item, className, onClick }) =>
  item.href ? (
    <a
      href={item.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {item.label}
    </a>
  ) : (
    <NavLink
      to={item.to}
      className={className}
      activeClassName="is-active"
      onClick={onClick}
    >
      {item.label}
    </NavLink>
  );

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [more, setMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawer(false);
    setMore(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!drawer) return undefined;
    const onKey = (e) => e.key === "Escape" && setDrawer(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    if (!more) return undefined;
    const close = () => setMore(false);
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [more]);

  // The drawer sits outside <header>: the header's backdrop-filter would
  // otherwise trap the fixed-position drawer inside the 72px header box.
  return (
    <>
      <header className={`gz-header${scrolled ? " gz-header--scrolled" : ""}`}>
        <div className="gz-container gz-header__inner">
          <Link to="/" className="gz-logo" aria-label="Grazac Academy home">
            <img src={logo} alt="Grazac Academy" width="104" height="38" />
          </Link>

          <nav className="gz-nav" aria-label="Main">
            {primaryNav.map((item) => (
              <NavAnchor key={item.to} item={item} className="gz-nav__link" />
            ))}
            <div className={`gz-nav__more${more ? " is-open" : ""}`}>
              <button
                type="button"
                className="gz-nav__link"
                aria-expanded={more}
                onClick={(e) => {
                  e.stopPropagation();
                  setMore((v) => !v);
                }}
              >
                More <FiChevronDown size={16} />
              </button>
              <div className="gz-nav__menu">
                {moreNav.map((item) => (
                  <NavAnchor key={item.label} item={item} />
                ))}
              </div>
            </div>
          </nav>

          <div className="gz-header__actions">
            <a
              href={links.login}
              className="gz-btn gz-btn--secondary gz-btn--sm"
            >
              Log in
            </a>
            <Link
              to={links.apply}
              className="gz-btn gz-btn--primary gz-btn--sm"
            >
              Apply now
            </Link>
          </div>

          <button
            type="button"
            className="gz-burger"
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer(true)}
          >
            <FiMenu size={20} />
          </button>
        </div>
      </header>

      <div
        className={`gz-drawer${drawer ? " is-open" : ""}`}
        onClick={() => setDrawer(false)}
        aria-hidden={!drawer}
      >
        <div
          className="gz-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gz-drawer__top">
            <img
              src={logo}
              alt="Grazac Academy"
              height="34"
              style={{ height: 34, width: "auto" }}
            />
            <button
              type="button"
              className="gz-drawer__close"
              aria-label="Close menu"
              onClick={() => setDrawer(false)}
            >
              <FiX size={20} />
            </button>
          </div>
          <nav className="gz-drawer__nav" aria-label="Mobile">
            <NavLink exact to="/" activeClassName="is-active">
              Home <FiArrowRight />
            </NavLink>
            {[...primaryNav, ...moreNav].map((item) => (
              <NavAnchor
                key={item.label}
                item={{ ...item, label: item.label }}
              />
            ))}
          </nav>
          <div className="gz-drawer__actions">
            <Link
              to={links.apply}
              className="gz-btn gz-btn--primary gz-btn--lg"
            >
              Apply now
            </Link>
            <a
              href={links.login}
              className="gz-btn gz-btn--secondary gz-btn--lg"
            >
              Log in
            </a>
            <a
              href={contact.phoneHref}
              className="gz-btn gz-btn--secondary gz-btn--lg"
            >
              <FiPhone /> Talk to us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="gz-footer">
    <CircuitPattern className="gz-footer__pattern" seed={3} />
    <div className="gz-container">
      <div className="gz-footer__grid">
        <div className="gz-footer__brand">
          <img src={logo} alt="Grazac Academy" width="110" height="40" />
          <p>
            Tech training at PROHUB in Abeokuta and online. Physical courses
            run for six months, virtual courses for three.
          </p>
          <div className="gz-footer__contact">
            <a href={contact.phoneHref}>
              <FiPhone /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <FiMail /> {contact.email}
            </a>
            <span style={{ display: "inline-flex", gap: 10 }}>
              <FiMapPin style={{ flex: "none", marginTop: 4 }} />
              <span>{contact.address.join(" ")}</span>
            </span>
          </div>
        </div>

        <div>
          <h3>Learn</h3>
          <ul className="gz-footer__links">
            <li>
              <Link to="/courses">All courses</Link>
            </li>
            <li>
              <Link to="/virtual">Virtual classes</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/it">IT / SIWES program</Link>
            </li>
            <li>
              <Link to="/web3">Web3 & Blockchain</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul className="gz-footer__links">
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/hire">Hire our talent</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <a href={links.blog} target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Students</h3>
          <ul className="gz-footer__links">
            <li>
              <Link to={links.apply}>Apply now</Link>
            </li>
            <li>
              <a href={links.login}>Log in to dashboard</a>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <a
                href={contact.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp community
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gz-footer__accredit">
        <img src={actdLogo} alt="ACTD logo" />
        <p>{accreditation}</p>
      </div>

      <div className="gz-footer__bottom">
        <p>
          © {new Date().getFullYear()} Grazac Technologies. All rights reserved.
        </p>
        <div className="gz-footer__legal">
          <a href={terms} target="_blank" rel="noopener noreferrer">
            Terms of service
          </a>
        </div>
        <div className="gz-socials">
          {socials.map(({ name, href }) => {
            const Icon = socialIcons[name];
            return (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Grazac on ${name}`}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </footer>
);

const Layout = ({ title, description, children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = title
      ? `${title} | Grazac Academy`
      : "Grazac Academy | Tech courses in Abeokuta and online";
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="gz">
      <a href="#main" className="gz-skip">
        Skip to content
      </a>
      <Announcement />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
