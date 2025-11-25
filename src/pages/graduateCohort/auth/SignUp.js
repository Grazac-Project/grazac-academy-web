import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { SignupAction } from "../../../api/dashboard/auth";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Terms from "../../../images/newsletter/terms.pdf";
import Pricing from "../../../images/newsletter/pricing.pdf";
import authImg from "../../../images/auth.png";
import logo from "../../../images/svg/academy-logo.svg";
import visible from "../../../images/svg/visible.svg";
import notvisible from "../../../images/svg/notvisible.svg";
import loader from "../../../images/svg/dashboard/loader.gif";

function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hear_about_us: "",
    password: "",
    cohort_batch: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function doSignUp(e) {
    e.preventDefault();
    console.log("ffffff");
    // console.log(form);
    var btn = document.getElementById("actionBtn");

    // if (form.password.length > 5) {
    if (form.password.length >= 6) {
      // btn.innerHTML=`<img src=${loader} width="20px" />`;
      const {
        firstName,
        lastName,
        email,
        phone,
        hear_about_us,
        password,
        cohort_batch,
      } = form;
      let data = {};
      // var data = new FormData();
      const phone_length = phone.length;

      // if (phone_length == 11 || phone_length > 11) {
      if (phone_length === 11) {
        data.firstName = firstName;
        data.lastName = lastName;
        data.email = email;
        data.phoneNumber = phone;
        data.hear_about_us = hear_about_us;
        data.password = password;
        data.cohort_batch = cohort_batch;
        // data.append("firstName", firstName);
        // data.append("lastName", lastName);
        // data.append("email", email);
        // data.append("phoneNumber", phone);
        // data.append("password", password);
        // data.append("hear_about_us", hear_about_us);
        // data.append("cohort_batch", cohort_batch);

        btn.innerHTML = `<img src=${loader} width="20px" />`;

        try {
          const response = await SignupAction(data);

          const res = await response;
          // const res.data.status ==201
          // console.log(res)
          if (res.data.status === 201) {
            toast.success(`${res.data.message} Proceed to login.`);
            // btn.innerHTML=`Create account`;
            // btn.innerHTML="<p>Create account</p>";

            window.location = `/account-created?email=${email}`;
          } else {
            toast.error("Something went wrong, please try again!!!");
            btn.innerHTML = "<p>Create account</p>";
          }
        } catch (err) {
          if (err.response.data.message) {
            // console.log(err.response.data.message)
            toast.error(err.response.data.message);
            btn.innerHTML = `Create account`;
          }
          // else {
          //   toast.error(
          //     "Something went wrong!!! Please make sure you have a good internet connection."
          //   );
          //   btn.innerHTML = `Create account`;
          // }
        }
      } else {
        const message = `Please enter your number in this of format: 0${form.phone.slice(
          3
        )}`;

        toast.error(message);
      }
    } else {
      // toast.error("Password must be at least 6 characters!");
      toast.error(
        "Password must must be atleast 6 characters and must contain alphabets and numbers!"
      );
    }
  }

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
            {/* <span className="closed">Application is now Closed</span> */}
            <h3>Create an Account</h3>
            <p className="auth_container_form-text">
              Create a free account to start your application
            </p>
            <form onSubmit={doSignUp}>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
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
              <div>
                <label>Phone Number</label>
                <input
                  type="number"
                  required
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>How did you hear about us?</label>
                <select
                  name="hear_about_us"
                  value={form.hear_about_us}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select option
                  </option>
                  <option value="Search Engine (Google, Bing etc.)">
                    Search Engine (Google, Bing etc.)
                  </option>

                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="X/Twitter">X/Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Online Advertisement">
                    Online Advertisement
                  </option>
                  <option value="Word of Mouth/Referral">
                    Word of Mouth/Referral
                  </option>
                  <option value="Email Campaign">Email Campaign</option>
                  <option value="Blog or Article">Blog or Article</option>
                  <option value="Webinar or Event">Webinar or Event</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Newsletter">Newsletter</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Billboard">Billboard</option>
                  <option value="Online Forum/Community">
                    Online Forum/Community
                  </option>
                  <option value="Referral from a Partner">
                    Referral from a Partner
                  </option>
                  <option value="Affiliate Program">Affiliate Program</option>
                  <option value="Influencer Recommendation">
                    Influencer Recommendation
                  </option>
                  <option value="My School/University">
                    My School/University
                  </option>
                  <option value="Career Counsellor">Career Counsellor</option>
                  <option value="Training Boootcamp">Training Boootcamp</option>
                  <option value="Print Advertisement">
                    Print Advertisement
                  </option>
                  <option value="Alumni Network">Alumni Network</option>
                  <option value="Training Bootcamp">Training Bootcamp</option>
                  <option value="Industry Conference">
                    Industry Conference
                  </option>
                  <option value="Grazac Academy Website">
                    Grazac Academy Website
                  </option>
                  <option value="Hackthejobs Website">
                    Hackthejobs Website
                  </option>
                  <option value="Grazac">Grazac</option>
                  <option value="Ogun Digital Summit">
                    Ogun Digital Summit
                  </option>
                </select>
                {/* <input
                  type="number"
                  required
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                /> */}
              </div>
              <div className="auth_container_form-password">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  required
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
                  name="cohort_batch"
                  required
                  onChange={handleChange}
                  defaultValue={form.cohort_batch}
                >
                  <option value="" disabled>
                    Choose your preferred cohort
                  </option>
                  <option value="CH13" disabled>
                    CH-13 - January
                  </option>
                  <option value="CH14">CH-14 - May</option>
                  <option value="CH15">CH-15 - August</option>
                </select>
              </div> */}
              <button type="submit" id="actionBtn">
                Create Account
              </button>
              <p className="terms">
                By clicking “Create account” you agree to our{" "}
                <a href={Terms} download>
                  Terms & Conditions
                </a>{" "}
                and that you have read our{" "}
                <a href={Pricing} download>
                  Pricing Plan
                </a>
                .
              </p>
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
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

export default SignUp;
