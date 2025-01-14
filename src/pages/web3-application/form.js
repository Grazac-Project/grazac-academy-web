import React, { useEffect, useState } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import { Link } from "react-router-dom";
import loader from "../../images/svg/dashboard/loader.gif";
// import '../../tailwindComponents.css';
import "tailwindcss/tailwind.css"; // Import Tailwind CSS only in this component

const Start = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);
  const [web3Experience, setWeb3Experience] = useState(false);
  const [showVirtual, setShowVirtual] = useState(false);
  const [showSpecify, setShowSpecify] = useState(false);
  const [form, setForm] = useState({
    fullName: details?.fullName || "",
    email: details?.email || "",
    phoneNumber: details?.phoneNumber || "",
    experience: details?.experience || "",
    availability: details?.availability || "",
    orientation: details?.orientation || "",
    backgroundKnowledge: details?.backgroundKnowledge || "",
    specify: details?.specify || "",
    githubProfileLink: details?.githubProfileLink || "",
    linkedInLink: details?.linkedInLink || "",
    twitterLink: details?.twitterLink || "",
    portfolioLink: details?.portfolioLink || "",
    gender: details?.gender || "",
    inspiration: details?.inspiration || "",
    achievement: details?.achievement || "",
  });
  const [errors, setErrors] = useState({
    githubProfileLink: "",
    linkedInLink: "",
    twitterLink: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (form.experience === "No") {
      setError(true);
      setWeb3Experience(false)
    } else if(form.experience === "Yes"){
      setWeb3Experience(true)
      setError(false);
    } else{
      setError(false);
      setWeb3Experience(false)

    }
  }, [form.experience]);
  useEffect(() => {
    if (form.availability === "No") {
      setShowVirtual(true)
    } else {
      setShowVirtual(false)
    }
  }, [form.availability]);
  useEffect(() => {
    if (form.backgroundKnowledge === "No") {
      setShowSpecify(true)
    } else {
      setShowSpecify(false)
    }
  }, [form.backgroundKnowledge]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  let error = "";

  // Validation for specific fields
  if (name === "githubProfileLink" && value) {
    const githubRegex = /^http(s)?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/?$/;
    if (!githubRegex.test(value)) {
      error = "Please enter a valid GitHub profile link.";
    }
  } else if (name === "linkedInLink" && value) {
    const linkedInRegex = /^http(s)?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    if (!linkedInRegex.test(value)) {
      error = "Please enter a valid LinkedIn profile link.";
    }
  } else if (name === "twitterLink" && value) {
    const twitterRegex = /^http(s)?:\/\/(www\.)?x\.com\/[a-zA-Z0-9_]+\/?$/;
    if (!twitterRegex.test(value)) {
      error = "Please enter a valid Twitter profile link.";
    }
  } else if (name === "phoneNumber" && value) {
    const phoneRegex = /^(\+[\d]{1,5}|0)?[7-9]\d{9}$/;
    if (!phoneRegex.test(value)) {
      error = "Please enter a valid Nigerian phone number.";
    }
  }
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value,
    // });
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const saveDetails = (e) => {
    e.preventDefault();
    sessionStorage.setItem("formData", JSON.stringify(form));
    console.log("Session storage data set:", form);
    window.location = `/web3-application-payment`;
  };

  useEffect(() => {
    try {
      let data = sessionStorage.getItem("formData");
      if (data) {
        const parsedData = JSON.parse(data);
        setDetails(parsedData);
      }
    } catch (error) {
      console.error("Failed to get details:", error);
    }
  }, []);

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      ...details,
    }));
  }, [details]);
  
  console.log(details);
  console.log('form', form);
  
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
          <div className="auth_container_form !w-[542px] sm:!w-[95%] !px-[68px] sm:!px-2 !pt-[47px] !pb-[24px]">
            <div>
              <div className="text-text text-[12px] leading-[18px] text-right">
                Step 2 of 3
              </div>
              <div className="h-[7px] w-auto rounded-2xl bg-[#DDDDDD] mb-8">
                <div className="h-full w-2/3 bg-primary rounded-lg"></div>
              </div>
            </div>
            <h1 className="!text-heading !text-[24px] !mb-2 font-bold">
              Web3 Enrollment Form
            </h1>
            <p className="text-text text-[14px] leading-[21px] mb-8">
              Kindly fill in your details correctly. On submission, you will be
              asked to pay an application fee of 10,000 NGN only.
            </p>
            <form onSubmit={saveDetails}>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  name="fullName"
                  value={form.fullName}
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
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone Number</label>
                {errors.phoneNumber && (
                  <p className="!text-red-600 text-[14px] leading-[21px]">{errors.phoneNumber}</p>
                )}
                <input
                  type="number"
                  required
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Do you have experience with web2?</label>
                <p className=" !text-red-600 text-[14px] leading-[21px]">
                  {error ? "You are not eligible" : ""}
                </p>
                <select
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  name="experience"
                  required
                  value={form.experience}
                  onChange={handleChange}
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                
              </div>

              <div>
                <label>Github Profile Link</label>
                {errors.githubProfileLink && (
                  <p className="!text-red-600 text-[14px] leading-[21px]">{errors.githubProfileLink}</p>
                )}
                <input
                  type="text"
                  required
                  placeholder="Enter your Github profile link"
                  name="githubProfileLink"
                  value={form.githubProfileLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>LinkedIn Profile Link</label>
                {errors.linkedInLink && (
                  <p className="!text-red-600 text-[14px] leading-[21px]">{errors.linkedInLink}</p>
                )}
                <input
                  type="text"
                  required
                  placeholder="Enter your LinkedIn profile link"
                  name="linkedInLink"
                  value={form.linkedInLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Twitter Profile Link</label>
                {errors.twitterLink && (
                  <p className="!text-red-600 text-[14px] leading-[21px]">{errors.twitterLink}</p>
                )}
                <input
                  type="text"
                  required
                  placeholder="Enter your Twitter profile link"
                  name="twitterLink"
                  value={form.twitterLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Website/Portfolio Link (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter your website/portfolio link"
                  name="portfolioLink"
                  value={form.portfolioLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Gender</label>
                <select
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  name="gender"
                  required
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label>What inspired or motivated you to start coding?</label>
                <textarea
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  required
                  placeholder="Enter text here"
                  name="inspiration"
                  value={form.inspiration}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>What do you hope to achieve from this program?</label>
                <textarea
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3"
                  required
                  placeholder="Enter text here"
                  name="achievement"
                  value={form.achievement}
                  onChange={handleChange}
                />
              </div>
              {web3Experience && <div>
                <label>
                  Would you prefer virtual classes or would you be physically available to come to our office (Pro Hub, Salawu Olabode Avenue, Idi Aba, Abeokuta) for 4 months to attend all your classes?. We strongly recommend on-site learning.
                </label>
                <select
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  name="availability"
                  required
                  value={form.availability}
                  onChange={handleChange}
                >
                  <option value="">Select option</option>
                  <option value="Yes">I will be available on-site</option>
                  <option value="No">I prefer virtual classes</option>
                </select>
              </div>}
              {showVirtual && <div>
                <label>
                  Our orientation and graduation is onsite. Would you make yourself available for just these two days within the 4 months of your training?
                </label>
                <select
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  name="orientation"
                  required
                  value={form.orientation}
                  onChange={handleChange}
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>}
              <div>
                <label>
                  Do you have any background knowledge with JavaScript? 
                </label>
                <select
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                  name="backgroundKnowledge"
                  required
                  value={form.backgroundKnowledge}
                  onChange={handleChange}
                >
                  <option value="">Select option</option>
                  <option value="Yes, as a front end engineer with React or other frameworks.">Yes, as a front end engineer with React or other frameworks.</option>
                  <option value="Yes, as a back end engineer with Node.js">Yes, as a back end engineer with Node.js</option>
                  <option value="No">No, I know other programming languages.</option>
                </select>
              </div>
              {showSpecify && <div>
                <label>Please specify the programming language you have worked with?</label>
                <textarea
                  className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3"
                  required
                  placeholder="Enter text here"
                  name="specify"
                  value={form.specify}
                  onChange={handleChange}
                />
              </div>}
              <button
                type="submit"
                id="actionBtn"
                className="!mt-8"
                disabled={form.experience === "No"}
              >
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
