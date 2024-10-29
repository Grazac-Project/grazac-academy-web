import React, { useState } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import { Link } from "react-router-dom";

const Start = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
          <div className="auth_container_form !w-[542px]  sm:!w-[95%] !px-[68px] sm:!px-6 !pt-[47px] !pb-[24px]">
            <div>
              <div className="text-text text-[12px] leading-[18px] text-right ">
                Step 1 of 3
              </div>
              <div className="h-[7px] w-auto rounded-2xl bg-[#DDDDDD] mb-8 ">
                <div className="h-full w-1/3 bg-primary rounded-lg"></div>
              </div>
            </div>
            <h4 className="!text-heading !text-[24px] !mb-2 font-bold ">
              Welcome to Grazac Web3 Academy
            </h4>
            <p className="text-text text-[14px] leading-[21px] mb-2">
              We’re excited to help you kickstart your career in Web3! <br /> To
              begin your application, please fill out the form below and pay a
              non-refundable fee of <span className="text-primary">10,000</span>{" "}
              naira.
            </p>
            <p className="text-text text-[14px] leading-[21px] mb-2">
              After payment, you will be contacted to take an assessment. This
              will help us evaluate your readiness to learn. Please ensure you
              don’t miss the assessment.
            </p>
            <p className="text-text text-[14px] leading-[21px]">
              We look forward to being part of your growth!
            </p>
            <div className="flex my-8 items-center gap-1  ">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="form-checkbox !m-0 !w-[18px] cursor-pointer h-[18px] rounded checked:bg-primary checked:border-transparent "
              />
              <p className="text-text text-[14px] leading-[21px] ">
                I agree to the terms
              </p>
            </div>
            <Link to="/web3-application-form">
              <button
                className={` w-[225px] xm:w-[90%] py-[19px] text-[18px] !rounded-[5px] font-bold mt-[56px] ${
                  isChecked ? "bg-primary" : "opacity-20 cursor-not-allowed"
                }`}
                disabled={!isChecked}
              >
                Start Application
              </button>
            </Link>
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
