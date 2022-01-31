import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { VerifyEmail } from "../../../api/dashboard/auth";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import authImg from '../../../images/auth.png';
import logo from '../../../images/svg/academy-logo.svg';
import email from '../../../images/svg/email.svg';
import loader from '../../../images/loader-purple.gif';


function Verify () {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        verify();
    },[]);

    async function verify () {
        try {
            const response = await VerifyEmail(token);
            const res = await response;
            console.log(res);
            setTimeout( function (){setLoading(false);}, 2500)
        } catch (err) {
            console.log(err.response)
        }
    }

    return(
        <div className="layout_auth">
            <div className="layout_auth-main">
                <div className="auth_container">
                    <div className="auth_container-logo" >
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="auth_container_form">
                        {loading && <div className="auth_verify">
                            <img src={loader} alt="loading" width="100px" />
                            <h3>Verifying, please wait...</h3>
                        </div>}
                        {!loading && <div>
                            <img src={email} alt="email" className="auth_container_form-email" />
                            <h3>Email Verified!</h3>
                            <p className="auth_container_form-text">
                                Learn valuable technology skills with us, we strongly believe the future of work will be skill based. <br/>
                                Join us to build a career in tech and get tutored by industry leaders who will walk you through the path of becoming highly valuable and employable. <br/>
                            </p>
                            <p>Proceed to <Link to="/login"><span>Login</span></Link></p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="layout_auth-image">
                <LazyLoadImage src={authImg} effect="blur" alt="auth" height="auto" width="100%" />
            </div>
        </div>
    )
}

export default Verify;