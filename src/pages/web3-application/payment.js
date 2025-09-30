import React, { useEffect } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import loader from "../../images/load.gif";
import { Link } from "react-router-dom";
import FailedModal from "./failedModal";
import SucessModal from "./successModal";
import { useFlutterwave } from "flutterwave-react-v3";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { coupon, Web3Form } from "../../api/dashboard/auth";
import "../../tailwindComponents.css";
import sucess from "../../images/mark.svg";
import copy from "../../images/copy.svg";
import file from "../../images/file.svg";
import filee from "../../images/file-icon.svg";

import { Button } from "react-bootstrap";
import { set } from "date-fns";

const Start = () => {
  const [details, setDetails] = useState({});
  const [failedModal, setFailedModal] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [form, setForm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [active, setActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [selectedFile, setSelectedFile] = useState("null");

  const handleCoupon = (e) => {
    setError("");
    setForm(e.target.value);
    console.log(form);
    if (setForm === true) {
      setError("");
    } else {
      setLoading("");
    }
  };
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
  const checkCoupon = async (e) => {
    e.preventDefault();
    setLoading("loading");
    setError("");
    try {
      const response = await coupon(form);
      console.log(response);

      if (response.status === 200) {
        setLoading("correct");
        setActive(true);
      }
    } catch (err) {
      setLoading("");
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong! Please ensure you have a good internet connection.";
      setError(errorMessage);
    }
  };
  // const doSignUp = async (e) => {
  //   setLoading("loader");
  //   try {
  //     const response = await Web3Form(details);
  //     console.log(response);

  //     if (response.data.status === 200) {

  //       // toast.success(response.data.message);
  //       setSucessModal(true);

  //       setLoading("");
  //     } else {
  //       toast.error("Something went wrong, please try again!");
  //       setLoading("");
  //     }
  //   } catch (err) {
  //     setLoading("");

  //     const errorMessage =
  //       err.response?.data?.message ||
  //       "Something went wrong! Please ensure you have a good internet connection.";
  //     toast.error(errorMessage);
  //   }
  // };
  // const doSignUpWithCoupon = () => {

  //     doSignUp();

  //     setLoading("");

  //     setSucessModal(true);

  // };
  const doSignUp = async (e) => {
    // const Data = new FormData();
    const newDetails = {}

    newDetails.fullName = details?.fullName;
    newDetails.email = details?.email;
    newDetails.phoneNumber = details?.phoneNumber;
    newDetails.experience = details?.experience;
    newDetails.availability = details?.availability;
    newDetails.orientation = details?.orientation;
    newDetails.backgroundKnowledge = details?.backgroundKnowledge;
    newDetails.specify = details?.specify;
    newDetails.githubProfileLink = details?.githubProfileLink;
    newDetails.linkedInLink = details?.linkedInLink;
    newDetails.twitterLink = details?.twitterLink;
    newDetails.portfolioLink = details?.portfolioLink;
    newDetails.gender = details?.gender;
    newDetails.inspiration = details?.inspiration;
    newDetails.achievement = details?.achievement;
    newDetails.coupon = form;
    
    // Data.append("fullName", details?.fullName);
    // Data.append("email", details?.email);
    // Data.append("phoneNumber", details?.phoneNumber);
    // Data.append("experience", details?.experience);
    // Data.append("availability", details?.availability);
    // Data.append("orientation", details?.orientation);
    // Data.append("backgroundKnowledge", details?.backgroundKnowledge);
    // Data.append("specify", details?.specify);
    // Data.append("githubProfileLink", details?.githubProfileLink);
    // Data.append("linkedInLink", details?.linkedInLink);
    // Data.append("twitterLink", details?.twitterLink);
    // Data.append("portfolioLink", details?.portfolioLink);
    // Data.append("gender", details?.gender);
    // Data.append("inspiration", details?.inspiration);
    // Data.append("achievement", details?.achievement);
    // Data.append("coupon", form);
    // Data.append("attachment", selectedFile);

    setLoading("loader");
    try {
      // const response = await Web3Form(Data);
      const response = await Web3Form(newDetails);
      console.log(response);

      if (response.data.status === 200) {
        // toast.success(response.data.message);
        setSucessModal(true);
      } else {
        toast.error("Something went wrong, please try again!");
        // setFailedModal(true);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong! Please ensure you have a good internet connection.";
      toast.error(errorMessage);
      // setFailedModal("true");
    } finally {
      setLoading("");
    }
  };

  const doSignUpWithCoupon = async () => {
    await doSignUp();
  };

  const config = {
    public_key:
      process.env.REACT_APP_FLW_PUBLIC_KEY ||
      "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: details?.email || "",
      phonenumber: details?.phone || "",
      name: details?.fullName || "",
    },
    customizations: {
      title: "Grazac Academy",
      description: "Payment for Graduate Cohort",
      logo: "https://grazac.com.ng/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const handlePayment = () => {
    setLoading("loader");
    handleFlutterPayment({
      callback: (response) => {
        console.log("Payment response:", response);
        if (
          response.status === "completed" ||
          response.status === "successful"
        ) {
          doSignUp();
          setLoading("");

          setSucessModal(true);
        } else {
          toast.error("Payment failed. Please try again.");
          setFailedModal(true);
        }
      },
      onClose: () => {
        toast.info("Payment window closed.");
        setLoading("");
      },
    });
  };
  const accountNumber = "1023002745";
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopySuccess("copied!");
      })
      .catch(() => {
        setCopySuccess("Failed to copy .");
      });
  };
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files[0];

    if (selectedFiles) {
      // Access file details
      const fileName = selectedFiles.name;
      const fileSize = (selectedFiles.size / (1024 * 1024)).toFixed(2) + " MB";
      console.log("Selected file:", fileName);
      // console.log("File size:", fileSize);

      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

      if (!allowedTypes.includes(selectedFiles.type)) {
        setError("Only PDF,JPEG and PNG files are allowed.");
        return;
      }
      const maxSize = 10 * 1024 * 1024;
      if (selectedFiles.size > maxSize) {
        setError("File size exceeds the maximum limit of 10MB.");
        return;
      }

      console.log(selectedFiles);
      setSelectedFile(selectedFiles);
      setFileName(fileName);
      setFileSize(fileSize);
      setError("");
    }
  };
  return (
    <div className="layout_auth">
      {failedModal && <FailedModal close={handleCloseFailed} />}
      {sucessModal && <SucessModal close={handleCloseSucess} />}
      <ToastContainer />
      <div className="layout_auth-main ">
        <div className="auth_container ">
          <div className="auth_container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form !w-[542px] sm:!w-[95%] md:!px-[0px] !px-[68px] !pt-[47px] !pb-[24]">
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
              Complete your application by paying your application fee
            </p>
            <p className="text-text text-[14px] leading-[21px] mt-4 mb-8">
              Application Fee: <span className="text-primary">10000 NGN</span>
            </p>
            <form>
              {/* {active ? (
                ""
              ) : (
                <div>
                  <div className="min-h-[60px] w-[100%] bg-[#F9BA0D1A] rounded-[8px]  p-[12px]  flex justify-center items-center my-4 ">
                    <p className="font-500 text-[12px] !leading-[18px] !text-[#787676] ">
                      We are currently experiencing issues with our Flutterwave
                      account. Please make a bank transfer to the account below
                      and attach payment evidence.{" "}
                    </p>
                  </div>
                  <div>
                    <div className="mb-2">
                      <label className="!text-[#787676] !font-[600] flex  items-center gap-2">
                        Account Number:{" "}
                        <span
                          className="!text-[12px] !leading-4 !font-[600] flex justify-center items-center gap-2"
                          onClick={copyToClipboard}
                        >
                          1023002745
                          <img src={copy} width={16} height={16} alt="logo" />
                          {copySuccess && (
                            <p style={{ color: "green" }}>{copySuccess}</p>
                          )}
                        </span>
                      </label>
                    </div>
                    <div className="mb-2">
                      <label className="!text-[#787676] !font-[600] flex  items-center gap-2">
                        Bank Name:{" "}
                        <span className="!text-[12px] !leading-4 !font-[600]">
                          GRAZAC TECHNOLOGIES LIMITED
                        </span>
                      </label>
                    </div>{" "}
                    <div className="mb-2">
                      <label className="!text-[#787676] !font-[600] flex  items-center gap-2">
                        Bank Name:{" "}
                        <span className="!text-[12px] !leading-4 !font-[600]">
                          UNITED BANK OF AFRICA (UBA)
                        </span>
                      </label>
                    </div>{" "}
                    <div className="mb-2">
                      <label className="!text-[#787676] !font-[600] flex  items-center gap-2">
                        Application Fee:{" "}
                        <span className="!text-[12px] !leading-4 !font-[600]">
                          10,000 Naira
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-[100%] min-h-[126px] border border-[#EAECF0] mt-6 mb-8 ">
                    
                    <div className="py-4 px-6 flex flex-col justify-end items-center">
                      <input
                        type="file"
                        accept=".pdf, .jpeg, .png"
                        id="fileInput"
                        name="phoneNumber"
                        style={{ display: "none" }}
                        // value={form.phoneNumber}
                        onChange={handleFileChange}
                      />
                      <img
                        src={file}
                        width={40}
                        height={40}
                        alt="logo"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                        className="cursor-pointer"
                      />
                      {selectedFile === "null" ? (
                      <div>
                        <p className="mb-1 !font-[500] ">
                          <span
                            className="!text-[12px] !leading-4 !font-[500]"
                            onClick={() =>
                              document.getElementById("fileInput").click()
                            }
                          >
                            Attach receipt
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="!font-[500]">
                          JPEG, PDF and PNG (max. 10mb)
                        </p>
                      </div>
                      ) : (<div className="flex justify-center m-auto w-full mt-[16px] ">
                        <div className="flex items-center gap-2 ">
                          <img src={filee} height={32} width={32} alt="icon" />
                          <div>
                            <h5 className="text-[14px] leading-[19.6px] font-[500] text-[#344054]  ">
                              {fileName || "No file"}
                            </h5>
                            <p className="text-[14px] font-inter leading-[20px] text-[#667085]">
                              {fileSize}
                            </p>
                          </div>
                        </div>
                      </div>)}
                    </div>
                  </div>
                  <div className="">
                    <p className=" !font-[500]">
                      NB : Admission will be automatically rejected for wrong
                      attachments.{" "}
                    </p>

                    </div>
                    </div>
                    )} */}
              <p className="m-8 text-center !font-[500]">OR</p>

              <label>Enter coupon code?</label>
              <div className="flex   gap-1">
                <input
                  type="text"
                  placeholder="Enter your coupon code"
                  name=""
                  value={form}
                  onChange={handleCoupon}
                />
                <button
                  disabled={!form}
                  onClick={checkCoupon}
                  className={`text-[#787676] flex justify-center items-center text-[14px] leading-[17.87px] !w-[64px]  h-[50px] p-[13px]  !rounded-[5px] !mt-[5px] !border-none ${
                    form
                      ? "!bg-[#CFB9F9] !text-[#333333] cursor-pointer"
                      : "!bg-white !text-[#787676] cursor-not-allowed"
                  } `}
                >
                  {loading === "loading" && (
                    <img src={loader} width={40} height={40} alt="logo" />
                  )}{" "}
                  {loading === "" && "Apply"}{" "}
                  {loading === "correct" && (
                    <img src={sucess} width={30} height={30} alt="innovation" />
                  )}
                </button>
              </div>
              {error && (
                <p className="!text-red-600 text-[14px] leading-[21px]">
                  {error}
                </p>
              )}
            </form>
            <button
              onClick={active ? doSignUpWithCoupon : handlePayment}
              className="!mt-8 cursor-pointer flex justify-center items-center"
            >
              {active ? "Submit" : "Proceed to payment"}
              {loading === "loader" && (
                <img src={loader} width={20} height={20} alt="logo" />
              )}
            </button>
            {/* <button
              onClick={doSignUp}
              className="!mt-8 cursor-pointer flex justify-center items-center"
            >
              Submit
              {loading === "loader" && (
                <img src={loader} width={20} height={20} alt="logo" />
              )}
            </button> */}
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
