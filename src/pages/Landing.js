import { useEffect, useState, useContext } from "react";

// import Slider from "infinite-react-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import { ToastContainer, toast } from "react-toastify";

import Video from "../images/landing-video2.mp4";
// import Object from "../images/svg/objects.svg";
import poster from "../images/Grazac-website/IMG_8403.JPG";

import badge from "../images/svg/badge.svg";
import ex from "../images/svg/x-mark.svg";
// import Sponsor1 from "../images/svg/Apple.svg";
import Sponsor1 from "../images/svg/Apple_new.png";
import Sponsor2 from "../images/svg/AWS.svg";
import Sponsor3 from "../images/svg/Flutterwave.svg";
import Sponsor5 from "../images/svg/Microsoft.svg";
import Sponsor6 from "../images/svg/Google.svg";

import { LoaderContext } from "../context";
// import WhatsApp from "../components/whatsApp/whatsApp";
import VirtualSection from "../components/VirtualSection";
import LandingMentors from "../components/LandingMentors";
import LandingJudges from "../components/LandingJudges";
import LandingHeroSection from "../components/LandingHeroSection";
import WhyGrazacAcademy from "../components/WhyGrazacAcademy";
import AvailableCourses from "../components/AvailableCourses";
import AdmissionProcess from "../components/AdmissionProcess";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import DiscoverTopTalent from "../components/DiscoverTopTalent";
import LandingFaq from "../components/LandingFaq";

const Landing = () => {
  const [showModal, setShowModal] = useState(true);
  const { setShow, show } = useContext(LoaderContext);

  

  // useEffect(() => {
  //   // document.title = "Welcome to Grazac Academy";
  //   let mediaPlayer = document.querySelector("#video");
  //   mediaPlayer.controls = false;
  //   mediaPlayer.play();

  //   //this gives the homepage spacing on top for the notification
  //   var landingHeight = document.getElementsByClassName("landing")[0];
  //   landingHeight.style.marginTop = `70px`;

  //   window.addEventListener("load", () => {
  //     setShow(false);
  //   });
  // }, []);

  useEffect(() => {
    try {
      // Setup video element
      let mediaPlayer = document.querySelector("#video");
      if (!mediaPlayer) {
        throw new Error("Video element not found.");
      }
      // Check if the browser supports the video format
      const canPlayMp4 = mediaPlayer.canPlayType("video/mp4");
      if (!canPlayMp4) {
        throw new Error("Browser does not support the video format.");
      }
      // Hide default controls
      mediaPlayer.controls = false;

      // Attempt to play the video
      mediaPlayer.play().catch((error) => {
        console.error(
          "Error occurred while attempting to play the video:",
          error.message
        );
      });
    } catch (error) {
      // Handle unsupported media or other errors gracefully
      console.error("Error occurred during video setup:", error.message);
    }

    //this gives the homepage spacing on top for the notification
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `70px`;

    window.addEventListener("load", () => {
      setShow(false);
    });
  }, []);

  const handleModal = () => {
    setShowModal(false);
    var landingHeight = document.getElementsByClassName("landing")[0];
    landingHeight.style.marginTop = `0px`;
  };





  const showToast = () => {
    toast.info(
      "Application into Cohort (CH011) is closed. Enrollment into CH012 begins July 2022."
    );
  };

  return (
    <>
      <div className="landing">
        <ToastContainer closeButton={false} position="bottom-right" />
        {showModal && (
          <a href="/signup">
            <div className="infomodal">
              <div className="infomodal_content">
                <img src={badge} alt="" className="infomodal_badge" />
                <p>
                  Application for cohort 016 is ongoing. Early registration
                  closes by June 20th, Hurry Now and <span>Register!</span>{" "}
                  Classes starts by July 7, 2025
                  {/* <a
                className="infomodal_content-link"
                href="/login"
              >
                Apply Now
              </a> */}
                </p>
                {/* <Link to="/graduate-accelerator-plan">
              <button>Learn more</button>
            </Link> */}

                <img
                  src={ex}
                  alt=""
                  onClick={handleModal}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </a>
        )}
        <div className="landing__header">
          <Navbar top={true} />
          {/* <img src={Object} className="bg-img" alt="ccc" /> */}
          <div style={{ height: 10 }}></div>
          <LandingHeroSection/>
        </div>

        <div className="landing__video">
          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            loop
            muted
            poster={poster}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="landing__sponsors">
          <div className="landing__sponsors--container">
            <img src={Sponsor1} alt="sponsor" />
            <img src={Sponsor2} alt="sponsor" />
            <img src={Sponsor3} alt="sponsor" />
            <img src={Sponsor5} alt="sponsor" />
            <img src={Sponsor6} alt="sponsor" />
          </div>
        </div>

        <VirtualSection />

       <WhyGrazacAcademy/>

        <AvailableCourses/>

          <LandingJudges />

        
        <AdmissionProcess/>
        <LandingMentors />

        <div>
          <Testimonials/>
        </div>
        <div style={{
          width :"90%",
          margin:"auto"
        }}>
          <Gallery/>
          <DiscoverTopTalent/>
        </div>

        {/* FAQ section commented out till content is ready */}
        <LandingFaq/>
        <Mode
          id="landing_page_mode"
          page={"home"}
          title={"Ready to fill your vacant position?"}
          text={
            "Explore diverse tech talents of your choice with genuine skillsets and good workplace ethics."
          }
          button_1={"Hire from us"}
          button_2={"Chat with us"}
        />

        {/* <WhatsApp /> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
