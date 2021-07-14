import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";

import undergraduate from "../images/undergraduate.png";
import heart from '../images/svg/heart.svg';
import idea from '../images/svg/idea.svg';
import energy from '../images/svg/renewable-energy.svg';


const Profile = () => {
  React.useEffect(() => {
    document.title = "Profile - Grazac Academy";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Navbar/>
        <div className="gua_hero">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="gua_hero-text">
                  <div className="gua_hero-text-b">
                    <h4>Hire Top Talents from Grazac Academy</h4>
                    <p>
                      We are bridging the gap between unemployment and entry - level jobs in the technology industry.
                    </p>
                    <div className="contact_hero-privacy">
                      {/**search input */}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={undergraduate}
                  alt="undergraduate"
                  className="gua_hero-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hire">
          <Container style={{border:'2px solid blue'}}>
            <Row>
              <Col lg={4}>
                <div style={{width:"100%", margin:'0', boxSizing:'border-box', height:'200px', border:'2px solid red'}}></div>
              </Col>
              <Col lg={4}>
                <div style={{width:"100%", margin:'0', boxSizing:'border-box', height:'200px', border:'2px solid red'}}></div>
              </Col>
              <Col lg={4}>
                <div style={{width:"100%", margin:'0', boxSizing:'border-box', height:'200px', border:'2px solid red'}}></div>
              </Col>
              <Col lg={4}>
                <div style={{width:"100%", margin:'0', boxSizing:'border-box', height:'200px', border:'2px solid red'}}></div>
              </Col>
              <Col lg={4}>
                <div style={{width:"100%", margin:'0', boxSizing:'border-box', height:'200px', border:'2px solid red'}}></div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="" style={{textAlign:'center', margin: '70px 0 100px'}}>
          <div className="container">
              <div className="course_wwd-intro">
                  <h4>How It Works</h4>
                  <h2>What you stand to gain</h2>
                  <p>Your path to employment and relevance in the digital age is optimized to the highest degree of success.</p>
              </div>
              <div className="course_mode-container">
                  <div className="boxes22">
                      <div className="">
                          <div className="boxes">
                              <div className="svg-box1">
                                  <img src={energy} alt="energy"/>
                              </div>
                              <h3>Internship opportunities </h3>
                              <p>Get a chance to work with our amazing team and partner companies on different projects to jump start your career.</p>
                          </div>
                      </div>
                  </div>
                  <div className="boxes22">
                      <div>
                          <div className="boxes">
                              <div className="svg-box1">
                                  <img src={idea} alt="energy"/>
                              </div>
                              <h3>Recruitment</h3>
                              <p>Get hired in an organization of talented people to utilize your skills and experience to launch valuable products that solve problems for the world at large.</p>
                          </div>
                      </div>
                  </div>
                  <div className="boxes22">
                      <div>
                          <div className="boxes">
                              <div className="svg-box1">
                                  <img src={heart} alt="energy"/>
                              </div>
                              <h3>Certification</h3>
                              <p>Get a recognised certificate that serves as a proof that you are skilled enough to work in any organisation in or outside Nigeria.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <Mode />
      <Footer />
    </div>
  );
};

export default Profile;