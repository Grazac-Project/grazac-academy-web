import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Layout from "../components/Layout";
import { CtaBand, FaqList } from "../components/ui";
import { faqGroups } from "../data/faqs";
import { contact } from "../data/site";

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const Faq = () => {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqGroups;
    return faqGroups
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length);
  }, [query]);

  return (
    <Layout
      title="FAQs"
      description="Answers to common questions about Grazac Academy admissions, courses, fees, payment plans, certificates and careers."
    >
      <section className="gz-page-hero">
        <div className="gz-container">
          <p className="gz-eyebrow">Help center</p>
          <h1 className="gz-h1">Frequently asked questions</h1>
          <p className="gz-lead">
            Everything you need to know about learning with Grazac Academy.
          </p>
          <div className="gz-search">
            <FiSearch size={20} aria-hidden="true" />
            <label htmlFor="faq-search" className="gz-sr">
              Search FAQs
            </label>
            <input
              id="faq-search"
              type="search"
              placeholder="Search questions, e.g. installments"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container gz-faq-layout">
          <nav className="gz-faq-nav" aria-label="FAQ topics">
            {faqGroups.map((g) => (
              <a key={g.topic} href={`#${slugify(g.topic)}`}>
                {g.topic}
              </a>
            ))}
          </nav>
          <div>
            {groups.length === 0 && (
              <div className="gz-state">
                <h3 className="gz-h3">No matching questions</h3>
                <p>
                  Try a different word, or ask us directly on WhatsApp or by
                  calling {contact.phone}.
                </p>
              </div>
            )}
            {groups.map((g) => (
              <div className="gz-faq-group" key={g.topic}>
                <h2 id={slugify(g.topic)}>{g.topic}</h2>
                <FaqList items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Still have questions?"
        text="Our admissions team is happy to help you find the right course and plan."
      />
    </Layout>
  );
};

export default Faq;
