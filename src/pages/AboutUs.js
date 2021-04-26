import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mode from "../components/Mode";
import Dots from "../images/svg/dots.svg";

const cardsInfo = [
  {
    color: "39,234,198",
    title: "Creativity",
    body:
      "We constantly develop ideas that drives innovation. Our company is a community that allow us share common interests and ideas.",
  },
  {
    color: "26,222,235",
    title: "Quality",
    body:
      "We strive to provide value that fulfils and exceeds expectation. We have an unwavering guide that leads the way to fulfilling your goal.",
  },
  {
    color: "108,21,250",
    title: "Passion",
    body:
      "Our enthusiasm to deliver the best makes us unique. We uphold the highest standards in deliverability.",
  },
  {
    color: "255,113,155",
    title: "Commitment",
    body:
      "We are focused on giving best solutions. Our concern is solving your problem rather than why or how the problem was created.",
  },
  {
    color: "254,125,108",
    title: "Collaboration",
    body:
      "Our success depends upon the collective intelligence of our team members and the shared vision of our partners.",
  },
  {
    color: "255,180,67",
    title: "Teamwork",
    body:
      "We do better, together. Our environment fosters progress, effectiveness and speed.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    document.title = "About - Grazac Academy";
    window.scrollTo(0, 0);
  }, []);

  return (
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
              <h1>About Us</h1>
              <p>
                At Grazac Academy, we provide you with the right platform to
                upskill yourself for the future.
              </p>
            </div>
          </div>
          <div className="about__top--down">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="about__middle">
        <div className="about__middle--container">
          <div className="about__middle--head">
            <h2>Our Core Values</h2>
            <p>
              You determine the starting points, we provide the best possible
              interception to achieve the goals.
            </p>
          </div>

          <div className="about__middle--cards">
            {cardsInfo.map((item) => (
              <div className="about__middle--card">
                <div style={{ "--bg-color": item.color }}></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Mode />
      <Footer />
    </div>
  );
};

export default AboutUs;
