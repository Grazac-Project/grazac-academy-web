import React, { useEffect } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import { Link } from "react-router-dom";
import FailedModal from "./failedModal";
import SucessModal from "./successModal";
import { useFlutterwave } from "flutterwave-react-v3";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Web3Form } from "../../api/dashboard/auth";
import "../../tailwindComponents.css";

const Start = () => {
  const [details, setDetails] = useState({});
  const [failedModal, setFailedModal] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);

  const handleCloseSucess = () => {
    setSucessModal(!sucessModal);
    window.location = `/web3`;
  };
  const handleCloseFailed = () => {
    setFailedModal(!failedModal);
    window.location = `/web3-application-form`;
  };
  useEffect(() => {
    try {
      let data = sessionStorage.getItem("formData");
      if (data) {
        setDetails(JSON.parse(data));
      }
      console.log(details);
    } catch (error) {
      console.error("Failed to get details:", error);
    }
  }, []);

  const doSignUp = async (e) => {
    try {
      const response = await Web3Form(details);
      console.log(response);
  
      if (response.data.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error("Something went wrong, please try again!");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong! Please ensure you have a good internet connection.";
      toast.error(errorMessage);
    }
  };
  
  const config = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY || "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: details?.email || "",
      phonenumber: details?.phone || "",
      name: details?.firstName || "",
    },
    customizations: {
      title: "Grazac Academy",
      description: "Payment for Graduate Cohort",
      logo: "https://grazac.com.ng/logo.png",
    },
  };
  
  const handleFlutterPayment = useFlutterwave(config);
  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log("Payment response:", response);
        if (response.status === "completed" || response.status === "successful") {
          doSignUp();
          setSucessModal(true);
        } else {
          toast.error("Payment failed. Please try again.");
          setFailedModal(true);
        }
      },
      onClose: () => {
        toast.info("Payment window closed.");
      },
    });
  };

  return (
    <div className="layout_auth">
      {failedModal && <FailedModal close={handleCloseFailed} />}
      {sucessModal && <SucessModal close={handleCloseSucess} />}
      <ToastContainer />
      <div className="layout_auth-main">
        <div className="auth_container">
          <div className="auth_container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form !w-[542px] sm:!w-[95%] !px-[68px] !pt-[47px] !pb-[24]">
            <div>
              <Link to="/web3-application-form" className="cursor-pointer">
                <h4 className="text-text text-[12px] leading-[18px] flex items-center gap-1 mb-[10px]   ">
                  <FaArrowLeft />
                  Go back
                </h4>
              </Link>
              <div className="text-text text-[12px] leading-[18px] text-right ">
                Step 3 of 3
              </div>
              <div className="h-[7px] w-auto rounded-2xl bg-[#DDDDDD] mb-8 ">
                <div className="h-full w-3/3 bg-primary rounded-lg"></div>
              </div>
            </div>
            <h4 className="!text-heading !text-[24px] !mb-2 font-bold ">
              Pay Application Fee
            </h4>
            <p className="text-text text-[14px] leading-[21px] ">
              Your details have been recorded successfully, finish your
              enrollment process by paying your application fee. <br/>Please note, prior experience with web2 is required to enroll for this class.
            </p>
            <p className="text-text text-[14px] leading-[21px] my-8">
              Application Fee: <span className="text-primary">10000 NGN</span>
            </p>
            <button onClick={handlePayment} className="!mt-8 cursor-pointer">
              Proceed to payment
            </button>
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
