import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../images/svg/academy-logo.svg';
import visible from '../../../images/svg/visible.svg';
import notvisible from '../../../images/svg/notvisible.svg';


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

    const doReset = () => {
        console.log('submit')
        if(form.password != form.confirmpassword){
            console.log("check your password charlie")
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
                            <button type="submit">Reset Password</button>
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