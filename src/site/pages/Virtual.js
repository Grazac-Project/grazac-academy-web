import {
  FiArrowRight,
  FiClock,
  FiGlobe,
  FiLogIn,
  FiMessageSquare,
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

// Virtual courses are sold and taught on Grazac Learn (TrainerCentral).
const steps = [
  {
    when: "Step 1",
    title: "Pick a course",
    text: "Read about each course below. Not sure? Book a call with our program manager.",
  },
  {
    when: "Step 2",
    title: "Enrol on Grazac Learn",
    text: "Click Enrol now to open the course on Grazac Learn, our learning portal. Create your account there and pay if the course has a fee.",
  },
  {
    when: "Step 3",
    title: "Start learning",
    text: "Your lessons, assessments, progress and certificate are all in My Learning on Grazac Learn.",
  },
];

const Virtual = () => {
  return (
    <Layout
      title="Virtual classes"
      description="Online tech courses from Grazac Academy. Browse the virtual courses, enrol on Grazac Learn and learn from anywhere."
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
              <a href="#virtual-courses" className="gz-btn gz-btn--primary gz-btn--lg">
                Browse virtual courses <FiArrowRight />
              </a>
              <a href={links.learn} className="gz-btn gz-btn--ghost gz-btn--lg">
                My Learning
              </a>
            </div>
          </div>
          <div className="gz-hero__media">
            <div className="gz-hero__photo">
              <img src={heroImg} alt="A student taking a live online class" />
            </div>
            <div className="gz-float gz-float--a">
              <span className="gz-float__icon">
                <FiLogIn size={20} />
              </span>
              <div>
                <strong>Learn on Grazac Learn</strong>
                <span>Lessons, progress and certificates</span>
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
            <a href="#virtual-courses" className="gz-btn gz-btn--primary">
              See the courses <FiArrowRight />
            </a>
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

      <CtaBand
        dark
        title="Already enrolled in a virtual course?"
        text="Sign in to Grazac Learn to pick up your lessons, check your progress and download your certificate."
        action={{ href: links.learn, label: "Go to My Learning" }}
      />
    </Layout>
  );
};

export default Virtual;
