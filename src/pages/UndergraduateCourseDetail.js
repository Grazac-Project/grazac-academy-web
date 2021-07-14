import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import MOT from "../components/MOT";
import Loader from "../components/Loader";

import paper from "../images/svg/paper-ribbon.svg";

const ErrorModal = (props) => {
  return (
    <div className="modal3__bg" onClick={() => props.setShowModal(false)}>
      <div className="modal3__content modal3__content--err">
        <div className="modal3__content--head">
          <div>&nbsp;</div>
          <svg className="modal3__content--svg" viewBox="0 0 10 10" fill="none">
            <path
              d="M4.94263 4.00008L7.80451 1.13814C8.06516 0.877482 8.06516 0.456157 7.80451 0.195496C7.54385 -0.0651653 7.12254 -0.0651653 6.86188 0.195496L4 3.05744L1.13812 0.195496C0.877463 -0.0651653 0.456148 -0.0651653 0.195492 0.195496C-0.065164 0.456157 -0.065164 0.877482 0.195492 1.13814L3.05737 4.00008L0.195492 6.86202C-0.065164 7.12269 -0.065164 7.54401 0.195492 7.80467C0.325486 7.93467 0.496146 8 0.666806 8C0.837465 8 1.00812 7.93467 1.13812 7.80467L4 4.94273L6.86188 7.80467C6.99188 7.93467 7.16254 8 7.33319 8C7.50385 8 7.67451 7.93467 7.80451 7.80467C8.06516 7.54401 8.06516 7.12269 7.80451 6.86202L4.94263 4.00008Z"
              fill="#073041"
            />
          </svg>
        </div>

        <div className="modal3__content--body">
          <h1>Oops...</h1>
          Sorry :( but you can no longer enroll for this course because it is no
          longer available.
          <br />
          <br />
          Check by later.
        </div>
      </div>
    </div>
  );
};

const CourseDetail = (props) => {
  const [course, setCourse] = useState("");
  const [outline, setOutline] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "Course Details - Grazac Academy";
    window.scrollTo(0, 0);
  
    const slug = props.location.search.substring(8);
    fetch(`https://grazacacademy.com/undergraduate/course/details/${slug}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setCourse(resp.data);
        setOutline(JSON.parse(resp.data.outline));
      })
      .catch(() => {
        console.log(
          "An error occurred when fetching course details, refreshing..."
        );
        window.location.reload();
      });
  }, [props.location.search]);

  const toggleModal = (e) => {
    e.preventDefault();
    showModal ? setShowModal(false) : setShowModal(true);
  };

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
                            target="_blank"
                            rel="noreferrer"
                            className="download-brochure"
                          >
                            Download Brochure
                          </a>
                          <Link to="/undergraduate-form">
                            <button>Enroll now</button>
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
                    {/*<img src={loader} alt="loader" className="loader" />*/}
                  </div>
                )}
              </div>
            </div>
          </div>
          <MOT />
          <div className="course_purple">
            <div className="course_purple_txt">
              <p>Pricing</p>
              <h1>100%</h1>
              <p>Discount Available</p>
            </div>
            <div className="course_purple-main">
              <div className="course_purple-main-boxes grad-box">
                <h4>Tuition</h4>
                <h2>FREE</h2>
              </div>
              <div className="course_purple-main-boxes grad-box">
                <h4>Note</h4>
                <p>
                  <span>
                    You are required to pay a sum of ₦10,000 for your certificate
                    and to ensure we secure a befitting environment to aid your
                    learning.{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="course_purple-btn">
              <PrimaryBtn link="/undergraduate-form">Enroll Now</PrimaryBtn>
              <a href="tel:+234806 836 5951" style={{marginTop:"7px"}}>
                <p>Talk to course rep</p>
              </a>
            </div>
          </div>
        </div>
        <Footer />
  
        {showModal && <ErrorModal setShowModal={setShowModal} />}
      </div>
  
      ) : (
          <Loader />
      )}
    </div>
  );

};

export default CourseDetail;
