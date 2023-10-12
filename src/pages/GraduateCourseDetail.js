import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import MOT from "../components/MOT";

import paper from "../images/svg/paper-ribbon.svg";
import Loader from "../components/Loader";
import Fone from "../images/session-fone.png";
import Mobile from "../images/session-mobile.png";
import Stroke from "../images/stroke.png";
import { PopupButton } from "react-calendly";


const CourseDetail = (props) => {
  const [course, setCourse] = useState("");
  const [outline, setOutline] = useState([]);
  

  React.useEffect(() => {
    document.title = "Course Details - Grazac Academy";
    window.scrollTo(0, 0);
    const slug = props.location.search.substring(8);
    console.log(slug);

    // fetch(`https://api.grazacacademy.com/api/v1/graduate/${slug}`)
    fetch(`https://grazac-admin-backend-d48022f1cdb6.herokuapp.com/api/v1/user/getCourse/${slug}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        setCourse(resp.details);
        setOutline(JSON.parse(resp.details.outline));
      })
      .catch((error) => {
        console.log(error)
        // window.location.reload();
      });
  }, []);
  // console.log(course);



  return (
    <div>
      {outline.length ? (
        <div id="blur">
          <Navbar />
          <div className="course">
            <div className="course_hero">
              <div className="container">
                {course ? (
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="course_hero-text">
                          <div className="dot-class">
                            <div className="dot"></div>
                            <div className="class-type">Physical</div>
                          </div>
                        <div className="course_hero-text-b">
                          <h1>{course.name}</h1>
                          <p>{course.description}</p>
                          <div className="contact_hero-privacy">
                            <a
                              href={course.brochure}
                              className="download-brochure"
                              target="_blank"
                            >
                              Download Brochure
                            </a>
                            <Link to="/signup">
                              <button>Apply now</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* <img src={paper} alt="academy" className="gga_hero-image" /> */}
                    </div>
                  </div>
                ) : (
                  <div>
                    {/*<img src={loader} alt="loader" className="loader" />*/}
                  </div>
                )}
              </div>
            </div>
            <div className="course_learn">
              <div className="container">
                <div className="course_wwd-intro">
                  <h4>GRAZAC ACADEMY</h4>
                  <h2>What you'll Learn</h2>
                </div>
                <div className="course_learn-main">
                  {outline.length ? (
                    outline.map((item, index) => (
                      <div key={index}>
                        <div className="course_learn-main-list">
                          <div className="box1">
                            <h3>{index < 10 ? "0" + index : index}</h3>
                          </div>
                          <div className="box2">
                            <h3>{item.topic}</h3>
                          </div>
                          <div className="box3">
                            <p>{item.summary}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))
                  ) : (
                    <div>
                      {/* <img src={loader} alt="loader" className="loader" /> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <MOT />
            <section className="book-session">
              <div className="book-session-container">
                <div className="book-session-container-mobile">
                    <img src={Mobile} alt="fone" />
                </div>
                <div className="book-session-container-text">
                  <h5>Have more questions?</h5>
                  <p>You can book a <span>30-minutes</span> session with the <span>Course manager</span></p>
                  {/* <button onClick={() => setIsOpen(true)}>Book a Session</button> */}
                  <PopupButton
                    url="https://calendly.com/mansurolatunji"
                    rootElement={document.getElementById("root")}
                    text="Book a Session"
                  />
                  <img src={Stroke} alt="stroke" />
                </div>
                <div className="book-session-container-pic">
                  <img src={Fone} alt="fone" />
                </div>
              </div>    
            </section>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CourseDetail;
