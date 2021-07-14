import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeedAdvice from "../components/NeedAdvice";
import Qualities from "../components/Qualities";
import Graduates from "../images/graduate.png";
import Loader from "../components/Loader";
const GraduateAccelerator = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    document.title = "Graduate Accelerator Track - Grazac Academy";
    window.scrollTo(0, 0);
      fetch("https://grazacacademy.com/graduate/courses")
        .then((resp) => resp.json())
        .then((resp) => {
          setCourses(resp.data);
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(
            "An error occurred when fetching the available courses, refreshing..."
          );
          //
    });
  
  }, []);



  return (
    <div>
      {courses.length ? (
        <div id="blur">
        <Navbar />
        <div className="gga">
          <div className="gga_hero">
            <div className="container">
              <div className="gga_flex">
                <div className="gga_flex-half1">
                  <div className="gga_hero-text">
                    <div className="gga_hero-text-b">
                      <h1>Graduate Accelerator Plan</h1>
                      <p>
                        We are bridging the gap between unemployment and
                        entry-level jobs in the technology industry. Become
                        employable in just 4 months by joining us today, we
                        provide you with the right mentorship, tools and
                        contents to upskill yourself.
                      </p>
                      <div className="contact_hero-privacy">
                        <a href="#courses" className="download-brochure">
                          Join Us Today!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gga_flex-half2">
                  <img
                    src={Graduates}
                    alt="Graduates"
                    className="gga_hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="course_mode-container">
              <div className="boxes22">
                <div className="">
                  <div className="boxes">
                    <div className="svg-box2">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.4999 12.5001C22.4999 11.8113 21.9399 11.2501 21.2499 11.2501C20.5599 11.2501 20 11.8113 20 12.5001C20 13.1888 20.5599 13.7501 21.2499 13.7501C21.9399 13.7501 22.4999 13.1888 22.4999 12.5001ZM25.0001 12.5002C25.0001 14.5677 23.3176 16.2502 21.2501 16.2502C19.1826 16.2502 17.5001 14.5677 17.5001 12.5002C17.5001 10.4327 19.1826 8.75022 21.2501 8.75022C23.3176 8.75022 25.0001 10.4327 25.0001 12.5002ZM13.7499 8.74985C13.7499 7.3711 12.6286 6.24985 11.2499 6.24985C9.87111 6.24985 8.74986 7.3711 8.74986 8.74985C8.74986 10.1286 9.87111 11.2498 11.2499 11.2498C12.6286 11.2498 13.7499 10.1286 13.7499 8.74985ZM16.25 8.75C16.25 11.5075 14.0075 13.75 11.25 13.75C8.49253 13.75 6.25003 11.5075 6.25003 8.75C6.25003 5.9925 8.49253 3.75 11.25 3.75C14.0075 3.75 16.25 5.9925 16.25 8.75ZM17.425 18.8078C18.5112 17.9678 19.8487 17.5003 21.25 17.5003C24.6962 17.5003 27.5 20.304 27.5 23.7503C27.5 24.4403 26.9412 25.0003 26.25 25.0003C25.5587 25.0003 25 24.4403 25 23.7503C25 21.6828 23.3175 20.0003 21.25 20.0003C20.3962 20.0003 19.585 20.2928 18.93 20.8115C19.61 22.0565 20 23.484 20 25.0003C20 25.6903 19.4412 26.2503 18.75 26.2503C18.0587 26.2503 17.5 25.6903 17.5 25.0003C17.5 21.554 14.6962 18.7503 11.25 18.7503C7.80375 18.7503 5 21.554 5 25.0003C5 25.6903 4.44125 26.2503 3.75 26.2503C3.05875 26.2503 2.5 25.6903 2.5 25.0003C2.5 20.1753 6.42625 16.2503 11.25 16.2503C13.6587 16.2503 15.8412 17.229 17.425 18.8078Z"
                          fill="#773DD3"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="3"
                          width="26"
                          height="24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.4999 12.5001C22.4999 11.8113 21.9399 11.2501 21.2499 11.2501C20.5599 11.2501 20 11.8113 20 12.5001C20 13.1888 20.5599 13.7501 21.2499 13.7501C21.9399 13.7501 22.4999 13.1888 22.4999 12.5001ZM25.0001 12.5002C25.0001 14.5677 23.3176 16.2502 21.2501 16.2502C19.1826 16.2502 17.5001 14.5677 17.5001 12.5002C17.5001 10.4327 19.1826 8.75022 21.2501 8.75022C23.3176 8.75022 25.0001 10.4327 25.0001 12.5002ZM13.7499 8.74985C13.7499 7.3711 12.6286 6.24985 11.2499 6.24985C9.87111 6.24985 8.74986 7.3711 8.74986 8.74985C8.74986 10.1286 9.87111 11.2498 11.2499 11.2498C12.6286 11.2498 13.7499 10.1286 13.7499 8.74985ZM16.25 8.75C16.25 11.5075 14.0075 13.75 11.25 13.75C8.49253 13.75 6.25003 11.5075 6.25003 8.75C6.25003 5.9925 8.49253 3.75 11.25 3.75C14.0075 3.75 16.25 5.9925 16.25 8.75ZM17.425 18.8078C18.5112 17.9678 19.8487 17.5003 21.25 17.5003C24.6962 17.5003 27.5 20.304 27.5 23.7503C27.5 24.4403 26.9412 25.0003 26.25 25.0003C25.5587 25.0003 25 24.4403 25 23.7503C25 21.6828 23.3175 20.0003 21.25 20.0003C20.3962 20.0003 19.585 20.2928 18.93 20.8115C19.61 22.0565 20 23.484 20 25.0003C20 25.6903 19.4412 26.2503 18.75 26.2503C18.0587 26.2503 17.5 25.6903 17.5 25.0003C17.5 21.554 14.6962 18.7503 11.25 18.7503C7.80375 18.7503 5 21.554 5 25.0003C5 25.6903 4.44125 26.2503 3.75 26.2503C3.05875 26.2503 2.5 25.6903 2.5 25.0003C2.5 20.1753 6.42625 16.2503 11.25 16.2503C13.6587 16.2503 15.8412 17.229 17.425 18.8078Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <rect width="30" height="30" fill="#773DD3" />
                        </g>
                      </svg>
                    </div>
                    <h3>Expert Instructors</h3>
                    <p>
                      A wide range of industry leaders that will walk you
                      through your career path.
                    </p>
                  </div>
                </div>
              </div>
              <div className="boxes22">
                <div className="">
                  <div className="boxes">
                    <div className="svg-box2">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.2695 24.44C19.5808 22.5675 20.9445 19.8138 21.217 16.25H24.9108C24.432 20.065 21.7995 23.2125 18.2695 24.44ZM5.08612 16.2498H8.82612C9.08362 19.8273 10.4299 22.5698 11.7586 24.4511C8.21237 23.2298 5.56737 20.0761 5.08612 16.2498ZM11.7972 5.53516C10.4822 7.40766 9.10594 10.1702 8.83094 13.7489H5.08594C5.56844 9.90891 8.23219 6.74516 11.7972 5.53516ZM11.3477 13.7498C11.7302 9.65984 13.8227 6.81234 15.0314 5.49609C16.2814 6.83484 18.3414 9.65609 18.6977 13.7498H11.3477ZM11.3516 16.25H18.7041C18.3216 20.3462 16.2241 23.1937 15.0166 24.51C13.7078 23.1225 11.7003 20.34 11.3516 16.25ZM24.9125 13.7519H21.2225C20.9662 10.1906 19.635 7.45688 18.3125 5.57812C21.8225 6.81563 24.4362 9.95188 24.9125 13.7519ZM27.5 15C27.5 8.12 21.9112 2.5225 15.035 2.5025C15.03 2.5025 15.025 2.50125 15.0188 2.50125C15.0138 2.50125 15.0063 2.5 15 2.5C8.1075 2.5 2.5 8.10875 2.5 15C2.5 21.8925 8.1075 27.5 15 27.5C15.0075 27.5 15.0138 27.4988 15.0188 27.4988C15.0213 27.4988 15.0225 27.5 15.025 27.5C15.0288 27.5 15.0325 27.4975 15.035 27.4975C21.9112 27.4788 27.5 21.88 27.5 15Z"
                          fill="#773DD3"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="2"
                          width="26"
                          height="26"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.2695 24.44C19.5808 22.5675 20.9445 19.8138 21.217 16.25H24.9108C24.432 20.065 21.7995 23.2125 18.2695 24.44ZM5.08612 16.2498H8.82612C9.08362 19.8273 10.4299 22.5698 11.7586 24.4511C8.21237 23.2298 5.56737 20.0761 5.08612 16.2498ZM11.7972 5.53516C10.4822 7.40766 9.10594 10.1702 8.83094 13.7489H5.08594C5.56844 9.90891 8.23219 6.74516 11.7972 5.53516ZM11.3477 13.7498C11.7302 9.65984 13.8227 6.81234 15.0314 5.49609C16.2814 6.83484 18.3414 9.65609 18.6977 13.7498H11.3477ZM11.3516 16.25H18.7041C18.3216 20.3462 16.2241 23.1937 15.0166 24.51C13.7078 23.1225 11.7003 20.34 11.3516 16.25ZM24.9125 13.7519H21.2225C20.9662 10.1906 19.635 7.45688 18.3125 5.57812C21.8225 6.81563 24.4362 9.95188 24.9125 13.7519ZM27.5 15C27.5 8.12 21.9112 2.5225 15.035 2.5025C15.03 2.5025 15.025 2.50125 15.0188 2.50125C15.0138 2.50125 15.0063 2.5 15 2.5C8.1075 2.5 2.5 8.10875 2.5 15C2.5 21.8925 8.1075 27.5 15 27.5C15.0075 27.5 15.0138 27.4988 15.0188 27.4988C15.0213 27.4988 15.0225 27.5 15.025 27.5C15.0288 27.5 15.0325 27.4975 15.035 27.4975C21.9112 27.4788 27.5 21.88 27.5 15Z"
                            fill="white"
                          />
                        </mask>
                      </svg>
                    </div>
                    <h3>Mentorship Access</h3>
                    <p>
                      Set out on the right path by leveraging on the experience
                      of those who have gone ahead.
                    </p>
                  </div>
                </div>
              </div>
              <div className="boxes22">
                <div className="">
                  <div className="boxes">
                    <div className="svg-box2">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.2695 24.44C19.5808 22.5675 20.9445 19.8138 21.217 16.25H24.9108C24.432 20.065 21.7995 23.2125 18.2695 24.44ZM5.08612 16.2498H8.82612C9.08362 19.8273 10.4299 22.5698 11.7586 24.4511C8.21237 23.2298 5.56737 20.0761 5.08612 16.2498ZM11.7972 5.53516C10.4822 7.40766 9.10594 10.1702 8.83094 13.7489H5.08594C5.56844 9.90891 8.23219 6.74516 11.7972 5.53516ZM11.3477 13.7498C11.7302 9.65984 13.8227 6.81234 15.0314 5.49609C16.2814 6.83484 18.3414 9.65609 18.6977 13.7498H11.3477ZM11.3516 16.25H18.7041C18.3216 20.3462 16.2241 23.1937 15.0166 24.51C13.7078 23.1225 11.7003 20.34 11.3516 16.25ZM24.9125 13.7519H21.2225C20.9662 10.1906 19.635 7.45688 18.3125 5.57812C21.8225 6.81563 24.4362 9.95188 24.9125 13.7519ZM27.5 15C27.5 8.12 21.9112 2.5225 15.035 2.5025C15.03 2.5025 15.025 2.50125 15.0188 2.50125C15.0138 2.50125 15.0063 2.5 15 2.5C8.1075 2.5 2.5 8.10875 2.5 15C2.5 21.8925 8.1075 27.5 15 27.5C15.0075 27.5 15.0138 27.4988 15.0188 27.4988C15.0213 27.4988 15.0225 27.5 15.025 27.5C15.0288 27.5 15.0325 27.4975 15.035 27.4975C21.9112 27.4788 27.5 21.88 27.5 15Z"
                          fill="#773DD3"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="2"
                          width="26"
                          height="26"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.2695 24.44C19.5808 22.5675 20.9445 19.8138 21.217 16.25H24.9108C24.432 20.065 21.7995 23.2125 18.2695 24.44ZM5.08612 16.2498H8.82612C9.08362 19.8273 10.4299 22.5698 11.7586 24.4511C8.21237 23.2298 5.56737 20.0761 5.08612 16.2498ZM11.7972 5.53516C10.4822 7.40766 9.10594 10.1702 8.83094 13.7489H5.08594C5.56844 9.90891 8.23219 6.74516 11.7972 5.53516ZM11.3477 13.7498C11.7302 9.65984 13.8227 6.81234 15.0314 5.49609C16.2814 6.83484 18.3414 9.65609 18.6977 13.7498H11.3477ZM11.3516 16.25H18.7041C18.3216 20.3462 16.2241 23.1937 15.0166 24.51C13.7078 23.1225 11.7003 20.34 11.3516 16.25ZM24.9125 13.7519H21.2225C20.9662 10.1906 19.635 7.45688 18.3125 5.57812C21.8225 6.81563 24.4362 9.95188 24.9125 13.7519ZM27.5 15C27.5 8.12 21.9112 2.5225 15.035 2.5025C15.03 2.5025 15.025 2.50125 15.0188 2.50125C15.0138 2.50125 15.0063 2.5 15 2.5C8.1075 2.5 2.5 8.10875 2.5 15C2.5 21.8925 8.1075 27.5 15 27.5C15.0075 27.5 15.0138 27.4988 15.0188 27.4988C15.0213 27.4988 15.0225 27.5 15.025 27.5C15.0288 27.5 15.0325 27.4975 15.035 27.4975C21.9112 27.4788 27.5 21.88 27.5 15Z"
                            fill="white"
                          />
                        </mask>
                      </svg>
                    </div>
                    <h3>Job Placement</h3>
                    <p>
                      Enter the recruitment process with tech companies and take
                      a stride into your dream career.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background1" id="courses">
            <div className="container">
              <div className="gga">
                <div className="course_mode-intro course_mode-intro">
                  <h2>Available Courses</h2>
                </div>
                <div className="gga_container">
                  {courses.length ? (
                    courses.map((item, index) => (
                      <Link
                        to={`/course-detail-graduate?course=${item.slug}`}
                        className="boxes33"
                        key={index}
                      >
                        <div className="gua_cardview">
                          <div className="gua_cardview-box">
                            <img src={item.thumb} alt="course-desc" />
                          </div>
                          <div className="gua_cardview-text">
                            <h4 style={{ color: "rgb(51, 51, 51)" }}>
                              {item.name}
                            </h4>
                            <p>{item.description}</p>
                            <Link
                              to={"/course-detail-graduate?course=" + item.slug}
                            >
                            Learn More
                            </Link>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div>
                      {/* <img src={loader} alt="loader" className="loader" /> */}
                    </div>
                  )}
                  <div className="boxes33">
                    <div className="gua_cardview">
                      <div className="gua_cardview-text">
                        <h4>Can't find a course you are interested in?</h4>
                        <p>
                          We will be glad if you can suggest the course you'd
                          love to learn.
                        </p>
                        <Link to="/contact">
                          <a>Contact Us</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Qualities />
          <NeedAdvice />
        </div>
        <Footer />
      </div>
      ) : (
          <Loader />
      )}
    </div>
  );
};

export default GraduateAccelerator;
