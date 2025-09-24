import React, { useState, useRef } from "react";
import termsandconds from "../../../content/TermsandCondition.pdf";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";

function AdmissionFeePage({ details, fname, lname, email, phone }) {
  const [checkAct, setCheckAct] = useState(false);
  const buttonRef = useRef();

  // test: "FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X",
  // public_key: "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",

  const AdmissionFeeFlutterwaveConfig = {
    public_key: "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",
    // public_key: "FLWPUBK_TEST-db62329aaf72156409b8ba67895226d6-X",

    tx_ref: Date.now(),
    amount: 10000,
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

  const confirmCheck = () => {
    var check = document.getElementById("check");
    if (check.checked) {
      setCheckAct(true);
    } else {
      setCheckAct(false);
    }
  };

  return (
    <div>
      {/* <h3>Hello {fname}</h3> */}
      <h3>Welcome to Grazac Academy, {fname}</h3>
      <p>We're excited to support you as you kickstart your career in tech!</p>
      <p>
        The application fee for our program is <strong>₦10,000</strong>.
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
