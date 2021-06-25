import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Accordion, Card} from 'react-bootstrap';
// import { cn } from "../utils";
import Slider from "infinite-react-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import PrimaryBtn from "../components/PrimaryBtn";

import Abdullahi from "../images/testimonial/abdullahi.jpeg";
import Adedamola from "../images/testimonial/adedamola.jpeg";
import Bosun from "../images/testimonial/bosun.jpg";
import Grazac from "../images/svg/logo-round.svg";
import Video from "../images/landing-video2.mp4";
import Object from "../images/svg/objects.svg";
import poster from "../images/Grazac-website/IMG_8403.JPG";

import badge from "../images/svg/badge.svg";
import ex from "../images/svg/x-mark.svg";
import Sponsor1 from "../images/svg/Apple.svg";
import Sponsor2 from "../images/svg/AWS.svg";
import Sponsor3 from "../images/svg/Flutterwave.svg";
import Sponsor5 from "../images/svg/Microsoft.svg";
import Sponsor6 from "../images/svg/Google.svg";

import Card1 from "../images/svg/card1.svg";
import Card2 from "../images/svg/card2.svg";

const Landing = () => {
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    document.title = "Welcome to Grazac Academy";
    let mediaPlayer = document.querySelector("#video");
    mediaPlayer.controls = false;
    mediaPlayer.play();

    //this gives the homepage spacing on top for the notification
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `80px`;
  },[]);

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

  const handleModal = () => {
    setShowModal(false);
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `0px`;
  }
  return (
    <div className="landing">
      {showModal && (
        <div className="infomodal">
          <div className="infomodal_content">
            <img src={badge} alt="" className="infomodal_badge" />
            <p>
              Grazac Graduate Accelerator Program enrollment is opening by June 25th. 
              <a className="infomodal_content-link" href="https://grazacacademy.com/graduate-accelerator-plan">Learn more</a>
            </p>
            <Link to="/graduate-accelerator-plan">
              <button>Learn more</button>
            </Link>
            <img
              src={ex}
              alt=""
              onClick={handleModal}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
      <div className="landing__header">
        <Navbar top={true} />
        <img src={Object} className="bg-img" alt="ccc" />
        <div style={{ height: 10 }}></div>

        <div className="landing__text">
          <h1>
            Upskilling You For The <span>Future</span> Of Work
          </h1>
          <p>
            Learn valuable technology skills with us, we strongly believe the
            future of work will be skill based. Join us to build a career in
            tech and get tutored by industry leaders who will walk you through
            the path of becoming highly valuable and employable{" "}
          </p>
        </div>
        <a href="/#tracks">
          <div
            className="nav__btn"
            style={{ width: "130px", margin: "auto", textAlign: "center" }}
          >
            <div className="nav__btn--text">Get Started</div>
          </div>
        </a>
      </div>

      <div className="landing__video">
        <video
          id="video"
          width="320"
          height="240"
          autoplay
          loop
          muted
          poster={poster}
        >
          <source src={Video} type="video/mp4" />
        </video>
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

      <div className="landing__cards" id="tracks">
        <div className="landing__cards--container">
          <div className="landing__bottom--text">
            <div className="landing__bottom--text--right">
              <h1>Get Ready To Grow With us </h1>
            </div>
          </div>

          <div className="landing__card--box">
            <div className="landing__card landing__card--1">
              <img src={Card1} alt="illustration" />
              <h3>
                <span>Graduate </span>
                <br />
                Accelerator Plan
              </h3>
              <p>
                An immersive program that gives you the opportunity to build a
                career and get a job in the tech industry.
              </p>

              <div className="landing__btn">
                <PrimaryBtn yellow link="/graduate-accelerator-plan">
                  Learn More
                </PrimaryBtn>
              </div>
            </div>

            <div className="landing__card landing__card--2">
              <img src={Card2} alt="illustration" />
              <h3>
                <span>Undergraduate </span>
                <br />
                Accelerator Plan (FREE)
              </h3>
              <p>
                Set the pace for a bright future as an undergraduate by
                acquiring technology skills now.
              </p>
              <div className="landing__btn">
                <PrimaryBtn link="/undergraduate-accelerator-plan">
                  Learn More
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__intern">
        <div className="landing__intern--content">
          <div>&nbsp;</div>
          <div className="landing__bottom--text landing__bottom--text-2">
            <div className="landing__intern--text">
              <h1>
              Tech is Vast. Let's help you with directions.
              </h1>
              <p>
              Are you looking to step into the field of tech but don't know what to learn or how to begin? We can help you.
              Tech is a broad field, and there are a lot of interesting pathways and directions you can venture into. You need all the clarity you can get so you can make informed decisions.

              Consult us for free
              </p>
              <div className="landing__btn--2">
                {/* <PrimaryBtn link="/">Enroll Now</PrimaryBtn> */}
                <a href="/#tracks">
                  <div className="nav__btn nav__btn-flex ">
                    <a className="nav__btn--text" href="tel:+2348068365951" style={{marginRight:'20px'}}>Call Us Now</a>
                    <a href="https://wa.link/w8e0xs" ><div className="nav__btn--text1">Chat With Us</div></a>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="landing__intern--btn">
            <PrimaryBtn link="/internship">Enroll Now</PrimaryBtn>
          </div> */}
        </div>
      </div>

      <div className="landing__discover">
        <div className="landing__bottom--text landing__bottom--text-2">
          <div className="landing__bottom--text--right">
            <h1>
              We are trusted by entrepreneurs and hiring managers globally.
            </h1>
            <p>
              We guarantee you impact driven candidates who will impact your
              bottom lines positively.
            </p>
          </div>
        </div>

        <div className="landing__discover--container">
          <div className="landing__discover--images">
            <div className="landing__discover--images-left">
              <div></div>
              <div></div>
            </div>
            <div className="landing__discover--images-right">
              <div></div>
            </div>
          </div>

          <div className="landing__discover--list">
            <div className="landing__discover--list-item">
              <h2>01</h2>
              <div>
                <h3>Enroll</h3>
                <p>
                  Set yourself up for success by registering for any of our
                  courses that fits your passion and career.
                </p>
              </div>
            </div>

            <div className="landing__discover--list-item">
              <h2>02</h2>
              <div>
                <h3>Learn</h3>
                <p>
                  Get trained by world class facilitators. We will provide you
                  with the right mentorship, tools and content you need to be
                  the best in your choosing career.
                </p>
              </div>
            </div>

            <div className="landing__discover--list-item">
              <h2>03</h2>
              <div>
                <h3>Get Hired</h3>
                <p>
                  Join the workforce of the future as you get connected with
                  career coaches and potential employers.
                </p>
              </div>
            </div>
            <div className="landing__discover--list-item"></div>
            <div className="landing__discover--list-item"></div>
          </div>
        </div>
      </div>
      
      {/* FAQ section commented out till content is ready */}
      <div className="landing_faq">
          <div className="container">
            <h1>FAQs - Frequently Asked Questions:</h1>
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="landing_faq-question">
                      <h4>What is Grazac Academy?</h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Grazac Academy is closing the gap between youths and entry-level jobs in the technology industry. We strongly believe the job market for youths has changed and the future of work will be skill-based.</p>
                        <p>We are approaching this in two ways:</p>
                        <p>Grazac Academy Graduate Accelerator - This plan is for tertiary institutions graduates who have full time to build a career in tech. This plan has been arranged in a way to prepare them for work.</p>
                        <p>Grazac Academy Undergraduate Accelerator - This plan is to equip undergraduates in their institutions, we believe the earlier the better and we want to prepare them for life after school by upskilling them while they are still in school.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr/>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="landing_faq-question">
                      <h4>When was the academy established?</h4>
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
                <hr/>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="landing_faq-question">
                      <h4>How many students have graduated from your academy?</h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Excluding our partnership with Haptics.ng in 2019 to execute Google project of upskilling 
Nigerians on Digital skills where we trained about 500 youths, we have impacted over 2,000 
lives through our trainings, meetups and events.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr/>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <div className="landing_faq-question">
                      <h4>Where is the academy located?</h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Our headquarter is located at Abeokuta, Ogun State, Nigeria.</p>
                        <p>Address: Suite 106, PROHUB, Salawu Olabode Avenue, Ewang Road, Idi-aba, Abeokuta.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr/>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <div className="landing_faq-question">
                      <h4>How do I enroll in the academy?</h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>Visit <a href="https://www.grazacacademy.com">www.grazacacademy.com</a> to enroll for your preferred course.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <hr/>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <div className="landing_faq-question">
                      <h4>What are the payment options?</h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <div className="landing_faq-answer">
                        <p>We have three (2) payment options for our Gradaute Accelerator, you can either pay once or pay installmentally.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <hr/>
              <Link to="/faq"><p className="landing_faq-link">More frequently asked questions</p></Link>
            </div>
          </div>
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

      <div className="landing__bottom" style={{ paddingBottom: 0 }}>
        <div className="landing__bottom--text">
          <div className="landing__bottom--text--right">
            <h1>Get Upskilled For The Future Of Work</h1>
            <p>
              We will provide you with the tools, resources, facilities, content
              and mentorship needed for your relevance in the future of work.
            </p>
            <div className="landing__btn--2">
                {/* <PrimaryBtn link="/">Enroll Now</PrimaryBtn> */}
                <a href="/#tracks">
                  <div className="nav__btn nav__btn-flex ">
                    <a className="nav__btn--text" href="https://wa.link/w8e0xs">Chat with Us</a>
                  </div>
                </a>
            </div>
          </div>

          <div className="landing__bottom--text--left">
            <img src={Grazac} alt="img" />
          </div>
        </div>
      </div>

      <Mode />
      <Footer />
    </div>
  );
};

export default Landing;
