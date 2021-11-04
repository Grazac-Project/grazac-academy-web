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
        var data  = new FormData();

        data.append("email", email);
        data.append("password", password);

        LoginAction(data)
            .then((response) => response.data)
            .then((res) => {
                console.log(res);
                if (res.status === 201) {
                    toast.success(`${res.message}! Redirecting to dashboard...`);

                    sessionStorage.setItem(
                        "user_details",
                        JSON.stringify({
                        firstName: res.data.payload.FirstName,
                        lastName: res.data.payload.LastName,
                        email: res.data.payload.email,
                        id: res.data.payload.id,
                        phone: res.data.phoneNumber,
                        status: res.data.status,
                        token: res.data.token
                        })
                    ); 
                    btn.innerHTML=`Sign in`;
                    setTimeout( function (){window.location = '/dashboard';}, 2500)
                } else {
                    toast.error("Something went wrong, please try again!!!")
                }
            })
            .catch((err) => {
                console.log(err.response);
                console.log(err);
                if(err.response.data.message){
                    toast.error(err.response.data.message);
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
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
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