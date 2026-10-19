import { Link } from "react-router-dom";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import MailForm from "../components/MailForm";
import { Check, Reveal, SectionHeading } from "../components/ui";
import { categories, courses } from "../data/courses";
import { contact } from "../data/site";
import group from "../img/group.jpg";

const reasons = [
  {
    title: "They've already worked in a team",
    text: "Physical students spend their last two months building a real project together before they graduate.",
  },
  {
    title: "Soft skills are part of the course",
    text: "We coach students on communication and workplace habits alongside the technical work.",
  },
  {
    title: "Remote or on-site",
    text: "Our graduates are trained to work from anywhere, so you can hire for either.",
  },
  {
    title: "Less sifting for you",
    text: "Tell us what the role needs and we'll put forward people whose skills and projects match.",
  },
];

const steps = [
  {
    when: "Step 1",
    title: "Tell us about the role",
    text: "Skills, level, start date, and whether it's remote or on-site.",
  },
  {
    when: "Step 2",
    title: "Get a shortlist",
    text: "We send you graduates whose work fits the brief.",
  },
  {
    when: "Step 3",
    title: "Interview and decide",
    text: "You talk to them directly and make the offer.",
  },
];

const fields = [
  { name: "name", label: "Your name", required: true, half: true, autoComplete: "name" },
  { name: "company", label: "Company", required: true, half: true, autoComplete: "organization", isSubject: true },
  { name: "email", label: "Work email", type: "email", required: true, half: true, autoComplete: "email" },
  { name: "phone", label: "Phone (optional)", type: "tel", half: true, autoComplete: "tel" },
  { name: "role", label: "What skill are you hiring for?", type: "select", required: true, options: [...courses.map((c) => c.title), "Something else"] },
  { name: "details", label: "Anything else we should know", type: "textarea", required: true, placeholder: "How many people, experience level, remote or on-site, start date" },
];

const Hire = () => (
  <Layout
    title="Hire our graduates"
    description="Hire developers, designers, product managers, data analysts, cloud and cybersecurity graduates from Grazac Academy in Abeokuta."
  >
    <section className="gz-hero">
        <CircuitPattern className="gz-hero__pattern" />
      <div className="gz-container gz-hero__grid">
        <div>
          <p className="gz-eyebrow">For employers</p>
          <h1 className="gz-h1">
            Your next hire might be finishing a project at{" "}
            <span className="gz-accent">PROHUB</span> right now.
          </h1>
          <p className="gz-lead">
            We train developers, analysts, designers and product people in
            Abeokuta and online. Tell us who you need and we'll introduce you.
          </p>
          <div className="gz-btn-row">
            <a href="#request" className="gz-btn gz-btn--primary gz-btn--lg">
              Request candidates <FiArrowRight />
            </a>
            <a href={`mailto:${contact.hireEmail}`} className="gz-btn gz-btn--ghost gz-btn--lg">
              <FiMail /> {contact.hireEmail}
            </a>
          </div>
        </div>
        <div className="gz-hero__media">
          <div className="gz-hero__photo" style={{ aspectRatio: "4 / 3" }}>
            <img src={group} alt="A group of Grazac Academy students" />
          </div>
        </div>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container gz-split" style={{ alignItems: "start" }}>
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Why hire from us"
            title="What you get with a Grazac graduate"
          />
        </Reveal>
        <div className="gz-why" style={{ borderTop: 0 }}>
          {reasons.map((r, i) => (
            <Reveal className="gz-why__item" key={r.title} delay={i * 80}>
              <span className="gz-why__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <Reveal>
          <SectionHeading index="02" eyebrow="Skills" title="Roles you can hire for" />
        </Reveal>
        <div className="gz-grid gz-grid--4">
          {categories.map((cat, i) => (
            <Reveal className="gz-card" key={cat} delay={i * 70}>
              <h3 className="gz-h3">{cat}</h3>
              <ul className="gz-aside__list" style={{ margin: "14px 0 0" }}>
                {courses
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <li key={c.slug}>
                      <Check /> {c.title}
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--dark gz-section--grain">
      <div className="gz-container">
        <Reveal>
          <SectionHeading index="03" eyebrow="The process" title="How hiring through us works" />
        </Reveal>
        <ol className="gz-journey gz-journey--3">
          {steps.map((s, i) => (
            <Reveal as="li" className="gz-journey__stop" key={s.title} delay={i * 90}>
              <span className="gz-journey__when">{s.when}</span>
              <span className="gz-journey__dot" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <section className="gz-section" id="request">
      <div className="gz-container gz-split" style={{ alignItems: "start" }}>
        <div>
          <SectionHeading
            index="04"
            eyebrow="Request candidates"
            title="Who are you looking for?"
            lead="Fill this in and our team will reply by email."
          />
          <p className="gz-muted">
            Rather talk? Call us on{" "}
            <a href={contact.phoneHref} style={{ color: "var(--gz-purple)", fontWeight: 600 }}>
              {contact.phone}
            </a>
            .
          </p>
        </div>
        <div className="gz-card">
          <MailForm
            to={contact.hireEmail}
            subjectPrefix="Hiring request"
            fields={fields}
            submitLabel="Send request"
          />
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--tight">
      <div className="gz-container gz-center">
        <p className="gz-muted">
          Here to learn instead?{" "}
          <Link to="/courses" className="gz-link">
            See our courses <FiArrowRight />
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default Hire;
