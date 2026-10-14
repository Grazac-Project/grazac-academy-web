import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiMonitor,
  FiUnlock,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import {
  Check,
  CourseExplorer,
  CtaBand,
  FaqList,
  LiteVideo,
  PeopleGrid,
  SectionHeading,
} from "../components/ui";
import { courseHref, courses, coursesByMode } from "../data/courses";
import { allFaqs } from "../data/faqs";
import { links } from "../data/site";
import { judgesData, mentorsData } from "../../components/constants";
import hero from "../img/hero.jpg";
import pair from "../img/pair.jpg";
import teamwork from "../img/teamwork.jpg";
import culture from "../img/culture.jpg";
import student from "../img/student.jpg";
import group from "../img/group.jpg";

const why = [
  {
    icon: FiUnlock,
    title: "No learning barriers",
    text: "Graduate or undergraduate, young or old, whatever your experience level — our model, courses and community are designed so you feel comfortable and fully engaged.",
  },
  {
    icon: FiUserCheck,
    title: "Expert instructors",
    text: "Learn from industry practitioners who bring real-world experience and up-to-date knowledge to every lesson.",
  },
  {
    icon: FiBriefcase,
    title: "Real project experience",
    text: "Physical-class students spend 2 months building a real project with a team, so you finish with a portfolio — not just notes.",
  },
  {
    icon: FiAward,
    title: "Career-ready certification",
    text: "Earn an ACTD-accredited certificate that validates your skills, plus placement support like CV reviews and salary negotiation sessions.",
  },
];

const steps = [
  {
    title: "Create an account & apply",
    text: "Sign up, log in to your dashboard and fill in your details. It only takes a few minutes.",
  },
  {
    title: "Take the assessment",
    text: "Complete a short assessment so we can confirm the course is the right fit for you.",
  },
  {
    title: "Choose a plan & start learning",
    text: "Pick a payment plan, complete your admission and begin your journey into tech.",
  },
];

const videos = [
  "ht8l30MozEM",
  "ck-f8UD8RqU",
  "IG5cs69PmBo",
  "l5FVImbxdqw",
  "6_ILohsUndE",
  "M8mStqg17cQ",
];

const onsiteCourses = coursesByMode("onsite");
const virtualCourses = coursesByMode("virtual");

