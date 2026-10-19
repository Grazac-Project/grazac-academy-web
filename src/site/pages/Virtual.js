import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiGlobe,
  FiMessageSquare,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import {
  Check,
  CourseExplorer,
  CtaBand,
  Reveal,
  SectionHeading,
} from "../components/ui";
import { percentOff, pricing } from "../data/pricing";
import { links, virtualAnnouncement } from "../data/site";
import heroImg from "../img/virtual.jpg";

const perks = [
  {
    icon: FiGlobe,
    title: "Join from anywhere",
    text: "A laptop and a stable internet connection are all you need.",
  },
  {
    icon: FiMessageSquare,
    title: "Classes are live",
    text: "You can ask the instructor a question and get an answer in the same session.",
  },
  {
    icon: FiUsers,
    title: "A mentor of your own",
    text: "A virtual mentor meets with you one to one and keeps you on track.",
  },
  {
    icon: FiClock,
    title: "Three months, start to finish",
    text: "Live sessions plus readings, quizzes and projects you can fit around work or school.",
  },
];

const steps = [
  {
    when: "Step 1",
    title: "Pick a course",
    text: "Read the outline for each course. Not sure? Book a call with our program manager.",
  },
  {
    when: "Step 2",
    title: "Sign up and take the assessment",
    text: "Create an account, confirm your email, then take a short test so we know the course suits you.",
  },
  {
    when: "Step 3",
    title: "Choose how to pay",
    text: "Pay at once or in installments. We'll email you your login for the class platform.",
  },
];

const Virtual = () => {
  const plans = pricing.virtual.plans;
  const cheapest = plans.reduce((min, p) =>
    Number(p.price.replace(/[^0-9]/g, "")) < Number(min.price.replace(/[^0-9]/g, ""))
      ? p
      : min
  );

  return (
    <Layout
      title="Virtual classes"
      description="Three-month live online courses from Grazac Academy in back-end, front-end and mobile development, product management and product design."
    >
      <section className="gz-hero">
        <CircuitPattern className="gz-hero__pattern" />
        <div className="gz-container gz-hero__grid">
          <div>
            <p className="gz-live">
              <span className="gz-live__dot" aria-hidden="true" /> Live online classes
            </p>
            <h1 className="gz-h1">
              Learn tech from <span className="gz-accent">home</span>, with a real
              teacher on the call.
            </h1>
            <p className="gz-lead">
              Our virtual courses run for three months. You attend live classes,
              work on projects and meet your mentor online, wherever you are.
            </p>
            {virtualAnnouncement && (
              <p className="gz-hero__note">
                <Check /> {virtualAnnouncement}
              </p>
            )}
            <div className="gz-btn-row">
              <Link to={links.apply} className="gz-btn gz-btn--primary gz-btn--lg">
                Apply now <FiArrowRight />
              </Link>
              <a href="#virtual-courses" className="gz-btn gz-btn--ghost gz-btn--lg">
                Virtual courses
              </a>
            </div>
          </div>
          <div className="gz-hero__media">
            <div className="gz-hero__photo">
              <img src={heroImg} alt="A student taking a live online class" />
            </div>
            <div className="gz-float gz-float--a">
              <span className="gz-float__icon">
                <FiTag size={20} />
              </span>
              <div>
                <strong>From {cheapest.price}</strong>
                <span>Installments available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container gz-split" style={{ alignItems: "start" }}>
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="How it works"
              title="Everything happens online, including time with your mentor"
            />
            <Link to={links.apply} className="gz-btn gz-btn--primary">
              Apply for the next cohort <FiArrowRight />
            </Link>
          </Reveal>
          <div className="gz-perks">
            {perks.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="gz-perk" key={title} delay={i * 80}>
                <span className="gz-icon">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gz-section gz-section--dark gz-section--grain">
        <div className="gz-container">
          <Reveal>
            <SectionHeading index="02" eyebrow="Getting in" title="Three steps to your first class" />
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

      <section className="gz-section gz-section--soft" id="virtual-courses">
        <div className="gz-container">
          <Reveal>
            <SectionHeading index="03" eyebrow="Courses" title="What you can study online" />
          </Reveal>
          <CourseExplorer mode="virtual" />
        </div>
      </section>

      <section className="gz-section">
        <div className="gz-container">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="Fees"
              title="What it costs"
              action={
                <Link to="/pricing" className="gz-link">
                  Full pricing <FiArrowRight />
                </Link>
              }
            />
          </Reveal>
          <div className="gz-pricing">
            {plans.map((p, i) => {
              const off = percentOff(p.price, p.was);
              return (
                <Reveal className="gz-card" key={p.name} delay={i * 80}>
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand dark title="Study from home, with people keeping an eye on your progress" />
    </Layout>
  );
};

export default Virtual;
