import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { VerifyEmail } from "../../../api/dashboard/auth";
import { LazyLoadImage } from "react-lazy-load-image-component";
import authImg from "../../../images/auth.png";
import logo from "../../../images/svg/academy-logo.svg";
import email from "../../../images/svg/email.svg";
import loader from "../../../images/loader-purple.gif";

function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    let active = true;

    async function verify() {
      setLoading(true);
      setError("");
      setVerified(false);
      if (!token) {
        setError("The verification link has no token. Use the link in your email.");
        setLoading(false);
        return;
      }
      try {
        const response = await VerifyEmail(token);
        if (!active) return;
        if (response.status === 200 && response.data.status === 200) {
          setVerified(true);
        } else {
          setError(response.data.message || "Email verification failed. Use the link in your email.");
        }
      } catch (err) {
        if (active) {
          setError(err.response?.data?.message || "Cannot connect to the server. Check your connection and try again.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    verify();
    return () => {
      active = false;
    };
  }, [token]);

  return (
    <div className="layout_auth">
      <div className="layout_auth-main">
        <div className="auth_container">
          <div className="auth_container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form">
            {loading && (
              <div className="auth_verify">
                <img src={loader} alt="loading" width="100px" />
                <h3>Verifying, please wait...</h3>
              </div>
            )}
            {!loading && error && <p role="alert">{error}</p>}
            {!loading && verified && (
              <div>
                <img
                  src={email}
                  alt="email"
                  className="auth_container_form-email"
                />
                <h3>Email Verified!</h3>
                <p className="auth_container_form-text">
                  Learn valuable technology skills with us, we strongly believe
                  the future of work will be skill based. <br />
                  Join us to build a career in tech and get tutored by industry
                  leaders who will walk you through the path of becoming highly
                  valuable and employable. <br />
                </p>
                <p>
                  Proceed to{" "}
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="layout_auth-image">
        <LazyLoadImage
          src={authImg}
          effect="blur"
          alt="auth"
          height="auto"
          width="100%"
        />
      </div>
    </div>
  );
}

export default Verify;
