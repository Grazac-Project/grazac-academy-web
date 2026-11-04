import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMessageCircle,
  FiPhone,
  FiAward,
  FiMonitor,
  FiUsers,
} from "react-icons/fi";
import Layout from "../components/Layout";
import CircuitPattern from "../components/CircuitPattern";
import { ApplyLink } from "../components/ApplyChooser";
import {
  Check,
  CourseExplorer,
  CtaBand,
  FaqList,
  LogoMarquee,
  PeopleGrid,
  Reveal,
  Rotator,
  SectionHeading,
  StoryCarousel,
  TestimonialMarquee,
} from "../components/ui";
import { courseHref, courses, coursesByMode } from "../data/courses";
import { virtualHref } from "../components/VirtualCourses";
import useVirtualCourses from "../hooks/useVirtualCourses";
import { allFaqs, faqGroups } from "../data/faqs";
import { stories } from "../data/stories";
import { talentRows } from "../data/talent";
import { testimonials } from "../data/testimonials";
import { contact } from "../data/site";
import { mentorsData } from "../../components/constants";
import hero from "../img/hero.jpg";
import pair from "../img/pair.jpg";
import teamwork from "../img/teamwork.jpg";

const onsite = coursesByMode("onsite");

// Virtual courses come from the backend (TrainerCentral).
const VirtualList = () => {
  const { status, items } = useVirtualCourses({ limit: 6 });
  if (status === "loading") {
    return [0, 1, 2].map((i) => (
      <li key={i} aria-hidden="true">
        <span className="gz-skeleton" style={{ display: "block", height: 18, width: "70%", opacity: 0.35 }} />
      </li>
    ));
  }
  if (!items.length) {
    return (
      <li>
        <Check />
        <Link to="/courses?mode=virtual">See the virtual courses that are open</Link>
      </li>
    );
  }
  return items.map((c) => (
    <li key={c.id}>
      <Check />
      <Link to={virtualHref(c)}>{c.title}</Link>
    </li>
  ));
};

const heroWords = [
  "AI automation",
  "cybersecurity",
  "cloud engineering",
  "data analytics",
  "product design",
  "back-end development",
];

const why = [
  {
    title: "Expert Instructors",
    text: "Our academy is home to a team of industry leading experts who are not just educators but also respected in their respective fields. ",
  },
  {
    title: " Career-Ready Certification",
    text: "Our programs are designed to prepare you for the workforce. You'll receive ACTD certificate that validate your skills",
  },
  {
    title: "Internship After Training",
    text: "You get real workplace experience working with amazing teams on real-life projects to solve related problems while building your portfolio.",
  },
  {
    title: "There are no learning barriers",
    text: "Whether you are a graduate or you are an undergraduate, young or old, and no matter your experience our courses, and community has been designed to make you feel comfortable.",
  },
];

const HomeFaq = () => {
  const [active, setActive] = useState(faqGroups[0].topic);
  const group = faqGroups.find((g) => g.topic === active);
  return (
    <div className="gz-home-faq__list">
      <div className="gz-tabs" role="tablist" aria-label="FAQ topics">
        {faqGroups.map((g) => (
          <button
            key={g.topic}
            type="button"
            role="tab"
            aria-selected={active === g.topic}
            className={`gz-tab${active === g.topic ? " is-active" : ""}`}
            onClick={() => setActive(g.topic)}
          >
            {g.topic}
          </button>
        ))}
      </div>
      <FaqList key={active} items={group.items.slice(0, 4)} variant="cards" openFirst />
      <Link to="/faq" className="gz-link gz-home-faq__more">
        See all {allFaqs.length} answers <FiArrowRight />
      </Link>
    </div>
  );
};

