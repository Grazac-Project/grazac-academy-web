import React, { useEffect, useRef, useState } from "react";
import authImg from "../../images/auth.png";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import loader from "../../images/load.gif";
import { Link } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FaArrowLeft } from "react-icons/fa";
// Reusing modals from web3 for consistency
import FailedModal from "../web3-application/failedModal";
import SucessModal from "../web3-application/successModal";

const InternshipPayment = () => {
  const [details, setDetails] = useState({});
  const [failedModal, setFailedModal] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkout, setCheckout] = useState(null);
  const paymentOpened = useRef(false);
  const paymentBusy = useRef(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const data = sessionStorage.getItem("internshipForm");
      if (data) {
        setDetails(JSON.parse(data));
        setSubmitted(sessionStorage.getItem("internshipPaymentSubmitted") === JSON.parse(data)?.checkout?.tx_ref);
      }
    } catch (error) {
      console.error("Failed to get details:", error);
    }
  }, []);

  const savedCheckout = details?.checkout;
  const hasCheckout = Boolean(savedCheckout?.tx_ref && savedCheckout.amount > 0 && savedCheckout.currency === "NGN");

  const config = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,
    tx_ref: checkout?.tx_ref,
    amount: checkout?.amount,
    currency: checkout?.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: details?.email || "",
      phonenumber: details?.phoneNumber || "",
      name: `${details?.firstName || ""} ${details?.lastName || ""}`,
    },
    customizations: {
      title: "Grazac Academy",
      description: "Internship Enrollment Fee",
      logo: "https://grazac.com.ng/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  useEffect(() => {
    const closeCheckout = () => {
      paymentBusy.current = false;
      paymentOpened.current = null;
      setCheckout(null);
    };
    if (!checkout || paymentOpened.current === checkout.tx_ref) return;
    paymentOpened.current = checkout.tx_ref;
    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "completed" || response.status === "successful") {
          setSubmitted(true);
          sessionStorage.setItem("internshipPaymentSubmitted", checkout.tx_ref);
          setSucessModal(true);
          toast.info("Payment submitted. Confirmation will be sent after verification. Do not pay again.");
        } else {
          setFailedModal(true);
          toast.error("Payment failed. Please try again.");
        }
        setLoading(false);
        closePaymentModal();
        closeCheckout();
      },
      onClose: () => {
        setLoading(false);
        closeCheckout();
      },
    }).catch(() => {
      setLoading(false);
      toast.error("Unable to open payment. Please try again.");
      closeCheckout();
    });
  }, [checkout, handleFlutterPayment]);

  const handlePayment = () => {
    if (paymentBusy.current || submitted) return;
    if (!hasCheckout) {
      toast.error("Please submit the internship form again to receive a checkout.");
      return;
    }
    paymentBusy.current = true;
    setLoading(true);
    setCheckout(savedCheckout);
  };

  const handleCloseSucess = () => {
    setSucessModal(false);
    window.location = "/program";
  };

  const handleCloseFailed = () => {
    setFailedModal(false);
  };

  return (
    <div className="layout_auth">
      <ToastContainer />
      {failedModal && <FailedModal close={handleCloseFailed} />}
      {sucessModal && <SucessModal close={handleCloseSucess} />}

      <div className="layout_auth-main">
        <div className="auth_container">
          <div className="auth_container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form !w-[542px] sm:!w-[95%] !px-[68px] sm:!px-2 !pt-[47px] !pb-[24px]">
            <div>
              <Link to="/InternshipForm" className="cursor-pointer">
                <h4 className="text-text text-[12px] leading-[18px] flex items-center gap-1 mb-[10px]">
                  <FaArrowLeft />
                  Go back
                </h4>
              </Link>
              <div className="text-text text-[12px] leading-[18px] text-right">
                Step 2 of 2
              </div>
              <div className="h-[7px] w-auto rounded-2xl bg-[#DDDDDD] mb-8">
                <div className="h-full w-full bg-primary rounded-lg"></div>
              </div>
            </div>

            <h4 className="!text-heading !text-[24px] !mb-2 font-bold">
              Tuition Fee
            </h4>
            <p className="text-[#787676] text-[14px] leading-[21px] mb-8">
              Complete your application by paying your internship fee.
            </p>

            <div className="bg-[#F5F5F5] p-6 rounded-xl mb-8">
              <div className="flex justify-between">
                <span className="text-[#073041] font-bold">Saved application total</span>
                <span className="text-[#773DD3] font-bold text-xl">{hasCheckout
                  ? new Intl.NumberFormat("en-NG", { style: "currency", currency: savedCheckout.currency }).format(savedCheckout.amount)
                  : "Unavailable"}</span>
              </div>
              {!hasCheckout && <p role="alert">Please <Link to="/InternshipForm">submit the form again</Link> to receive your saved application checkout.</p>}
              {submitted && <p role="status">Payment submitted for verification. Do not pay again.</p>}
            </div>

            <button
              onClick={handlePayment}
              className="!mt-4 cursor-pointer flex justify-center items-center gap-2"
              disabled={loading || submitted || !hasCheckout}
            >
              {loading ? (
                <>
                  Processing... <img src={loader} width={20} height={20} alt="loading" />
                </>
              ) : (
                "Proceed to payment"
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="layout_auth-image">
        <LazyLoadImage
          src={authImg}
          effect="blur"
          alt="auth"
          height="100%"
          width="100%"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-[#773DD3]/10"></div>
      </div>
    </div>
  );
};

export default InternshipPayment;
