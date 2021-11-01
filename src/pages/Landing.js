import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import Slider from "infinite-react-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import { Container, Row, Col } from "react-bootstrap";

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

import badge from "../images/svg/badge.svg";
import ex from "../images/svg/x-mark.svg";
import Sponsor1 from "../images/svg/Apple.svg";
import Sponsor2 from "../images/svg/AWS.svg";
import Sponsor3 from "../images/svg/Flutterwave.svg";
import Sponsor5 from "../images/svg/Microsoft.svg";
import Sponsor6 from "../images/svg/Google.svg";
import mark from "../images/svg/mark.svg";
import join from "../images/svg/join.svg";
import product from "../images/product.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import android from "../images/android.png";

import { LoaderContext } from "../context";

const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  const { setShow, show } = useContext(LoaderContext);
  useEffect(() => {
    document.title = "Welcome to Grazac Academy";
    let mediaPlayer = document.querySelector("#video");
    mediaPlayer.controls = false;
    mediaPlayer.play();

    //this gives the homepage spacing on top for the notification
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `0px`;

    window.addEventListener("load", () => {
    
      setShow(false)
    });
  }, []);

  const content = [
    {
      id: 0,
      img: Bosun,
      content:
        "The future of work will be filled with so many opportunities we need to prepare for, I’ve known Grazac for a while and seen them in the business of helping people lay hold of these opportunities. Grazac Academy is an excellent starting point for anyone looking into building a career in technology.",
      name: "Bosun Egberinde - Creator of PHPSandbox.io",
    },
    {
      id: 1,
      img: Adedamola,
      content:
        "I've known Grazac for over a year now and having worked with some of their successful students, I can boldly say the competency and problem solving skills of their students is top-notch and their academy is one of the best academy promoting technology skills acquisition here in Nigeria",
      name: "Samson Adedamola - Consultant at Kudi",
    },
    {
      id: 2,
      img: Abdullahi,
      content:
        "I passed through Grazac Academy while I was in school and that's one of the best thing that happened to me as an undergraduate. I love how the facilitators mentored everyone of us up and I must say that, we got more value than we paid for.",
      name: "Abdullahi Olaniyan - Software Developer at Global Accelerex",
    },
  ];

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


  return (
    <div className="landing">
      {showModal && (
        <div className="infomodal">
          <div className="infomodal_content">
            <img src={badge} alt="" className="infomodal_badge" />
            <p>
              Grazac Graduate Accelerator Program enrollment is opening by July
              12th.
              <a
                className="infomodal_content-link"
                href="https://grazacacademy.com/graduate-accelerator-plan"
                f
              >
                Learn more
              </a>
            </p>
            <Link to="/graduate-accelerator-plan">
              <button>Learn more</button>
            </Link>
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
        <img src={Object} className="bg-img" alt="ccc" />
        <div style={{ height: 10 }}></div>

        <div className="landing__text">
          <h1>
            Upskilling You For The <span>Future</span> Of Work
          </h1>
          <p>
            Learn valuable technology skills with our wide range of courses and land your dream job.{" "}
          </p>
        </div>
        <a href="/login">
          <div
            className="nav__btn"
            style={{ width: "130px", margin: "auto", textAlign: "center" }}
          >
            <div className="nav__btn--text">Apply Now</div>
          </div>
        </a>
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
                <h2 style={{ margin:"80px 0 30px"}} className="join_heading">Why Grazac Academy is the best for you</h2>
            </div>
          </Container>
        </div>

      <div style={{boxSizing:'border-box', margin:'0 0 80px'}}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={join} alt="profile" />
                </div>
                <h4>Pay no tuition until you’re hired</h4>
                <p className="hire_dev-grey">We make starting a career in tech accessible to anyone. You won’t be required to pay any tuition for your learning until you get a job. We match you with employers within 9-12 months of learning to land your dream job in tech.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={join} alt="profile" />
                </div>
                <h4>1:1 access to mentorship and support</h4>
                <p className="hire_dev-grey">You gain 24/7 access to a wide range of industry experts that will walk you through your career path and increase your visibility to potential employers.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={join} alt="profile" />
                </div>
                <h4>Recognized Certification</h4>
                <p className="hire_dev-grey">You get a recognized certificate that serves as a proof that you are skilled enough to work in any organization in or outside Nigeria.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="join_box1">
                <div className="">
                  <img src={join} alt="profile" />
                </div>
                <h4>2-months Compulsory Internship</h4>
                <p className="hire_dev-grey">Get real workplace experience. You stand a chance to work with amazing teams on real-life projects to solve related problems so you can build your portfolio for at least 2-months.</p>
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
            <p>Learn any of these tech courses today for free and pay back when you are hired.</p>   
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
                  <p>User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.</p>
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
                  <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
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
                  <p>Node.js is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.</p>
                  <Link
                    to={`/course-detail-graduate?course=backend-web-development`}
                  >
                  Learn More
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={`/course-detail-graduate?course=android-development-kotlin`}
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
                  <p>Android software development is the process by which new applications are created for devices running the Android operating system.</p>
                  <Link
                    to={`/course-detail-graduate?course=android-development-kotlin`}
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
            >
                <div className="nav__btn--text">Apply Now</div>
            </div>
            </Link>
        </div>
      </div>


      <div className="landing__discover">
        <div className="landing__bottom--text1">
            <h1>How the Admission Process Works</h1>
            <p>Understand our admission process in 3 easy steps</p>
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
                Create an account to start your application. Login to your dashboard and fill in your correct details. 
                </p>
              </div>
            </div>

            <div className="landing__discover--list-item">
              <h2>02</h2>
              <div>
                <h3>Pass the assessment tests</h3>
                <p>
                If your application is successful, you will be contacted via mail to take a physical assessment test to ensure your commitment meets our standard.
                </p>
              </div>
            </div>

            <div className="landing__discover--list-item">
              <h2>03</h2>
              <div>
                <h3>Complete the process and begin your journey into Tech</h3>
                <p>
                Once you pass the assessment test, you are eligible for admission. You will receive a mail on how to complete your admission process. 
                </p>
              </div>
            </div>
            <div className="landing__discover--list-item"></div>
            <div className="landing__discover--list-item"></div>
            <Link to="/login">
            <div
                className="nav__btn"
                style={{ width: "130px", marginLeft: "75px", marginTop: "25px", textAlign: "center" }}
            >
                <div className="nav__btn--text">Apply Now</div>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="landing__slider">
          <div className="landing__bottom--text">
              <h2>Testimonials</h2>         
          </div>
          <div className="landing__slider-text1">
            <p>The success stories, testimonials and reviews from our students are exceptional. These are our students that put in deliberate efforts and have been intentional and consistent in implementing what they learnt from the course.</p>   
          </div>
        <Slider arrows={false}  className="landing__slider-desktop">
          {/* {content.map((item) => (
            <div className="landing__slider--container" key={item.id}>
              <div className="landing__slider--img">
                <img src={item.img} alt="img" />
              </div>

              <div className="landing__slider--text">
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3993 5.56001C13.1711 5.22699 13.4948 4.27918 13.1462 3.51069L11.9262 0.872185C11.5777 0.129562 10.7311 -0.203709 9.98417 0.129562C7.86782 1.05176 6.05026 2.25573 4.60616 3.71587C2.83839 5.43192 1.64328 7.4044 0.995927 9.5818C0.348574 11.7851 0 14.782 0 18.5988V26.4631C0 27.3084 0.672251 28.0001 1.49389 28.0001H11.2789C12.1005 28.0001 12.7728 27.3084 12.7728 26.4631V16.3958C12.7728 15.5502 12.1005 14.8588 11.2789 14.8588H6.59802C6.64781 12.2713 7.24537 10.1966 8.34089 8.63373C9.23722 7.37904 10.5817 6.35438 12.3993 5.56001Z"
                    fill="#4B004B"
                  />
                  <path
                    d="M29.1127 5.53403C29.8845 5.20102 30.2079 4.25321 29.8596 3.48471L28.6396 0.872082C28.291 0.129203 27.4445 -0.203812 26.6976 0.129203C24.6061 1.0514 22.8132 2.25537 21.3444 3.6899C19.5764 5.43182 18.3567 7.40429 17.7091 9.5817C17.0617 11.7332 16.7383 14.7306 16.7383 18.5731V26.4374C16.7383 27.2827 17.4105 27.9744 18.2322 27.9744H28.0172C28.8388 27.9744 29.511 27.2827 29.511 26.4374V16.3701C29.511 15.5245 28.8388 14.8331 28.0172 14.8331H23.3114C23.3612 12.2456 23.959 10.1709 25.0543 8.60801C25.9506 7.35306 27.2951 6.3284 29.1127 5.53403Z"
                    fill="#4B004B"
                  />
                </svg>

                <p>{item.content}</p>

                <small>{item.name}</small>
              </div>
            </div>
          ))} */}
            <div className="landing__slider--container" >
              <div className="video-width">
                <iframe className="video-width" src="https://www.youtube.com/embed/HQYKZ6RaZ6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <iframe className="video-width" src="https://www.youtube.com/embed/CVDQuO2KMCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="landing__slider--container" >
              <div className="video-width">
                <iframe className="video-width" src="https://www.youtube.com/embed/yfP88Mr_Ixw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <iframe className="video-width" src="https://www.youtube.com/embed/1KkiCbKrG-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
        </Slider>
        <div className="landing__slider-mobile">
            <iframe src="https://www.youtube.com/embed/HQYKZ6RaZ6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/yfP88Mr_Ixw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/CVDQuO2KMCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <div>
          <div className="course_mode-intro course_mode-intro" style={{textAlign:'center'}}>
              <h2 className="join_heading" style={{ marginTop:"80px"}}>Gallery</h2>
              <p className="join_needed">Images of our students that put in deliberate efforts and have been intentional and consistent in implementing what they learnt from the course.</p>
          </div>
          <Container>
            <div className="join_gallery">
              <div className="join_gallery-top">
                <div className="join_gallery-top-left" >
                  <img src={grad1} />
                </div>
                <div className="join_gallery-top-right" >
                  <img src={grad4} />
                </div>
              </div>
              <div className="join_gallery-bottom">
                <div className="join_gallery-bottom-left" >
                  <img src={grad2} />
                </div>
                <div className="join_gallery-bottom-right" >
                  <img src={grad3} />
                </div>
              </div>
            </div>
          </Container>
      </div>

      <div className="landing__bottom" style={{ paddingBottom: 0 }}>
        <div className="landing__bottom--text">
          <div className="landing__bottom--text--right">
            <h1>Get Upskilled For The Future Of Work</h1>
            <p>
              We will provide you with the tools, resources, facilities, content
              and mentorship needed for your relevance in the future of work.
            </p>
            <div className="landing__btn--2">
                <div className="nav__btn nav__btn-flex ">
                  <a className="nav__btn--text" href="/hire">
                    Hire our grads
                  </a>
                </div>
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
                    <h4>What is Grazac Academy?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Grazac Academy is closing the gap between youths and
                        entry-level jobs in the technology industry. We strongly
                        believe the job market for youths has changed and the
                        future of work will be skill-based.
                      </p>
                      <p>We are approaching this in two ways:</p>
                      <p>
                        Grazac Academy Graduate Accelerator - This plan is for
                        tertiary institutions graduates who have full time to
                        build a career in tech. This plan has been arranged in a
                        way to prepare them for work.
                      </p>
                      <p>
                        Grazac Academy Undergraduate Accelerator - This plan is
                        to equip undergraduates in their institutions, we
                        believe the earlier the better and we want to prepare
                        them for life after school by upskilling them while they
                        are still in school.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>When was the academy established?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>Grazac Academy has been in operation since 2018</p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>How many students have graduated from your academy?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Excluding our partnership with Haptics.ng in 2019 to
                        execute Google project of upskilling Nigerians on
                        Digital skills where we trained about 500 youths, we
                        have impacted over 2,000 lives through our trainings,
                        meetups and events.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>Where is the academy located?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Our headquarter is located at Abeokuta, Ogun State,
                        Nigeria.
                      </p>
                      <p>
                        Address: Suite 106, PROHUB, Salawu Olabode Avenue, Ewang
                        Road, Idi-aba, Abeokuta.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>How do I enroll in the academy?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        Visit{" "}
                        <a href="https://www.grazacacademy.com">
                          www.grazacacademy.com
                        </a>{" "}
                        to enroll for your preferred course.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <div className="landing_faq-question" onClick={handleFaq}>
                    <h4>What are the payment options?</h4>
                    <MdKeyboardArrowDown size="2rem" color="black" />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <div className="landing_faq-answer">
                      <p>
                        We have three (2) payment options for our Gradaute
                        Accelerator, you can either pay once or pay
                        installmentally.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <hr />
            <Link to="/faq">
              <p className="landing_faq-link">
                More frequently asked questions
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Mode />
      <Footer />
    </div>
  );
};

export default Landing;
