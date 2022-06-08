import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import Slider from "infinite-react-carousel";
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
import Sponsor1 from "../images/svg/Apple.svg";
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

import { LoaderContext } from "../context";

const Landing = () => {
  const [showModal, setShowModal] = useState(true);
  const { setShow, show } = useContext(LoaderContext);
  useEffect(() => {
    // document.title = "Welcome to Grazac Academy";
    let mediaPlayer = document.querySelector("#video");
    mediaPlayer.controls = false;
    mediaPlayer.play();

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
    <div className="landing">
      <ToastContainer closeButton={false} position="bottom-right" />
      {showModal && (
        <div className="infomodal">
          <div className="infomodal_content">
            <img src={badge} alt="" className="infomodal_badge" />
            <p>
            Application is Closed. Enrollment into Cohort 013 begins September 2022.
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
        <Link to="/login">
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
            <h6>No tuition until hired</h6>
          </div>
          <div>
            <img src={mark} alt="mark" />
            <h6>No prior experience required</h6>
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

      <div>
        <Container>
          <div className="course_mode-intro course_mode-intro">
            <h2 style={{ margin: "80px 0 30px" }} className="join_heading">
              Why Grazac Academy is the
              <br className="hide-at-600" /> best for you
            </h2>
          </div>
        </Container>
      </div>

      <div style={{ boxSizing: "border-box", margin: "0 0 80px" }}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={why1} alt="profile" />
                </div>
                <h4>Pay no tuition until you’re hired</h4>
                <p className="hire_dev-grey">
                  We make starting a career in tech accessible to anyone. You
                  won’t be required to pay any tuition for your learning until
                  you get a job. We match you with employers within 9-12 months
                  of learning to land your dream job in tech.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={why2} alt="profile" />
                </div>
                <h4>1:1 access to mentorship and support</h4>
                <p className="hire_dev-grey">
                  You gain 24/7 access to a wide range of industry experts that
                  will walk you through your career path and increase your
                  visibility to potential employers.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={why3} alt="profile" />
                </div>
                <h4>Recognized Certification</h4>
                <p className="hire_dev-grey">
                  You get a recognized certificate that serves as a proof that
                  you are skilled enough to work in any organization in or
                  outside Nigeria.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={why4} alt="profile" />
                </div>
                <h4>3-months Compulsory Internship</h4>
                <p className="hire_dev-grey">
                  Get real workplace experience. You stand a chance to work with
                  amazing teams on real-life projects to solve related problems
                  so you can build your portfolio for at least 3-months.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="landing__intern">
        <div className="landing__intern--content">
          <div className="landing__bottom--text">
            <h2>Available Courses</h2>
          </div>
          <div className="landing__slider-text1">
            <p>
              Learn any of these tech courses today for free and pay back when
              you are hired.
            </p>
          </div>
          <div className="gga_container">
            <Link
              to={`/course-detail-graduate?course=product-designing-ui-ux`}
              className="boxes33"
            >
              <div className="gua_cardview">
                <div className="gua_cardview-box">
                  <img src={product} alt="course-desc" />
                </div>
                <div className="gua_cardview-text">
                  <h4 style={{ color: "rgb(51, 51, 51)" }}>
                    Product Design (UI/UX)
                  </h4>
                  <p>
                    User interface design or user interface engineering is the
                    design of user interfaces for machines and software, such as
                    computers, home appliances, mobile devices, and other
                    electronic devices, with the focus on maximizing usability
                    and the user experience.
                  </p>
                  <Link
                    to={`/course-detail-graduate?course=product-designing-ui-ux`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={`/course-detail-graduate?course=frontend-web-development`}
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
                    development is the practice of producing HTML, CSS and
                    JavaScript for a website or Web Application so that a user
                    can see and interact with them directly.
                  </p>
                  <Link
                    to={`/course-detail-graduate?course=frontend-web-development`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={`/course-detail-graduate?course=backend-web-development`}
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
                    Node.js is useful for developing applications that require a
                    persistent connection from the browser to the server and is
                    often used for real-time applications such as chat, news
                    feeds and web push notifications.
                  </p>
                  <Link
                    to={`/course-detail-graduate?course=backend-web-development`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={`/course-detail-graduate?course=mobile-application-development`}
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
                    lets you build apps for iOS and Android — and even the web
                    and desktop platforms like macOS, Windows and Linux — all
                    from a single codebase.
                  </p>
                  <Link
                    to={`/course-detail-graduate?course=mobile-application-development`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>

            <Link
              to={`/course-detail-graduate?course=product-management`}
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
                    Product management is the process of strategically guiding a
                    company's product development, market launch, ongoing
                    support and improvement of a product. It is basically making
                    a product the best version it can be and fine-tuning a
                    company’s product in order to make it appeal to the
                    organization’s target audience and customers
                  </p>
                  <Link
                    to={`/course-detail-graduate?course=product-management`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <Link to="/login">
            <div
              className="nav__btn"
              style={{ width: "130px", margin: "auto", textAlign: "center" }}
              // onClick={showToast}
            >
              <div className="nav__btn--text">Apply Now</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="landing__discover">
        <div className="landing__bottom--text1">
          <h1>
            How the Admission <br className="hide-at-600" />
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
            <Link to="/login">
              {/* <div className="nav__btn one-btn" onClick={showToast}> */}
              <div className="nav__btn one-btn">
                <div className="nav__btn--text">Apply Now</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="landing__bottom--text">
          <h2>Testimonials</h2>
        </div>
        <div className="landing__slider-text1">
          <p>
            The success stories, testimonials and reviews from our students are
            exceptional. These are our students that put in deliberate efforts
            and have been intentional and consistent in implementing what they
            learnt from the course.
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

      <div>
        <div
          className="course_mode-intro course_mode-intro"
          style={{ textAlign: "center" }}
        >
          <h2 className="join_heading" style={{ marginTop: "80px" }}>
            Gallery
          </h2>
          <p className="join_needed">
            Images of our students that put in deliberate efforts and have been
            intentional and consistent in implementing{" "}
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

      {/* FAQ section commented out till content is ready */}
      <div className="landing_faq">
        <div className="container">
          <h1>FAQs</h1>
          <div>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>How do I register?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Visit www.grazacacademy.com and click the “apply now”
                        button to create an account. Login to your dashboard to
                        complete your application.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>After registration, what next?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Once you have successfully registered, an email will be
                        sent to you detailing the next steps of the registration
                        process. Ensure that you provide a valid email address
                        and keep an eye on your inbox.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>Do I have to be physically present to register?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        No. Registration can be done online but applicants have
                        to be physically present to write the assessment test.
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
                      Do I need to have any previous experience or knowledge
                      before coming to learn?
                    </h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Not at all. All our courses are designed to help people
                        from any educational background and experience level,
                        achieve a successful career in tech.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>Are classes virtual or physical?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Classes are 100% physical and this is to ensure students
                        get maximum support and mentorship from their tutors.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>What is the duration of the program?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        The program runs for at least 6 months (3 months of
                        immersive training and 3 months internship)
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
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

      <Footer />
    </div>
  );
};

export default Landing;
