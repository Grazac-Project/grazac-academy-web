import { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { ForgotPasswordAction } from "../../../api/dashboard/auth";

import logo from '../../../images/svg/academy-logo.svg';
import loader from "../../../images/svg/dashboard/loader.gif";


function ForgotPassword () {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault();
        var btn = document.getElementById("actionBtn");
        btn.innerHTML = `<img src=${loader} width="20px" />`;
        let payload = JSON.stringify({
            email: email
        });
        ForgotPasswordAction(payload)
            .then((response) => response.data)
            .then((res) => {
                console.log(res);
                if (res.success === true) {
                    toast.success("Mail sent! Proceed to check your mail.");
                    btn.innerHTML=`Send Email`;
                } else {
                    toast.error("Something went wrong, please try again!!!")
                }
            })
            .catch((err) => {
                if(err.response){
                    toast.error(err.response);
                    btn.innerHTML=`Send Email`;
                } else{
                    toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                    btn.innerHTML=`Send Email`;
                }
            });
    }


    return(
        <div className="layout_auth">
            <ToastContainer/>
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
                                <input type="email" required placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <button type="submit" id="actionBtn">Send Email</button>
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