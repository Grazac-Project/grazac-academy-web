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

      <Footer />
    </div>
  );
};

export default VirtualLanding;
