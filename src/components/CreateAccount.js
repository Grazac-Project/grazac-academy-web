import { useState } from "react";
import Grazac from "../images/svg/grazac.svg";
import Spiral from "../images/svg/spiral.svg";
import PrimaryBtn from "./PrimaryBtn";

const CreateAccount = () => {
  const [email, setEmail] = useState("");

  return(
    <div className="landing__bottom">
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

      <div className="landing__bottom--form">
        <img src={Spiral} alt="spiral" />

        <div className="landing__bottom--form--content">
          <h2>Create a free Account now</h2>

          <form>
            <input type="text" placeholder="Enter your email address here" value={email} onChange={e => setEmail(e.target.value)}/>
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;