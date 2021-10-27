import { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { ResetPasswordAction } from "../../../api/dashboard/auth";

import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';
import loader from "../../../images/svg/dashboard/loader.gif";


function ResetPassword () {
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
        } else{
            var btn = document.getElementById("actionBtn");
            btn.innerHTML = `<img src=${loader} width="20px" />`;
            let payload = JSON.stringify({
                password: form.password
            });
            ResetPasswordAction(payload)
                .then((response) => response.data)
                .then((res) => {
                    console.log(res);
                    if (res.success === true) {
                        toast.success("Password reset successful! Proceed to check your login.");
                        btn.innerHTML=`Reset Password`;
                    } else {
                        toast.error("Something went wrong, please try again!!!")
                    }
                })
                .catch((err) => {
                    if(err.response){
                        toast.error(err.response);
                        btn.innerHTML=`Reset Password`;
                    } else{
                        toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                        btn.innerHTML=`Reset Password`;
                    }
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
                        <img src={logo} alt="logo" />
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

            </div>
        </div>
    )
}

export default ResetPassword;