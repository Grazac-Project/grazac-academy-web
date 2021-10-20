import { Link } from "react-router-dom";
import logo from '../../../images/svg/academy-logo.svg';
import email from '../../../images/svg/email.svg';


function MailSent () {
    return(
        <div className="layout_auth">
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="auth_container_form">
                        <img src={email} alt="email" className="auth_container_form-email" />
                        <h3>Password reset link sent!</h3>
                        <p className="auth_container_form-text">We have sent you an email containing a link to reset your password, kindly check your email to set a new password.</p>
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">

            </div>
        </div>
    )
}

export default MailSent;