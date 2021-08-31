import { React, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import { MdKeyboardArrowDown } from "react-icons/md";
import PrimaryBtn from "../components/PrimaryBtn";
import Slider from "infinite-react-carousel";

import join from "../images/svg/join.svg";
import object from "../images/svg/objects.svg";
import grad1 from "../images/grad1.png";
import grad2 from "../images/grad2.png";
import grad3 from "../images/grad3.png";
import grad4 from "../images/grad4.png";

const Join = () => {

    const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "Join - Grazac Academy";
    window.scrollTo(0, 0);
    fetch("https://grazacacademy.com/graduate/courses")
        .then((resp) => resp.json())
        .then((resp) => {
          setCourses(resp.data);
        })
        .catch((error) => {
          console.log(
            "An error occurred when fetching the available courses, refreshing..."
          );
          //
    });
  }, []);

  
  const handleFaq = (e) => {
    let svg = e.target.parentElement.querySelector("svg");
    if (e.target.nodeName === "path") {
      svg = e.target.parentElement.parentElement.querySelector("svg");
    }
    svg.classList.toggle("faq-icon_transition");
  };

  return (
    <div>
        <div className="landing__header join_header">
          <Navbar/>
            {/* <img src={object} className="bg-img" alt="ccc" /> */}
            <div style={{ height: 10 }}></div>

            <div className="landing__text">
            <h1>
                Grazac Graduate Accelerator Program
            </h1>
            <p>
            Are you tired of lack of jobs or low income earnings?
            Become employable in just 4 months by joining us today!
            We are bridging the gap between unemployment and entry-level jobs in the technology industry.{" "}
            </p>
            </div>
            <Link to="/graduate-form">
            <div
                className="nav__btn"
                style={{ width: "130px", margin: "auto", textAlign: "center" }}
            >
                <div className="nav__btn--text">Enroll Now</div>
            </div>
            </Link>
        </div>

        <div>
          <Container>
            <div className="course_mode-intro course_mode-intro">
                <h2 className="join_heading">Why you should embrace digital skills</h2>
                <p className="join_needed">As the demand for advanced tech skills rises, many companies are looking into recruiting, hiring, and nurturing the right talent that will move their organization forward. This means that people who are willing to spend time developing tech skills will have the upper hand in landing some of the most profitable jobs in the tech industry.</p>
                <p className="join_needed">Now, the good thing about tech skills is that you can make money from anywhere in the world with just a computer or mobile device connected to the internet. These skills allow you to work remotely and on your own terms. Stay on top and leverage on this opportunity to land your dream career in tech.</p>
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
                  <h4>1:1 access to mentorship and support</h4>
                  <p className="hire_dev-grey">You gain 24/7 access to a wide range of industry experts that will walk you through your career path and increase your visibility to potential employers.</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="join_box1">
                  <div className="">
                    <img src={join} alt="profile" />
                  </div>
                  <h4>Recognized Certification</h4>
                  <p className="hire_dev-grey">You get a recognized certificate that serves as a proof that you are skilled enough to work in any organization in or outside Nigeria.</p>
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col md={6}>
                <div className="join_box1">
                  <div className="">
                    <img src={join} alt="profile" />
                  </div>
                  <h4>Job placement upon graduation</h4>
                  <p className="hire_dev-grey">We match you with employers and you enter the recruitment process to land your dream job in tech. In less than 4-months of landing your dream job, you will make the money of this course back and still have more left with you.</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="join_box1">
                  <div className="">
                    <img src={join} alt="profile" />
                  </div>
                  <h4>1-month compulsory Internship</h4>
                  <p className="hire_dev-grey">You stand a chance to work with our amazing team on real-life projects to solve related problems so you can build your portfolio.</p>
                </div>
              </Col>
            </Row> */}
            <Link to="/graduate-form">
                    <div
                        className="nav__btn"
                        style={{ width: "130px", margin: " 30px auto", textAlign: "center" }}
                    >
                        <div className="nav__btn--text">Enroll Now</div>
                    </div>
            </Link>
          </Container>
        </div>

        <div>
            <div className="course_mode-intro course_mode-intro">
                <h2 className="join_heading">Testimonials</h2>
                <p className="join_needed">The success stories, testimonials and other examples of our students are exceptional. These are our students that put in deliberate efforts and have been intentional and consistent in implementing what they learnt from the course.</p>
            </div>
            <div className="">
              <Slider arrows={true}  className="landing__slider-desktop">
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

        <div className="join_bg1" id="courses">
            <div className="container">
              <div className="gga">
                <div className="course_mode-intro course_mode-intro">
                  <h2 style={{textAlign:'center'}}>Available Courses</h2>
                  <p style={{textAlign:'center'}}>Learn any of these 6 hot tech courses today at 20% off</p>
                </div>
                <div className="join_container">
                  {courses.length ? (
                    courses.map((item, index) => (
                      <Link
                        to={`/course-detail-graduate?course=${item.slug}`}
                        className="boxes33"
                        key={index}
                      >
                        <div className="gua_cardview">
                          <div className="gua_cardview-box">
                            <img src={item.thumb} alt="course-desc" />
                          </div>
                          <div className="gua_cardview-text">
                            <h4 style={{ color: "rgb(51, 51, 51)" }}>
                              {item.name}
                            </h4>
                            <p>{item.description}</p>
                            <Link
                              to={"/course-detail-graduate?course=" + item.slug}
                            >
                            Learn More
                            </Link>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div>
                      {/* <img src={loader} alt="loader" className="loader" /> */}
                    </div>
                  )}
                </div>
                <div className="course_purple-btn">
                    <PrimaryBtn link="/graduate-form">Enroll Now</PrimaryBtn>
                </div>
              </div>
            </div>
        </div>

      <div className="course_purple">
            <div className="course_purple_txt">
                <p>Our Flexible Payment Plans</p>
                <h1>70%</h1>
                <p>Discount Available</p>
            </div>
            <div className="course_purple-main">
              <div>
                  <div className="course_purple-main-boxes grad-box">
                      <h4>Full Payment</h4>
                      <h3><span style={{textDecoration:'line-through'}}>₦250,000</span></h3>
                      <h2>₦75,000</h2>
                      <p>This is a one-off payment. You won't be required to pay any amount again till the end of your training.</p>
                  </div>
              </div>
              <div>
                  <div className="course_purple-main-boxes grad-box">
                      <h4>Installment Payment</h4>
                      <h3><span style={{textDecoration:'line-through'}}>₦250,000</span></h3>
                      <h2>₦40,000 <span style={{fontSize: '14px'}}>* 2 months.</span></h2>
                      <p>To be paid at the start of each month for the duration of the training which is 2 months.</p>
                  </div>
              </div>
              {/* <div>
                  <div className="course_purple-main-boxes grad-box">
                      <h4>Monthly Payment</h4>
                      <h3><span style={{textDecoration:'line-through'}}>₦250,000</span></h3>
                      <h2>₦55000 <span style={{fontSize: '14px'}}>* 4 months.</span></h2>
                      <p>To be paid at the beginning of each month for the duration of the training which is 4 months.</p>
                  </div>
              </div> */}
            </div>
            <div className="course_purple-btn">
                <PrimaryBtn link="/graduate-form">Enroll Now</PrimaryBtn>
            </div>
    </div>

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

export default Join;