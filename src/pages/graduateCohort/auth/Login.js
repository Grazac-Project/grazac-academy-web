import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';


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

    const doLogin = () => {
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
                        <h3>Login to your account</h3>
                        <p className="auth_container_form-text">Enter your email address and password to continue.</p>
                        <form onSubmit={doLogin}>
                            <div>
                                <label>Email Address</label>
                                <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                            </div>
                            <div className="auth_container_form-password">
                                <label>Password</label>
                                <input type="password" id="password" placeholder="Password" name="password" onChange={handleChange} />
                                <div id="toggle" onClick={toggleIcon} ><img src={visible} /></div>
                            </div>
                            <button>Sign in</button>
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