const Home = () => (
  <Layout description="Learn in-demand tech skills onsite in Abeokuta or virtually from anywhere. Software, AI, product, data, cloud and cybersecurity courses with mentorship and accredited certification.">
    {/* Hero */}
    <section className="gz-hero">
      <div className="gz-container gz-hero__grid">
        <div>
          <p className="gz-eyebrow">
            <span className="gz-badge gz-badge--new">New</span>
            AI Automation Bootcamp now enrolling
          </p>
          <h1 className="gz-h1">
            Upskilling you for the <span className="gz-accent">future</span> of
            work.
          </h1>
          <p className="gz-lead">
            Learn valuable technology skills — from AI automation, cloud and
            cybersecurity to software engineering and product — and land your
            dream job. Physical classes in Abeokuta or virtual from anywhere.
          </p>
          <div className="gz-btn-row">
            <Link to={links.apply} className="gz-btn gz-btn--primary gz-btn--lg">
              Apply now <FiArrowRight />
            </Link>
            <Link to="/courses" className="gz-btn gz-btn--ghost gz-btn--lg">
              Explore courses
            </Link>
          </div>
          <ul className="gz-hero__chips">
            <li className="gz-chip">
              <Check /> No prior experience required
            </li>
            <li className="gz-chip">
              <Check /> Flexible payment options
            </li>
            <li className="gz-chip">
              <Check /> Conducive learning environment
            </li>
          </ul>
        </div>
        <div className="gz-hero__media">
          <div className="gz-hero__photo">
            <img src={hero} alt="Grazac Academy students working on laptops" />
          </div>
          <div className="gz-float gz-float--a">
            <span className="gz-float__icon">
              <FiAward size={20} />
            </span>
            <div>
              <strong>ACTD accredited</strong>
              <span>Certification you can share</span>
            </div>
          </div>
          <div className="gz-float gz-float--b">
            <span className="gz-float__icon">
              <FiUsers size={20} />
            </span>
            <div>
              <strong>1:1 mentorship</strong>
              <span>From industry experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Facts */}
    <section className="gz-section gz-section--tight">
      <div className="gz-container">
        <div className="gz-facts">
          <div className="gz-fact">
            <strong>{courses.length} courses</strong>
            <span>{onsiteCourses.length} physical and {virtualCourses.length} virtual</span>
          </div>
          <div className="gz-fact">
            <strong>2 ways to learn</strong>
            <span>Physical classes in Abeokuta or live virtual classes</span>
          </div>
          <div className="gz-fact">
            <strong>6-month onsite</strong>
            <span>4 months training + 2 months on a real project</span>
          </div>
          <div className="gz-fact">
            <strong>ACTD accredited</strong>
            <span>American Council of Training & Development</span>
          </div>
        </div>
      </div>
    </section>

    {/* Learning modes */}
    <section className="gz-section" style={{ paddingTop: 32 }}>
      <div className="gz-container">
        <SectionHeading
          eyebrow="How you'll learn"
          title="Two ways to learn. Same high standard."
          lead="Choose the mode that fits your life. Both include mentorship, job opportunities and accredited certification."
        />
        <div className="gz-grid gz-grid--2">
          <div className="gz-mode gz-mode--onsite">
            <span className="gz-badge">
              <FiUsers size={12} /> Physical · 6 months
            </span>
            <h3 className="gz-h3">Physical classes in Abeokuta</h3>
            <p>
              Immersive, instructor-led classes at our campus with your cohort
              and mentors.
            </p>
            <p className="gz-mode__sub">4 months of training + 2 months on a real project, with free workspace access.</p>
            <ul className="gz-mode__list">
              {onsiteCourses.map((c) => (
                <li key={c.slug}>
                  <Check />
                  <Link to={courseHref(c.slug)}>{c.title}</Link>
                  {c.isNew && <span className="gz-badge gz-badge--new">New</span>}
                </li>
              ))}
            </ul>
            <div className="gz-btn-row">
              <Link to="/courses?mode=onsite" className="gz-btn gz-btn--primary">
                View physical courses
              </Link>
              <Link to="/pricing" className="gz-btn gz-btn--secondary">
                See pricing
              </Link>
            </div>
          </div>
          <div className="gz-mode gz-mode--virtual">
            <span className="gz-badge">
              <FiMonitor size={12} /> Virtual · 3 months
            </span>
            <h3 className="gz-h3">Learn live, from anywhere</h3>
            <p>
              Live online classes with expert instructors and fellow students,
              from anywhere.
            </p>
            <p className="gz-mode__sub">3 months of live classes with 1:1 mentorship from virtual experts.</p>
            <ul className="gz-mode__list">
              {virtualCourses.map((c) => (
                <li key={c.slug}>
                  <Check />
                  <Link to={courseHref(c.slug)}>{c.title}</Link>
                </li>
              ))}
            </ul>
            <div className="gz-btn-row">
              <Link to="/virtual" className="gz-btn gz-btn--yellow">
                Explore virtual classes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Courses */}
    <section className="gz-section gz-section--soft" id="courses">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Available tracks"
          title="Find the course that fits your goals"
          lead="Explore a wide range of tech courses designed to give you the skills to thrive in an ever-evolving industry."
          action={
            <Link to="/courses" className="gz-link">
              View all courses <FiArrowRight />
            </Link>
          }
        />
        <CourseExplorer limit={6} />
        <div className="gz-center" style={{ marginTop: 40 }}>
          <Link to="/courses" className="gz-btn gz-btn--secondary gz-btn--lg">
            See all {courses.length} courses <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>

    {/* Why */}
    <section className="gz-section">
      <div className="gz-container gz-split">
        <div>
          <SectionHeading
            eyebrow="Why Grazac Academy"
            title="Built to get you job-ready, not just certified"
          />
          <div className="gz-grid" style={{ gap: 32 }}>
            {why.map(({ icon: Icon, title, text }) => (
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
          <img src={pair} alt="Two Grazac students collaborating at a laptop" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Admission steps */}
    <section className="gz-section gz-section--dark">
      <div className="gz-container">
        <SectionHeading
          center
          eyebrow="Admission"
          title="How the admission process works"
          lead="Three simple steps from application to your first class."
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
        <div className="gz-center" style={{ marginTop: 48 }}>
          <Link to={links.apply} className="gz-btn gz-btn--yellow gz-btn--lg">
            Start your application <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>

    {/* Mentors */}
    <section className="gz-section">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Mentors"
          title="Get 1-on-1 access to mentors"
          lead="Top-rated practitioners from leading companies, lined up to guide you through a seamless learning process."
        />
        <PeopleGrid people={mentorsData} />
      </div>
    </section>

    {/* Judges */}
    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Judges"
          title="Our judges help us maintain a global standard"
          lead="We work with high-profile talent globally to define what excellence means."
        />
        <PeopleGrid people={judgesData} />
      </div>
    </section>

    {/* Testimonials */}
    <section className="gz-section">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Student stories"
          title="Hear it from our students"
          lead="Students who put in deliberate effort and stayed consistent in applying what they learnt."
        />
        <div className="gz-videos">
          {videos.map((id, i) => (
            <LiteVideo key={id} id={id} title={`Grazac student testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="gz-section gz-section--soft">
      <div className="gz-container">
        <SectionHeading
          eyebrow="Life at Grazac"
          title="Connect, collaborate, create"
        />
        <div className="gz-gallery">
          <figure><img src={group} alt="A Grazac cohort with their laptops" loading="lazy" /></figure>
          <figure><img src={teamwork} alt="Students in front of the teamwork wall" loading="lazy" /></figure>
          <figure><img src={culture} alt="A student relaxing in the Grazac lounge" loading="lazy" /></figure>
          <figure><img src={student} alt="A smiling Grazac student" loading="lazy" /></figure>
          <figure><img src={pair} alt="Students reviewing work together" loading="lazy" /></figure>
        </div>
      </div>
    </section>

    {/* Hire */}
    <section className="gz-section">
      <div className="gz-container">
        <div className="gz-band">
          <div>
            <span className="gz-badge">
              <FiBriefcase size={12} /> For employers
            </span>
            <h2 className="gz-h2">Ready to fill your vacant position?</h2>
            <p className="gz-lead">
              Hire job-ready tech talent with genuine skill sets and good
              workplace ethics — trained on real projects, not just theory.
            </p>
            <div className="gz-btn-row" style={{ marginTop: 28 }}>
              <Link to="/hire" className="gz-btn gz-btn--primary gz-btn--lg">
                Hire our talent <FiArrowRight />
              </Link>
            </div>
          </div>
          <ul className="gz-band__list">
            {[
              "Competent, globally-minded graduates",
              "Strong soft skills and workplace ethics",
              "Practical, project-based experience",
              "No stress sifting through hundreds of applications",
            ].map((t) => (
              <li key={t}>
                <FiCheckCircle size={20} /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="gz-section gz-section--soft">
      <div className="gz-container gz-split" style={{ alignItems: "start" }}>
        <SectionHeading
          eyebrow="FAQs"
          title="Questions, answered"
          lead="Everything you need to know before you apply."
          action={
            <Link to="/faq" className="gz-link">
              View all FAQs <FiArrowRight />
            </Link>
          }
        />
        <FaqList items={allFaqs.slice(0, 5)} />
      </div>
    </section>

    <CtaBand />
  </Layout>
);

export default Home;
