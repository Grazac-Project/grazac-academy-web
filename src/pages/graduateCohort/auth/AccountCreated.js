import { Link } from "react-router-dom";
import logo from '../../../images/svg/academy-logo.svg';
import email from '../../../images/svg/email.svg';


function Verify () {
    const urlParams = new URLSearchParams(window.location.search);
    const emailAddress = urlParams.get('email');
    console.log(emailAddress);

    return(
        <div className="layout_auth">
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="auth_container_form">
                        <img src={email} alt="email" className="auth_container_form-email" />
                        <h3>Welcome to Grazac Academy!</h3>
                        <p className="auth_container_form-text">
                            Learn valuable technology skills with us, we strongly believe the future of work will be skill based. <br/>
                            Join us to build a career in tech and get tutored by industry leaders who will walk you through the path of becoming highly valuable and employable. <br/>
                            There is just one extra thing to do. Please check your email to verify your account.<br/>
                        </p>
                        <p>Didn't get an email? <span>Resend Link</span></p>
                        {/* <p>Proceed to <Link to="/login"><span>Login</span></Link></p> */}
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">

            </div>
        </div>
    )
}

export default Verify;