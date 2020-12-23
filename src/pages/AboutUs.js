import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import CreateAccount from "../components/CreateAccount";
import About from "../images/about.jpg";

import Python from "../images/svg/python.svg";
import ML from "../images/svg/ml.svg";
import Html from "../images/svg/html.svg";
import Node from "../images/svg/node.svg";
import PD from "../images/svg/pd.svg";
import Android from "../images/svg/android.svg";


const AboutUs = () => {
  return(
    <div className="about">
      <div className="about__nav">
        <Navbar />
      </div>

      <div className="about__header">
        <div className="about__header--container">
          <h1>We are a <br />Digital Learning<br/> Company.</h1>
          <p>Premium digital skills training for the future of work.</p>
        </div>
      </div>

      <div className="about__body">
        <div className="landing__bottom--text">
          <div className="landing__bottom--text--right">
            <h5>What we do</h5>
            <h1>Digital Skill Training for the 21st Century</h1>

            <p>
            We are a community of creatives committed to creating opportunities that impedes the increased rate of unemployment in Africa. Our Academy is an innovative program designed to empower a generation of youths with exceptional marketable skills and career possibilities in areas of technology and business development using subject matter experts to actualize their potentials.
            <br /><br />
            At Grazac, we believe ideas rule the world, this is why we are passionate about raising creatives that will impact socio-economic development in Africa. We believe in. Creativity and Innovation, Hardwork and Consistency, Committment and Excellence.
            </p>
          </div>
          <img src={About} alt="kamala" />
        </div>

        <div className="about__bullets">
          <div className="about__bullets--item">
            <div className="item-img"></div>
            <div className="item-text">
              <h5>200+</h5>
              <p>Students</p>
            </div>
          </div>

          <div className="about__bullets--item">
            <div className="item-img"></div>
            <div className="item-text">
              <h5>10+</h5>
              <p>Courses</p>
            </div>
          </div>

          <div className="about__bullets--item">
            <div className="item-img"></div>
            <div className="item-text">
              <h5>20+</h5>
              <p>Instructors</p>
            </div>
          </div>

          <div className="about__bullets--item">
            <div className="item-img"></div>
            <div className="item-text">
              <h5>100+</h5>
              <p>Job opportunities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about__images">
        <div className="about__images--container"></div>
        <div className="about__images--container"></div>
        <div className="about__images--container"></div>
        <div className="about__images--container"></div>
        <div className="about__images--container"></div>
        <div className="about__images--container"></div>
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


      <CreateAccount />

      <Footer />
    </div>
  );
}

export default AboutUs;