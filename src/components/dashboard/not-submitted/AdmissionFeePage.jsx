import React, { useEffect, useRef, useState } from "react";
import {
  useFlutterwave,
  closePaymentModal,
} from "flutterwave-react-v3";
import { toast } from "react-toastify";
import { createCheckout } from "../../../api/dashboard/data";
import { getFees } from "../../../api/dashboard/auth";

function AdmissionFeePage({ details, fname, checkPaymentStatus, paymentVerification }) {
  const buttonRef = useRef();
  const [checkout, setCheckout] = useState(null);
  const [creating, setCreating] = useState(false);
  const paymentOpened = useRef(false);
  const [fee, setFee] = useState(null);
  const paymentBusy = useRef(false);
  const awaitingVerification = useRef(false);

  useEffect(() => {
    getFees().then((result) => setFee(result.data?.data?.admission))
      .catch(() => toast.error("Unable to load admission fee. Please refresh and try again."));
  }, []);

  const AdmissionFeeFlutterwaveConfig = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,

    tx_ref: checkout?.tx_ref,
    amount: checkout?.amount,
    currency: checkout?.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${details?.email}`,
      phonenumber: `${details?.phone}`,
      name: `${details?.firstName} ${details?.lastName}`,
    },

    customizations: {
      title: "Grazac Academy",
      description: "Admission Fee Payment",
      logo: "https://grazac.com.ng/logo.png",
    },
  };

  const HandleAdmissionPayFlutterPayment = useFlutterwave(
    AdmissionFeeFlutterwaveConfig
  );

  const startAdmissionPayment = () => {
    if (!fee || paymentBusy.current || awaitingVerification.current || paymentVerification) return;
    paymentBusy.current = true;

    setCreating(true);
    createCheckout({ purpose: "admission" })
      .then((response) => response.data)
      .then((res) => {
        if (res?.status === 201 && res.data?.tx_ref && res.data.amount > 0 && res.data.currency === "NGN") {
          setCreating(false);
          setCheckout(res.data);
          return;
        }
        setCreating(false);
        paymentBusy.current = false;
        toast.error(res?.message || "Unable to start payment. Please try again.");
      })
      .catch((err) => {
        setCreating(false);
        paymentBusy.current = false;
        toast.error(
          err.response?.data?.message ||
            "Something went wrong! Please ensure you have a good internet connection."
        );
      });
  };

  useEffect(() => {
    if (!checkout || paymentOpened.current === checkout.tx_ref) return;
    paymentOpened.current = checkout.tx_ref;
    HandleAdmissionPayFlutterPayment({
      callback: async (response) => {
        if (response.status === "successful" || response.status === "completed") {
          awaitingVerification.current = true;
          closePaymentModal();
          await checkPaymentStatus(String(response.transaction_id));
        } else {
          closePaymentModal();
          paymentBusy.current = false;
          setCheckout(null);
          setCreating(false);
          toast.error("Payment unsuccessful!");
        }
      },
      onClose: () => {
        paymentBusy.current = false;
        setCheckout(null);
        setCreating(false);
      },
    }).catch(() => {
      setCreating(false);
      paymentBusy.current = false;
      paymentOpened.current = null;
      setCheckout(null);
      toast.error("Unable to open payment. Please try again.");
    });
  }, [checkout, HandleAdmissionPayFlutterPayment, checkPaymentStatus]);

  return (
    <div>
      {/* <h3>Hello {fname}</h3> */}
      <h3>Welcome to Grazac Academy, {fname}</h3>
      <p>We're excited to support you as you kickstart your career in tech!</p>
      <p>
        The application fee for our program is <strong>{fee ? `₦${fee.toLocaleString()}` : "loading..."}</strong>.
      </p>
      <p>
        After completing your registration payment, you’ll be required to take a
        basic quantitative reasoning assessment. This helps us understand your
        starting point so we can tailor our support to your learning journey.
      </p>
      <p>
        Don't worry, the assessment is straightforward and designed to ensure
        you get the most out of the program.
      </p>
      <p>We look forward to being part of your growth journey in tech!</p>

      <button
        className={"button"}
        ref={buttonRef}
        disabled={!fee || creating || Boolean(checkout) || Boolean(paymentVerification)}
        onClick={startAdmissionPayment}
      >
        Proceed To Pay
      </button>
    </div>
  );
}

export default AdmissionFeePage;