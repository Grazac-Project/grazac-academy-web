import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiCode,
  FiMail,
  FiSend,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { Reveal, SectionHeading } from "../components/ui";
import { courses } from "../data/courses";
import { contact } from "../data/site";

const roles = [
  "Software Engineers",
  "Data Analysts",
  "Product Designers",
  "Product Managers",
  "Cloud & Security",
  "Business Analysts",
];

// Illustrative shortlist on the hero card: role types we train for, not real people.
const exampleShortlist = [
  { role: "Data Analyst", track: "Data Analysis graduate" },
  { role: "Product Designer", track: "Product Design graduate" },
  { role: "Cloud Engineer", track: "Cloud Engineering graduate" },
];

const pipeline = [
  { icon: FiBookOpen, title: "Learn", text: "Students train with instructors who work in the industry." },
  { icon: FiCode, title: "Practice", text: "Physical students spend two months building a real project in a team." },
  { icon: FiClipboard, title: "Assess", text: "Work is reviewed by mentors and judged by practitioners from outside the academy." },
  { icon: FiUsers, title: "Talent pool", text: "Graduates who finish the program are ready to be put forward to employers." },
  { icon: FiTrendingUp, title: "Hire", text: "You meet the people whose skills and projects match your role." },
];

const traditional = [
  "Write and post a job ad",
  "Hundreds of applications",
  "Screen CVs one by one",
  "Set and mark assessments",
  "Rounds of interviews",
];
const withGrazac = [
  "Tell us who you need",
  "Get a shortlist of trained graduates",
  "Interview the people you like",
  "Make your offer",
];

const productTalent = ["Software Engineering", "Mobile Development", "Front-End Development", "Cloud Engineering", "Cybersecurity", "Product Design (UI/UX)"];
const businessTalent = ["Data Analysis", "AI Automation", "Business Analysis", "Project Management", "Product Management"];

// Which course each role / category button pre-selects in the request form.
const roleToCourse = {
  "Software Engineers": "backend-development",
  "Data Analysts": "data-analysis",
  "Product Designers": "product-designing-ui-ux",
  "Product Managers": "product-management",
  "Cloud & Security": "cloud-engineering-aws",
  "Business Analysts": "business-analysis-project-management",
  "Software Engineering": "backend-development",
  "Mobile Development": "mobile-application-development",
  "Front-End Development": "frontend-web-development",
  "Cloud Engineering": "cloud-engineering-aws",
  Cybersecurity: "cybersecurity",
  "Product Design (UI/UX)": "product-designing-ui-ux",
  "Data Analysis": "data-analysis",
  "AI Automation": "ai-automation-bootcamp",
  "Business Analysis": "business-analysis-project-management",
  "Project Management": "business-analysis-project-management",
  "Product Management": "product-management",
};

const readiness = ["Technical skills", "Project evidence", "Communication", "Workplace habits"];

const roleOptions = [...courses.map((c) => c.title), "Something else"];
const steps = ["Role", "Company", "Details"];

const empty = {
  engagement: "Full-time hire",
  role: "",
  employment: "Full-time",
  name: "",
  company: "",
  email: "",
  phone: "",
  hires: "1",
  location: "Remote",
  start: "",
  notes: "",
};

const Field = ({ label, children, hint }) => (
  <div className="gz-field">
    <label>{label}</label>
    {children}
    {hint && <span className="gz-form__hint">{hint}</span>}
  </div>
);

