import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MOT from "../components/MOT";

import Loader from "../components/Loader";
import Fone from "../images/session-fone.png";
import Mobile from "../images/session-mobile.png";
import Stroke from "../images/stroke.png";
import { PopupButton } from "react-calendly";
import { academyApiUrl } from "../api/dashboard/apikit";

const CourseDetail = (props) => {
  const [course, setCourse] = useState(null);
  const [outline, setOutline] = useState([]);
  const [mode, setMode] = useState("");
  const [status, setStatus] = useState("loading");
  const search = props.location.search;
  const slug = new URLSearchParams(search).get("course");

  useEffect(() => {
    let active = true;
    setCourse(null);
    setOutline([]);
    setMode("");
    setStatus("loading");
    document.title = "Course Details - Grazac Academy";
    window.scrollTo(0, 0);

    let selectedMode;
    try {
      const savedMode = JSON.parse(sessionStorage.getItem("learning_mode"));
      selectedMode = savedMode && savedMode.class_option;
    } catch {
      selectedMode = null;
    }

    if (selectedMode !== "Virtual" && selectedMode !== "Onsite") {
      setStatus("mode-needed");
      return;
    }

    setMode(selectedMode);
    if (!slug || !slug.trim()) {
      setStatus("missing-course");
      return;
    }

    const getCourse = async () => {
      try {
        const endpoint =
          selectedMode === "Virtual" ? "getCourseVirtual" : "getCourse";
        const response = await fetch(
          `${academyApiUrl}/api/v1/user/${endpoint}/${encodeURIComponent(slug)}`
        );
        if (response.status === 404) {
          if (active) {
            setStatus("missing-course");
          }
          return;
        }
        if (!response.ok) {
          throw new Error("Course request failed");
        }
        const result = await response.json();
        if (!active) {
          return;
        }
        if (!result || !result.details) {
          setStatus("missing-course");
          return;
        }
        const details = result.details;
        if (
          typeof details.name !== "string" ||
          !details.name.trim() ||
          (details.description !== null &&
            typeof details.description !== "string")
        ) {
          throw new Error("Invalid course details");
        }

        let courseOutline = [];
        try {
          const parsedOutline =
            typeof details.outline === "string"
              ? JSON.parse(details.outline)
              : details.outline;
          if (
            Array.isArray(parsedOutline) &&
            parsedOutline.every(
              (item) =>
                item &&
                typeof item.topic === "string" &&
                typeof item.summary === "string"
            )
          ) {
            courseOutline = parsedOutline;
          }
        } catch {
          courseOutline = [];
        }
        setCourse(details);
        setOutline(courseOutline);
        setStatus("ready");
      } catch {
        if (active) {
          setStatus("error");
        }
      }
    };
    getCourse();

    return () => {
      active = false;
    };
  }, [search, slug]);

  return (
    <div>
      {status === "ready" ? (
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
                            {typeof course.brochure === "string" && course.brochure && (
                              <a
                                href={course.brochure}
                                className="download-brochure"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download Brochure
                              </a>
                            )}
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
                    <p role="status">The course outline is not available right now.</p>
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
      ) : status === "loading" ? (
        <Loader />
      ) : (
        <div id="blur">
          <Navbar />
          <div className="course">
            <div className="course_hero">
              <div className="container">
                <div className="course_hero-text">
                  <div className="course_hero-text-b" role="status">
                    <h1>
                      {status === "mode-needed"
                        ? "Choose your learning mode"
                        : status === "missing-course"
                        ? "Course not found"
                        : "Unable to load this course"}
                    </h1>
                    <p>
                      {status === "mode-needed"
                        ? "Choose an Onsite or Virtual course to view its details."
                        : status === "missing-course"
                        ? "This course is not available for the selected learning mode."
                        : "We could not load the course details. Please try again later."}
                    </p>
                    <div className="contact_hero-privacy">
                      <Link to="/#availableTrack">
                        <button>Browse Onsite courses</button>
                      </Link>
                      <Link to="/virtual#virtualTrack">
                        <button>Browse Virtual courses</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
