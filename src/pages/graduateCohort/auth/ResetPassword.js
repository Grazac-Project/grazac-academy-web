import { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { ResetPasswordAction } from "../../../api/dashboard/auth";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import authImg from '../../../images/auth.png';

import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';
import loader from "../../../images/svg/dashboard/loader.gif";


function ResetPassword () {
    const urlParams = new URLSearchParams(window.location.search);
    const reset_token = urlParams.get('token');
    const [form, setForm] = useState({
        password: "",
        confirmpassword: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const doReset = (e) => {
        e.preventDefault();
        if (!form.password.length || !form.confirmpassword.length) {
            toast.info("Please make sure no field is empty!")
        }else if(form.password != form.confirmpassword){
            toast.error("Passwords do not match!")
        }else if(form.password.length<6 || form.confirmpassword<6){
            toast.error("Passwords should be at least 6 characters!")
        } else{
            var btn = document.getElementById("actionBtn");
            btn.innerHTML = `<img src=${loader} width="20px" style="display: block; margin: auto;"/>`;
            var data  = new FormData();
            const newData = {}
            newData.token = reset_token;
            newData.password = form.password;
            newData.confirmPassword = form.confirmpassword; 
            
            // data.append("token", reset_token);
            // data.append("password", form.password);
            // data.append("confirmPassword", form.confirmpassword);
    
            ResetPasswordAction(newData)
                .then((response) => response.data)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Password reset successful! Proceed to login.");
                        btn.innerHTML=`Reset Password`;
                    } else {
                        toast.error("Something went wrong, please try again!!!")
                        btn.innerHTML=`Reset Password`;
                    }
                })
                .catch((err) => {
                    toast.error("Unable to reset password! Try again");
                //     if(err.response.data.message){
                //         toast.error(err.response.data.message);
                //         btn.innerHTML=`Reset Password`;
                //     } else{
                //         toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                //         btn.innerHTML=`Reset Password`;
                //     }
                });
        }
    }

    const toggleIcon = () => {
        var x = document.getElementById("password");
        var iconContainer = document.getElementById("toggle");
        if (x.type === "password") {
          x.type = "text";
          iconContainer.innerHTML = `<img src=${notvisible} />`
        } else {
          x.type = "password";
          iconContainer.innerHTML = `<img src=${visible} />` ;
        }
    }
    
    const toggleIcon2 = () => {
        var x = document.getElementById("confirmpassword");
        var iconContainer = document.getElementById("confirmtoggle");
        if (x.type === "password") {
            x.type = "text";
            iconContainer.innerHTML = `<img src=${notvisible} />`
        } else {
            x.type = "password";
            iconContainer.innerHTML = `<img src=${visible} />` ;
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
                        <h3>Create New Password</h3>
                        <p className="auth_container_form-text">Enter your new password below to continue.</p>
                        <form onSubmit={doReset}>
                            <div className="auth_container_form-password">
                                <label>Password</label>
                                <input type="password" id="password" placeholder="Password" name="password" onChange={handleChange} />
                                <div id="toggle" onClick={toggleIcon} ><img src={visible} /></div>
                            </div>
                            <div className="auth_container_form-password">
                                <label>Confirm Password</label>
                                <input type="password" id="confirmpassword" placeholder="Password" name="confirmpassword" onChange={handleChange} />
                                <div id="confirmtoggle" onClick={toggleIcon2} ><img src={visible} /></div>
                            </div>
                            <button type="submit" id="actionBtn">Reset Password</button>
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

export default ResetPassword;