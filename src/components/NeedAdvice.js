import { Link } from "react-router-dom";
import undergraduate from "../images/undergraduate.png";
import poster from "../images/Grazac-website/IMG_8440.JPG";
import lady from "../images/Grazac-website/IMG_8440.JPG";

const NeedAdvice = () => {
  return(
    <div className="gua_advice" >
        <div className="container">
            <div className="gua_advice-box">
                <div className="boxes55">
                        <img src={lady} alt="undergraduate" className="gua_advice-box-img" />
                </div>
                <div className="boxes55">
                    <div className="gua_advice-box-text">
                        <h2>Need Advice?</h2>
                        <p>Do you need further clarification?
                        </p>
                        <a href="tel:+2348068365951"><button>Call us now</button></a>
                        <a href="https://wa.link/w8e0xs"><button className="second-button">Chat with us</button></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default NeedAdvice;