import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';


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

    const doSignUp = () => {
        console.log('submit')
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
                                <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="number" placeholder="Phone Number" name="phone" onChange={handleChange} />
                            </div>
                            <div className="auth_container_form-password">
                                <label>Password</label>
                                <input type="password" id="password" placeholder="Password" name="password" onChange={handleChange} />
                                <div id="toggle" onClick={toggleIcon} ><img src={visible} /></div>
                            </div>
                            <button>Create account</button>
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