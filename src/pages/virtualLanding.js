import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import VitualHero from "../images/virtual/VitualHero.png";
import VitualHero from "../images/virtual/virtual-lady.png";
import Browse from "../images/virtual/browse.png";
import Click from "../images/virtual/click.png";
import Plan from "../images/virtual/plan.png";
import Forward from "../images/virtual/forward.png";
import Down from "../images/virtual/down.png";
import { useState, useEffect } from "react";
import { format, differenceInSeconds } from "date-fns/locale/en-US";
import { useMemo } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AvailableTrackVirtual from "../components/AvailableTrackVirtual/AvailableTrackVirtual";
import VirtualClass from "../components/VirtualClass/VirtualClass";

const VirtualLanding = () => {
  const [buttonColor, setButtonColor] = useState("initialColor");
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Adjust the speed as needed
    cssEase: "linear",
    arrows: false,
  };
  const history = useHistory();
  // const productDesignHandler = () =>{
  //   sessionStorage.setItem(
  //     "learning_mode",
  //     JSON.stringify({
  //       class_option: 'virtual',
  //     })
  //   );
  //   history.push('/course-detail-graduate?course=product-designing-ui-ux')
  // }
  const courseDetailsHandler = (goTo) => {
    sessionStorage.setItem(
      "learning_mode",
      JSON.stringify({
        class_option: "Virtual",
      })
    );
    history.push(goTo);
  };
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setButtonColor("colorAfterClick");
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setButtonColor("colorAfterClick");
    }
  };

  const scrollToTarget = () => {
    const targetElement = document.querySelector(".landing__intern--content");

    // Check if the element is found
    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
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
          <h4 className="Vitual_span">Learn Virtually</h4>

          <h1>From the comfort of your homes, Upskill in tech</h1>
          <p>
            We are your Virtual Learning Companion! Learn with us from anywhere
            around the globe. Our expert Instructors are highly qualified and
            experienced educators ensuring you acquire valuable skills and
            knowledge that transcend borders
          </p>

          <button
            className="Vitual_btn1"
            // style={{ width: "172px", textAlign: "center" }}
            onClick={scrollToTarget}
          >
            <div>View Courses</div>
          </button>
        </div>
        <div className="Vitual_hero_girl">
          <img src={VitualHero} alt="hero" />
        </div>
      </section>
      {/* <section className="Vitual_countdown">
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
      </section> */}
      <section className="Vitual_class">
        <div className="Vitual_class_container">
          <h1>Join our virtual class in 3 easy steps</h1>
          <div className="Vitual_class_container_stepFlex">
            <div className="Vitual_class_container_steps">
              <img src={Browse} alt="browse" />
              <h4>Browse Available Courses</h4>
              <p>
                Explore course offerings, read descriptions, curriculum,
                prerequisites.
              </p>
            </div>
            <div className="image-container">
              <img src={Forward} alt="forward arrow" className="forward" />
              <img src={Down} alt="forward arrow" className="down" />
            </div>
            <div className="Vitual_class_container_steps">
              <img src={Click} alt="click" />
              <h4>Click on Apply Now</h4>
              <p>
                Choose your ideal course, reach out for guidance where
                necessary,{" "}
              </p>
            </div>
            <div className="image-container">
              <img src={Forward} alt="forward arrow" className="forward" />
              <img src={Down} alt="forward arrow" className="down" />
            </div>
            <div className="Vitual_class_container_steps">
              <img src={Plan} alt="plan" />
              <h4>Make a Payment Plan</h4>
              <p>
                Complete your assessment, get course recommendations, choose
                your payment
              </p>
            </div>
          </div>
          {/* <div className="Vitual_class_container_stepFlex">
            <div className="Vitual_class_container_steps">
              <button>step 1</button>
              <h5>Browse Available Courses</h5>
              <p>
                Navigate to course information and registration, explore course
                catalogue to see available courses, ensure to read through the
                course descriptions, curriculum, prerequisites, and other
                information related to the course you are interested in.
              </p>
            </div>
            <div className="Vitual_class_container_steps">
              <button>step 2</button>
              <h5>Click on “Enroll” or “Sign Up”</h5>
              <p>
                Once you have made your choice on the best course for you (you
                can contact our programs manager for clarification and guide on
                what you can learn if you are indecisive), create an account
                providing your name, email address and set your password.A link
                will be sent to your mail to confirm your sign up, after which
                you are required to take an assessment to help us ensure you are
                fit for your desired tech course.
              </p>
            </div>
            <div className="Vitual_class_container_steps">
              <button>step 3</button>
              <h5>Make a Payment Plan</h5>
              <p>
                At the successful completion of your assessment, you’ll be
                notified of your success or directed to speak to our programs
                manager to guide you through picking a tech course that is more
                suitable for you. After which you are required to chose a
                payment plan and make payment, wait for a confirmation mail from
                us indicating the success of your enrollment, we will then send
                you an email with instructions on how to access your course
                platform. You can then log in and start your virtual tech
                learning
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <VirtualClass />
      </section>
      <AvailableTrackVirtual/>

      <Footer />
    </div>
  );
};

export default VirtualLanding;
