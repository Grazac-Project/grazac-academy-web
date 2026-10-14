import React, { useRef } from "react";
import {
  useFlutterwave,
  closePaymentModal,
} from "flutterwave-react-v3";

function AdmissionFeePage({ details, fname, lname, email, phone }) {
  const buttonRef = useRef();


  const AdmissionFeeFlutterwaveConfig = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,

    tx_ref: Date.now(),
    amount: 7500,
    // amount: 105,
    currency: "NGN",
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


  return (
    <div>
      {/* <h3>Hello {fname}</h3> */}
      <h3>Welcome to Grazac Academy, {fname}</h3>
      <p>We're excited to support you as you kickstart your career in tech!</p>
      <p>
        {/* The application fee for our program is <strong>₦105</strong>. */}
        The application fee for our program is <strong>₦7,500</strong>.
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
        onClick={() => {
          HandleAdmissionPayFlutterPayment({
            callback: (response) => {
              console.log(response.status);
              closePaymentModal(); // this will close the modal programmatically
              window.location = "/dashboard";
              // if (
              //   response.status === "successful" ||
              //   response.status === "completed"
              // ) {
              //   const userDetails = JSON.parse(
              //     sessionStorage.getItem("user_details")
              //   );
              //   userDetails.applicationFee = true;
              //   sessionStorage.setItem(
              //     "user_details",
              //     JSON.stringify(userDetails)
              //   );
              //   closePaymentModal();
              //   window.location.reload();
              // }
            },
            onClose: () => {
              window.location = "/dashboard";
            },
          });
        }}
      >
        Proceed To Pay
      </button>
    </div>
  );
}

export default AdmissionFeePage;
