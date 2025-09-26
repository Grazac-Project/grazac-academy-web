import classes from "./VirtualClass.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider1 from "../../images/virtual/joy.png";
import Slider2 from "../../images/virtual/slider2.svg";
import Slider3 from "../../images/virtual/wale.png";
import Slider4 from "../../images/virtual/victor.png";
import Slider5 from "../../images/virtual/victory.png";
import Content1 from "../../images/virtual/flexibility.svg";
import Content2 from "../../images/virtual/cost_effective.svg";
import Content3 from "../../images/virtual/accessibility.svg";
import Content4 from "../../images/virtual/mentorship.svg";
import Content5 from "../../images/virtual/interaction.svg";
import { useRef, useState } from "react";

const slides = [
  {
    img: Slider1,
    contentImg: Content1,
    title: "Why Virtual Class?",
    text: "Choosing virtual classes with us opens up a world of possibilities for your education. Here are some key benefits you can enjoy",
  },
  {
    img: Slider2,
    contentImg: Content2,
    title: "Why Virtual Class?",
    text: "Choosing virtual classes with us opens up a world of possibilities for your education. Here are some key benefits you can enjoy",
  },
  {
    img: Slider3,
    contentImg: Content3,
    title: "Why Virtual Class?",
    text: "Choosing virtual classes with us opens up a world of possibilities for your education. Here are some key benefits you can enjoy",
  },
  {
    img: Slider4,
    contentImg: Content4,
    title: "Why Virtual Class?",
    text: "Choosing virtual classes with us opens up a world of possibilities for your education. Here are some key benefits you can enjoy",
  },
  {
    img: Slider5,
    contentImg: Content5,
    title: "Why Virtual Class?",
    text: "Choosing virtual classes with us opens up a world of possibilities for your education. Here are some key benefits you can enjoy",
  },
];

const VirtualClass = () => {
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

  return (
    <section className={classes.Virtual_section}>
      <div className={classes.Virtual_arrow}>
        <button className={classes.Virtual_bttn} onClick={goToPrev}>
          <i className={classes.Virtual_icon}>&#129120;</i>
        </button>
        <button className={classes.Virtual_bttn} onClick={goToNext}>
          <i className={classes.Virtual_icon}>&#129122;</i>
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={classes.Virtual_container}>
            <div className={classes.Virtual_slider}>
              <div className={classes.Virtual_slider_2_content1}>
                <h1>{slide.title}</h1>
                {/* <p>{slide.text}</p> */}
              </div>
              <div className={classes.Virtual_slider_img}>
                <img src={slide.img} alt={`slider-${index}`} />
              </div>
              <div className={classes.Virtual_slider_2}>
                <div className={classes.Virtual_slider_2_content}>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  <div className={classes.Virtual_slider_2_content_box}>
                    <img src={slide.contentImg} alt={`content-${index}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className="Vitual_arrow" style={{ textAlign: "center" }}>
        <button
          className="Vitual_bttn"
          onClick={goToPrev}
          style={{
            background: "#fff",
            color: "gray",
            border: "none",
            borderRadius: "50%",
            margin: "10px",
            // cursor: "pointer",
            transition: "all 0.3s ease",
            // marginLeft: "10px",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "white";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.background = "#773DD3";
            e.currentTarget.style.color = "white";
          }}
        >
          <i style={{ fontSize: "20px", pointerEvents: "none" }}>&#129120;</i>
        </button>
        <button
          onClick={goToNext}
          style={{
            background: "#773DD3",
            color: "white",
            border: "none",
            borderRadius: "50%",
            margin: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            // marginLeft: "10px",
          }}
        >
          <i style={{ fontSize: "20px", pointerEvents: "none" }}>&#129122;</i>
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
        </Slider> */}
    </section>
  );
};

export default VirtualClass;
