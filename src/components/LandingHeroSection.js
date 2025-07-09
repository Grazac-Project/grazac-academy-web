import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import mark from "../images/svg/mark.svg";

const LandingHeroSection = () => {
  return (
    <div>
      <div className="landing__text">
        <h1>
          Upskilling You For The <span>Future</span> Of Work
        </h1>
        <p>
          Learn valuable technology skills with our wide range of courses{" "}
          <br className="hide-at-600" /> and land your dream job.{" "}
        </p>
      </div>

      {/* <a onClick={showToast}> */}
      <Link to="/signup">
        <div
          className="nav__btn"
          style={{ width: "150px", margin: "auto", textAlign: "center" }}
        >
          {/* <a href="/login" > */}
          {/* <div className="nav__btn--text">Apply Now</div> */}
          <div className="nav__btn--text">Apply Now</div>
        </div>
      </Link>
      {/* </a> */}

      <div className="landing__text-below">
        <div>
          <img src={mark} alt="mark" />
          <h6>Conducive environment</h6>
        </div>
        <div>
          <img src={mark} alt="mark" />
          <h6>No prior experience required</h6>
        </div>
        <div>
          <img src={mark} alt="mark" />
          <h6>Flexible payment options</h6>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroSection;
