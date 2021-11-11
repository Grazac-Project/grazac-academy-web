import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import authImg from '../../../images/auth.png';
import logo from '../../../images/svg/academy-logo.svg';
import email from '../../../images/svg/email.svg';


function MailSent () {
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
                        <h3>Password reset link sent!</h3>
                        <p className="auth_container_form-text">We have sent you an email containing a link to reset your password, kindly check your email to set a new password.</p>
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">
                <LazyLoadImage src={authImg} effect="blur" alt="auth" height="auto" width="100%" />
            </div>
        </div>
    )
}

export default MailSent;