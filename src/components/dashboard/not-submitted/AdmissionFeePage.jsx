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
    amount: 15000,
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
        of 15,000 naira only.
      </p>

      <p>
        Within 7 days after you pay your registration fee, we will reach out to
        you for your assessment and interview which are a compulsory part of
        your registration process. You can't afford to miss that. So, please,
        keep your eyes glued to your email notifications/inbox and expect a
        message from us.
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
