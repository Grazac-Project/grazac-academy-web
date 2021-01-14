import { useState, useEffect } from "react";
import { cn } from "../utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import PrimaryBtn from "../components/PrimaryBtn";
import Kamala from "../images/kamala.jpg"
import Grazac from "../images/svg/grazac.svg";
import Love from "../images/my_love.png";

import Sponsor1 from "../images/svg/sponsor1.svg";
import Sponsor2 from "../images/svg/sponsor2.svg";
import Sponsor3 from "../images/svg/sponsor3.svg";

import Card1 from "../images/svg/card1.svg";
import Card2 from "../images/svg/card1.svg";

const Landing = () => {
  // const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    document.title = 'Welcome to Grazac Academy';
    window.scrollTo(0,0);
  }, [])
  
  const dots = [false, false, false, false];
  const content = [
    {
      id: 0,
      img: Kamala,
      content: "Travelya, thank you so much for a well organized trip. We had a wonderful time. Hard to believe it’s already done and past. Weather was awesom, the hotels were nice, thanks your for everything",
      name: "Kamala Harris - First Woman Vice President"
    },
    {
      id: 1,
      img: Love,
      content: "Do whatever you want with your life, since you only get to live it once, We had a wonderful time. Hard to believe it’s already done and past. Weather was awesom, the hotels were nice, thanks your for everything",
      name: "Adekanmbi Toyosi Adeleye"
    },
    {
      id: 2,
      img: Kamala,
      content: "Travelya, thank you so much for a well organized trip. We had a wonderful time. Hard to believe it’s already done and past. Weather was awesom, the hotels were nice, thanks your for everything",
      name: "Jermaine Cole - J.Cole"
    },
    {
      id: 3,
      img: Love,
      content: "Travelya, thank you so much for a well organized trip. We had a wonderful time. Hard to believe it’s already done and past. Weather was awesom, the hotels were nice, thanks your for everything",
      name: "Kendrick Lamar"
    },
  ]

  return(
    <div className="landing">
      <div className="landing__header">
        <Navbar />
      <div style={{height: 10}}></div>


        <div className="landing__text">
          <h1>UPSKILLING YOU FOR THE FUTURE OF WORK</h1>
          <p>Be employable with direct practical experience in 21st century skills.
          Your organization deserves one of the best future talents in our community.
          Get tutored by industry leaders who will walk you through the path of becoming employable.</p>
        </div>

        <div className="landing__btn">
          <PrimaryBtn link="/get-started">Enroll Now</PrimaryBtn>
        </div>
      </div>

      <div className="landing__video">
        
      </div>

      <div className="landing__sponsors">
        <div className="landing__sponsors--container">
          <img src={Sponsor1} alt="sponsor" />
          <img src={Sponsor2} alt="sponsor" />
          <img src={Sponsor3} alt="sponsor" />
          <img src={Sponsor2} alt="sponsor" />
          <img src={Sponsor3} alt="sponsor" />
          <img src={Sponsor1} alt="sponsor" />
        </div>
      </div>

      <div className="landing__cards">
        <div className="landing__cards--container">
          <div className="landing__bottom--text">
            <div className="landing__bottom--text--right">
              <h5>What we do</h5>
              <h1>Get Ready For The Future Of Work</h1>
            </div>
          </div>

          <div className="landing__card--box">
            <div className="landing__card landing__card--1">
            <img src={Card1} alt="illustration" />
              <h3><span>Graduate </span><br />Accelerator Plan</h3>
              <p>An extensive program that gives you the opportunity to learn, develop your ideas and build a career in this 21st century.</p>
              <p>You need more than a degree to be relevant in the 21st century. Let’s prepare you for the future of work.</p>
              <p>Access to facilities and resources that aids your learning and practice.</p>
              <p>Learn Digital Skills and gain insights into today’s digital tools.</p>

              <div className="landing__btn">
                <PrimaryBtn yellow link="/signup">Sign up</PrimaryBtn>
              </div>
            </div>

            <div className="landing__card landing__card--2">
              <img src={Card2} alt="illustration" />
              <h3><span>Undergraduate </span><br />Accelerator Plan</h3>
              <p>Set the pace for a bright future as an undergraduate by taking up skills in this 21st century.</p>
              <p>Become an asset in this 21st century before leaving the four walls of school.</p>
              <p>Join thousands of young undergraduates now. Access to mentorship tailored to your career path.</p>
              <p>Become the next best talent to be hired in this 21st century and be employable.</p>

              <div className="landing__btn">
                <PrimaryBtn link="/signup">Sign up</PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__discover">
        <div className="landing__bottom--text landing__bottom--text-2">
          <div className="landing__bottom--text--right">
            <h5>How it works</h5>
            <h1>Trusted by Entrepreneurs and Hiring Managers globally</h1>
            <p>You determine the starting points, we provide the best possible interception to achieve the goals.</p>
          </div>
        </div>

        <div className="landing__discover--container">
          <div className="landing__discover--images">
            <div className="landing__discover--images-left">
              <div></div>
              <div></div>
            </div>
            <div className="landing__discover--images-right">
              <div></div>
            </div>
          </div>

          <div className="landing__discover--list">
            <div className="landing__discover--list-item">
              <h2>01</h2>
              <div>
                <h3>Discover</h3>
                <p>Find what you are interested to learn in this academy and choose what exactly best for you that you really passionate to learn and get to study about it</p>
              </div>
            </div>

            <div className="landing__discover--list-item">
              <h2>02</h2>
              <div>
                <h3>Learn</h3>
                <p>Find what you are interested to learn in this academy and choose what exactly best for you that you really passionate to learn and get to study about it</p>
              </div>
            </div>

            <div className="landing__discover--list-item">
              <h2>03</h2>
              <div>
                <h3>Experience</h3>
                <p>Find what you are interested to learn in this academy and choose what exactly best for you that you really passionate to learn and get to study about it</p>
              </div>
            </div>
            <div className="landing__discover--list-item"></div>
            <div className="landing__discover--list-item"></div>
          </div>
        </div>
      </div>

      <div className="landing__slider">
        {content.filter(key => key.id === step ).map(item => (
          <div className="landing__slider--container" key={item.id}>
            <div className="landing__slider--img">
              <img  src={item.img} alt="img"/>
            </div>

            <div className="landing__slider--text">
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3993 5.56001C13.1711 5.22699 13.4948 4.27918 13.1462 3.51069L11.9262 0.872185C11.5777 0.129562 10.7311 -0.203709 9.98417 0.129562C7.86782 1.05176 6.05026 2.25573 4.60616 3.71587C2.83839 5.43192 1.64328 7.4044 0.995927 9.5818C0.348574 11.7851 0 14.782 0 18.5988V26.4631C0 27.3084 0.672251 28.0001 1.49389 28.0001H11.2789C12.1005 28.0001 12.7728 27.3084 12.7728 26.4631V16.3958C12.7728 15.5502 12.1005 14.8588 11.2789 14.8588H6.59802C6.64781 12.2713 7.24537 10.1966 8.34089 8.63373C9.23722 7.37904 10.5817 6.35438 12.3993 5.56001Z" fill="#4B004B"/>
                <path d="M29.1127 5.53403C29.8845 5.20102 30.2079 4.25321 29.8596 3.48471L28.6396 0.872082C28.291 0.129203 27.4445 -0.203812 26.6976 0.129203C24.6061 1.0514 22.8132 2.25537 21.3444 3.6899C19.5764 5.43182 18.3567 7.40429 17.7091 9.5817C17.0617 11.7332 16.7383 14.7306 16.7383 18.5731V26.4374C16.7383 27.2827 17.4105 27.9744 18.2322 27.9744H28.0172C28.8388 27.9744 29.511 27.2827 29.511 26.4374V16.3701C29.511 15.5245 28.8388 14.8331 28.0172 14.8331H23.3114C23.3612 12.2456 23.959 10.1709 25.0543 8.60801C25.9506 7.35306 27.2951 6.3284 29.1127 5.53403Z" fill="#4B004B"/>
              </svg>

              <p>{item.content}</p>

              <small>{item.name}</small>

              <div className={cn("landing__dots", `landing__dots--${item.id}`)}>
              {
                dots.map((_, index) => (
                  <div onClick={() => setStep(index)}>&nbsp;</div>
                ))
              }
            </div>
            </div>
          </div>
        ))}
      </div>

      <div className="landing__bottom" style={{paddingBottom: 0}}>
        <div className="landing__bottom--text">
          <div className="landing__bottom--text--right">
            <h5>How it works</h5>
            <h1>Get Upskilled For The Future Of Work</h1>
            <p>We will provide you with the tools, resources, facilities, content and mentorship needed for your relevance in the future of work.</p>

            <div className="landing__btn--2">
              <PrimaryBtn link="/get-started">Enroll Now</PrimaryBtn>
            </div>
          </div>

          <div className="landing__bottom--text--left">
            <img src={Grazac} alt="img" />
          </div>
        </div>
      </div>

      <Mode />
      <Footer />
    </div>
  );
}

export default Landing;