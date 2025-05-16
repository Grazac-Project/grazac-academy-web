import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
// import Slider from "infinite-react-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Abdullahi from "../images/testimonial/abdullahi.jpeg";
import Adedamola from "../images/testimonial/adedamola.jpeg";
import Bosun from "../images/testimonial/bosun.jpg";
import Grazac from "../images/svg/logo-round.svg";
import Video from "../images/landing-video2.mp4";
import Object from "../images/svg/objects.svg";
import poster from "../images/Grazac-website/IMG_8403.JPG";
import grad1 from "../images/grad1.png";
import grad2 from "../images/grad2.png";
import grad3 from "../images/grad3.png";
import grad4 from "../images/grad4.png";
import scroll from "../images/testimonial-scroll.png";

import badge from "../images/svg/badge.svg";
import ex from "../images/svg/x-mark.svg";
// import Sponsor1 from "../images/svg/Apple.svg";
import Sponsor1 from "../images/svg/Apple_new.png";
import Sponsor2 from "../images/svg/AWS.svg";
import Sponsor3 from "../images/svg/Flutterwave.svg";
import Sponsor5 from "../images/svg/Microsoft.svg";
import Sponsor6 from "../images/svg/Google.svg";
import mark from "../images/svg/mark.svg";
import join from "../images/svg/join.svg";
import why1 from "../images/svg/why1.svg";
import why2 from "../images/svg/why2.svg";
import why3 from "../images/svg/why3.svg";
import why4 from "../images/svg/why4.svg";
import product from "../images/product.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import android from "../images/android.png";
import product_management from "../images/product_management.png";
import machine_learning from "../images/machine_learning.png";
import java from "../images/java.png";
import data_analysis from "../images/data_analysis.png";

import { LoaderContext } from "../context";
import WhatsApp from "../components/whatsApp/whatsApp";
import VirtualSection from "../components/VirtualSection";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LandingMentors from "../components/LandingMentors";
import LandingJudges from "../components/LandingJudges";

