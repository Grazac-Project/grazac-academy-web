import { useState } from 'react';
import { Link } from "react-router-dom";
import { LoginAction } from "../../../api/dashboard/auth";
import { ToastContainer, toast } from 'react-toastify';

import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';
import loader from "../../../images/svg/dashboard/loader.gif";


function Login () {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const doLogin = (e) => {
        e.preventDefault();
        var btn = document.getElementById("actionBtn");
        btn.innerHTML=`<img src=${loader} width="20px" />`;
        const { email, password } = form;
        let payload = JSON.stringify({
            email: email,
            password: password
        });
        LoginAction(payload)
            .then((response) => response.data)
            .then((res) => {
                console.log(res);
                if (res.success === true) {
                    toast.success("Login successful! Redirecting to dashboard.");
                    // const info = res.payload.data;
                    // let admin_detail = {
                    //     name: info.name,
                    //     email: info.email,
                    //     gender: info.gender,
                    //     id: info.staff_id,
                    //     phone: info.phone,
                    //     image: info.image,
                    //     role: info.roles,
                    //     permissions: info.permissions
                    // };
                    // sessionStorage.setItem(
                    //     "admin_details",
                    //     JSON.stringify({
                    //     data: admin_detail,
                    //     token: res.payload.access_token
                    //     })
                    // ); 
                    btn.innerHTML=`Sign in`;
                    window.location = '/';
                } else {
                    toast.error("Something went wrong, please try again!!!")
                }
            })
            .catch((err) => {
                if(err.response){
                    toast.error(err.response);
                    btn.innerHTML=`Sign in`;
                } else{
                    toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                    btn.innerHTML=`Sign in`;
                }
            });
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

    return(
        <div className="layout_auth">
            <ToastContainer/>
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="auth_container_form">
                        <h3>Login to your account</h3>
                        <p className="auth_container_form-text">Enter your email address and password to continue.</p>
                        <form onSubmit={doLogin}>
                            <div>
                                <label>Email Address</label>
                                <input type="email" required placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <div className="auth_container_form-password">
                                <label>Password</label>
                                <input type="password" required id="password" placeholder="Password" name="password" onChange={handleChange} />
                                <div id="toggle" onClick={toggleIcon} ><img src={visible} /></div>
                            </div>
                            <button type="submit" id="actionBtn">Sign in</button>
                            <p><Link to="/forgot-password"><span>Forgot your password?</span></Link></p>
                            <p>Don't have an account? <Link to="/signup"><span>Sign up</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">

            </div>
        </div>
    )
}

export default Login;