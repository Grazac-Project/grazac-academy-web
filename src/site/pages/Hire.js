import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiCpu,
  FiHeart,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import Layout from "../components/Layout";
import MailForm from "../components/MailForm";
import { Check, SectionHeading } from "../components/ui";
import { categories, courses } from "../data/courses";
import { contact } from "../data/site";
import group from "../img/group.jpg";

const reasons = [
  {
    icon: FiAward,
    title: "Competency",
    text: "Our talent is trained to a global standard and ready to work anywhere in the world — remotely or onsite.",
  },
  {
    icon: FiHeart,
    title: "Strong soft skills",
    text: "Beyond tech skills and tools, our graduates are equipped with soft skills that foster great workplace ethics.",
  },
  {
    icon: FiTarget,
    title: "Problem solvers",
    text: "Not just entry-level: they've built real projects as part of their program, so they're practical and hands-on.",
  },
  {
    icon: FiZap,
    title: "No hiring stress",
    text: "Skip sifting through hundreds of applications. Tell us what you need and we'll match you with the right fit.",
  },
];

const steps = [
  { title: "Tell us what you need", text: "Share the role, skills, level and whether it's remote or onsite." },
  { title: "Meet matched candidates", text: "We shortlist graduates whose skills and projects fit your brief." },
  { title: "Interview and hire", text: "Interview directly and make an offer to the person who fits your team." },
];

const roleOptions = courses.map((c) => c.title);

const fields = [
  { name: "name", label: "Your name", required: true, half: true, autoComplete: "name" },
  { name: "company", label: "Company", required: true, half: true, autoComplete: "organization", isSubject: true },
  { name: "email", label: "Work email", type: "email", required: true, half: true, autoComplete: "email" },
  { name: "phone", label: "Phone (optional)", type: "tel", half: true, autoComplete: "tel" },
  { name: "role", label: "Role / skill needed", type: "select", required: true, options: [...roleOptions, "Other"] },
  { name: "details", label: "Details", type: "textarea", required: true, placeholder: "Number of hires, level, remote or onsite, start date…" },
];

const Hire = () => (
  <Layout
    title="Hire our talent"
    description="Hire job-ready tech talent from Grazac Academy — developers, designers, product managers, data analysts, QA, cloud and cybersecurity professionals."
  >
    <section className="gz-hero">
      <div className="gz-container gz-hero__grid">
        <div>
          <p className="gz-eyebrow">For employers</p>
          <h1 className="gz-h1">
            Hire top tech talent from our <span className="gz-accent">pool</span>.
          </h1>
          <p className="gz-lead">
            Attracting the best tech talent is competitive. Let us connect you
            with job-ready graduates who have genuine skill sets, real project
            experience and good workplace ethics.
          </p>
          <div className="gz-btn-row">
            <a href="#request" className="gz-btn gz-btn--primary gz-btn--lg">
              Request talent <FiArrowRight />
            </a>
            <a href={`mailto:${contact.hireEmail}`} className="gz-btn gz-btn--ghost gz-btn--lg">
              {contact.hireEmail}
            </a>
          </div>
        </div>
        <div className="gz-hero__media">
          <div className="gz-hero__photo" style={{ aspectRatio: "4 / 3" }}>
            <img src={group} alt="Grazac Academy graduates" />
          </div>
        </div>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Why hire from us"
          title="Why top companies hire from Grazac"
        />
        <div className="gz-grid gz-grid--4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div className="gz-card" key={title}>
              <span className="gz-icon">
                <Icon size={22} />
              </span>
              <h3 className="gz-h3">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Skills you can hire for"
          title="Talent across every track we teach"
        />
        <div className="gz-grid gz-grid--4">
          {categories.map((cat) => (
            <div className="gz-card" key={cat}>
              <span className="gz-icon gz-icon--yellow">
                <FiCpu size={22} />
              </span>
              <h3 className="gz-h3">{cat}</h3>
              <ul className="gz-aside__list" style={{ margin: "12px 0 0" }}>
                {courses
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <li key={c.slug}>
                      <Check /> {c.title}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--dark">
      <div className="gz-container">
        <SectionHeading center eyebrow="How it works" title="Hiring in three steps" />
        <ol className="gz-steps">
          {steps.map((s, i) => (
            <li className="gz-step" key={s.title}>
              <span className="gz-step__num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="gz-section" id="request">
      <div className="gz-container gz-split" style={{ alignItems: "start" }}>
        <div>
          <SectionHeading
            eyebrow="Request talent"
            title="Tell us who you're looking for"
            lead="Fill in the form and our team will get back to you with suitable candidates."
          />
          <ul className="gz-aside__list">
            <li><Check /> AI automation, data, cloud & security, business analysts, developers, product managers and designers</li>
            <li><Check /> Remote or onsite</li>
            <li><Check /> Graduates with real project experience</li>
          </ul>
          <p className="gz-muted">
            Prefer to talk? Call{" "}
            <a href={contact.phoneHref} style={{ color: "var(--gz-purple)", fontWeight: 600 }}>
              {contact.phone}
            </a>
            .
          </p>
        </div>
        <div className="gz-card">
          <MailForm
            to={contact.hireEmail}
            subjectPrefix="Talent request"
            fields={fields}
            submitLabel="Send request"
          />
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--tight">
      <div className="gz-container gz-center">
        <p className="gz-muted">
          Looking to learn instead?{" "}
          <Link to="/courses" className="gz-link">
            Explore our courses <FiArrowRight />
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default Hire;
