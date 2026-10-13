import React, { useEffect, useState, useRef } from "react";
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
import { academyApiUrl } from "../api/dashboard/apikit";
// import axios from 'axios'

const CourseDetail = (props) => {
  const [course, setCourse] = useState("");
  const [outline, setOutline] = useState([]);
  const [mode, setMode] = useState("");
  const [url, setUrl] = useState("");

  // Use a ref for tracking unmounted state
  // const isUnmounted = useRef(false);

  const slug = props.location.search.substring(8);
  // console.log(slug)
  useEffect(() => {
    const getInfo = async () => {
      document.title = "Course Details - Grazac Academy";
      window.scrollTo(0, 0);
      const savedData = await sessionStorage.getItem("learning_mode");
      const trial = await JSON.parse(savedData);
      await setMode(trial.class_option);

      // Cleanup function

      // return () => {
      //   isUnmounted.current = true;
      // };
    };
    getInfo();
  }, []);

  console.log(mode);
  console.log(outline);

  useEffect(() => {
    // Define the fetchData function
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result)
        await setCourse(result.details);
        // console.log(JSON.parse(result.details.outline))
        await setOutline(JSON.parse(result.details.outline));
        // if (!isUnmounted.current) {
        //   setCourse(result.details);
        // }
      } catch (error) {
        // console.log("error:", error);
        // Handle errors
        // You can also check if it's unmounted before setting state here
        // if (!isUnmounted.current) {
        //   // Handle error or reload the page
        // }
      }
    };

    const urlSelect = async () => {
      // Construct the URL based on the mode
      let urlBuild = "";
      // console.log(mode)
      if (mode === "Virtual") {
        urlBuild = `${academyApiUrl}/api/v1/user/getCourseVirtual/${slug}`;
      } else if (mode === "Onsite") {
        urlBuild = `${academyApiUrl}/api/v1/user/getCourse/${slug}`;
      }

      setUrl(urlBuild);
      // console.log(urlBuild)
      // console.log(url);
      // Fetch data
      if (urlBuild) {
        fetchData(urlBuild);
      }
    };
    urlSelect();
  }, [slug, mode]);

  // React.useEffect(() => {
  //   document.title = "Course Details - Grazac Academy";
  //   window.scrollTo(0, 0);
  //   const slug = props.location.search.substring(8);
  //   console.log(slug)

  //   const savedData = sessionStorage.getItem("learning_mode");
  //   const trial = JSON.parse(savedData)
  //   console.log(trial)
  //   setMode(trial.class_option);
  //   console.log(trial.class_option)

  // console.log(course);
  // console.log(mode);
  // console.log(url)

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
                          <div className="class-type">{mode}</div>
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
                      <div>
                        {/* <img src={paper} alt="academy" className="gga_hero-image" /> */}
                      </div>
                    </div>
                  </div> //not sure yet
                ) : (
                  <div>
                    {/*<img src={loader} alt="loader" className="loader" />*/}
                  </div>
                )}
                {/* </div>    */}
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
                            <h1>{index < 10 ? "0" + index : index}</h1>
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
                  <p>
                    You can book a <span>30-minutes</span> session with the{" "}
                    <span>Course manager</span>
                  </p>
                  {/* <button onClick={() => setIsOpen(true)}>Book a Session</button> */}
                  <PopupButton
                    url="https://calendly.com/grazacacademy/book-a-session-with-the-grazac-academy-program-manager"
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
