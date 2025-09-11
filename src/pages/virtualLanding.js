import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import VitualHero from "../images/virtual/VitualHero.png";
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
import Browse from "../images/virtual/browse.png";
import Click from "../images/virtual/click.png";
import Plan from "../images/virtual/plan.png";
import Forward from "../images/virtual/forward.png";
import Down from "../images/virtual/down.png";
import { useState, useEffect } from "react";
import { format, differenceInSeconds } from "date-fns/locale/en-US";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo } from "react";
import product from "../images/product.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import android from "../images/android.png";
import product_management from "../images/product_management.png";
import machine_learning from "../images/machine_learning.png";
import java from "../images/java.png";
import data_analysis from "../images/data_analysis.png";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
  const courseDetailsHandler = (goTo) =>{
    sessionStorage.setItem(
      "learning_mode",
      JSON.stringify({
        class_option: 'Virtual',  
      })
    );
    history.push(goTo)
  }
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

          <h1>Elevate Your Skills with Our Live Remote Classes</h1>
          <p>
            Unlock global expertise by joining our Online Bootcamp, and learn
            from industry leaders from 19+ Countries to forge your ideal career
            path
          </p>

          <button
            className="Vitual_btn"
            style={{ width: "172px", textAlign: "center" }}
            onClick={scrollToTarget}
          >
            <div>View Courses</div>
          </button>
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
          <h1>Join our virtual class in 3 easy steps</h1>
          <div className="Vitual_class_container_stepFlex">
            <div className="Vitual_class_container_steps">
              <img src={Browse} alt="browse" />
              <h4>Browse Available Courses</h4>
              <p>Explore course offerings, read descriptions, curriculum, prerequisites.</p>
            </div>
            <div className='image-container'>
              <img src={Forward} alt="forward arrow" className="forward"/>
              <img src={Down} alt="forward arrow" className="down"/>
            </div>
            <div className="Vitual_class_container_steps">
              <img src={Click} alt="click" />
              <h4>Click on Apply Now</h4>
              <p>Choose your ideal course, reach out for guidance where necessary, </p>
            </div>
            <div className='image-container'>
              <img src={Forward} alt="forward arrow" className="forward"/>
              <img src={Down} alt="forward arrow" className="down"/>
            </div>
            <div className="Vitual_class_container_steps">
              <img src={Plan} alt="plan" />
              <h4>Make a Payment Plan</h4>
              <p>Complete your assessment, get course recommendations, choose your payment</p>
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
        <div className="Vitual_arrow" style={{ textAlign: "center" }}>
          <button className="Vitual_bttn" onClick={goToPrev}>
            <i>&#129120;</i>
          </button>
          <button onClick={goToNext}>
            <i>&#129122;</i>
          </button>
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div className="Vitual_container">
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </Slider>
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
            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=product-designing-ui-ux`)}
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
                    Product design is a multifaceted field that involves creating and improving products to meet user needs and business goals. 
                      You'll gain knowledge in designing user interfaces that...
                  </p>
                  {/* <Link
                    to={`/course-detail-graduate?course=product-designing-ui-ux`}
                  >
                    Learn More
                  </Link> */}
                  <span
                    onClick={() => courseDetailsHandler(`/course-detail-graduate?course=product-designing-ui-ux`)}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() =>courseDetailsHandler(`/course-detail-graduate?course=frontend-web-development`)}
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
                    Front-end web development, also known as client-side development is the practice of producing HTML, CSS, and 
                      JavaScript for a website or Web Application so that a user...
                  </p>
                  <span
                  onClick={() => courseDetailsHandler(`/course-detail-graduate?course=frontend-web-development`)}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=backend-web-development`)}
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
                      Node.js is useful for developing applications that require a persistent connection from 
                      the browser to the server and is often used for real-time applications such as chat, news...
                  </p>
                  <span
                    onClick={() => courseDetailsHandler(`/course-detail-graduate?course=backend-web-development`)}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=mobile-application-development`)}
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
                      Flutter is an incredible user interface (UI) toolkit that allows you to build apps for iOS, 
                      Android, and even the web & desktop platforms like macOS, Windows, and Linux; all from...
                  </p>
                  <span
                    onClick={() =>courseDetailsHandler(`/course-detail-graduate?course=mobile-application-development`)}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=product-management`)}
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
                      Grazac product management course will help you understand the process of strategically 
                      guiding a company's product development, market launch, ongoing support, and...
                  </p>
                  <span
                    onClick={() => courseDetailsHandler(`/course-detail-graduate?course=product-management`)}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=machine-learning`)}
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
                      Machine Learning with Python is a comprehensive journey that equips you with the skills and 
                      knowledge needed to build, evaluate, and deploy machine learning models for...
                  </p>
                  <span onClick={() => courseDetailsHandler(`/course-detail-graduate?course=machine-learning`)}>
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=java`)}
              className="boxes33"
            >
              <div className="gua_cardview">
                <div className="gua_cardview-box">
                  <img src={java} alt="course-desc" />
                </div>
                <div className="gua_cardview-text">
                  <h4 style={{ color: "rgb(51, 51, 51)" }}>Java</h4>
                  <p>
                      Java is a versatile programming language with a wide range of applications, 
                      from web development to mobile app development, big data processing, and more..
                  </p>
                  <span to={() => courseDetailsHandler(`/course-detail-graduate?course=java`)}>
                    Learn More
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() => courseDetailsHandler(`/course-detail-graduate?course=data-analysis`)}
              className="boxes33"
            >
              <div className="gua_cardview">
                <div className="gua_cardview-box">
                  <img src={data_analysis} alt="course-desc" />
                </div>
                <div className="gua_cardview-text">
                  <h4 style={{ color: "rgb(51, 51, 51)" }}>Data Analysis</h4>
                  <p>
                      Data Analysis involves using different tools and techniques to scrutinize and 
                      probe large volumes of data with the goal of making informed solving problems, 
                      business decisions, and...
                  </p>
                  <span onClick={() => courseDetailsHandler(`/course-detail-graduate?course=data-analysis`)}>
                    Learn More
                  </span>
                </div>
              </div>
            </div>
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
