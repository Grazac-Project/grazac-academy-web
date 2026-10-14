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
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const doReset = async (e) => {
        e.preventDefault();
        if (loading) return;
        if (!form.password.length || !form.confirmpassword.length) {
            toast.info("Enter both passwords.");
        } else if (form.password !== form.confirmpassword) {
            toast.error("Passwords do not match!");
        } else if (form.password.length < 6 || form.confirmpassword.length < 6) {
            toast.error("Passwords should be at least 6 characters!");
        } else {
            setLoading(true);
            try {
                const response = await ResetPasswordAction({
                    token: reset_token,
                    password: form.password,
                    confirmPassword: form.confirmpassword
                });
                const res = response.data;
                if (response.status === 200 && res.status === 200) {
                    toast.success("Password reset successful! Proceed to login.");
                } else {
                    toast.error(res.message || "Cannot reset your password. Try again.");
                }
            } catch (err) {
                toast.error(err.response?.data?.message || "Cannot connect to the server. Check your connection and try again.");
            } finally {
                setLoading(false);
            }
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
                            <button type="submit" id="actionBtn" disabled={loading}>
                                {loading ? <img src={loader} alt="Resetting password" width="20px" /> : "Reset Password"}
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

export default ResetPassword;