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
                  <Accordion.Item eventKey="1">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Do I have to be physically present to register?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          No, registration is to be done online.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="2">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Are classes virtual or onsite?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Classes would be onsite or virtually, depending on the mode of learning you prefer.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="3">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4> What is the duration of the program?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          The program is for a duration of 12 months, consisting of 6 months immersive training and 6 months internship.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="4">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Do I qualify to enrol as an Undergraduate?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes,please. However, as an undergraduate, you are strongly advised to choose our virtual learning mode due to its flexibility.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="5">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Do you offer any certification after the course?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes, students who complete our courses will receive a virtual and hardcopy certificate of completion
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="6">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>What is the cost of learning at Grazac Academy</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                      <p>
                        For our physical classes, the cost for all courses is #1,000,000
                      </p>
                      <p>While for our virtual classes, the cost is $200. To get more information 
                        about our pricing, <a href="#">Click here</a></p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="7">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Do all courses cost the same price?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Yes, all our courses are cost at the same price, the only variation in 
                          price depends on your mode of learning (physical or virtual)`
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="8">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>What is the format of the certificate offered by Grazac Academy?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Our cerfiticates offered are in both in physical print and 
                          digital format which can easily be shared online.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="9">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>What qualifications do your instructors have?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          All of our instructors are experienced professional with a proven track record 
                          in the tech industry
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="10">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Are there any additional materials i need to be successful in the course?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          Most courses require you to have aceess to laptop and internet connection. 
                          Some of the courses also require addtional materials.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="11">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>How long is each course?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          The course length is eight months duration for the physical with an additional 
                          four months class and 3 months for the virtual class.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="12">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>How are the courses taught?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          The virtual classes are taught via live classes and through a combination of 
                          content, readings, quizzes and projects.
                        </p>
                        <p>
                          While our physical classes are taught at the academy, by qualified instructors 
                          with assignments, assessments and projects
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="13">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>Would the academy get me a job?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          No,Grazac Academy would not be taking the responsibility of getting you a job. 
                          What the academy offers is job opportunities
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="14">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4> Can I take two courses at a time?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          No, this is strongly discouraged because we require you to be fully focused and 
                          dedicated to any course of choice.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <hr />
                <Card>
                  <Accordion.Item eventKey="15">
                  <Accordion.Header onClick={handleFaq}>
                    <div className="landing_faq-question" >
                      <h4>What course is right for me?</h4>
                      <MdKeyboardArrowDown size="2rem" color="black" />
                    </div>
                  </Accordion.Header>
                    <Accordion.Body>
                      <div className="landing_faq-answer">
                        <p>
                          You can call us (or send us a Whatsapp message) on +234 806 836 5951 to get 
                          clarification on the best course for you.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                {/* <hr /> */}
              </Accordion>
              {/* <hr /> */}
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

  
  // return (
  //   <div>
  //     <div className="faq_hero">
  //       <Navbar />
  //       <div className="faq_hero_content">
  //         <h1>
  //           Frequently Asked <br />
  //           Questions
  //         </h1>
  //         <p>
  //           To better help you learn more about Grazac Academy, we’ve compiled
  //           the following Frequently Asked Questions (FAQs).
  //         </p>
  //       </div>
  //     </div>
  //     <div>
  //       {/* FAQ section */}
  //       <div className="landing_faq">
  //         <div className="container">
  //           <div>
  //             <Accordion defaultActiveKey="1">
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="1">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Do I have to be physically present to register?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="1">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         No, registration is to be done online.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="2">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Are classes virtual or onsite?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="2">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         Classes would be onsite or virtually, depending on the mode of learning you prefer.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="3">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>
  //                       What is the duration of the program?
  //                     </h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="3">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         The program is for a duration of 12 months,
  //                           consisting of 6 months  immersive training and 6 months internship.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="4">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Do I qualify to enrol as an Undergraduate?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="4">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                       Yes,please. However, as an undergraduate, you are strongly 
  //                       advised to choose our virtual learning mode due to its flexibility.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="5">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Do you offer any certification after the course?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="5">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         Yes, students who complete our courses will receive a virtual and hardcopy 
  //                         certificate of completion
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="6">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>What is the cost of learning at Grazac Academy</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="6">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         For our physical classes, the cost for all courses is #1,000,000
  //                       </p>
  //                       <p>While for our virtual classes, the cost is $200. To get more information 
  //                         about our pricing, <a>Click here</a></p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="7">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Do all courses cost the same price?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="7">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         Yes, all our courses are cost at the same price, the only variation in 
  //                         price depends on your mode of learning (physical or virtual)
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="8">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>What is the format of the certificate offered by Grazac Academy?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="8">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>Our cerfiticates offered are in both in physical print and 
  //                         digital format which can easily be shared online.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="9">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>What qualifications do your instructors have?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="9">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         All of our instructors are experienced professional with a proven track record 
  //                         in the tech industry
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               {/* new card */}
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="10">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Are there any additional materials i need to be successful in the course?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="10">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         Most courses require you to have aceess to laptop and internet connection. 
  //                         Some of the courses also require addtional materials.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               {/* new card */}
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="11">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>
  //                       How long is each course?
  //                     </h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="11">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         The course length is eight months duration for the physical with an additional 
  //                         four months class and 3 months for the virtual class.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="12">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>How are the courses taught?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="12">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         The virtual classes are taught via live classes and through a combination of 
  //                         content, readings, quizzes and projects.
  //                       </p>
  //                       <p>While our physical classes are taught at the academy, by qualified instructors 
  //                         with assignments, assessments and projects</p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="13">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>Would the academy get me a job?</h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="13">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         No,Grazac Academy would not be taking the responsibility of getting you a job. 
  //                         What the academy offers is job opportunities
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="14">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>
  //                       Can I take two courses at a time?
  //                     </h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="14">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         No, this is strongly discouraged because we require you to be fully focused and 
  //                         dedicated to any course of choice.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <hr />
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="15">
  //                   <div className="landing_faq-question" onClick={handleFaq}>
  //                     <h4>
  //                       What course is right for me?
  //                     </h4>
  //                     <MdKeyboardArrowDown size="2rem" color="black" />
  //                   </div>
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="15">
  //                   <Card.Body>
  //                     <div className="landing_faq-answer">
  //                       <p>
  //                         You can call us (or send us a Whatsapp message) on +234 806 836 5951 to get 
  //                         clarification on the best course for you.
  //                       </p>
  //                     </div>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //             </Accordion>
  //             <hr />
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="gua_advice">
  //       <div className="container">
  //         <div className="gua_advice-box">
  //           <div className="boxes55">
  //             <img
  //               src={lady}
  //               alt="undergraduate"
  //               className="gua_advice-box-img"
  //             />
  //           </div>
  //           <div className="boxes55">
  //             <div className="gua_advice-box-text">
  //               <h2>Still Have A Question?</h2>
  //               <p>
  //                 Do you need further clarification? Call{" "}
  //                 <span>08068365951</span> or click on the button below to chat
  //                 with us.
  //               </p>
  //               <a href="tel:+2348068365951">
  //                 <button>Call us now</button>
  //               </a>
  //               <a href="https://wa.link/w8e0xs">
  //                 <button className="second-button">Chat with us</button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer />
  //   </div>
  // );

};

export default Faq;
