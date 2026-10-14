import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiGitPullRequest,
  FiShare2,
  FiUserCheck,
} from "react-icons/fi";
import Layout from "../components/Layout";
import { CtaBand, PeopleGrid, SectionHeading } from "../components/ui";
import { mentorsData } from "../../components/constants";
import { accreditation, contact } from "../data/site";
import cohort from "../img/cohort.jpg";
import trio from "../img/trio.jpg";
import actdLogo from "../../images/footer-bird.png";

const values = [
  { color: "39,234,198", title: "Creativity", body: "We constantly develop ideas that drive innovation. Our community lets us share common interests and ideas." },
  { color: "26,222,235", title: "Quality", body: "We strive to provide value that fulfils and exceeds expectations, with an unwavering focus on your goals." },
  { color: "108,21,250", title: "Passion", body: "Our enthusiasm to deliver the best makes us unique. We uphold the highest standards." },
  { color: "255,113,155", title: "Commitment", body: "We focus on giving the best solutions — solving your problem rather than dwelling on why it happened." },
  { color: "254,125,108", title: "Collaboration", body: "Our success depends on the collective intelligence of our team and the shared vision of our partners." },
  { color: "255,180,67", title: "Teamwork", body: "We do better, together. Our environment fosters progress, effectiveness and speed." },
];

const approach = [
  { icon: FiBookOpen, title: "Instructor-led live classes", text: "Learn with other students in live classes led by experts from the industry." },
  { icon: FiGitPullRequest, title: "Project-based learning", text: "Apply what you learn on real-life projects that sharpen your skills and solve real problems." },
  { icon: FiShare2, title: "Networking", text: "Collaborate and exchange ideas with students who share your interests, and build a community." },
  { icon: FiUserCheck, title: "Mentorship access", text: "Personalised guidance from mentors and thought leaders that increases your visibility to employers." },
];

const About = () => (
  <Layout
    title="About us"
    description="Grazac Academy is a tech academy in Abeokuta, Nigeria, helping people learn in-demand technology skills onsite and virtually."
  >
    <section className="gz-page-hero">
      <div className="gz-container">
        <p className="gz-eyebrow">About Grazac Academy</p>
        <h1 className="gz-h1">The right platform to upskill yourself for the future.</h1>
        <p className="gz-lead">
          We provide the training, mentorship, tools and community to help you
          build a career in technology — whatever your starting point.
        </p>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container gz-split">
        <div className="gz-frame">
          <img src={cohort} alt="A Grazac Academy cohort" loading="lazy" />
        </div>
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="A tech academy built around real outcomes"
          />
          <p className="gz-lead" style={{ marginBottom: 20 }}>
            Grazac Academy, by Grazac Technologies, is based at PROHUB in
            Abeokuta, Ogun State. We help graduates, undergraduates
            and career-switchers learn in-demand technology skills — onsite at
            our campus or virtually from anywhere.
          </p>
          <p className="gz-muted">
            Our programs combine expert instruction, real projects and 1:1
            mentorship, and are accredited by the American Council of Training
            and Development (ACTD).
          </p>
          <div className="gz-btn-row" style={{ marginTop: 28 }}>
            <Link to="/courses" className="gz-btn gz-btn--primary">
              Explore courses <FiArrowRight />
            </Link>
            <Link to="/contact" className="gz-btn gz-btn--secondary">
              Visit our campus
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Our core values"
          title="What we stand for"
          lead="You determine the starting point; we provide the best possible support to help you reach your goals."
        />
        <div className="gz-grid gz-grid--3">
          {values.map((v) => (
            <div className="gz-value" key={v.title} style={{ "--gz-value": v.color }}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container gz-split">
        <div>
          <SectionHeading
            eyebrow="How we teach"
            title="Strategic pathways that fast-track your learning"
          />
          <div className="gz-grid" style={{ gap: 28 }}>
            {approach.map(({ icon: Icon, title, text }) => (
              <div className="gz-feature" key={title}>
                <span className="gz-icon">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gz-frame" style={{ aspectRatio: "4 / 5" }}>
          <img src={trio} alt="Three Grazac students" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--tight">
      <div className="gz-container">
        <div className="gz-band" style={{ gridTemplateColumns: "auto 1fr" }}>
          <img src={actdLogo} alt="ACTD seal" style={{ width: 96, height: 96 }} />
          <div>
            <span className="gz-badge">
              <FiAward size={12} /> Accreditation
            </span>
            <h2 className="gz-h2" style={{ fontSize: 30 }}>{accreditation}</h2>
            <p className="gz-muted">
              Students who complete a program receive a certificate in both
              digital and printed formats.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Mentors"
          title="Learn alongside industry practitioners"
          action={
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="gz-link">
              Book a session <FiArrowRight />
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