const Landing = () => {
  const [showModal, setShowModal] = useState(true);
  const { setShow, show } = useContext(LoaderContext);

  const history = useHistory();
  const courseDetailsHandler = (goTo) => {
    sessionStorage.setItem(
      "learning_mode",
      JSON.stringify({
        class_option: "Physical",
      })
    );
    history.push(goTo);
  };

  // useEffect(() => {
  //   // document.title = "Welcome to Grazac Academy";
  //   let mediaPlayer = document.querySelector("#video");
  //   mediaPlayer.controls = false;
  //   mediaPlayer.play();

  //   //this gives the homepage spacing on top for the notification
  //   var landingHeight = document.getElementsByClassName("landing")[0];
  //   landingHeight.style.marginTop = `70px`;

  //   window.addEventListener("load", () => {
  //     setShow(false);
  //   });
  // }, []);

  useEffect(() => {
    try {
      // Setup video element
      let mediaPlayer = document.querySelector("#video");
      if (!mediaPlayer) {
        throw new Error("Video element not found.");
      }
      // Check if the browser supports the video format
      const canPlayMp4 = mediaPlayer.canPlayType("video/mp4");
      if (!canPlayMp4) {
        throw new Error("Browser does not support the video format.");
      }
      // Hide default controls
      mediaPlayer.controls = false;

      // Attempt to play the video
      mediaPlayer.play().catch((error) => {
        console.error(
          "Error occurred while attempting to play the video:",
          error.message
        );
      });
    } catch (error) {
      // Handle unsupported media or other errors gracefully
      console.error("Error occurred during video setup:", error.message);
    }

    //this gives the homepage spacing on top for the notification
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `70px`;

    window.addEventListener("load", () => {
      setShow(false);
    });
  }, []);

  const handleModal = () => {
    setShowModal(false);
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `0px`;
  };

  const handleFaq = (e) => {
    let svg = e.target.parentElement.querySelector("svg");
    if (e.target.nodeName === "path") {
      svg = e.target.parentElement.parentElement.querySelector("svg");
    }
    svg.classList.toggle("faq-icon_transition");
  };

  const scrolLeft = () => {
    document.getElementById("scrolltainer").scrollLeft -= 200;
  };

  const scrolRight = () => {
    document.getElementById("scrolltainer").scrollLeft += 200;
  };

  const showToast = () => {
    toast.info(
      "Application into Cohort (CH011) is closed. Enrollment into CH012 begins July 2022."
    );
  };

  return (
    <>
      <div className="landing">
        <ToastContainer closeButton={false} position="bottom-right" />
        {showModal && (
          <a href="/signup">
            <div className="infomodal">
              <div className="infomodal_content">
                <img src={badge} alt="" className="infomodal_badge" />
                <p>
                  Application for cohort 016 is ongoing. Early registration
                  closes by May 31st, Hurry Now and <span>Register!</span>{" "}
                  Classes starts by July 7, 2025
                  {/* <a
                className="infomodal_content-link"
                href="/login"
              >
                Apply Now
              </a> */}
                </p>
                {/* <Link to="/graduate-accelerator-plan">
              <button>Learn more</button>
            </Link> */}

                <img
                  src={ex}
                  alt=""
                  onClick={handleModal}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </a>
        )}
        <div className="landing__header">
          <Navbar top={true} />
          {/* <img src={Object} className="bg-img" alt="ccc" /> */}
          <div style={{ height: 10 }}></div>

          <div className="landing__text">
            <h1>
              Upskilling You For The <span>Future</span> Of Work
            </h1>
            <p>
              Learn valuable technology skills with our wide range of courses{" "}
              <br className="hide-at-600" /> and land your dream job.{" "}
            </p>
          </div>

          {/* <a onClick={showToast}> */}
          <Link to="/signup">
            <div
              className="nav__btn"
              style={{ width: "130px", margin: "auto", textAlign: "center" }}
            >
              {/* <a href="/login" > */}
              <div className="nav__btn--text">Apply Now</div>
              {/* <div className="nav__btn">Apply Now</div> */}
            </div>
          </Link>
          {/* </a> */}

          <div className="landing__text-below">
            <div>
              <img src={mark} alt="mark" />
              <h6>Conducive environment</h6>
            </div>
            <div>
              <img src={mark} alt="mark" />
              <h6>No prior experience required</h6>
            </div>
            <div>
              <img src={mark} alt="mark" />
              <h6>Flexible payment options</h6>
            </div>
          </div>
        </div>

        <div className="landing__video">
          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            loop
            muted
            poster={poster}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="landing__sponsors">
          <div className="landing__sponsors--container">
            <img src={Sponsor1} alt="sponsor" />
            <img src={Sponsor2} alt="sponsor" />
            <img src={Sponsor3} alt="sponsor" />
            <img src={Sponsor5} alt="sponsor" />
            <img src={Sponsor6} alt="sponsor" />
          </div>
        </div>

        <VirtualSection />

        <div>
          {/* <Container> */}
          <div className="course_mode-intro course_mode-intro">
            <h2 style={{ margin: "80px 0 30px" }} className="join_heading">
              Why Grazac Academy <br className="hide-at-600" />
              is the best for you
            </h2>
          </div>
          {/* </Container> */}
        </div>

        {/* <div style={{ boxSizing: "border-box", margin: "0 0 0px" }}> */}
        <div className="join_container">
          {/* <Container> */}
          {/* <Row> */}
          {/* <Col md={6}> */}
          <div className="join_box1">
            <div className="">
              <img src={why1} alt="profile" />
            </div>
            <h4>There are no learning barriers </h4>
            <p className="hire_dev-grey">
              We make starting a career in tech accessible to anyone. Whether
              you are a graduate or you are an undergraduate; whether you are
              young or old, and no matter your experience level - our model,
              courses, and community has been designed to make you feel
              comfortable and fully engaged in the learning process.
            </p>
          </div>
          {/* </Col> */}
          {/* <Col md={6}> */}
          <div className="join_box1">
            <div className="">
              <img src={why2} alt="profile" />
            </div>
            <h4>Expert Instructors</h4>
            <p className="hire_dev-grey">
              Our tech academy is home to a team of industry-leading experts who
              are not just educators but also practitioners in their respective
              fields. They bring real-world experience, insights, and up-to-date
              knowledge to every lesson, ensuring you receive the highest
              quality education.
            </p>
          </div>
          {/* </Col> */}
          {/* </Row> */}
          {/* <Row> */}
          {/* <Col md={6}> */}
          <div className="join_box1">
            <div className="">
              <img src={why3} alt="profile" />
            </div>
            <h4> 6-months Internship</h4>
            <p className="hire_dev-grey">
              Get real workplace experience. You stand a chance to work with
              amazing teams on real-life projects to solve related problems so
              you can build your portfolio for 6-months.
            </p>
          </div>
          {/* </Col> */}
          {/* <Col md={6}> */}
          <div className="join_box1">
            <div className="">
              <img src={why4} alt="profile" />
            </div>
            <h4> Career-Ready Certification</h4>
            <p className="hire_dev-grey">
              Our programs are designed to prepare you for the workforce. Upon
              completion, you'll receive industry-recognized certifications that
              validate your skills and open doors to exciting job opportunities
            </p>
          </div>
          {/* </Col> */}
          {/* </Row> */}
          {/* </Container> */}
        </div>

        <div className="landing__intern">
          <div className="landing__intern--content">
            <div className="landing__bottom--text">
              <h2>Available Courses</h2>
            </div>
            <div className="landing__slider-text1">
              <p>
                Explore a wide range of tech courses designed to empower you
                with the skills and knowledge you need to thrive in the
                ever-evolving tech industry.
              </p>
            </div>
            <div className="gga_container">
              <div
                className="boxes33"
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=product-designing-ui-ux`
                  )
                }
              >
                {/* <Link
                to={`/course-detail-graduate?course=product-designing-ui-ux`}
                className="boxes33"
              > */}
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={product} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Product Design (UI/UX)
                    </h4>
                    <p>
                      Product design is a multifaceted field that involves
                      creating and improving products to meet user needs and
                      business goals. You'll gain knowledge in designing user
                      interfaces that...
                    </p>
                    {/* <Link
                      to={`/course-detail-graduate?course=product-designing-ui-ux`}
                    >
                      Learn More
                    </Link> */}
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=product-designing-ui-ux`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=frontend-web-development`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={frontend} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Front-End Development
                    </h4>
                    <p>
                      Front-end web development, also known as client-side
                      development is the practice of producing HTML, CSS, and
                      JavaScript for a website or Web Application so that a
                      user...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=frontend-web-development`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=backend-web-development`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={backend} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Back-End Development
                    </h4>
                    <p>
                      Node.js is useful for developing applications that require
                      a persistent connection from the browser to the server and
                      is often used for real-time applications such as chat,
                      news...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=backend-web-development`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=mobile-application-development`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={android} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Mobile App Developement
                    </h4>
                    <p>
                      Flutter is an incredible user interface (UI) toolkit that
                      allows you to build apps for iOS, Android, and even the
                      web & desktop platforms like macOS, Windows, and Linux;
                      all from...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=mobile-application-development`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=product-management`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={product_management} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Product Management
                    </h4>
                    <p>
                      Grazac product management course will help you understand
                      the process of strategically guiding a company's product
                      development, market launch, ongoing support, and...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=product-management`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=machine-learning`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={machine_learning} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Machine learning with Python
                    </h4>
                    <p>
                      Machine Learning with Python is a comprehensive journey
                      that equips you with the skills and knowledge needed to
                      build, evaluate, and deploy machine learning models for...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=machine-learning`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(`/course-detail-graduate?course=java`)
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={java} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>Java</h4>
                    <p>
                      Java is a versatile programming language with a wide range
                      of applications, from web development to mobile app
                      development, big data processing, and more...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=java`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=data-analysis`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={data_analysis} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>Data Analysis</h4>
                    <p>
                      Data Analysis involves using different tools and
                      techniques to scrutinize and probe large volumes of data
                      with the goal of making informed solving problems,
                      business decisions, and...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=data-analysis`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() =>
                  courseDetailsHandler(
                    `/course-detail-graduate?course=blockchain-development-solidity`
                  )
                }
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={data_analysis} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Blockchain Development with Solidity
                    </h4>
                    <p>
                      This course covers blockchain technology fundamentals and
                      smart contract development using Solidity, preparing you
                      for a career...
                    </p>
                    <span
                      onClick={() =>
                        courseDetailsHandler(
                          `/course-detail-graduate?course=blockchain-development-solidity`
                        )
                      }
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/signup">
              <div
                className="nav__btn"
                style={{ width: "130px", margin: "auto", textAlign: "center" }}
                // onClick={showToast}
              >
                <div className="nav__btn--text">Apply Now</div>
              </div>
            </Link>
          </div>
          <LandingJudges />
        </div>

        <div className="landing__discover">
          <div className="landing__bottom--text1">
            <h1>
              How the Admission 
              Process Works
            </h1>
            <p>
              Understand our admission process <br className="hide-at-600" />
              in 3 easy steps
            </p>
          </div>
          <div className="landing__discover--container">
            <div className="landing__discover--images">
              <div className="landing__discover--images-left">
                <div></div>
                <div></div>
              </div>
              <div className="landing__discover--images-right">
                <div></div>
              </div>
            </div>

            <div className="landing__discover--list">
              <div className="landing__discover--list-item">
                <h2>01</h2>
                <div>
                  <h3>Fill and submit the application form</h3>
                  <p>
                    Create an account to start your application. Login to your
                    dashboard and fill in your correct details.
                  </p>
                </div>
              </div>

              <div className="landing__discover--list-item">
                <h2>02</h2>
                <div>
                  <h3>Pass the assessment tests</h3>
                  <p>
                    If your application is successful, you will be contacted via
                    mail to take a physical assessment test to ensure your
                    commitment meets our standard.
                  </p>
                </div>
              </div>

              <div className="landing__discover--list-item">
                <h2>03</h2>
                <div>
                  <h3>Complete the process and begin your journey into Tech</h3>
                  <p>
                    Once you pass the assessment test, you are eligible for
                    admission. You will receive a mail on how to complete your
                    admission process.
                  </p>
                </div>
              </div>
              <div className="landing__discover--list-item"></div>
              <div className="landing__discover--list-item"></div>
              <Link to="/signup">
                {/* <div className="nav__btn one-btn" onClick={showToast}> */}
                <div className="nav__btn one-btn">
                  <div className="nav__btn--text">Apply Now</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <LandingMentors />

        <div>
          <div className="landing__bottom--text">
            <h2>Testimonials</h2>
          </div>
          <div className="landing__slider-text1">
            <p>
              The success stories, testimonials and reviews from our students
              are exceptional. These are our students that put in deliberate
              efforts and have been intentional and consistent in implementing
              what they learnt from the course.
            </p>
          </div>
          <div className="landing__slider-contain">
            <div className="landing__slider--container" id="scrolltainer">
              <img
                src={scroll}
                alt="scroll"
                className="scroll-left"
                onClick={scrolLeft}
              />
              <img
                src={scroll}
                alt="scroll"
                className="scroll-right"
                onClick={scrolRight}
              />
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/ht8l30MozEM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/ck-f8UD8RqU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/IG5cs69PmBo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/l5FVImbxdqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-width">
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/6_ILohsUndE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="video-width"
                  src="https://www.youtube.com/embed/M8mStqg17cQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          width :"90%",
          margin:"auto"
        }}>
          <div>
            <div
              className="course_mode-intro course_mode-intro"
              style={{ textAlign: "center" }}
            >
              <h2 className="join_heading" style={{ marginTop: "80px" }}>
                Gallery
              </h2>
              <p className="join_needed">
                Images of our students that put in deliberate efforts and have
                been intentional and consistent in implementing{" "}
                <br className="hide-at-600" />
                what they learnt from the course.
              </p>
            </div>
            <Container>
              <div className="join_gallery">
                <div className="join_gallery-top">
                  <div className="join_gallery-top-left">
                    <img src={grad1} />
                  </div>
                  <div className="join_gallery-top-right">
                    <img src={grad4} />
                  </div>
                </div>
                <div className="join_gallery-bottom">
                  <div className="join_gallery-bottom-left">
                    <img src={grad2} />
                  </div>
                  <div className="join_gallery-bottom-right">
                    <img src={grad3} />
                  </div>
                </div>
              </div>
            </Container>
          </div>

          <div
            className="landing__bottom"
            id="landing__bottom"
            style={{ paddingBottom: 0 }}
          >
            <div className="landing__bottom--text">
              <div className="landing__bottom--text--right">
                <h1>
                  Discover Top Tech <br />
                  Talent Here
                </h1>
                <p>
                  Find experienced fresh tech talents and professionals with
                  authentic background that match your requirements.
                </p>
                <div className="landing__btn--2">
                  <Link to="/hire">
                    <div
                      className="nav__btn nav__btn-flex "
                      // onClick={() => toast.info("Coming Soon")}
                    >
                      <a className="nav__btn--text">Hire our Talents</a>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="landing__bottom--text--left">
                <img src={Grazac} alt="img" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section commented out till content is ready */}
        <div className="landing_faq">
          <div className="container">
            <h1>FAQs</h1>
            {/* <div>
              <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <div className="landing_faq-question" onClick={handleFaq}>
                        <h4>Do I have to be physically present to register?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="landing_faq-answer">
                          <p>
                            No, registration is to be done online.
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr />
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      <div className="landing_faq-question" onClick={handleFaq}>
                        <h4>Are classes virtual or onsite?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="landing_faq-answer">
                          <p>
                            Classes would be onsite or virtually, depending on the mode of learning you prefer.
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr />
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      <div className="landing_faq-question" onClick={handleFaq}>
                        <h4>
                          What is the duration of the program?
                        </h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <div className="landing_faq-answer">
                          <p>
                            The program is for a duration of 12 months,
                              consisting of 6 months  immersive training and 6 months internship.
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr />
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      <div className="landing_faq-question" onClick={handleFaq}>
                        <h4>Do I qualify to enrol as an Undergraduate?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <div className="landing_faq-answer">
                          <p>
                          Yes,please. However, as an undergraduate, you are strongly 
                          advised to choose our virtual learning mode due to its flexibility.
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr />
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      <div className="landing_faq-question" onClick={handleFaq}>
                        <h4>Do you offer any certification after the course?</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        <div className="landing_faq-answer">
                          <p>
                            Yes, students who complete our courses will receive a virtual and hardcopy 
                            certificate of completion
                          </p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <hr />
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      <div className="landing_faq-question" onClick={handleFaq}>
                        <h4>What is the cost of learning at Grazac Academy</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body>
                        <div className="landing_faq-answer">
                          <p>
                            For our virtual classes, the cost for all courses is #1,000,000
                          </p>
                          <p>While for our virtual classes, the cost is $200. To get more information 
                            about our pricing, <a>Click here</a></p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                <Link to="/faq" className="link-view">
                  <h5>View All</h5>
                </Link>
              </Accordion>
            </div> */}

            <div style={{width: "90%", margin:"auto"}}>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
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
                      <div className="landing_faq-question">
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
                  <Accordion.Item eventKey="3">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
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
                  <Accordion.Item eventKey="4">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
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
                  <Accordion.Item eventKey="5">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
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
                <Card>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header onClick={handleFaq}>
                      <div className="landing_faq-question">
                        <h4>What is the cost of learning at Grazac Academy</h4>
                        <MdKeyboardArrowDown size="2rem" color="black" />
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          For our physical classes, the cost for all courses is
                          #1,000,000
                        </p>
                        <p>
                          While for our virtual classes, the cost is $200. To
                          get more information about our pricing,{" "}
                          <a href="#">Click here</a>
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Link to="/faq" className="link-view">
                  <h5>View All</h5>
                </Link>
              </Accordion>
            </div>
          </div>
        </div>
        <Mode
          id="landing_page_mode"
          page={"home"}
          title={"Ready to fill your vacant position?"}
          text={
            "Explore diverse tech talents of your choice with genuine skillsets and good workplace ethics."
          }
          button_1={"Hire from us"}
          button_2={"Chat with us"}
        />

        {/* <WhatsApp /> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
