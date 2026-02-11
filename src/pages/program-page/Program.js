import React, { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Accordion, Card } from "react-bootstrap";

// Images
import benefit from "../../images/program/benefit.png";
import Grazac from "../../images/svg/logo-round.svg";
import woman from "../../images/program/woman.png";
import people from "../../images/program/people.png"

// Tracks Images
import frontend from "../../images/frontend.png";
import backend from "../../images/backend.png";
import cybersecurity from "../../images/cybersecurity.png";
import data_analysis from "../../images/analysis.png";

// Icons
import why1 from "../../images/program/hand-on.png";
import why2 from "../../images/program/expert.png";
import why3 from "../../images/program/mentor-1.png";
import why4 from "../../images/program/global.png";


const Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFaq = (e) => {
    let svg = e.target.parentElement.querySelector("svg");
    if (e.target.nodeName === "path") {
      svg = e.target.parentElement.parentElement.querySelector("svg");
    }
    svg.classList.toggle("faq-icon_transition");
  };

  return (
    <div className="min-h-screen font-rajdhani">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-[#F8FAFD] sm:pt-[32px]">
        <div className="mx-auto text-center">
          <h1 className="!text-[56px] sm:text-[24px] sm:w-[100%] font-bold text-[#073041] leading-tight mb-6">
            Learn during your <br className="hidden sm:block" /> <span className="text-[#773DD3]">internship</span> at <br className="lg:block sm:hidden" />
            Grazac Academy
          </h1>
          <p className="!text-[18px] text-[#787676] font-medium max-w-[578px] sm:w-[100%] mx-auto leading-relaxed mb-12">
            Learn in-demand tech skills, gain practical experience and enjoy up to 60%
            internship discount while building skills that prepares you for real world
            opportunities after school.
          </p>
          <Link to="/InternshipForm">
            <button className="bg-[#773DD3] text-white px-10 py-4 rounded-lg font-bold !text-[18px] hover:shadow-2xl hover:scale-105 transition-all w-[172px] sm:w-[132px]">
              Apply Now
            </button>
          </Link>
        </div>
      </section>

      {/* Photo Gallery - 7 Images Masonry */}
      <section className="py-24 max-w-[1200px] px-[80px] mx-auto sm:w-[100%] sm:px-[16px]">
        <img src={people} alt="" />

      </section>

      {/* Why Grazac Academy */}
      <section className="py-24 bg-[#FAFBFF]">
        <div className=" mx-auto px-4 md:px-10">
          <h2 className="!text-[40px] font-bold text-[#333333] text-center mb-[50px] sm:text-[24px]">
            Why Grazac Academy is the <br /> best for you
          </h2>
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[29px] md:gap-[16px] sm:grid-cols-1">
            {[
              {
                icon: why1,
                title: "Hands on industry focused training",
                desc: "Get personalized support from experienced mentors who will guide you through your learning process and also ensure you make steady progress while building confidence in your skills.",
              },
              {
                icon: why2,
                title: "Expert Instructors",
                desc: "Our tech academy is home to a team of industry-leading experts who are not just educators, but also practitioners in their respective fields. They bring real-world experience, insights, and up-to-date knowledge to every lesson, ensuring you receive the highest quality education.",
              },
              {
                icon: why3,
                title: "1:1 Mentorship",
                desc: "Get personalized support from experienced mentors who will guide you through your learning process and also ensure you make steady progress while building confidence in your skills.",
              },
              {
                icon: why4,
                title: "Globally recognized certificate",
                desc: "Grazac Academy is ACTD accredited, and upon completion of your program, you will receive a globally recognized certificate that can strengthen your CV and support your applications for jobs, and career opportunities, locally and internationally.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F6FA] px-[24px] pt-[49px] h-[300px] rounded-[24px] shadow-sm border border-[#EAEAEA] hover:shadow-lg hover:-translate-y-1 transition-all md:pt-[20px] sm:px-[16px] sm:pt-[24px]"
              >
                <div className="w-20 h-20 flex items-center justify-start mb-6">
                  <img src={item.icon} className="w-16 h-16 object-contain" alt={item.title} />
                </div>
                <h3 className="!text-[24px] font-bold text-[#073041] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#787676] font-medium !text-[16px] sm:text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tracks */}
      <section className="py-[80px] max-w-[1200px] mx-auto">
        <div className="mx-auto px-[80px] md:px-[40px] xm:px-[16px]">
          <div className="text-center mb-[32px] w-[655px] xm:w-[100%] mx-auto">
            <h2 className="!text-[40px] font-bold text-[#073041] mb-2 xm:text-[24px]">Available Tracks</h2>
            <p className="text-[#787676] !text-[16px] font-medium xm:text-[14px]">
              Explore a wide range of tech courses designed to empower you with the skills
              and knowledge you need to thrive in the ever-evolving tech industry.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 xm:grid-cols-1 md:grid-cols-2">
            {[
              { title: "Frontend Development", img: frontend, desc: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS, and JavaScript for a website or Web Application so that a user can see and interact with them directly. " },
              { title: "Mobile Development", img: backend, desc: "Flutter is an incredible user interface (UI) toolkit that allows you to build apps for iOS, Android, and even the web & desktop platforms like macOS, Windows, and Linux; all from a single codebase. you'll have the flexibility to build apps for various platforms, from mobile devices to the web and desktop." },
              { title: "Backend Development", img: backend, desc: "Node.js is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds, and web push notifications." },
              { title: "Cybersecurity", img: cybersecurity, desc: "Protect systems and networks from digital attacks." },
              { title: "Machine learning with Python", img: data_analysis, desc: "Machine Learning with Python is a comprehensive journey that equips you with the skills and knowledge needed to build, evaluate, and deploy machine learning models for various applications" },
            ].map((track, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-4 rounded-[10px] hover:shadow-md">
                <div className="h-[182px] rounded-2xl overflow-hidden mb-4">
                  <img src={track.img} className="w-full h-full object-cover" alt={track.title} />
                </div>
                <h4 className="!text-[18px] font-bold text-[#073041] mb-4">{track.title}</h4>
                <p className="text-[#787676] !text-[14px] leading-relaxed mb-6">{track.desc}</p>
                <Link to="/signup" className="text-[#773DD3] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-[32px]">
            <Link to="/InternshipForm">
              <button className="bg-[#773DD3] text-white px-12 w-[252px] py-4 rounded-xl font-bold !text-[18px] hover:shadow-2xl">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Offer */}
      <section className="bg-[#773DD3]">
        <div className="flex items-stretch xm:flex-col overflow-hidden">
          <div className="text-white w-1/2 xm:w-full flex flex-col items-center md:items-start py-[71.62px] c:py-[40px] pl-[80px] lgx:pl-[40px] md:pl-[20px] xm:px-4 pr-10 xm:mb-[32px] xm:pb-0">
            <h3 className="!text-[40px] text-center font-bold mb-10 lgx:text-[30px] c:text-[20px] xm:text-[22.51px] xm:mx-auto">Pricing Plan and Duration</h3>
            <p className="text-center text-[16px] font-medium mb-[50px] xm:text-[9.01px] xm:mx-auto">One Program. Full Internship Experience </p>
            <div className="bg-[#00000033] backdrop-blur-md border border-white/20 pt-[40px] px-[80px] rounded-[24px] h-[416.76px] w-[500px] lgx:w-[400px] c:px-[30px] c:w-full c:max-w-[350px] c:h-auto c:pb-8 mx-auto md:mx-0 xm:rounded-[13.51px] xm:w-[100%] xm:px-[45.03px]">
              <p className="bg-[#E7A300] px-[4.25px] text-center py-[6.88px] rounded-[19.38px] w-[161.5px] text-[19.3px] font-bold mb-2 xm:text-[14.74px] xm:w-[122.82px] xm:mb-[18.01px]">
                6 Months
              </p>
              <h2 className="!text-[80px] font-bold mb-2 c:text-[40px] lgx:text-[50px] lgx-mb-4 xm:text-[45.03px]">₦301,000</h2>
              <ul className="list-disc pl-5">
                {[
                  "Access to mentorship",
                  "Globally recognized certificate",
                  "Access to immersive training",
                  "Free workspace",
                  "Access to free webinars for your career growth and positioning",
                  "Certification",
                ].map((item, i) => (
                  <li key={i} className="text-[14.92px] pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2 sm:w-full overflow-hidden">
            <img src={benefit} className="w-full h-full object-cover" alt="Student smiling" />
          </div>
        </div>
      </section>

      <section>
        <div
          className="landing__bottom"
          id="landing__bottom"
          style={{ paddingBottom: 0 }}
        >
          <div className="flex items-center justify-between xm:flex-col">
            <div className=" w-[522px] xm:w-full xm:text-center">
              <h1 className="!text-[36px] text-[#073041] font-bold mb-4">
                Our Alumni work in several startups and unicorns globally
              </h1>
              <p className="text-[16px] text-[#787676] mb-[30px]">
                We guarantee you impact driven candidates who will impact your bottom lines positively.
              </p>
              <div className="xm:hidden md:block">
                <Link to="/hire">
                  <div
                  >
                    <a className="w-[185px] bg-[#773DD3] text-white px-12 py-4 rounded-[3px] font-bold !text-[18px] hover:shadow-2xl">Hire our grads</a>
                  </div>
                </Link>
              </div>
            </div>

            <div className="landing__bottom--text--left">
              <img src={Grazac} alt="img" />
            </div>

            <div className="md:hidden xm:block mt-[28px]">
              <Link to="/hire">
                <div
                >
                  <a className="w-[185px] bg-[#773DD3] text-white px-12 py-4 rounded-[3px] font-bold !text-[18px] hover:shadow-2xl">Hire our grads</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="landing_faq">
          <div className="container">
            <h1>FAQs</h1>
            <div style={{ width: "90%", margin: "auto" }}>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
                        <h4>What is the duration of the program?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Our courses vary in duration, ranging from 6 months
                          for the on-site class and 3 months for the virtual
                          class.
                        </p>
                        <p>
                          Please check the specific course page for detailed
                          information.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
                        <h4>
                          What is the level of experience required for
                          enrollment?
                        </h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Our courses cater to individuals with varying levels
                          of experience, from beginners to advanced learners.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
                        <h4> What is your application process like?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          The Grazac application process is a two-step online
                          process <br /> First, Applicants would be required to
                          create an account. Once this has been created,
                          applicants will be directed to our online application
                          platform to complete the application process, which
                          takes a few minutes to complete, including an
                          assessment test.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
                        <h4>
                          What payment options do you offer, and can I pay in
                          installments?
                        </h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          You can pay upfront or choose our installment payment
                          plan, which allows you to split the course fee into
                          manageable monthly payments. <br /> Please contact our
                          admission team to learn more about our payment options
                          and to discuss a plan that works best for you.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Link to="/faq" className="link-view" style={{ textAlign: "center" }}>
                  <h5>View All</h5>
                </Link>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-24 ml-[80px] lgx:ml-[40px] md:ml-[20px] xm:ml-0 "
        style={{ background: "linear-gradient(to bottom, transparent 90px, #FEF4BF66 90px)" }}
      >
        <div className="flex items-stretch overflow-hidden xm:px-[20px] xm:py-[40px]">
          <div className="w-1/2 sm:w-full md:mt-[-120px] overflow-hidden xm:hidden md:block ">
            <img
              src={woman}
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-[78px] w-1/2 sm:w-full flex flex-col items-center md:items-start pr-[80px] lgx:pr-[40px] md:pr-[20px] sm:px-4 pl-10">
            <h3 className="!text-[32px] md:text-[20px] font-bold text-[#000000] mb-2 leading-tight pt-[78px] text-center md:text-left xm:text-center sm:mx-auto xm:text-[24px]">
              Want to build a career in <br className="hidden lg:block xm:hidden" /> tech?
            </h3>
            <p className="text-[#787676] !text-[16px] md:text-[14px] leading-[1.8] mb-[40px] max-w-[408px] text-center md:text-left xm:text-center xm:text-[16px]">
              Interested in building a career in tech? Grazac Academy is the right
              solution for you. Learn valuable skills with us and pay no
              tuition until you are hired.
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start gap-4">
              <Link
                to="/InternshipForm"
                className="bg-[#773DD3] text-white px-[40px] py-[15px] rounded-[5px] font-bold !text-[18px] hover:shadow-xl transition-all min-w-[138px] text-center md:w-[100px] md:text-[16px] md:px-[20px]"
              >
                Apply Now
              </Link>
              <a
                href="https://wa.me/2348068365951"
                className="bg-white border-2 border-[#773DD3] text-[#773DD3] px-[40px] py-[13px] rounded-[5px] font-bold !text-[18px] hover:bg-[#773DD3] hover:text-white transition-all min-w-[138px] text-center md:w-[100px] md:text-[16px] md:px-[20px]"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Program;