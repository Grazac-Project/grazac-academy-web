import React, { useEffect, useState } from "react";
import { sendFlutterTx } from "../../api/dashboard/data.js";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import { toast } from "react-toastify";

const Payment = () => {
  const [action, setAction] = useState("Pay Now");
  const [status, setStatus] = useState("Pending");
  const [details, setDetails] = useState({});
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");

  var Data = [
    {
      id: 1,
      month: "Initial Payment",
      amount: "N285,000",
      status: "",
      action: "",
    },

    {
      id: 2,
      month: "February",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 3,
      month: "March",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 4,
      month: "April",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 5,
      month: "May",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 6,
      month: "June",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 7,
      month: "July",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 8,
      month: "August",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 9,
      month: "September",
      amount: "N85,000",
      status: "",
      action: "",
    },
    {
      id: 10,
      month: "October",
      amount: "N85,000",
      status: "",
      action: "",
    },
  ];
  useEffect(() => {
    let details = sessionStorage.getItem("user_details");
      console.log(details);

      setDetails(JSON.parse(details));
  } , [])
  const flutterWavePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "successful") {
          toast.success("Payment successful! Verifying payment...");
          // window.location = "/dashboard";
          console.log(response);
          console.log(response);
          console.log(response);

          sendFlutterTx(response.transaction_id)
            .then((response) => response.data)
            .then((res) => {
              if (res.data.status === "successful") {
                setAction("paid");
                // window.location = "/dashboard";
              } else {
              }
            })
            .catch((err) => {});
        } else {
          toast.error("Payment unsuccessful!");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: (response) => {},
    });
  };

  const makePayment = () => {
    flutterWavePayment();
    if (action === "paid") {
      setStatus("Approved");
    } else if (action === "Pay Now") {
      setStatus("Pending");

    } else {
      toast.info("Something is wrong!");
    }
  };

  // FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X
  // public_key: "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",
  const config = {
    public_key: "FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${details.email}`,
      phonenumber: `${details.phone}`,
      name: `${details.firstName} ${details.lastName}`,
    },

    customizations: {
      title: "Grazac Academy",
      description: "Payment for Graduate Cohort",
      logo: "https://grazac.com.ng/assets/images/favicon.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="payment">
      <h4>Payment Type: Installment</h4>
      <div className="payment-table">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, id) => (
              <tr key={item.id}>
                <td>{item.month}</td>
                <td>{item.amount}</td>
                <td>
                  <span
                    className={
                      status === "Pending"
                        ? "pending"
                        : status === "Approved"
                        ? "approved"
                        : "pending"
                    }
                  >
                    {status}
                  </span>
                </td>
                <td
                 onClick={makePayment}>
                  <p
                    className={
                      action === "Paid"
                        ? "paid"
                        : action === "Pay Now"
                        ? "pay-now"
                        : null
                    }
                  >
                    {action}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
