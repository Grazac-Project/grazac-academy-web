import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Mode from "../../components/Mode";

import Sponsor1 from "../../images/svg/Apple.svg";
import Sponsor2 from "../../images/svg/AWS.svg";
import Sponsor3 from "../../images/svg/Flutterwave.svg";
import Sponsor5 from "../../images/svg/Microsoft.svg";
import Sponsor6 from "../../images/svg/Google.svg";
import whyHire from "../../images/why-hire.png";
import man from "../../images/man.jpg";
import arrow from "../../images/svg/arrow-front.svg";


const Hire = () => {
  React.useEffect(() => {
    document.title = "Hire - Grazac Academy";
    // window.scrollTo(0, 0);
  }, []);

  const whyContent = [
    {
      heading: "Competency",
      paragraph: "Our tech talents are adequately trained to be globally certified and competent to work anywhere in the world whether remotely or on-site."
    },
    {
      heading: "Good knowledge of soft skills",
      paragraph: "Our tech talents are not only vast with tech skills and tools, but also equipped with soft skills that will foster great workplace ethics."
    },
    {
      heading: "Strong Problem solving skill",
      paragraph: "Our tech talents are not just entry levels, they have gone through an in-depth internship program giving them prior workplace experience and they are practical oriented."
    },
    {
      heading: "No Hiring Stress",
      paragraph: "You won't have to sift through hundreds of fresh applications to determine the perfect fit for the position you're looking for."
    }
  ];

  const talents = [
    {
      name:"Jonathan Doe",
      jd:"FrontEnd Developer",
      availability:"available"
    },
    {
      name:"Jonathan Doe",
      jd:"FrontEnd Developer",
      availability:"hired"
    },
    {
      name:"Jonathan Doe",
      jd:"FrontEnd Developer",
      availability:"available"
    },
    {
      name:"Jonathan Doe",
      jd:"FrontEnd Developer",
      availability:"available"
    },
    {
      name:"Jonathan Doe",
      jd:"FrontEnd Developer",
      availability:"hired"
    },
    {
      name:"Jonathan Doe",
      jd:"FrontEnd Developer",
      availability:"hired"
    }
  ]



  return (
    <div>
      <Navbar/>
      <div className="hire">
        <div className="hire_hero">
          <Container>
            <Row>
              <Col md={6}>
                <div>
                  <h1>Hire top tech talents from our pool</h1>
                  <p>Attracting the best tech talent is competitive, let’s pull them out from our pool.</p>
                  <button>Hire from Us</button>
                </div>
              </Col>
              <Col md={6}>
              </Col>
            </Row>
          </Container>
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

        <div className="hire_why">
          <Container>
            <Row>
              <Col md={6}>
                <img src={whyHire} alt="why-hire" />
              </Col>
              <Col md={6}>
                <div className="hire_why-content">
                  <h2>Why Top Companies <br/>Hire from Us</h2>
                  {whyContent.map((item, idx) => (
                    <div key={idx}>
                      <p className="hire_why-content-heading">{item.heading}</p>
                      <p className="hire_why-content-paragraph">{item.paragraph}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="hire_talents">
          <h2>Our Top Talents</h2>
          <div className="hire_talents-define">
            <p>You determine the starting points, we provide the best possible interception to achieve the goals.</p>
          </div>
          <div className="hire_talents-cards">
              <Container>
                <Row>
                    {talents.map((item, idx) => (
                      <Col md={4} key={idx}>
                        <div className="hire_talents-cards-box">
                          <div className="hire_talents-cards-box-image">
                            <img src={man} alt="talent" />
                          </div>
                          <div className="hire_talents-cards-box-text">
                            <h4>{item.name}</h4>
                            <p className="hire_talents-cards-box-text-1">{item.jd}</p>
                            <div className={item.availability==="hired" ? "hire_talents-cards-box-text-hired" 
                                            : "hire_talents-cards-box-text-available"}
                            >
                              <p>{item.availability}</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Container>
              <button>View more<img src={arrow} alt="alt" /></button>
          </div>
        </div>
      </div>
      <Mode />
      <Footer />
    </div>
  );
};

export default Hire;