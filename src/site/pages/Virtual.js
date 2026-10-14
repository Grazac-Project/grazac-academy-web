import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCompass,
  FiGlobe,
  FiMessageSquare,
  FiSliders,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import { Check, CourseExplorer, CtaBand, SectionHeading } from "../components/ui";
import { percentOff, pricing } from "../data/pricing";
import { links, virtualAnnouncement } from "../data/site";
import heroImg from "../img/virtual.jpg";

const benefits = [
  {
    icon: FiGlobe,
    title: "Accessibility",
    text: "Learn from anywhere around the globe — all you need is a laptop and an internet connection.",
  },
  {
    icon: FiSliders,
    title: "Flexibility",
    text: "Live classes plus content, readings, quizzes and projects you can fit around work or school.",
  },
  {
    icon: FiUsers,
    title: "Mentorship",
    text: "1:1 guidance from experienced virtual mentors who help you stay on track.",
  },
  {
    icon: FiMessageSquare,
    title: "Real-time interaction",
    text: "Interact with expert instructors and fellow students in real time — not just pre-recorded videos.",
  },
  {
    icon: FiCompass,
    title: "Cost-effective",
    text: "A shorter, more affordable path into tech, with installment options available.",
  },
];

const steps = [
  {
    title: "Browse courses",
    text: "Explore the catalogue and read each course's description, curriculum and prerequisites. Unsure? Our program manager can help you decide.",
  },
  {
    title: "Sign up & take the assessment",
    text: "Create an account, confirm your email, then take a short assessment to make sure you're a fit for your chosen course.",
  },
  {
    title: "Choose a payment plan",
    text: "Pick a plan and pay. We'll email you confirmation and instructions for accessing your course platform — then you start learning.",
  },
];

const Virtual = () => {
  const plans = pricing.virtual.plans;
  const from = plans.reduce((min, p) =>
    Number(p.price.replace(/[^0-9]/g, "")) < Number(min.price.replace(/[^0-9]/g, ""))
      ? p
      : min
  );

  return (
    <Layout
      title="Virtual classes"
      description="Learn tech skills live online with Grazac Academy. 3-month virtual programs with expert instructors, 1:1 mentorship and accredited certification."
    >
      <section className="gz-hero">
        <div className="gz-container gz-hero__grid">
          <div>
            <p className="gz-eyebrow">Virtual classes · 3 months</p>
            <h1 className="gz-h1">
              Upskill in tech from the comfort of <span className="gz-accent">home</span>.
            </h1>
            <p className="gz-lead">
              Live online classes with highly qualified instructors, ensuring you
              acquire valuable skills and knowledge that transcend borders.
            </p>
            {virtualAnnouncement && (
              <p className="gz-chip" style={{ marginTop: 24 }}>
                <Check /> {virtualAnnouncement}
              </p>
            )}
            <div className="gz-btn-row">
              <Link to={links.apply} className="gz-btn gz-btn--primary gz-btn--lg">
                Apply now <FiArrowRight />
              </Link>
              <a href="#virtual-courses" className="gz-btn gz-btn--ghost gz-btn--lg">
                View virtual courses
              </a>
            </div>
          </div>
          <div className="gz-hero__media">
            <div className="gz-hero__photo">
              <img src={heroImg} alt="A student in a live online class" />
            </div>
            <div className="gz-float gz-float--a">
              <span className="gz-float__icon">
                <FiTag size={20} />
              </span>
              <div>
                <strong>From {from.price}</strong>
                <span>Installments available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container">
          <SectionHeading
            eyebrow="Why virtual"
            title="A world of possibilities for your education"
            lead="Choosing virtual classes with us opens up real benefits you can enjoy."
          />
          <div className="gz-grid gz-grid--3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div className="gz-card" key={title}>
                <span className="gz-icon">
                  <Icon size={22} />
                </span>
                <h3 className="gz-h3">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
            <div className="gz-card" style={{ background: "var(--gz-purple)", borderColor: "var(--gz-purple)", color: "#fff" }}>
              <h3 className="gz-h3">Ready to begin?</h3>
              <p style={{ color: "rgba(255,255,255,.8)", marginBottom: 24 }}>
                Join the next virtual cohort and learn live with experts.
              </p>
              <Link to={links.apply} className="gz-btn gz-btn--yellow">
                Apply now <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gz-section gz-section--dark">
        <div className="gz-container">
          <SectionHeading
            center
            eyebrow="Getting started"
            title="Join a virtual class in 3 easy steps"
          />
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

      <section className="gz-section gz-section--soft" id="virtual-courses">
        <div className="gz-container">
          <SectionHeading
            eyebrow="Virtual tracks"
            title="Courses available online"
            lead="Every course below is taught live by expert instructors."
          />
          <CourseExplorer mode="virtual" />
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container">
          <SectionHeading
            eyebrow="Virtual pricing"
            title="Simple, transparent plans"
            action={
              <Link to="/pricing" className="gz-link">
                Full pricing details <FiArrowRight />
              </Link>
            }
          />
          <div className="gz-pricing">
            {plans.map((p) => {
              const off = percentOff(p.price, p.was);
              return (
                <div className="gz-card" key={p.name}>
                  <p className="gz-muted" style={{ fontWeight: 600 }}>{p.name}</p>
                  <div className="gz-plan__price" style={{ marginTop: 12 }}>
                    <strong style={{ fontSize: 34 }}>{p.price}</strong>
                    <span className="gz-plan__was">{p.was}</span>
                  </div>
                  {off && (
                    <span className="gz-badge gz-badge--green" style={{ marginTop: 12 }}>
                      Save {off}%
                    </span>
                  )}
                  <p style={{ marginTop: 14, fontSize: 15 }}>{p.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand dark title="Learn live, from anywhere." />
    </Layout>
  );
};

export default Virtual;
