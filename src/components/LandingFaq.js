import { Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const LandingFaq = () => {
      const handleFaq = (e) => {
        let svg = e.target.parentElement.querySelector("svg");
        if (e.target.nodeName === "path") {
          svg = e.target.parentElement.parentElement.querySelector("svg");
        }
        svg.classList.toggle("faq-icon_transition");
      };

  return (
    <div>
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
                          #650,000
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
    </div>
  )
}

export default LandingFaq