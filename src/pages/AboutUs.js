import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import Sponsor1 from "../images/svg/sponsor1.svg";
import Sponsor2 from "../images/svg/sponsor2.svg";
import Sponsor3 from "../images/svg/sponsor3.svg";
import Dots from "../images/svg/dots.svg";

const cardsInfo = [
  {
    color: "39,234,198",
    title: "Collaboration & Teamwork",
    body: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners."
  },
  {
    color: "26,222,235",
    title: "Collaboration & Teamwork",
    body: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners."
  },
  {
    color: "108,21,250",
    title: "Collaboration & Teamwork",
    body: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners."
  },
  {
    color: "255,113,155",
    title: "Collaboration & Teamwork",
    body: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners."
  },
  {
    color: "254,125,108",
    title: "Collaboration & Teamwork",
    body: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners."
  },
  {
    color: "255,180,67",
    title: "Collaboration & Teamwork",
    body: "Our success depends upon the collective intelligence of our team members and the shared vision of our partners."
  },
]

const AboutUs = () => {
  return(
    <div className="about">
      <div className="about__nav">
        <Navbar />
      </div>

      <div className="about__top">
        <div className="about__top--container">
          <div className="about__top--up">
            <div>
              <img src={Dots} alt="dots" />
            </div>
            <div></div>
            <div className="about__top--text">
              <h1>We’re a result driven team</h1>
              <p>With Blaze.io you can build a powerful website and drive success for your business.</p>
            </div>
          </div>
          <div className="about__top--down">
            <div></div>
            <div></div>
          </div>
        </div>
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

      <div className="about__middle">
        <div className="about__middle--container">
          <div className="about__middle--head">
            <h4>How It Works</h4>
            <h2>What defines us</h2>
            <p>You determine the starting points, we provide the best possible interception to achieve the goals.</p>
          </div>

          <div className="about__middle--cards">
            {
              cardsInfo.map(item => (
                <div className="about__middle--card">
                  <div style={{"--bg-color": item.color}}></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <Mode />
      <Footer />
    </div>
  );
}

export default AboutUs;