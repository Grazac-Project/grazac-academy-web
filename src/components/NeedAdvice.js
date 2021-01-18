import { Link } from "react-router-dom";
import undergraduate from "../images/undergraduate.png";

const NeedAdvice = () => {
  return(
    <div className="gua_advice" >
        <div className="container">
            <div className="gua_advice-box">
                <div className="boxes55">
                        <img src={undergraduate} alt="undergraduate" className="gua_advice-box-img" />
                </div>
                <div className="boxes55">
                    <div className="gua_advice-box-text" >
                        <h2>Need Advice?</h2>
                        <p>Do you need further clarification?
Call <a href="tel:08068365951">08068365951</a> or Fill the contact form below
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