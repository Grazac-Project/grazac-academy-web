import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import VitualHero from "../images/virtual/vitualHero.svg";
import Slider1 from "../images/virtual/slider1.svg";
import Slider2 from "../images/virtual/slider2.svg";
import Slider3 from "../images/virtual/slider3.svg";
import Slider4 from "../images/virtual/slider4.svg";
import Slider5 from "../images/virtual/slider5.svg";
import Content1 from "../images/virtual/content1.svg";
import Content2 from "../images/virtual/content2.svg";
import Content3 from "../images/virtual/content3.svg";
import Content4 from "../images/virtual/content4.svg";
import Content5 from "../images/virtual/content5.svg";
import { useState, useEffect } from "react";
import { format, differenceInSeconds } from "date-fns";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo } from "react";
import product from "../images/product.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import android from "../images/android.png";
import product_management from "../images/product_management.png";

const VirtualLanding = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const targetDate = new Date("2023-12-31T23:59:59");

  const memoizedTargetDate = useMemo(
    () => targetDate || new Date(),
    [targetDate]
  );

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(memoizedTargetDate)
  );

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const difference = Math.max(0, targetDate.getTime() - now.getTime()) / 1000; // Convert milliseconds to seconds
    return Math.floor(difference);
  }

  useEffect(() => {
    // Check if targetDate is defined before using it
    if (targetDate) {
      const intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(targetDate));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="Vitual">
      <Navbar top={true} />
      <div style={{ height: 10 }}></div>
      <section className="Vitual_hero">
        <div className="Vitual_text">
          <h1>
            <span>Learn from anywhere</span>
            <br />
            Elevate Your Skills with Our Live Remote Classes
          </h1>
          <p>
            Unlock global expertise by joining our Online Bootcamp, and learn
            from industry leaders from 19+ Countries to forge your ideal career
            path
          </p>
          <Link to="/login">
            <button
              className="Vitual_btn"
              style={{ width: "172px", textAlign: "center" }}
            >
              <div>View Courses</div>
            </button>
          </Link>
        </div>
        <div className="Vitual_hero_girl">
          <img src={VitualHero} alt="hero" />
        </div>
      </section>
      <section className="Vitual_countdown">
        <p>
          <span className="Visual_date">January 2024 Cohort</span>
          <br /> Classes commence on January 15th
        </p>
        <div className="Vitual_countdown_container" targetDate={targetDate}>
          <div className="Vitual_countdown_container_duration">{`${days} days`}</div>
          <div className="Vitual_countdown_container_duration">{`${hours} hours`}</div>
          <div className="Vitual_countdown_container_duration">{`${minutes} minutes`}</div>
          <div className="Vitual_countdown_container_duration">{`${seconds} seconds`}</div>
        </div>
      </section>
      <section className="Vitual_class">
        <div className="Vitual_class_container">
          <h1>How our Virtual Classes work</h1>
          <div className="Vitual_class_container_stepFlex">
            <div className="Vitual_class_container_steps">
              <button>step 1</button>
              <h5>Select a Course</h5>
              <p>
                Choose from a wide array of tech courses tailored to your
                interests and goals, enter into the world of technology and
                enhance your skills with our comprehensive selection
              </p>
            </div>
            <div className="Vitual_class_container_steps">
              <button>step 2</button>
              <h5>Select a Course</h5>
              <p>
                Choose from a wide array of tech courses tailored to your
                interests and goals, enter into the world of technology and
                enhance your skills with our comprehensive selection
              </p>
            </div>{" "}
            <div className="Vitual_class_container_steps">
              <button>step 3</button>
              <h5>Select a Course</h5>
              <p>
                Choose from a wide array of tech courses tailored to your
                interests and goals, enter into the world of technology and
                enhance your skills with our comprehensive selection
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        
          <div className="Vitual_slider">
            <div className="Vitual_slider_img">
              <img src={Slider1} alt="slider" />
            </div>
            <div className="Vitual_slider_2">
              <div className="Vitual_slider_2_content">
                <h1>Why Virtual Class?</h1>
                <p>
                  Choosing virtual classes with us opens up a world of
                  possibilities for your education. Here are some key benefits
                  you can enjoy
                </p>
                <div className="Vitual_slider_2_content_box">
                  <img src={Content1} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="Vitual_slider">
            <div className="Vitual_slider_img">
              <img src={Slider2} alt="slider" />
            </div>
            <div className="Vitual_slider_2">
              <div className="Vitual_slider_2_content">
                <h1>Why Virtual Class?</h1>
                <p>
                  Choosing virtual classes with us opens up a world of
                  possibilities for your education. Here are some key benefits
                  you can enjoy
                </p>
                <div className="Vitual_slider_2_content_box">
                  <img src={Content2} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="Vitual_slider">
            <div className="Vitual_slider_img">
              <img src={Slider3} alt="slider" />
            </div>
            <div className="Vitual_slider_2">
              <div className="Vitual_slider_2_content">
                <h1>Why Virtual Class?</h1>
                <p>
                  Choosing virtual classes with us opens up a world of
                  possibilities for your education. Here are some key benefits
                  you can enjoy
                </p>
                <div className="Vitual_slider_2_content_box">
                  <img src={Content3} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="Vitual_slider">
            <div className="Vitual_slider_img">
              <img src={Slider4} alt="slider" />
            </div>
            <div className="Vitual_slider_2">
              <div className="Vitual_slider_2_content">
                <h1>Why Virtual Class?</h1>
                <p>
                  Choosing virtual classes with us opens up a world of
                  possibilities for your education. Here are some key benefits
                  you can enjoy
                </p>
                <div className="Vitual_slider_2_content_box">
                  <img src={Content4} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="Vitual_slider">
            <div className="Vitual_slider_img">
              <img src={Slider5} alt="slider" />
            </div>
            <div className="Vitual_slider_2">
              <div className="Vitual_slider_2_content">
                <h1>Why Virtual Class?</h1>
                <p>
                  Choosing virtual classes with us opens up a world of
                  possibilities for your education. Here are some key benefits
                  you can enjoy
                </p>
                <div className="Vitual_slider_2_content_box">
                  <img src={Content5} alt="img" />
                </div>
              </div>
            </div>
          </div>
      </section>
      <div className="landing__intern">
          <div className="landing__intern--content">
            <div className="landing__bottom--text">
              <h2>Available Courses</h2>
            </div>
            <div className="landing__slider-text1">
              <p>
                Learn any of these tech courses today for free and pay back when
                you are hired.
              </p>
            </div>
            <div className="gga_container">
              <Link
                to={`/course-detail-graduate?course=product-designing-ui-ux`}
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={product} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Product Design (UI/UX)
                    </h4>
                    <p>
                      User interface design or user interface engineering is the
                      design of user interfaces for machines and software, such
                      as computers, home appliances, mobile devices, and other
                      electronic devices, with the focus on maximizing usability
                      and the user experience.
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=product-designing-ui-ux`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to={`/course-detail-graduate?course=frontend-web-development`}
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
                      development is the practice of producing HTML, CSS and
                      JavaScript for a website or Web Application so that a user
                      can see and interact with them directly.
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=frontend-web-development`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to={`/course-detail-graduate?course=backend-web-development`}
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
                      news feeds and web push notifications.
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=backend-web-development`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to={`/course-detail-graduate?course=mobile-application-development`}
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
                      lets you build apps for iOS and Android — and even the web
                      and desktop platforms like macOS, Windows and Linux — all
                      from a single codebase.
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=mobile-application-development`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>

              <Link
                to={`/course-detail-graduate?course=product-management`}
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
                      Product management is the process of strategically guiding
                      a company's product development, market launch, ongoing
                      support and improvement of a product. It is basically
                      making a product the best version it can be and
                      fine-tuning a company’s product in order to make it appeal
                      to the organization’s target audience and customers
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=product-management`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to={`/course-detail-graduate?course=machine-learning`}
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
                      Product management is the process of strategically guiding
                      a company's product development, market launch, ongoing
                      support and improvement of a product. It is basically
                      making a product the best version it can be and
                      fine-tuning a company’s product in order to make it appeal
                      to the organization’s target audience and customers
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=machine-learning`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to={`/course-detail-graduate?course=java`}
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={java} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Java
                    </h4>
                    <p>
                      Product management is the process of strategically guiding
                      a company's product development, market launch, ongoing
                      support and improvement of a product. It is basically
                      making a product the best version it can be and
                      fine-tuning a company’s product in order to make it appeal
                      to the organization’s target audience and customers
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=java`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to={`/course-detail-graduate?course=data-analysis`}
                className="boxes33"
              >
                <div className="gua_cardview">
                  <div className="gua_cardview-box">
                    <img src={data_analysis} alt="course-desc" />
                  </div>
                  <div className="gua_cardview-text">
                    <h4 style={{ color: "rgb(51, 51, 51)" }}>
                      Data Analysis
                    </h4>
                    <p>
                      Product management is the process of strategically guiding
                      a company's product development, market launch, ongoing
                      support and improvement of a product. It is basically
                      making a product the best version it can be and
                      fine-tuning a company’s product in order to make it appeal
                      to the organization’s target audience and customers
                    </p>
                    <Link
                      to={`/course-detail-graduate?course=data-analysis`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <Link to="/signup">
              <div
                className="nav__btn"
                style={{ width: "130px", margin: "auto", textAlign: "center" }}
                // onClick={showToast}
              >
                <div className="nav__btn--text">Apply Now</div>
              </div>
            </Link>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default VirtualLanding;