const Home = () => (
  <Layout description="Learn AI automation, cybersecurity, cloud, data, software engineering and product design at Grazac Academy. Physical classes in Abeokuta or live online, with mentors from the industry.">
    <section className="gz-hero gz-hero--home">
        <CircuitPattern className="gz-hero__pattern" />
      <div className="gz-container gz-hero__grid">
        <div>
          <Link to={courseHref("ai-automation-bootcamp")} className="gz-pill">
            <span className="gz-badge gz-badge--new">New</span>
            AI Automation Bootcamp is open for applications
            {/* <FiArrowRight /> */}
          </Link>
          <h1 className="gz-h1 gz-hero__title">
            Learn <Rotator words={heroWords} />
            and Upskill for the Future of work
          </h1>
          <p className="gz-lead">
            Learn valuable technology skills with our wide range of courses and
            land your dream job.
          </p>
          <div className="gz-btn-row">
            <ApplyLink className="gz-btn gz-btn--primary gz-btn--lg">
              Apply now <FiArrowRight />
            </ApplyLink>
            <Link to="/courses" className="gz-btn gz-btn--ghost gz-btn--lg">
              See the courses
            </Link>
          </div>
          <p className="gz-hero__note">
            <Check /> Installment plans available. ACTD-accredited certificate.
          </p>
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
              <span>Digital and printed certificate</span>
            </div>
          </div>
          <div className="gz-float gz-float--b">
            <span className="gz-float__icon">
              <FiUsers size={20} />
            </span>
            <div>
              <strong>1:1 mentorship</strong>
              <span>With working engineers and designers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="gz-ticker" aria-hidden="true">
      <div className="gz-ticker__track">
        {[...courses, ...courses].map((c, i) => (
          <span key={`${c.slug}-${i}`}>
            {c.title}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>

    <section className="gz-section">
      <div className="gz-container">
        <Reveal>
          <SectionHeading
            // index="01"
            // eyebrow="Two ways to learn"
            title="On campus or online. Pick what fits your week."
          />
        </Reveal>
        <div className="gz-grid gz-grid--2">
          <Reveal className="gz-mode gz-mode--onsite">
            <span className="gz-badge">
              <FiUsers size={12} /> Physical · 6 months
            </span>
            <h3 className="gz-h3">Onsite Class</h3>
            <p>
              Get real workplace experience. You stand a chance to work with
              amazing teams on real-life projects to solve related problems
              so you can build your portfolio for 6-months.


            </p>
            <ul className="gz-mode__list">
              {onsite.map((c) => (
                <li key={c.slug}>
                  <Check />
                  <Link to={courseHref(c.slug)}>{c.title}</Link>
                  {c.isNew && <span className="gz-badge gz-badge--new">New</span>}
                </li>
              ))}
            </ul>
            <div className="gz-btn-row">
              <Link to="/courses?mode=onsite" className="gz-btn gz-btn--primary">
                Physical courses
              </Link>
              <Link to="/pricing" className="gz-btn gz-btn--secondary">
                Pricing
              </Link>
            </div>
          </Reveal>
          <Reveal className="gz-mode gz-mode--virtual" delay={120}>
            <span className="gz-badge">
              <FiMonitor size={12} /> Virtual · 3 months
            </span>
            <h3 className="gz-h3">Virtual classes </h3>
            <p>
              Virtual classes with an instructor, community and your classmates, plus a
              virtual mentor who checks in with you one to one.
            </p>
            <ul className="gz-mode__list">
              <VirtualList />
            </ul>
            <div className="gz-btn-row">
              <Link to="/virtual" className="gz-btn gz-btn--yellow">
                How virtual classes work
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="gz-section gz-section--soft" id="courses">
      <div className="gz-container">
        <Reveal>
          <SectionHeading
            // index="02"
            // eyebrow="Courses"
            title="Courses built for you around market demand"
            action={
              <Link to="/courses" className="gz-link">
                All courses <FiArrowRight />
              </Link>
            }
          />
        </Reveal>
        <CourseExplorer limit={6} simple />
      </div>
    </section>

    <section className="gz-section gz-section--dark gz-talent">
      <CircuitPattern className="gz-talent__pattern" seed={19} />
      <div className="gz-container gz-talent__head">
        <Reveal>
          {/* <p className="gz-eyebrow">
            <span className="gz-eyebrow__index">03</span>
            Talent in the world
          </p> */}
          <h2 className="gz-h2">
            Our talent works with many of the world&apos;s leading companies.
          </h2>
        </Reveal>
        <Reveal as="p" className="gz-lead" delay={120}>
          Our talent works at fintechs, banks and global tech companies,
          in Nigeria and abroad.
        </Reveal>
      </div>
      <LogoMarquee rows={talentRows} />
    </section>

    <section className="gz-section">
      <div className="gz-container gz-split">
        <div>
          <Reveal>
            <SectionHeading index="04"  title="Why Grazac Academy is the best for you" />
          </Reveal>
          <div className="gz-why">
            {why.map((w, i) => (
              <Reveal className="gz-why__item" key={w.title} delay={i * 80}>
                <span className="gz-why__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="gz-stack" delay={150}>
          <div className="gz-stack__back">
            <img src={teamwork} alt="" loading="lazy" />
          </div>
          <div className="gz-stack__front">
            <img src={pair} alt="Two talent students working through code together" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="gz-section gz-section--soft gz-mentors">
      <div className="gz-container">
        <Reveal>
          <SectionHeading
            center
            title="Get 1-on-1 access to mentors"
            lead="Experienced mentors from companies like Paystack, Sterling Bank and BT Group, ready to guide you from your first class to your final project."
          />
        </Reveal>
        <PeopleGrid people={mentorsData.slice(0, 8)} />
      </div>
    </section>

    <section className="gz-section">
      <div className="gz-container">
        <Reveal className="gz-talent__head">
          <div>
            {/* <p className="gz-eyebrow">Video testimonials</p> */}
            <h2 className="gz-h2">Our talents, in their own words.</h2>
          </div>
          <p className="gz-lead">
            Talents talk about leaving a job to retrain, learning fast and
            getting hired in tech.
          </p>
        </Reveal>
        <StoryCarousel stories={stories} />
      </div>
    </section>

    <section className="gz-section gz-testimonials">
      <CircuitPattern className="gz-testimonials__pattern" seed={23} />
      <div className="gz-container">
        <Reveal className="gz-talent__head">
          <div>
            {/* <p className="gz-eyebrow">Testimonials</p> */}
            <h2 className="gz-h2">What people say about learning with us.</h2>
          </div>
          <p className="gz-lead">
            Students and the people who work with our graduates, in their
            own words.
          </p>
        </Reveal>
      </div>
      <TestimonialMarquee items={testimonials} />
    </section>

    <section className="gz-section">
      <div className="gz-container">
        <Reveal className="gz-band">
          <div>
            {/* <span className="gz-badge">For employers</span> */}
            <h2 className="gz-h2">Hiring? Our talents are ready to interview.</h2>
            <p className="gz-lead">
              Tell us the role and we'll put forward talent who have already
              built something real with a team.
            </p>
            <div className="gz-btn-row" style={{ marginTop: 28 }}>
              <Link to="/hire" className="gz-btn gz-btn--primary gz-btn--lg">
                Hire from Grazac <FiArrowUpRight />
              </Link>
            </div>
          </div>
          <ul className="gz-band__list">
            <li>
              <Check /> Trained on real team projects
            </li>
            <li>
              <Check /> Coached on soft skills and workplace habits
            </li>
            <li>
              <Check /> Remote or on-site
            </li>
            <li>
              <Check /> You interview them directly
            </li>
          </ul>
        </Reveal>
      </div>
    </section>

    <section className="gz-section gz-section--soft">
      <div className="gz-container gz-home-faq">
        <Reveal className="gz-home-faq__intro">
          {/* <p className="gz-eyebrow">
            <span className="gz-eyebrow__index">05</span>
            FAQs
          </p> */}
          <h2 className="gz-h2">Questions people ask before applying</h2>
          <p className="gz-lead">
            Pick a topic to see the answers. There are {allFaqs.length} in
            total on our FAQ page.
          </p>
          <div className="gz-home-faq__help">
            <CircuitPattern className="gz-faq-help__pattern" seed={5} />
            <h3>Still have questions?</h3>
            <p>Talk to our admissions team. WhatsApp is usually the quickest.</p>
            <div className="gz-btn-row">
              <a
                href={contact.whatsappChat}
                target="_blank"
                rel="noopener noreferrer"
                className="gz-btn gz-btn--yellow gz-btn--sm"
              >
                <FiMessageCircle /> WhatsApp us
              </a>
              <a href={contact.phoneHref} className="gz-btn gz-btn--ghost gz-btn--sm">
                <FiPhone /> Call
              </a>
            </div>
          </div>
        </Reveal>
        <HomeFaq />
      </div>
    </section>

    <CtaBand />
  </Layout>
);

export default Home;
