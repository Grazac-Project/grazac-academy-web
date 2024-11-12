import React, { useState } from "react";
import Hero from "../../images/web3/hero.png";
import fred from "../../images/web3/fred.png";
import Avatar from "../../images/web3/avatar.png";
import bgmap from "../../images/web3/bg-map.png";
import logo1 from "../../images/web3/logo1.png";
import logo2 from "../../images/web3/logo2.png";
import logo3 from "../../images/web3/logo3.png";
import logo4 from "../../images/web3/logo4.png";
import logo5 from "../../images/web3/logo5.png";
import logo6 from "../../images/web3/logo6.png";

import Footer from "../../components/Footer";
import { Accordion, Card, Pagination } from "react-bootstrap";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { outline } from "../../content/web3";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
// import '../../tailwindComponents.css';
import "tailwindcss/tailwind.css"; // Import Tailwind CSS only in this component

const Web3 = () => {
  const splideRef = useRef(null);
  const splideRef2 = useRef(null);

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
  useEffect(() => {
    if (splideRef2.current) {
      new Splide(splideRef2.current, {
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "20rem",
        pagination: false,
        arrows: false,
        autoWidth: true,
        autoScroll: {
          speed: 0.5, // Adjust scrolling speed
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
          <h1 className=" text-[60px] sm:text-[48px]  leading-[72px] font-bold text-heading mb-2">
            Become a <span className="text-primary"> Web3 </span>developer in 6
            months
          </h1>
          <p className="w-[502px] md:w-auto text-text text-[18px] leading-[24.85px] mb-8">
            Kickstart your career as a blockchain developer through our 6 months
            of hands-on boot camp.
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

      <div
        className="splide h-[130px] bg-[#D1C1FF] flex justify-center items-center my-6"
        ref={splideRef2}
      >
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide ">
              <img src={logo1} alt="logo1" className="h-[57px] " />
            </li>{" "}
            <li className="splide__slide ">
              <img src={logo2} alt="logo1" className="h-[57px] " />
            </li>{" "}
            <li className="splide__slide ">
              <img src={logo3} alt="logo1" className="h-[57px] " />
            </li>{" "}
            <li className="splide__slide ">
              <img src={logo4} alt="logo1" className="h-[57px] " />
            </li>
            <li className="splide__slide ">
              <img src={logo5} alt="logo1" className="h-[57px] " />
            </li>
            <li className="splide__slide ">
              <img src={logo6} alt="logo1" className="h-[57px] " />
            </li>
          </ul>
        </div>
      </div>

      <section
        className={`py-20  mx-auto  bg-no-repeat bg-center bg-fixed`}
        style={{ backgroundImage: `url(${bgmap})` }}
      >
        <h2 className=" text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          Learn together, grow together
        </h2>
        <p className="w-auto text-text text-[18px] text-center leading-[24.85px] mb-8">
          In 4 years, we have built an exceptional track record
        </p>
        <div className="flex items-center justify-between w-[832px] h-[124px] xm:h-full rounded-lg bg-[#F8F5FD] lg:w-auto xm:block mx-auto px-[69px] py-6 ">
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-primary mb-2 ">
              1190+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Introduced into web3
            </p>
          </div>
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-primary mb-2 ">
              300+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Developers trained in web2
            </p>
          </div>
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-primary mb-2 ">
              30+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Hiring partners
            </p>
          </div>
          <div>
            <h1 className="text-[47px] sm:text-[32px]  leading-[48px] text-center font-bold text-primary mb-2 ">
              3+
            </h1>
            <p className="w-auto text-text text-[18px] text-center leading-[24.85px] ">
              Decentralized Apps built
            </p>
          </div>
        </div>
      </section>
      <section className="py-[90px] mx-auto">
        <h2 className=" text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          Blockchain development with Solidity
        </h2>
        <p className=" mx-auto lg:w-auto text-text text-[18px] text-center leading-[24.85px] mb-[56px]">
          In <span className="text-primary">6 months</span>, through practical class and training, you will get
          everything you need to launch your career in Blockchain development
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
      <section className="py-[80px]  md:w-[100%] px-[3%] bg-[#F8F5FD]">
        <div className="w-[264px]  text-[16px] leading-[24px] text-center text-primary bg-[#E8D4FF]  mx-auto rounded-3xl font-bold mb-4">
          What makes us unique?
        </div>
        <h2 className="w-[495px] sm:w-[90%] mx-auto text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
        Transition into <span className=" text-primary">web3</span>  in 6 months

        </h2>
        <p className="w-[820px] mx-auto lg:w-[90%] text-text text-[18px] text-center leading-[24.85px] mb-[56px]">
        Join the cohort to access a vibrant community of experts, engage in soft skills training, and receive adequate support for interview preparation for your growth.
        </p>

        <div className="flex justify-center items-center gap-8 md:block ">
          <div className="w-1/2 md:w-full">
            <div
              className={` md:w-auto px-6 py-20 h-[164px] bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
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
                Access to Grazac Network
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered1 ? "text-white" : "text-text"
                }`}
              >
                Join a network of seasoned experts and peers who share your
                passion and drive for success.
              </p>
            </div>
            <div
              className={` md:w-auto px-6 py-20 h-[164px] bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
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
                Access to mentors
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered2 ? "text-white" : "text-text"
                }`}
              >
                Enhance your learning with access to industry experts to help
                you navigate challenges and grow
              </p>
            </div>
            <div
              className={` md:w-auto px-6 py-20 h-[164px] bg-[#fff] hover:bg-primary rounded-3xl mb-4 ${
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
                Soft Skills Training
              </h5>
              <p
                className={`mx-auto lg:w-auto text-[16px] leading-[22px] ${
                  isHovered3 ? "text-white" : "text-text"
                }`}
              >
                Leverage our essential soft skills needed to remain competitive
                on a global scale
              </p>
            </div>

            <Link to="/start">
              <button className="bg-primary w-[225px] md:w-full py-[19px] text-[18px] rounded-lg font-bold ">
                Enroll Now
              </button>
            </Link>
          </div>
          <div className="md:flex md:justify-center md:mt-6">
            <img src={fred} alt="innovation" />
          </div>
        </div>
      </section>
      <section className="py-20 w-[90%] mx-auto">
        <h2 className="w-[478px] sm:w-auto mx-auto text-[40px] sm:text-[32px]  leading-[48px] text-center font-bold text-heading mb-2">
          Admission process
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
              <button className="bg-primary w-[225px] md:w-full py-[19px] text-[18px] rounded-lg font-bold ml-6 ">
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
                        <h4>Is the Blockchain Class virtual or on-site?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>The class is a full onsite class.</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question py-4">
                        <h4>What is the duration of the program?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          The program is of a duration of 6 months (4 months
                          training, 2 months internship).
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
                        <h4>
                          What are the prerequisites for joining the blockchain
                          class?
                        </h4>

                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>You must have basic programming knowledge</p>
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
