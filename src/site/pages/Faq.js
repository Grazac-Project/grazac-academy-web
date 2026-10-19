import { useMemo, useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiClipboard,
  FiCreditCard,
  FiMail,
  FiMessageCircle,
  FiMonitor,
  FiPhone,
  FiSearch,
  FiX,
} from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { FaqList } from "../components/ui";
import { faqGroups } from "../data/faqs";
import { contact } from "../data/site";

const icons = {
  admissions: FiClipboard,
  courses: FiBookOpen,
  learning: FiMonitor,
  fees: FiCreditCard,
  careers: FiAward,
};

const suggestions = ["Installments", "Application fee", "Certificate", "SIWES", "Campus"];

const helpLinks = [
  { icon: FiMessageCircle, label: "Chat on WhatsApp", href: contact.whatsappChat, external: true },
  { icon: FiPhone, label: contact.phone, href: contact.phoneHref },
  { icon: FiCalendar, label: "Book a 30-minute call", href: contact.calendly, external: true },
  { icon: FiMail, label: contact.email, href: `mailto:${contact.email}` },
];

const total = faqGroups.reduce((n, g) => n + g.items.length, 0);

const Faq = () => {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const term = query.trim();

  const groups = useMemo(() => {
    const q = term.toLowerCase();
    return faqGroups
      .filter((g) => topic === "All" || g.topic === topic)
      .map((g) => ({
        ...g,
        items: q
          ? g.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q))
          : g.items,
      }))
      .filter((g) => g.items.length);
  }, [term, topic]);

  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  const pickTopic = (t) => {
    setTopic((current) => (current === t ? "All" : t));
    const el = document.getElementById("faq-results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout
      title="FAQs"
      description="Answers to common questions about Grazac Academy admissions, courses, fees, payment plans, certificates and careers."
    >
      <section className="gz-page-hero gz-faq-hero">
        <CircuitPattern className="gz-hero__pattern" seed={11} />
        <div className="gz-container gz-center">
          <p className="gz-eyebrow">Help centre</p>
          <h1 className="gz-h1">How can we help?</h1>
          <p className="gz-lead">
            {total} answers about admissions, courses, fees and certificates.
          </p>
          <div className="gz-search">
            <FiSearch size={20} aria-hidden="true" />
            <label htmlFor="faq-search" className="gz-sr">
              Search the FAQs
            </label>
            <input
              id="faq-search"
              type="search"
              placeholder="Search for an answer"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button type="button" className="gz-search__clear" onClick={() => setQuery("")} aria-label="Clear search">
                <FiX size={18} />
              </button>
            )}
          </div>
          <div className="gz-faq-suggest">
            <span>Popular:</span>
            {suggestions.map((s) => (
              <button key={s} type="button" onClick={() => setQuery(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="gz-section gz-section--tight gz-faq-topics-wrap">
        <div className="gz-container">
          <div className="gz-faq-topics" role="group" aria-label="Filter by topic">
            {faqGroups.map((g) => {
              const Icon = icons[g.icon] || FiBookOpen;
              const active = topic === g.topic;
              return (
                <button
                  key={g.topic}
                  type="button"
                  className={`gz-faq-topic${active ? " is-active" : ""}`}
                  aria-pressed={active}
                  onClick={() => pickTopic(g.topic)}
                >
                  <span className="gz-icon">
                    <Icon size={22} />
                  </span>
                  <strong>{g.topic}</strong>
                  <span>{g.blurb}</span>
                  <em>{g.items.length} questions</em>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gz-section" id="faq-results" style={{ paddingTop: 24 }}>
        <div className="gz-container gz-faq-body">
          <div>
            <div className="gz-faq-status" role="status">
              {term ? (
                <span>
                  {shown} {shown === 1 ? "result" : "results"} for “{term}”
                </span>
              ) : (
                <span>{topic === "All" ? "All questions" : topic}</span>
              )}
              {(topic !== "All" || term) && (
                <button
                  type="button"
                  onClick={() => {
                    setTopic("All");
                    setQuery("");
                  }}
                >
                  Show all {total}
                </button>
              )}
            </div>

            {groups.length === 0 && (
              <div className="gz-state">
                <h3 className="gz-h3">Nothing matches “{term}”</h3>
                <p>Try another word, or ask us directly. WhatsApp is usually the quickest way.</p>
              </div>
            )}

            {groups.map((g) => (
              <div className="gz-faq-group" key={g.topic}>
                <h2>{g.topic}</h2>
                <FaqList items={g.items} term={term} variant="cards" />
              </div>
            ))}
          </div>

          <aside className="gz-faq-help">
            <div className="gz-faq-help__card">
              <CircuitPattern className="gz-faq-help__pattern" seed={5} />
              <h3>Still need help?</h3>
              <p>Our admissions team can answer anything not covered here.</p>
              <ul>
                {helpLinks.map(({ icon: Icon, label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <Icon size={18} /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
