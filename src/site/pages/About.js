import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiGitPullRequest,
  FiShare2,
  FiUserCheck,
} from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { CtaBand, PeopleGrid, Reveal, SectionHeading } from "../components/ui";
import { mentorsData } from "../../components/constants";
import { accreditation, contact } from "../data/site";
import cohort from "../img/cohort.jpg";
import trio from "../img/trio.jpg";
import culture from "../img/culture.jpg";
import actdLogo from "../../images/footer-bird.png";

const values = [
  { color: "39,234,198", title: "Creativity", body: "We keep developing new ideas and share them openly with our community." },
  { color: "26,222,235", title: "Quality", body: "We want you to finish with more than you expected when you signed up." },
  { color: "108,21,250", title: "Passion", body: "We care about doing this well, and we hold ourselves to a high standard." },
  { color: "255,113,155", title: "Commitment", body: "When a student is stuck, we look for a way forward instead of someone to blame." },
  { color: "254,125,108", title: "Collaboration", body: "We rely on what our team knows together, and on partners who share our goals." },
  { color: "255,180,67", title: "Teamwork", body: "We do better together, and we keep the place set up so work moves quickly." },
];

const approach = [
  { icon: FiBookOpen, title: "Instructor-led classes", text: "You learn in a class led by someone who works in the field." },
  { icon: FiGitPullRequest, title: "Projects", text: "You practise on real problems, so your skills get tested before your first job does it for you." },
  { icon: FiShare2, title: "Your cohort", text: "You swap ideas with classmates who are learning the same things, and build a network as you go." },
  { icon: FiUserCheck, title: "Mentors", text: "One-to-one guidance from people already working in the field you want to join." },
];

const About = () => (
  <Layout
    title="About us"
    description="Grazac Academy is a tech Academy. We teach physical and virtual courses."
  >
    <section className="gz-page-hero">
        <CircuitPattern className="gz-hero__pattern" seed={11} />
      <div className="gz-container">
        {/* <p className="gz-eyebrow">About Grazac Academy</p> */}
        <h1 className="gz-h1">
          About Us
        </h1>
        <p className="gz-lead">
          At Grazac Academy, we provide you with the right platform to
          upskill yourself for the future.
        </p>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container gz-split">
        <Reveal className="gz-stack">
          <div className="gz-stack__back">
            <img src={culture} alt="" loading="lazy" />
          </div>
          <div className="gz-stack__front">
            <img src={cohort} alt="A Grazac Academy cohort with their laptops" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          {/* <SectionHeading title="Grazac Academy, by Grazac Technologies" /> */}
          <p className="gz-lead" style={{ marginBottom: 20 }}>
            You decide where you're starting from. We give you the classes,
            the mentors, a workspace and a cohort to learn alongside.
          </p>
          <p className="gz-muted">
            Physical courses run for six months at our campus. Virtual courses
            run for three months online. Our programs are accredited by the
            American Council of Training and Development (ACTD).
          </p>
          <div className="gz-btn-row" style={{ marginTop: 28 }}>
            <Link to="/courses" className="gz-btn gz-btn--primary">
              Our courses <FiArrowRight />
            </Link>
            <Link to="/contact" className="gz-btn gz-btn--secondary">
              Visit the campus
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <Reveal>
          <SectionHeading  eyebrow="Core values" title="What we hold ourselves to" />
        </Reveal>
        <div className="gz-grid gz-grid--3">
          {values.map((v, i) => (
            <Reveal className="gz-value" key={v.title} style={{ "--gz-value": v.color }} delay={i * 60}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container gz-split">
        <div>
          <Reveal>
            <SectionHeading   title="How a Grazac course is put together" />
          </Reveal>
          <div className="gz-perks">
            {approach.map(({ icon: Icon, title, text }, i) => (
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
        <Reveal className="gz-frame" style={{ aspectRatio: "4 / 5" }} delay={120}>
          <img src={trio} alt="Three Grazac students on a sofa" loading="lazy" />
        </Reveal>
      </div>
    </section>

    <section className="gz-section gz-section--tight">
      <div className="gz-container">
        <Reveal className="gz-band" style={{ gridTemplateColumns: "auto 1fr" }}>
          <img src={actdLogo} alt="ACTD seal" style={{ width: 96, height: 96 }} />
          <div>
            <span className="gz-badge"></span>
            <h2 className="gz-h2" style={{ fontSize: 30 }}>{accreditation}</h2>
            <p className="gz-muted">
              Everyone who completes a course gets a certificate, both printed
              and digital.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Mentors"
          title="Some of the mentors you'll learn from"
          action={
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="gz-link">
              Book a call <FiArrowRight />
            </a>
          }
        />
        <PeopleGrid people={mentorsData.slice(0, 4)} />
      </div>
    </section>

    <CtaBand />
  </Layout>
);

export default About;
