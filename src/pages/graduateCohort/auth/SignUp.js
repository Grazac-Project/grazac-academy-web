import { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { SignupAction } from "../../../api/dashboard/auth";

import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';
import loader from "../../../images/svg/dashboard/loader.gif";


function SignUp () {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const doSignUp = (e) => {
        e.preventDefault();
        var btn = document.getElementById("actionBtn");
        if (form.password.length > 5){
            btn.innerHTML=`<img src=${loader} width="20px" />`;
            const {firstName, lastName, email, phone, password} = form;
            var data  = new FormData();

            data.append("firstName", firstName);
            data.append("lastName", lastName);
            data.append("email", email);
            data.append("phoneNumber", phone);
            data.append("password", password);

            SignupAction(data)
                .then((response) => response.data)
                .then((res) => {
                    // console.log(res);
                    if (res.status === 201) {
                        toast.success(`${res.message} Proceed to login.`);
                        btn.innerHTML=`Create account`;
                        window.location = `/account-created?email=${email}`;
                    } else {
                        toast.error("Something went wrong, please try again!!!")
                    }
                })
                .catch((err) => {
                    // console.log(err.response.data.message);
                    if(err.response.data.message){
                        toast.error(err.response.data.message);
                        btn.innerHTML=`Create account`;
                    } else{
                        toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                        btn.innerHTML=`Create account`;
                    }
                });
        } else {
            toast.error("Password must be at least 6 characters!");
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

    return(
        <div className="layout_auth">
            <ToastContainer/>
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="auth_container_form">
                        <h3>Create an Account</h3>
                        <p className="auth_container_form-text">Create a free account to start your application</p>
                        <form onSubmit={doSignUp}>
                            <div>
                                <label>First Name</label>
                                <input type="text" required placeholder="First Name" name="firstName" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" required placeholder="Last Name" name="lastName" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type="email" required placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="number" required placeholder="Phone Number" name="phone" onChange={handleChange} />
                            </div>
                            <div className="auth_container_form-password">
                                <label>Password</label>
                                <input type="password" id="password" required placeholder="Password" name="password" onChange={handleChange} />
                                <div id="toggle" onClick={toggleIcon} ><img src={visible} /></div>
                            </div>
                            <button type="submit" id="actionBtn">Create account</button>
                            <p>Already have an account? <Link to="/login"><span>Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">

            </div>
        </div>
    )
}

export default SignUp;