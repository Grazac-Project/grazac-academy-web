import { Link } from "react-router-dom";
import undergraduate from "../images/undergraduate.png";
<<<<<<< HEAD
import poster from "../images/Grazac-website/IMG_8440.JPG";
=======
import lady from "../images/Grazac-website/IMG_8440.JPG";
>>>>>>> d7f89e17a71e49fc70d3571f44e79c2c560f52a0

const NeedAdvice = () => {
  return(
    <div className="gua_advice" >
        <div className="container">
            <div className="gua_advice-box">
                <div className="boxes55">
<<<<<<< HEAD
                        <img src={poster} alt="undergraduate" className="gua_advice-box-img" style={{borderRadius: 30}} />
=======
                        <img src={lady} alt="undergraduate" className="gua_advice-box-img" />
>>>>>>> d7f89e17a71e49fc70d3571f44e79c2c560f52a0
                </div>
                <div className="boxes55">
                    <div className="gua_advice-box-text">
                        <h2>Need Advice?</h2>
                        <p>Do you need further clarification?
                            Call <a href="tel:+2348068365951">+2348068365951</a> or Fill the contact form below
                        </p>
                        <Link to="/contact"><button>Contact Us</button></Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default NeedAdvice;