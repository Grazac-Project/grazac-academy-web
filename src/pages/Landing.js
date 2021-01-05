import { useState } from "react";
import { Link } from "react-router-dom";   
import { cn } from "../utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import CreateAccount from "../components/CreateAccount";
import Kamala from "../images/kamala.jpg"
import Grazac from "../images/svg/grazac.svg";
import Love from "../images/my_love.png";
import Man from "../images/man.jpg";

import Sponsor1 from "../images/svg/sponsor1.svg";
import Sponsor2 from "../images/svg/sponsor2.svg";
import Sponsor3 from "../images/svg/sponsor3.svg";

import Python from "../images/svg/python.svg";
import ML from "../images/svg/ml.svg";
import Html from "../images/svg/html.svg";
import Node from "../images/svg/node.svg";
import PD from "../images/svg/pd.svg";
import Android from "../images/svg/android.svg";

const Landing = () => {
  // const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  
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
          <h1>The future of insurance is data, driven</h1>
          <p>Rideshur sets fair rates adjusted at every turn. Safety, risk level, and claims are all managed from a single dashboard. Evolve your fleet.</p>
        </div>

        <div className="landing__btn">
          <PrimaryBtn link="/get-started">Get Started</PrimaryBtn>
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

      <div className="landing__courses">
        <div className="landing__courses--container">
          <div className="landing__bottom--text landing__courses--container--txt">
            <div className="landing__bottom--text--right landing__bottom--text2">
              <h5>GRAZAC ACADEMY</h5>
              <h1>Individualized attention needed for self-confidence.</h1>
            </div>

            <div className="landing__bottom--text--right--left">
              <div className="landing__btn--2">
                <PrimaryBtn link="/get-started">See All Courses</PrimaryBtn>
              </div>
            </div>
          </div>

          <div className="landing__courses--cards">
            <div className="landing__courses--card">
              <div>
                <img src={Python} alt="python" />
              </div>
              <h3>Python for Data Science</h3>
              <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
              <Link>Learn More</Link>
            </div>

            <div className="landing__courses--card">
              <div style={{backgroundColor: "#75DEBE"}}>
                <img src={Html} alt="python" />
              </div>
              <h3>Front - End Development</h3>
              <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
              <Link>Learn More</Link>
            </div>

            <div className="landing__courses--card">
              <div style={{backgroundColor: "#FEC952"}}>
                <img src={Node} alt="python" />
              </div>
              <h3>Back - End Development</h3>
              <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
              <Link>Learn More</Link>
            </div>

            <div className="landing__courses--card">
              <div style={{backgroundColor: "#B0B54F"}}>
                <img src={ML} alt="python" />
              </div>
              <h3>Machine Learning</h3>
              <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
              <Link>Learn More</Link>
            </div>

            <div className="landing__courses--card">
              <div style={{backgroundColor: "#F0BB8F"}}>
                <img src={PD} alt="python" />
              </div>
              <h3>Product Design (UI/UX)</h3>
              <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
              <Link>Learn More</Link>
            </div>

            <div className="landing__courses--card">
              <div style={{backgroundColor: "#DCCDF4"}}>
                <img src={Android} alt="python" />
              </div>
              <h3>Android Development</h3>
              <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
              <Link>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="landing__middle">
        <div className="landing__middle--container">
          <div className="landing__middle--text">
            <h5>What we do</h5>
            <h2>Mode of Teaching</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ</p>
          </div>

          <div className="landing__middle--images--box">
            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>

            <div className="landing__middle--images">
              <img src={Man}/>
              <h3>Olalekan Sogunle</h3>
              <h5>CAREERFOUNDRY</h5>
              <small>Software Engineer</small>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6431 0H1.35687C0.6075 0 0 0.6075 0 1.35687V13.6431C0 14.3925 0.6075 15 1.35687 15H13.6431C14.3925 15 15 14.3925 15 13.6431V1.35687C15 0.6075 14.3925 0 13.6431 0ZM4.64164 12.952C4.64164 13.1701 4.46486 13.3469 4.24677 13.3469H2.5659C2.34781 13.3469 2.17103 13.1701 2.17103 12.952V5.90588C2.17103 5.68779 2.34781 5.51101 2.5659 5.51101H4.24677C4.46486 5.51101 4.64164 5.68779 4.64164 5.90588V12.952ZM3.40634 4.84681C2.52444 4.84681 1.8095 4.13187 1.8095 3.24997C1.8095 2.36808 2.52444 1.65314 3.40634 1.65314C4.28823 1.65314 5.00317 2.36808 5.00317 3.24997C5.00317 4.13187 4.28827 4.84681 3.40634 4.84681ZM13.4258 12.9838C13.4258 13.1843 13.2632 13.3469 13.0627 13.3469H11.259C11.0585 13.3469 10.896 13.1843 10.896 12.9838V9.67877C10.896 9.18573 11.0406 7.51826 9.6075 7.51826C8.49589 7.51826 8.27042 8.65959 8.22514 9.17179V12.9838C8.22514 13.1843 8.06262 13.3469 7.86208 13.3469H6.1176C5.91711 13.3469 5.75454 13.1843 5.75454 12.9838V5.87407C5.75454 5.67357 5.91711 5.51101 6.1176 5.51101H7.86208C8.06258 5.51101 8.22514 5.67357 8.22514 5.87407V6.4888C8.63733 5.87022 9.2499 5.39277 10.5541 5.39277C13.4423 5.39277 13.4258 8.09105 13.4258 9.57361V12.9838Z" fill="#0077B7"/>
              </svg>
            </div>
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
            <h5>What we do</h5>
            <h1>Trusted by Entrepreneurs and Hiring Managers globally</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ</p>

            <div className="landing__btn--2">
              <PrimaryBtn link="/get-started">Get Started</PrimaryBtn>
            </div>
          </div>

          <div className="landing__bottom--text--left">
            <img src={Grazac} alt="img" />
          </div>
        </div>
      </div>

      <CreateAccount />
      <Footer />
    </div>
  );
}

export default Landing;