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
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>How do I register?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Visit www.grazacacademy.com and click the “apply now”
                          button to create an account. Login to your dashboard
                          to complete your application.{" "}
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>After registration, what next?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Once you have successfully registered, an email will
                          be sent to you detailing the next steps of the
                          registration process. Ensure that you provide a valid
                          email address and keep an eye on your inbox.{" "}
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
                          Nigeria. Address : Suite 106, PROHUB, Salawu Olabode
                          Avenue, Ewang Road, Idi-aba, Abeokuta.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Do I have to be physically present to register?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          No. Assessment will be done online. However, you will
                          be required to be physically present for an interview.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                        Do I need to have any previous experience or knowledge
                        before coming to learn?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Not at all. All our courses are designed to help
                          people from any educational background and experience
                          level, achieve a successful career in tech.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>Are classes virtual or physical?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Both. You can choose to learn physically (majorly
                          recommended and tailored for graduates) or you can
                          choose to learn virtually (majorly recommended and
                          tailored for undergraduates).
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>What is the duration of the program?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          6 months, if you choose to learn physically (3 months
                          immersive training and 3 months internship). And 2
                          months, if you choose to learn virtually.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                        Will the certificate be recognized locally and globally?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes. Grazac is a corporate organization incorporated
                          under the COMPANIES AND ALLIED MATTERS act 1990 and
                          the company is limited by shares with RC 1643778.
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
                        What is the actual cost of learning at Grazac Academy
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p style={{ fontSize: "16px" }}>
                          If you decide to learn onsite, we have three payment
                          options that you can choose from.
                        </p>
                        <p>
                          <strong>Pay at once:</strong> You can pay your tuition
                          fee all at once with this plan. If you choose this,
                          you are expected to pay N500,000.
                        </p>
                        <p>
                          <strong>Pay in installments:</strong> We also have a
                          plan that allows you to pay in installments. If you
                          choose this, you are expected to pay N100,000
                          immediately and spread the rest over 5 months of your
                          training. This comes with a 10% interest on the
                          tuition fee.
                        </p>
                        <p>
                          <strong>
                            Learn now. Pay later (‘pay as you earn’):
                          </strong>{" "}
                          You can also decide to learn now and start paying back
                          when you get a job after your training. If you choose
                          this, you would be required to pay a non-refundable
                          legal fee of N50,000 immediately. After your training,
                          you are expected to pay back the sum of 1500 dollars
                          (which would be equivalent to the black dollar rate at
                          the time that you start paying back) 18 months after
                          securing a job, following our repayment procedure.
                        </p>
                        <p style={{ fontSize: "16px" }}>
                          However, If you decide to learn online, you would be
                          required to pay a fixed price of N90,000, once.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                        Will I be given the certificate upon graduation or upon
                        successful completion of tuition?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Certificates will be given to students upon successful
                          graduation.
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr />
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    <div className="landing_faq-question" onClick={handleFaq}>
                      <h4>
                        Will the certificate be recognized locally and globally?
                      </h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes. Grazac is a corporate organization incorporated
                          under the COMPANIES AND ALLIED MATTERS act 1990 and
                          the company is limited by shares with RC 1643778.
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
