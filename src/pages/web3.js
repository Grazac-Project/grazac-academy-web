import React, { useState } from "react";
import Hero from "../images/web3/hero.png";
import fred from "../images/web3/fred.png";
import Avatar from "../images/web3/avatar.png";
import bgmap from "../images/web3/bg-map.png";
import Footer from "../components/Footer";
import { Accordion, Card, Pagination } from "react-bootstrap";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { outline } from "../content/web3";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./web3-application/Navbar";


const Web3 = () => {
  const splideRef = useRef(null);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  useEffect(() => {
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "1rem",
        pagination: false,
        arrows: false,
        autoWidth: true,
        autoScroll: {
          speed: 1, // Adjust scrolling speed
        },
      }).mount({ AutoScroll });
    }
  }, []);

  const handleFaq = (e) => {
    let svg = e.target.parentElement.querySelector("svg");
    if (e.target.nodeName === "path") {
      svg = e.target.parentElement.parentElement.querySelector("svg");
    }
    svg.classList.toggle("faq-icon_transition");
  };

  return (
    <div className="w-[1440px] laptop:w-[100%] m-auto">
      <Navbar />
      {/* hero */}
      <section className="flex justify-center items-center md:block pt-3 mx-auto laptop:w-[90%] ">
        <div className="w-[569px] md:w-[90%] ">
          <h1 className=" text-[72px] sm:text-[48px]  leading-22 font-bold text-heading mb-2">
            Discover your path to <span className="text-primary"> Web3 </span>
          </h1>
          <p className="w-[502px] md:w-auto text-text text-[18px] leading-[24.85px] mb-8">
            Join Grazac Academy's comprehensive Web3 program to master
            blockchain, smart contracts, DeFi, and more.
          </p>
          <Link to="/start">
            <button className="bg-primary w-[50%] sm:w-[225px] py-[19px] text-[18px] rounded-lg font-bold ">
              Enroll Now
            </button>
          </Link>
        </div>
        <div className="inline-block animate-spin ">
          <img src={Hero} alt="hero" />
        </div>
      </section>
      <section
        className={`py-20  mx-auto  bg-no-repeat bg-center bg-fixed`}
        style={{ backgroundImage: `url(${bgmap})` }}
      >
        <h2 className=" text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          Our impact shows in the numbers.
        </h2>
        <p className="w-auto text-text text-[18px] text-center leading-[24.85px] mb-8">
          Empowering the next generation through cutting-edge web3 education
        </p>
        <div className="flex items-center justify-between w-[832px] h-[124px] xm:h-full rounded-lg bg-[#F8F5FD] lg:w-auto xm:block mx-auto px-[69px] py-6 ">
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2 ">
              50+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Projects built
            </p>
          </div>
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2 ">
              5k+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Trained in web 2
            </p>
          </div>
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2 ">
              200+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Hiring partners
            </p>
          </div>
        </div>
      </section>
      <section className="py-[90px] mx-auto">
        <h2 className=" text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          Our Web-3 Cohort- Blockchain with Solidity
        </h2>
        <p className="w-[867px] mx-auto lg:w-auto text-text text-[18px] text-center leading-[24.85px] mb-[56px]">
          In 6 months, acquire all the skills you need to launch your Blockchain
          Development career with our comprehensive, hands-on training program
          that focuses on real-world, practical experience.
        </p>

        <div className="w-[95%] ml-auto">
          <div className="splide" ref={splideRef}>
            <div className="splide__track">
              <ul className="splide__list">
                {outline.map((item) => (
                  <li
                    key={item.id}
                    className="splide__slide w-[220px] h-[310px] bg-[#F8F5FD] rounded-lg flex flex-col items-center px-2"
                  >
                    <img src={item.image} alt={item.topic} />
                    <h5 className="text-[16px] leading-[24px] text-center font-bold text-heading mb-2">
                      {item.topic}
                    </h5>
                    <p className="mx-auto lg:w-auto text-text text-[16px] text-center leading-[22px] mb-8">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
          <Link to="/start">
            <button className="bg-primary w-[225px]  py-[19px] text-[18px] rounded-lg font-bold mt-[56px]">
              Enroll Now
            </button>
          </Link>
          </div>
        </div>
      </section>
      <section className="py-[80px]  md:w-[100%] bg-[#F8F5FD]">
        <div className="w-[264px] md:w-[90%] text-[16px] leading-[24px] text-center text-primary bg-[#E8D4FF]  mx-auto rounded-3xl font-bold mb-4">
          What makes us unique?
        </div>
        <h2 className="w-[495px] sm:w-[90%] mx-auto text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          We are shaping the future of Web3 innovation.
        </h2>
        <p className=" mx-auto lg:w-[90%] text-text text-[18px] text-center leading-[24.85px] mb-[56px]">
          We've spent years building the best web3 education platform to
          maximize your learning.
        </p>

        <div className="flex justify-center items-center md:block ">
          <div className="pl-[55px] md:pl-0 md:w-[90%]  mx-auto">
            <div
              className={`w-[696px] md:w-auto px-6 py-10 bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
                isHovered1 ? "text-white" : "text-heading"
              }`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <h5
                className={`text-[16px] leading-[24px] font-bold mb-4 ${
                  isHovered1 ? "text-white" : "text-heading"
                }`}
              >
                There are no learning barriers
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered1 ? "text-white" : "text-text"
                }`}
              >
                Start your tech career with us—our inclusive model, courses, and
                community cater to all, ensuring learners of any background and
                experience level feel comfortable and engaged.
              </p>
            </div>
            <div
              className={`w-[696px] md:w-auto px-6 py-10 bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
                isHovered2 ? "text-white" : "text-heading"
              }`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <h5
                className={`text-[16px] leading-[24px] font-bold mb-4 ${
                  isHovered2 ? "text-white" : "text-heading"
                }`}
              >
                There are no learning barriers
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered2 ? "text-white" : "text-text"
                }`}
              >
                Start your tech career with us—our inclusive model, courses, and
                community cater to all, ensuring learners of any background and
                experience level feel comfortable and engaged.
              </p>
            </div>
            <div
              className={`w-[696px] md:w-auto px-6 py-10 bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
                isHovered3 ? "text-white" : "text-heading"
              }`}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <h5
                className={`text-[16px] leading-[24px] font-bold mb-4 ${
                  isHovered3 ? "text-white" : "text-heading"
                }`}
              >
                There are no learning barriers
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered3 ? "text-white" : "text-text"
                }`}
              >
                Start your tech career with us—our inclusive model, courses, and
                community cater to all, ensuring learners of any background and
                experience level feel comfortable and engaged.
              </p>
            </div>
            <div
              className={`w-[696px] md:w-auto px-6 py-10 bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
                isHovered4 ? "text-white" : "text-heading"
              }`}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <h5
                className={`text-[16px] leading-[24px] font-bold mb-4 ${
                  isHovered4 ? "text-white" : "text-heading"
                }`}
              >
                There are no learning barriers
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered4 ? "text-white" : "text-text"
                }`}
              >
                Start your tech career with us—our inclusive model, courses, and
                community cater to all, ensuring learners of any background and
                experience level feel comfortable and engaged.
              </p>
            </div>
            <Link to="/start">
              <button className="bg-primary w-[225px] py-[19px] text-[18px] rounded-lg font-bold ">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="xl:w-auto">
            <img src={fred} alt="innovation" />
          </div>
        </div>
      </section>
      <section className="py-20 w-[90%] mx-auto">
        <h2 className="w-[478px] sm:w-auto mx-auto text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          How the Admission Process Works
        </h2>
        <p className=" mx-auto lg:w-auto text-text text-[18px] text-center leading-[24.85px] mb-[56px]">
          Understand our admission process in 3 easy steps
        </p>
        <div className="flex justify-center gap-8 items-center md:block  ">
          <img src={Avatar} alt="block" className="md:mb-8" />
          <div className="">
            <div className="flex gap-[30px] mb-[64px]">
              <span className="text-[#9DA8B6] text-[16px]  leading-[22px]">
                01
              </span>
              <div>
                <h5 className="text-[16px] leading-[24px] text-heading  font-bold  mb-4">
                  Fill and submit the application form
                </h5>
                <p className="mx-auto lg:w-auto text-text  text-[16px]  leading-[22px] ">
                  Create an account to start your application. Login to your
                  dashboard and fill in your correct details.
                </p>
              </div>
            </div>
            <div className="flex gap-[30px] mb-[64px]">
              <span className="text-[#9DA8B6] text-[16px]  leading-[22px]">
                02
              </span>
              <div>
                <h5 className="text-[16px] leading-[24px] text-heading  font-bold mb-4">
                  Pass the assessment tests
                </h5>
                <p className="mx-auto lg:w-auto text-text  text-[16px]  leading-[22px] ">
                  If your application is successful, you will be contacted via
                  mail to take a physical assessment test to ensure your
                  commitment meets our standard.
                </p>
              </div>
            </div>
            <div className="flex gap-[30px] mb-[64px]">
              <span className="text-[#9DA8B6] text-[16px]  leading-[22px]">
                03
              </span>
              <div>
                <h5 className="text-[16px] leading-[24px] text-heading  font-bold mb-4">
                  Complete the process and begin your journey into Tech
                </h5>
                <p className="mx-auto lg:w-auto text-text  text-[16px]  leading-[22px] ">
                  Once you pass the assessment test, you are eligible for
                  admission. You will receive a mail on how to complete your
                  admission process.
                </p>
              </div>
            </div>
            <Link to="/start">
              <button className="bg-primary w-[225px] py-[19px] text-[18px] rounded-lg font-bold ml-6 ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-[90%] py-20 mx-auto">
        <h2 className="w-auto mx-auto text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-14">
          FAQs
        </h2>
        {/* FAQ section */}
        <div className="landing_faq">
          <div className="container">
            <div>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4>Do I have to be physically present to register?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>No, registration is to be done online.</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4>Do I qualify to enrol as an Undergraduate?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes,please. However, as an undergraduate, you are
                          strongly advised to choose our virtual learning mode
                          due to its flexibility.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4>Are classes virtual or onsite?</h4>

                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Classes would be onsite or virtually, depending on the
                          mode of learning you prefer.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />

                <Card>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4> What is the duration of the program?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          The program is for a duration of 12 months, consisting
                          of 6 months immersive training and 6 months
                          internship.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4>Do I qualify to enrol as an Undergraduate?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes,please. However, as an undergraduate, you are
                          strongly advised to choose our virtual learning mode
                          due to its flexibility.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4>
                          Do you offer any certification after the course?
                        </h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes, students who complete our courses will receive a
                          virtual and hardcopy certificate of completion
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
              </Accordion>
              {/* <hr /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Web3;
