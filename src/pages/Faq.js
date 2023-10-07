import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import lady from "../images/Grazac-website/IMG_8440.JPG";

const Faq = () => {
  React.useEffect(() => {
    document.title = "FAQs - Grazac Academy";
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
    <div>
      <div className="faq_hero">
        <Navbar />
        <div className="faq_hero_content">
          <h1>
            Frequently Asked <br />
            Questions
          </h1>
          <p>
            To better help you learn more about Grazac Academy, we’ve compiled
            the following Frequently Asked Questions (FAQs).
          </p>
        </div>
      </div>
      <div>
        {/* FAQ section */}
        <div className="landing_faq">
          <div className="container">
            <div>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What is Grazac Graduate Academy?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <div>
                            <p>Grazac Academy is closing the gap between youths and entry-level jobs 
                              in the technology industry. We strongly believe the job market for youths 
                              has changed and the future of work will be skill-based.
                            </p>
                            <p>
                              We are approaching this in two ways:
                            </p>
                            <p>
                              Grazac Academy Graduate Accelerator - This plan is for tertiary institutions graduates who have full time to build a career in tech. 
                              This plan has been arranged in a way to prepare them for work.
                            </p>
                            <p>
                              Grazac Academy Undergraduate Accelerator - This plan is to equip undergraduates in their institutions, we believe the earlier the better and we want 
                              to prepare them for life after school by upskilling them while they are still in school.
                            </p>    
                          </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
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
                            consisting of 8 months  immersive training and 4 months internship.
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
                      <h4>Would the academy get me a job?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          We offer our exceptional students job opportunities in our hiring network 
                          within 9-12 months of learning to enter the recruitment process in securing 
                          their dream job. In essence, we equip all our students with the level of 
                          competency employers are looking for so they can secure the job they really desire.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Can I take two courses at a time?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          No, this is strongly discouraged because we require 
                          you to be fully focused and dedicated to any course of choice.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What course is right for me?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          You can call us (or send us a Whatsapp message) on <span className='faq-number'>+234 806 836 5951</span> to 
                          get clarification on the best course for you
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Why Grazac Academy is the best for you?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <div>
                          <div>
                            <h6>There are no learning barriers</h6>
                              <p>
                                We make starting a career in tech accessible to anyone. 
                                Whether you are a graduate or you are an undergraduate; whether you 
                                are young or old, and no matter your experience level - our learning model, 
                                courses, and community has been designed to make you feel comfortable and 
                                fully engaged in the learning process.
                            </p>
                          </div>
                          <div>
                            <h6>Access to Mentorship and Support</h6>
                            <p>
                                You gain access to a wide range of industry experts that will walk you 
                                through your career path and increase your visibility to potential employers.
                            </p>
                          </div>
                          <div>
                            <h6>Recognized Certification</h6>
                            <p>
                                You get a recognized certificate that serves as a proof that you are skilled enough 
                                to work in any organization within or outside Nigeria.
                            </p>
                          </div>
                          <div>
                            <h6>Peer-to-Peer Sessions</h6>
                            <p>
                                Knowledge sharing with other fellows and gain different dimensions of problem solving.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Got more questions?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          You can book a session with our online customer representatives 
                          via <span className="faq-whatsapp">wa.me/011248756</span> or drop a mail to grazacacademy@gmail.com
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="13">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What are the available courses ?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="13">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Product Design</p>
                        <p>Product Management</p>
                        <p>
                          Front-end Web Development (HTML, CSS, Javascript
                          [ReactJS] )
                        </p>
                        <p>Back-end Web Development with NodeJS</p>
                        <p>
                          Mobile Application Development (Android and Flutter){" "}
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                {/* new card */}
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="14">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Do I qualify to enroll as an Undergraduate?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="14">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes. You can enroll as an undergraduate. However, if
                          you are an undergraduate, you are strongly advised to
                          choose to learn virtually. In fact, our virtual
                          classes are specifically tailored for you.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                {/* new card */}
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="15">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Would the academy get me a job?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="15">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          We match students with job opportunities in our hiring
                          network within 9-12 months of learning to enter the
                          recruitment process in securing their dream job. In
                          essence, we equip all our students with the level of
                          competency employers are looking for so they can
                          secure the job they really desire. However, the
                          cohort's best student (s) would be connected to a
                          job/paid internship
                          (remote/fulltime/hybrid/international/local).
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                {/* new card */}
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="16">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                        Do I need to have any previous experience or knowledge
                        before coming to learn?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="16">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Not at all. All our courses are designed to help
                          people from any educational background and experience
                          level achieve a successful career in IT.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="17">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Can I take two courses at a time?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="17">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          No, you cannot. This is because we want you to be
                          focused and dedicated to a particular course and give
                          it your best.{" "}
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="18">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What course is right for me?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="18">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          You can call us (or send us a Whatsapp message) on
                          +234 806 836 5951
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="19">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                        What are the added benefits of learning at Grazac
                        Academy?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="19">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Asides from equipping you with the level of competency
                          employers are looking for so you can secure the job
                          you really desire, we also provide placement for
                          support services such as interview coaching, CV/
                          LinkedIn profile reviews, Salary negotiation sessions,
                          provision of reference letters, etc. You would also
                          have access to be mentored by professionals in the
                          industry, and access to a community of like minds that
                          would foster your learning, commitment, and practice.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="gua_advice">
        <div className="container">
          <div className="gua_advice-box">
            <div className="boxes55">
              <img
                src={lady}
                alt="undergraduate"
                className="gua_advice-box-img"
              />
            </div>
            <div className="boxes55">
              <div className="gua_advice-box-text">
                <h2>Still Have A Question?</h2>
                <p>
                  Do you need further clarification? Call{" "}
                  <span>08068365951</span> or click on the button below to chat
                  with us.
                </p>
                <a href="tel:+2348068365951">
                  <button>Call us now</button>
                </a>
                <a href="https://wa.link/w8e0xs">
                  <button className="second-button">Chat with us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
