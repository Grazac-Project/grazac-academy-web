import { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { ForgotPasswordAction } from "../../../api/dashboard/auth";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import authImg from '../../../images/auth.png';

import logo from '../../../images/svg/academy-logo.svg';
import loader from "../../../images/svg/dashboard/loader.gif";


function ForgotPassword () {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const sendMail = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const response = await ForgotPasswordAction({email:email});
            const res = response.data;
            if (response.status === 201 && res.status === 201) {
                toast.success(res.message);
            } else {
                toast.error(res.message || "Cannot send the reset email. Try again.");
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Cannot connect to the server. Check your connection and try again.");
        } finally {
            setLoading(false);
        }
    }


    return(
        <div className="layout_auth">
            <ToastContainer/>
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="auth_container_form">
                        <h3>Forgot Password</h3>
                        <p className="auth_container_form-text">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form onSubmit={sendMail}>
                            <div>
                                <label>Email Address</label>
                                <input type="email" required placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <button type="submit" id="actionBtn" disabled={loading}>
                                {loading ? <img src={loader} alt="Sending email" width="20px" /> : "Send Email"}
                            </button>
                            <p>Remember your password? <Link to="/login"><span>Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">
                <LazyLoadImage src={authImg} effect="blur" alt="auth" height="auto" width="100%" />
            </div>
        </div>
    )
}

export default ForgotPassword;