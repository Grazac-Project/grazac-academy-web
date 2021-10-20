import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../images/svg/academy-logo.svg';


function ForgotPassword () {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const sendMail = () => {
        console.log('submit')
    }


    return(
        <div className="layout_auth">
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="auth_container_form">
                        <h3>Forgot Password</h3>
                        <p className="auth_container_form-text">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form onSubmit={sendMail}>
                            <div>
                                <label>Email Address</label>
                                <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <button>Send Email</button>
                            <p>Remember your password? <Link to="/login"><span>Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">

            </div>
        </div>
    )
}

export default ForgotPassword;