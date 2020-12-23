import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import CreateAccount from "../components/CreateAccount";
import Card1 from "../images/svg/card1.svg";
import Card2 from "../images/svg/card2.svg";
import About from "../images/about.jpg";

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

      <div className="landing__cards" style={{marginBottom: 20}}>
        <div className="landing__cards--container">
          <div className="landing__bottom--text">
            <div className="landing__bottom--text--right">
              <h5>What we do</h5>
              <h1>Join us today</h1>
            </div>
          </div>

          <div className="landing__card--box">
            <div className="landing__card landing__card--1">
            <img src={Card1} alt="illustration" />
              <h3><span>Graduate </span><br />Accelerator Plan</h3>
              <p>You need more than a degree to be relevant in the 21st century. We are passionate about adding value to you. Become an asset by joining Grazac today</p>

              <div className="landing__btn">
                <PrimaryBtn yellow link="/signup">Sign up</PrimaryBtn>
              </div>
            </div>

            <div className="landing__card landing__card--2">
              <img src={Card2} alt="illustration" />
              <h3><span>Undergraduate </span><br />Accelerator Plan</h3>
              <p>Get more than just a degree. Join thousands of young undergraduates who have started building their career in tech through Grazac</p>

              <div className="landing__btn">
                <PrimaryBtn link="/signup">Sign up</PrimaryBtn>
              </div>
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