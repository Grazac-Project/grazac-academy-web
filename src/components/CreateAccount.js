import { useState } from "react";
import Spiral from "../images/svg/spiral.svg";

const CreateAccount = () => {
  const [email, setEmail] = useState("");

  return(
    <div className="landing__bottom">
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