// Three-step hiring request. There's no hiring endpoint on the backend, so the
// last step opens the visitor's email app with everything filled in.
const HireRequest = ({ presetRole }) => {
  const [step, setStep] = useState(0);
  const [v, setV] = useState({ ...empty, role: presetRole || "" });
  const [sent, setSent] = useState(false);
  const on = (e) => setV((s) => ({ ...s, [e.target.name]: e.target.value }));

  const next = (e) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep(step + 1);
      return;
    }
    const body = [
      `Engagement: ${v.engagement}`,
      `Role: ${v.role}`,
      `Employment type: ${v.employment}`,
      `Number of hires: ${v.hires}`,
      `Location: ${v.location}`,
      `Ideal start date: ${v.start || "Flexible"}`,
      "",
      `Name: ${v.name}`,
      `Company: ${v.company}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone || "-"}`,
      "",
      v.notes,
    ].join("\n");
    window.location.href = `mailto:${contact.hireEmail}?subject=${encodeURIComponent(
      `Hiring request: ${v.role} at ${v.company}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="gz-request" onSubmit={next}>
      <ol className="gz-request__steps">
        {steps.map((s, i) => (
          <li key={s} className={i === step ? "is-active" : i < step ? "is-done" : ""}>
            <span>{i < step ? <FiCheck size={14} /> : i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
      <p className="gz-request__count">
        Step {step + 1} of {steps.length}
      </p>

      {step === 0 && (
        <div className="gz-form">
          <div className="gz-field">
            <label>What kind of hire is this?</label>
            <div className="gz-choice">
              {["Full-time hire", "Internship", "Not sure yet"].map((o) => (
                <label key={o} className={v.engagement === o ? "is-active" : ""}>
                  <input type="radio" name="engagement" value={o} checked={v.engagement === o} onChange={on} />
                  {o}
                </label>
              ))}
            </div>
          </div>
          <Field label="What role are you hiring for? *">
            <select name="role" required value={v.role} onChange={on}>
              <option value="">Select a role</option>
              {roleOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Employment type">
            <select name="employment" value={v.employment} onChange={on}>
              {["Full-time", "Part-time", "Contract", "Project-based", "Internship"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="gz-form">
          <div className="gz-form__row">
            <Field label="Your name *">
              <input name="name" required autoComplete="name" value={v.name} onChange={on} />
            </Field>
            <Field label="Company *">
              <input name="company" required autoComplete="organization" value={v.company} onChange={on} />
            </Field>
          </div>
          <div className="gz-form__row">
            <Field label="Work email *">
              <input name="email" type="email" required autoComplete="email" value={v.email} onChange={on} />
            </Field>
            <Field label="Phone">
              <input name="phone" type="tel" autoComplete="tel" value={v.phone} onChange={on} />
            </Field>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="gz-form">
          <div className="gz-form__row">
            <Field label="How many people?">
              <input name="hires" type="number" min="1" value={v.hires} onChange={on} />
            </Field>
            <Field label="Ideal start date">
              <input name="start" type="date" value={v.start} onChange={on} />
            </Field>
          </div>
          <div className="gz-field">
            <label>Where will they work?</label>
            <div className="gz-choice">
              {["Remote", "On-site", "Hybrid"].map((o) => (
                <label key={o} className={v.location === o ? "is-active" : ""}>
                  <input type="radio" name="location" value={o} checked={v.location === o} onChange={on} />
                  {o}
                </label>
              ))}
            </div>
          </div>
          <Field label="Anything else we should know?">
            <textarea name="notes" value={v.notes} onChange={on} placeholder="Experience level, tools, team setup" />
          </Field>
        </div>
      )}

      <div className="gz-request__actions">
        {step > 0 && (
          <button type="button" className="gz-btn gz-btn--secondary" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        <button type="submit" className="gz-btn gz-btn--primary gz-btn--lg">
          {step < steps.length - 1 ? (
            <>
              Continue <FiArrowRight />
            </>
          ) : (
            <>
              Send request <FiSend />
            </>
          )}
        </button>
      </div>
      <p className="gz-form__hint" role="status">
        {sent
          ? `Your email app should now be open with your request to ${contact.hireEmail}.`
          : "We only use your details to follow up on this request."}
      </p>
    </form>
  );
};

const Hire = () => {
  const [presetRole, setPresetRole] = useState("");
  const [formKey, setFormKey] = useState(0);

  const pickRole = (label) => {
    const slug = roleToCourse[label];
    const match = courses.find((c) => c.slug === slug);
    setPresetRole(match ? match.title : "");
    setFormKey((k) => k + 1);
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout
      title="Hire our graduates"
      description="Hire trained, project-tested tech talent from Grazac Academy: developers, data analysts, designers, product managers, cloud and cybersecurity graduates."
    >
      {/* Hero */}
      <section className="gz-hero gz-hire-hero">
        <CircuitPattern className="gz-hero__pattern" seed={13} />
        <div className="gz-container gz-hero__grid">
          <div>
            <p className="gz-eyebrow">Hire from Grazac</p>
            <h1 className="gz-h1">
              Hire people who&apos;ve
              <br />
              <span className="gz-accent">already done the work.</span>
            </h1>
            <p className="gz-lead">
              Grazac graduates have learnt from industry practitioners, built
              real projects and had their work reviewed before they reach you.
              Tell us the role and we&apos;ll send you a shortlist.
            </p>
            <div className="gz-btn-row">
              <a href="#request" className="gz-btn gz-btn--primary gz-btn--lg">
                Request candidates <FiArrowRight />
              </a>
              <a href="#categories" className="gz-btn gz-btn--ghost gz-btn--lg">
                See talent categories
              </a>
            </div>
          </div>

          <div className="gz-shortlist" aria-label="Example of a shortlist">
            <div className="gz-shortlist__head">
              <span>Example shortlist</span>
              <span className="gz-badge gz-badge--new">Ready to interview</span>
            </div>
            <ul>
              {exampleShortlist.map((c) => (
                <li key={c.role}>
                  <span className="gz-shortlist__avatar">
                    <FiUsers size={18} />
                  </span>
                  <span>
                    <strong>{c.role}</strong>
                    <em>{c.track}</em>
                  </span>
                  <FiCheckCircle className="gz-shortlist__tick" size={20} />
                </li>
              ))}
            </ul>
            <ol className="gz-shortlist__flow">
              <li>01 Shortlist</li>
              <li>02 Interview</li>
              <li>03 Hire</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Who are you hiring */}
      <section className="gz-section gz-section--tight">
        <div className="gz-container gz-hire-roles">
          <h2>Who are you hiring?</h2>
          <div>
            {roles.map((r) => (
              <button key={r} type="button" onClick={() => pickRole(r)}>
                {r} <FiArrowUpRight />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="gz-section gz-section--soft">
        <div className="gz-container">
          <Reveal>
            <SectionHeading
              eyebrow="How our talent is made"
              title="Every graduate follows the same path before they reach you."
              lead="Training, a real project and outside review, then an introduction to you."
            />
          </Reveal>
          <ol className="gz-pipeline">
            {pipeline.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80}>
                <span className="gz-pipeline__num">0{i + 1}</span>
                <span className="gz-icon">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Traditional vs Grazac */}
      <section className="gz-section">
        <div className="gz-container">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why it's quicker"
              title="Fewer CVs to read. Better people to meet."
            />
          </Reveal>
          <div className="gz-compare">
            <Reveal className="gz-compare__col">
              <p className="gz-compare__label">Traditional hiring</p>
              <ol>
                {traditional.map((t, i) => (
                  <li key={t}>
                    <span>0{i + 1}</span> {t}
                  </li>
                ))}
              </ol>
            </Reveal>
            <span className="gz-compare__arrow" aria-hidden="true">
              <FiArrowRight size={26} />
            </span>
            <Reveal className="gz-compare__col gz-compare__col--grazac" delay={120}>
              <p className="gz-compare__label">With Grazac</p>
              <ol>
                {withGrazac.map((t) => (
                  <li key={t}>
                    <FiCheck size={18} /> {t}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="gz-section gz-section--dark gz-section--grain" id="categories">
        <div className="gz-container">
          <Reveal>
            <SectionHeading
              eyebrow="Talent categories"
              title="Talent for your product and your business"
              lead="Pick a skill and we'll start your request with it."
            />
          </Reveal>
          <div className="gz-cats">
            {[
              { n: "01", label: "Product & engineering", sub: "Developers, designers, cloud and security", items: productTalent },
              { n: "02", label: "Data & business", sub: "Analysts, product managers and automation", items: businessTalent },
            ].map((g) => (
              <Reveal className="gz-cats__group" key={g.n}>
                <span className="gz-cats__n">{g.n}</span>
                <h3>{g.label}</h3>
                <p>{g.sub}</p>
                <div className="gz-cats__list">
                  {g.items.map((it) => (
                    <button key={it} type="button" onClick={() => pickRole(it)}>
                      {it} <FiArrowUpRight />
                    </button>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness */}
      <section className="gz-section">
        <div className="gz-container gz-split">
          <Reveal>
            <SectionHeading
              eyebrow="What you can expect"
              title="What every Grazac graduate brings"
              lead="We coach students on communication and workplace habits alongside the technical work, and they graduate with an ACTD-accredited certificate."
            />
            <a href="#request" className="gz-btn gz-btn--primary">
              Start a request <FiArrowRight />
            </a>
          </Reveal>
          <Reveal className="gz-ready" delay={120}>
            <div className="gz-ready__head">
              <span className="gz-shortlist__avatar">
                <FiAward size={18} />
              </span>
              <span>
                <strong>Every Grazac graduate</strong>
                <em>Physical and virtual programs</em>
              </span>
            </div>
            <ul>
              {readiness.map((r) => (
                <li key={r}>
                  {r} <FiCheckCircle size={18} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Request form */}
      <section className="gz-section gz-section--soft" id="request">
        <div className="gz-container gz-split" style={{ alignItems: "start" }}>
          <div>
            <SectionHeading
              eyebrow="Create a hiring request"
              title="Tell us who you need."
              lead="Three short steps, then our team matches graduates to your role."
            />
            <ul className="gz-aside__list">
              <li>
                <FiCheck /> Remote, on-site or hybrid roles
              </li>
              <li>
                <FiCheck /> Interns and full-time hires
              </li>
            </ul>
            <p className="gz-muted">Prefer email?</p>
            <a href={`mailto:${contact.hireEmail}`} className="gz-link">
              <FiMail /> {contact.hireEmail}
            </a>
          </div>
          <div className="gz-card">
            <HireRequest key={formKey} presetRole={presetRole} />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="gz-section gz-section--tight">
        <div className="gz-container">
          <div className="gz-cta gz-cta--dark">
            <div>
              <h2 className="gz-h2">Your next hire could be in our current cohort.</h2>
              <p>Tell us who you need and meet trained graduates who have already built something real.</p>
            </div>
            <div className="gz-btn-row">
              <a href="#request" className="gz-btn gz-btn--yellow gz-btn--lg">
                Start hiring <FiArrowRight />
              </a>
              <Link to="/courses" className="gz-btn gz-btn--secondary gz-btn--lg">
                See what we teach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hire;
