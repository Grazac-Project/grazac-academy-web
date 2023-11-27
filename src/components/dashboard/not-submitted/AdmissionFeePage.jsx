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

    tx_ref: Date.now(),
    amount: 7500,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${details.email}`,
      phonenumber: `${details.phone}`,
      name: `${details.firstName} ${details.lastName}`,
    },

    customizations: {
      title: "Grazac Academy",
      description: "Admission Fee Payment",
      logo: "https://grazac.com.ng/assets/images/favicon.png",
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

      <p>
        To start your application, you are required to pay a non-refundable fee
        of 7,500 naira only.
      </p>
      {/* <p>
        As part of Grazac's 3rd year anniversary, we are giving a 30% discount on the application fee.
        Pay 5,250 naira instead of 7,500 naira today
      </p> */}

      <p>
        As part of your registration process, assessment and interview will be
        conducted, the schedule will be communicated to you via your registered
        email address within 7 days after payment of the registration fee.
        Please note that It is important that you do not miss the assessment
        interview. Kindly check your email regularly for updates.
      </p>

      <p>We look forward to being a part of your growth.</p>

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
    </div>
  );
}

export default AdmissionFeePage;
