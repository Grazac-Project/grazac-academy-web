import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import MOT from "../components/MOT";

import paper from "../images/svg/paper-ribbon.svg";
import Loader from "../components/Loader";

const CourseDetail = (props) => {
  const [course, setCourse] = useState("");
  const [outline, setOutline] = useState([]);

  React.useEffect(() => {
    document.title = "Course Details - Grazac Academy";
    window.scrollTo(0, 0);
    const slug = props.location.search.substring(8);
    fetch(`https://grazacacademy.com/graduate/course/details/${slug}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        setCourse(resp.data);
        setOutline(JSON.parse(resp.data.outline));
      })
      .catch((error) => {
        console.log(error);
        console.log(
          "An error occurred when fetching course details, refreshing..."
        );
        // window.location.reload();
      });
  }, []);

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
                          <Link to="/login">
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
