import React, { useState } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import { Link } from "react-router-dom";
import loader from "../../images/svg/dashboard/loader.gif";
import { Web3Form } from "../../api/dashboard/auth";

const Start = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedInLink: "",
    twitterLink: "",
    portfolioLink: "",
    gender: "",
    inspiration: "",
    achievement: " ",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function doSignUp(e) {
    e.preventDefault();
    // console.log("ffffff");
    console.log(form);
    var btn = document.getElementById("actionBtn");

    try {
      const response = await Web3Form(form);

      const res = await response;
      // const res.data.status ==201
      console.log(res);
      if (res.data.status === 201) {
        const sessionData = {
            fullName: res.data.data.fullName,
            email: res.data.data.email,
            phone: res.data.data.phoneNumber,
          };
      
          sessionStorage.setItem("details", JSON.stringify(sessionData));
          console.log("Session storage data set:", sessionData); 
        window.location = `/web3-application-payment`;
      } else {
        toast.error("Something went wrong, please try again!!!");
      }
    } catch (err) {
      if (err.response.data.message) {
        // console.log(err.response.data.message)
        toast.error(err.response.data.message);
        btn.innerHTML = `Continue`;
      } else {
        toast.error(
          "Something went wrong!!! Please make sure you have a good internet connection."
        );
        btn.innerHTML = `Continue`;
      }
    }
  }
  return (
    <div className="layout_auth">
      <ToastContainer />
      <div className="layout_auth-main">
        <div className="auth_container">
          <div className="auth_container-logo ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form !w-[542px] sm:!w-[95%] !px-[68px] sm:!px-2 !pt-[47px] !pb-[24px]">
            <div>
              <div className="text-text text-[12px] leading-[18px] text-right ">
                Step 2 of 3
              </div>
              <div className="h-[7px] w-auto rounded-2xl bg-[#DDDDDD] mb-8 ">
                <div className="h-full w-2/3 bg-primary rounded-lg"></div>
              </div>
            </div>
            <h4 className="!text-heading !text-[24px] !mb-2 font-bold  ">
              Web3 Enrollment Form
            </h4>
            <p className="text-text text-[14px] leading-[21px] mb-8">
              Kindly fill in your details correctly, on submission, you will be
              asked to pay an application fee of 10,000 NGN only
            </p>
            <form onSubmit={doSignUp}>
              <div>
                <label>Full Name</label>
                <input
                  type="fullName"
                  required
                  placeholder="Enter your full name"
                  name="fullName"
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
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Github profile link</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your github profile link"
                  name="githubProfileLink"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Linkedin profile link</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your linkedin profile link"
                  name="linkedInLink"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Twitter profile link</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your twitter profile link"
                  name="twitterLink"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Website/Portfolio link (optional)</label>
                <input
                  type="text"
                  //   required
                  placeholder="Enter your website/portfolio link"
                  name="portfolioLink"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Gender</label>
                <select
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  name="gender"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label>
                  What inspired or motivated you to start writing codes?
                </label>
                <textarea
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4 "
                  type="text"
                  required
                  placeholder="Enter text here"
                  name="inspiration"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>What do you hope to achieve from this program?</label>
                <textarea
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 "
                  type="text"
                  required
                  placeholder="Enter text here"
                  name="achievement"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" id="actionBtn" className="!mt-8">
                Continue
              </button>
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
};

export default Start;
