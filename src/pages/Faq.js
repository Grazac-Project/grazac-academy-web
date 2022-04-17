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
              <Accordion defaultActiveKey="0">
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
                          Visit www.grazacacademy.com and click the “apply now” button to create an account. Login to your dashboard to complete your application.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="11">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>After registration, what next?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="11">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Once you have successfully registered, an email will be sent to you detailing the next steps of the registration process. Ensure that you provide a valid email address and keep an eye on your inbox.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="12">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Do I have to be physically present to register?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="12">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        No. Registration can be done online but applicants have to be physically present to write the assessment test.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="13">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Do I need to have any previous experience or knowledge before coming to learn?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="13">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        Not at all. All our courses are designed to help people from any educational background and experience level, achieve a successful career in tech.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="14">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Are classes virtual or physical?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="14">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        Classes are 100% physical and this is to ensure students get maximum support and mentorship from their tutors.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="15">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What is the duration of the program?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="15">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        The program runs for at least 6 months (3 months of immersive training and 3 months internship)
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr/>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>How much do I pay back after getting a job?</h4>
                      <MdKeyboardArrowUp size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        The sum of 1500 dollars is to be paid back within the period of 18-months after securing a job.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Will I be given the certificate upon graduation or upon successful completion of tuition?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Certificates will be given to students upon successful graduation.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                      Will the certificate be recognized locally and globally?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        Yes. Grazac is a corporate organization incorporated under the COMPANIES AND ALLIED MATTERS act 1990 and the company is limited by shares with RC 1643778.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What is the actual cost of learning with Grazac Academy?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        The actual cost of learning is 1200 dollars if you pay your tuition before classes commence. If you wait till you get a job, you pay back the sum of 1500 dollars within a period of 18 months.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What happens if I choose to withdraw from Grazac Academy a few months into the training?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        Students have the opportunity to withdraw within three weeks into the training with no tuition obligations. If students make it to the 4th week, tuition obligations and penalties stand.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Can I pay tuition upfront?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        Yes, you can pay.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What are the available courses ?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Product Design</p>
                        <p>Product Management</p>
                        <p>Front-end Web Development (HTML, CSS, Javascript [ReactJS] )</p>
                        <p>Back-end Web Development with NodeJS</p>
                        <p>Mobile Application Development </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Do I qualify to enroll as an Undergraduate?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        No. This Cohort is strictly for graduates.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="100">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Is a job guaranteed for me after taking a course?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="100">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                        Yes, we outsource all successful students to companies and fix them with jobs within 9-12 months of learning.
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
                  <span>08068365951</span> or click on the button below to
                  chat with us.
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
