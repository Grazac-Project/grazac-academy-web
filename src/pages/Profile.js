import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";

import project from "../images/project.png";
import student from "../images/student.png";
import back from "../images/svg/arrow-back.svg";

const Profile = () => {
  React.useEffect(() => {
    document.title = "Profile - Grazac Academy";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Navbar/>
        <div className="gua_hero">
          <Container>
            <Row>
              <Col md={6}>
                <div className="hire_profile">
                  <div>
                    <div className="hire_profile-text1">
                      <img src={back} />
                      <h5>STUDENT PROFILE</h5>
                    </div>
                    <h3>Samuel Peter</h3>
                    <p>Product Designer at Grazac</p>
                    <h5>COURSE TAKEN</h5>
                    <p>Product Designing (UI/UX)</p>
                    <h5>KEY SKILLS LEARNT</h5>
                    <p>
                      <ul>
                        <li>Responsive web designs </li>
                        <li>Responsive web designs</li>
                        <li>Responsive web designs</li>
                        <li>Responsive web designs</li>
                        <li>Responsive web designs</li>
                      </ul>
                    </p>
                    <div className="contact_hero-privacy" style={{marginBottom:'50px'}}>
                        <a className="download-brochure">
                          Download CV
                        </a>
                        <Link to="/lead">
                          <button>Contact</button>
                        </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                  {/* <div className="hire_profile-image">
                    <img
                      src={student}
                      alt="student"
                      className="gua_hero-image"
                    />
                  </div> */}
              </Col>
            </Row>
          </Container>
        </div>


        <div style={{boxSizing:'border-box', margin:'80px 0'}}>
          <Container>
            <h3>Projects</h3>
            <Row>
              <Col md={6}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={project} alt="profile" />
                  </div>
                  <h4>Project Name 1</h4>
                  <p className="hire_dev-grey">A brief, clear and consise description of the project been worked by each of the students.</p>
                  <p className="hire_dev-purple">View Project</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={project} alt="profile" />
                  </div>
                  <h4>Project Name 1</h4>
                  <p className="hire_dev-grey">A brief, clear and consise description of the project been worked by each of the students.</p>
                  <p className="hire_dev-purple">View Project</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      <Mode />
      <Footer />
    </div>
  );
};

export default Profile;