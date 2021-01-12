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
                        <p>Do you want to include HabiTask’s learning pathways in your offer? Call <span>0803 - 302 - 4644</span> or fill in the <span>contact form</span> without obligation.</p>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default NeedAdvice;