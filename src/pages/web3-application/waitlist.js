import React, { useEffect, useState } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css"; 
import loader from "../../images/load.gif";
import { Web3Waitlist } from "../../api/dashboard/auth";
import Waitlistmodal from "./waitlist-modal";
import { useHistory } from 'react-router-dom'

const Waitlist = () => {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: details?.fullName || "",
    email: details?.email || "",
    phoneNumber: details?.phoneNumber || "",
    githubProfileLink: details?.githubProfileLink || "",
    linkedInLink: details?.linkedInLink || "",
    twitterLink: details?.twitterLink || "",
    portfolioLink: details?.portfolioLink || "",
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    githubProfileLink: "",
    linkedInLink: "",
    twitterLink: "",
    
  });


  const validateForm = () => {
    const newErrors = {};
  
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email Address is required.";
    }
    if (!form.phoneNumber.trim() || !/^(\+[\d]{1,5}|0)?[7-9]\d{9}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid Nigerian phone number.";
    }
    if (!form.githubProfileLink.trim() || !/^http(s)?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/?$/.test(form.githubProfileLink)) {
      newErrors.githubProfileLink = "Please enter a valid GitHub profile link.";
    }
    if (!form.linkedInLink.trim() || !/^http(s)?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(form.linkedInLink)) {
      newErrors.linkedInLink = "Please enter a valid LinkedIn profile link.";
    }
    // if (!form.twitterLink.trim() || !/^http(s)?:\/\/(www\.)?x\.com\/[a-zA-Z0-9_]+\/?$/.test(form.twitterLink)) {
    //   newErrors.twitterLink = "Please enter a valid Twitter profile link.";
    // }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

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
  }
  //  else if (name === "twitterLink" && value) {
  //   const twitterRegex = /^http(s)?:\/\/(www\.)?x\.com\/[a-zA-Z0-9_]+\/?$/;
  //   if (!twitterRegex.test(value)) {
  //     error = "Please enter a valid Twitter profile link.";
  //   }
  // } 
  else if (name === "phoneNumber" && value) {
    const phoneRegex = /^(\+[\d]{1,5}|0)?[7-9]\d{9}$/;
    if (!phoneRegex.test(value)) {
      error = "Please enter a valid Nigerian phone number.";
    }
  }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
    setLoading(true);
    e.preventDefault();

    if (validateForm()) {
      Web3Waitlist(form)
      .then(response => {
        setLoading(false);
        toast.success(response.data.success)
        console.log(response);
        setTimeout(()=>{
          setShowSuccess(true)
        }, 2000)
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
      })

    } else {
      toast.error("Please fix the highlighted errors before proceeding.");
      setLoading(false);
    }
  };

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      ...details,
    }));
  }, [details]);
  
  // console.log(details);
  // console.log('form', form);
  const closeModal = () => {
    setShowSuccess(false)
    history.push('/web3')
  }
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
            <h1 className="!text-heading !text-[24px] !mb-2 font-bold">
                Join Waitlist for cohort 2.0 
            </h1>
            <p className="text-text text-[14px] leading-[21px] mb-8">
                Cohort 1.0 is ongoing, register to be the first person to get information about the next cohort
            </p>
            <form onSubmit={saveDetails}>
              <div>
                <label>Full Name</label>
                {errors.fullName && <p className="!text-red-600 text-[14px] leading-[21px]">{errors.fullName}</p>}
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email Address</label>
                {errors.email && <p className="!text-red-600 text-[14px] leading-[21px]">{errors.email}</p>}
                <input
                  type="email"
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
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Github Profile Link</label>
                {errors.githubProfileLink && (
                  <p className="!text-red-600 text-[14px] leading-[21px]">{errors.githubProfileLink}</p>
                )}
                <input
                  type="text"
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
                  placeholder="Enter your LinkedIn profile link"
                  name="linkedInLink"
                  value={form.linkedInLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Twitter Profile Link</label>
                {/* {errors.twitterLink && (
                  <p className="!text-red-600 text-[14px] leading-[21px]">{errors.twitterLink}</p>
                )} */}
                <input
                  type="text"
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
              <button
                type="submit"
                id="actionBtn"
                className="!mt-8 cursor-pointer"
              >
                 {loading  ? 
                <img src={loader} width={20} height={20} alt="logo" className="block mx-auto"/> : 'Submit'
              }
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
    {showSuccess && <Waitlistmodal close={closeModal}/>}
    </div>
  );
};

export default Waitlist;
