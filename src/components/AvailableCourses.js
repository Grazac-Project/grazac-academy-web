import product from "../images/product.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import android from "../images/android.png";
import product_management from "../images/product_management.png";
import machine_learning from "../images/machine_learning.png";
import java from "../images/java.png";
import data_analysis from "../images/data_analysis.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AvailableCourses = () => {
  const history = useHistory();
    const courseDetailsHandler = (goTo) => {
    sessionStorage.setItem(
      "learning_mode",
      JSON.stringify({
        class_option: "Physical",
      })
    );
    history.push(goTo);
  };

  return (
            <div className="landing__intern">
              <div className="landing__intern--content">
                <div className="landing__bottom--text">
                  <h2>Available Courses</h2>
                </div>
                <div className="landing__slider-text1">
                  <p>
                    Explore a wide range of tech courses designed to empower you
                    with the skills and knowledge you need to thrive in the
                    ever-evolving tech industry.
                  </p>
                </div>
                <div className="gga_container">
                  <div
                    className="boxes33"
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=product-designing-ui-ux`
                      )
                    }
                  >
                    {/* <Link
                    to={`/course-detail-graduate?course=product-designing-ui-ux`}
                    className="boxes33"
                  > */}
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={product} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Product Design (UI/UX)
                        </h4>
                        <p>
                          Product design is a multifaceted field that involves
                          creating and improving products to meet user needs and
                          business goals. You'll gain knowledge in designing user
                          interfaces that...
                        </p>
                        {/* <Link
                          to={`/course-detail-graduate?course=product-designing-ui-ux`}
                        >
                          Learn More
                        </Link> */}
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=product-designing-ui-ux`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=frontend-web-development`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={frontend} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Front-End Development
                        </h4>
                        <p>
                          Front-end web development, also known as client-side
                          development is the practice of producing HTML, CSS, and
                          JavaScript for a website or Web Application so that a
                          user...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=frontend-web-development`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=backend-web-development`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={backend} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Back-End Development
                        </h4>
                        <p>
                          Node.js is useful for developing applications that require
                          a persistent connection from the browser to the server and
                          is often used for real-time applications such as chat,
                          news...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=backend-web-development`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=mobile-application-development`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={android} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Mobile App Developement
                        </h4>
                        <p>
                          Flutter is an incredible user interface (UI) toolkit that
                          allows you to build apps for iOS, Android, and even the
                          web & desktop platforms like macOS, Windows, and Linux;
                          all from...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=mobile-application-development`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
    
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=product-management`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={product_management} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Product Management
                        </h4>
                        <p>
                          Grazac product management course will help you understand
                          the process of strategically guiding a company's product
                          development, market launch, ongoing support, and...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=product-management`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=machine-learning`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={machine_learning} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Machine learning with Python
                        </h4>
                        <p>
                          Machine Learning with Python is a comprehensive journey
                          that equips you with the skills and knowledge needed to
                          build, evaluate, and deploy machine learning models for...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=machine-learning`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(`/course-detail-graduate?course=java`)
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={java} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>Java</h4>
                        <p>
                          Java is a versatile programming language with a wide range
                          of applications, from web development to mobile app
                          development, big data processing, and more...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=java`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=data-analysis`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={data_analysis} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>Data Analysis</h4>
                        <p>
                          Data Analysis involves using different tools and
                          techniques to scrutinize and probe large volumes of data
                          with the goal of making informed solving problems,
                          business decisions, and...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=data-analysis`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      courseDetailsHandler(
                        `/course-detail-graduate?course=blockchain-development-solidity`
                      )
                    }
                    className="boxes33"
                  >
                    <div className="gua_cardview">
                      <div className="gua_cardview-box">
                        <img src={data_analysis} alt="course-desc" />
                      </div>
                      <div className="gua_cardview-text">
                        <h4 style={{ color: "rgb(51, 51, 51)" }}>
                          Blockchain Development with Solidity
                        </h4>
                        <p>
                          This course covers blockchain technology fundamentals and
                          smart contract development using Solidity, preparing you
                          for a career...
                        </p>
                        <span
                          onClick={() =>
                            courseDetailsHandler(
                              `/course-detail-graduate?course=blockchain-development-solidity`
                            )
                          }
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/signup">
                  <div
                    className="nav__btn"
                    style={{ width: "150px", margin: "auto", textAlign: "center" }}
                    // onClick={showToast}
                  >
                    <div className="nav__btn--text">Apply Now</div>
                  </div>
                </Link>
              </div>
              </div>
  )
}

export default AvailableCourses