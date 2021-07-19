import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "infinite-react-carousel";
import Mode from "../components/Mode";

import undergraduate from "../images/undergraduate.png";
import student from "../images/student.png";
import Abdullahi from "../images/testimonial/abdullahi.jpeg";
import Adedamola from "../images/testimonial/adedamola.jpeg";
import Bosun from "../images/testimonial/bosun.jpg";
import heart from '../images/svg/heart.svg';
import idea from '../images/svg/idea.svg';
import energy from '../images/svg/renewable-energy.svg';


const Hire = () => {
  React.useEffect(() => {
    document.title = "Hire - Grazac Academy";
    window.scrollTo(0, 0);
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


  return (
    <div>
      <Navbar/>
        <div className="gua_hero">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="gua_hero-text">
                  <div className="gua_hero-text-b">
                    <h1>Hire Top Talents from Grazac Academy</h1>
                    <p>
                      We are bridging the gap between unemployment and entry - level jobs in the technology industry.
                    </p>
                    <div className="contact_hero-privacy" style={{position:'relative'}}>
                      <input type="text" className="hire_search" placeholder="Search skills, titles..." />
                      <input type="submit" className="hire_search-button"/>
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

        <div style={{boxSizing:'border-box', margin:'80px 0'}}>
          <Container>
            <Row>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="hire_dev">
                  <div className="hire_dev-picture">
                    <img src={student} alt="profile" />
                  </div>
                  <h4>Samuel Peter</h4>
                  <p className="hire_dev-grey">Product Designer</p>
                  <p className="hire_dev-purple">View Profile</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="landing__slider">
          <Slider arrows={true}>
            {content.map((item) => (
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
            ))} 
          </Slider>
        </div>

        <div className="" style={{textAlign:'center', margin: '70px 0 100px'}}>
          <div className="container">
              <div className="course_wwd-intro">
                  <p style={{color:'#773dd3'}}>Our Approach</p>
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
                              <h3>Energetic</h3>
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
                              <h3>Innovative</h3>
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
                              <h3>Social Heart</h3>
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

export default Hire;