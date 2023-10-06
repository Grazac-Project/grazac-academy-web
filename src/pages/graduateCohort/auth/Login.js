import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginAction } from "../../../api/dashboard/auth";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";

import logo from "../../../images/svg/academy-logo.svg";
import visible from "../../../images/svg/visible.svg";
import notvisible from "../../../images/svg/notvisible.svg";
import loader from "../../../images/svg/dashboard/loader.gif";
import authImg from "../../../images/auth.png";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    cohort: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const doLogin = (e) => {
    console.log(form);
    e.preventDefault();
    var btn = document.getElementById("actionBtn");
    btn.innerHTML = `<img src=${loader} width="20px" />`;
    const { email, password, cohort } = form;
    var data = new FormData();

    data.append("email", email);
    data.append("password", password);
    data.append("cohort_batch", cohort);

    LoginAction(data)
      .then((response) => response.data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`${res.message}! Redirecting to dashboard...`);

          sessionStorage.setItem(
            "user_details",
            JSON.stringify({
              firstName: res.data.payload.firstName,
              lastName: res.data.payload.lastName,
              email: res.data.payload.email,
              id: res.data.payload.id,
              isPaid: res.data.payload.isPaid,
              applicationFee: res.data.payload.applicationFee,
              phone: res.data.payload.phoneNumber,
              token: res.data.token,
            })
          );
          sessionStorage.setItem("status", `${res.data.status}`);

          btn.innerHTML = `Sign in`;
          setTimeout(function () {
            window.location = "/dashboard";
          }, 2500);
        } else {
          toast.error("Something went wrong, please try again!!!");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);

        if (err.response.data.message) {
          toast.error(err.response.data.message);
          btn.innerHTML = `Sign in`;
        } else {
          toast.error(
            "Something went wrong!!! Please make sure you have a good internet connection."
          );
          btn.innerHTML = `Sign in`;
        }
      });
  };

  const toggleIcon = () => {
    var x = document.getElementById("password");
    var iconContainer = document.getElementById("toggle");
    if (x.type === "password") {
      x.type = "text";
      iconContainer.innerHTML = `<img src=${notvisible} />`;
    } else {
      x.type = "password";
      iconContainer.innerHTML = `<img src=${visible} />`;
    }
  };

  return (
    <div className="layout_auth">
      <ToastContainer />
      <div className="layout_auth-main">
        <div className="auth_container">
          <div className="auth_container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form">
            <h3>Login to your account</h3>
            <p className="auth_container_form-text">
              Enter your email address and password to continue.
            </p>
            <form onSubmit={doLogin}>
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="auth_container_form-password">
                <label>Password</label>
                <input
                  type="password"
                  required
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <div id="toggle" onClick={toggleIcon}>
                  <img src={visible} />
                </div>
              </div>
              {/* <div>
                <label>Cohort</label>
                <select
                  name="cohort"
                  onChange={handleChange}
                  defaultValue={form.cohort}
                  required
                >
                  <option value="" disabled>
                    Choose your preferred cohort
                  </option>
                  <option value="CH13">CH-13 - January</option>
                  <option value="CH14">CH-14 - May</option>
                  <option value="CH15">CH-15 - August</option>
                </select>
              </div> */}
              <button type="submit" id="actionBtn">
                Sign in
              </button>
              <p>
                <Link to="/forgot-password">
                  <span>Forgot your password?</span>
                </Link>
              </p>
              <p>
                Don't have an account?{" "}
                <Link to="/signup">
                  <span>Sign up</span>
                </Link>
              </p>
              {/* <p>
                Don't have an account?{" "}
                <span
                  onClick={() =>
                    toast.info(
                      "Application is Closed. Enrollment into Cohort 013 begins September 2022"
                    )
                  }
                >
                  Sign up
                </span>
              </p> */}
            </form>
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

export default Login;
