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
    amount: 7500,
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
      <h3>Hello {fname}</h3>
      <h4>Welcome to Grazac Academy</h4>
      <p>We can’t wait to help you kickstart your career in tech!</p>

      {/* <p>
        To start your application, you are required to pay a non-refundable fee
        of 7,500 naira only.
      </p> */}
      <p>
        The application fee is 15,000 naira.
      </p>
      <p>
        Enjoy a <span style={{fontWeight: 800}}>50% discount</span> on your application fee if you <span style={{fontWeight: 800}}>pay on or before 11:59 PM on the 3rd of November 2024.</span> Pay just <span style={{fontWeight: 800}}>7,500 naira</span> instead of the regular <span style={{fontWeight: 800}}>15,000 naira!</span>
      </p>
      {/* <p>
        Subsequently after the payment, you will be required to take an assessment. 
        This assessment will help us further assess your readiness to learn your preferred tech skills.
      </p> */}
      <p>
        After completing your registration payment, you'll take a basic quantitative reasoning assessment. 
        This helps us understand your starting point so we can better support your learning journey.
      </p>
      {/* <p>
        Don’t fret! It is simply a basic quantitative reasoning assessment.
        Please note that it is important not to miss this assessment.
      </p> */}
      <p>
        Don't worry — the assessment is designed to be straightforward and helps ensure you'll get the most out of the program.
      </p>

      {/* <p>We look forward to being a part of your growth.</p> */}
      <p>We look forward to being part of your growth journey in tech!</p>

      <button
        className={"button"}
        ref={buttonRef}
        onClick={() => {
          HandleAdmissionPayFlutterPayment({
            callback: (response) => {
              console.log(response.status);
              closePaymentModal(); // this will close the modal programmatically
              window.location = "/login";
            },
            onClose: () => {
              window.location = "/login";
            },
          });
        }}
      >
        Proceed To Pay
      </button>
      {/* <button
        className={"button"}
        ref={buttonRef}
      >
        Proceed To Pay
      </button> */}
    </div>
  );
}

export default AdmissionFeePage;
