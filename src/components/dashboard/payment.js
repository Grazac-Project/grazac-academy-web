import React, { useEffect, useState } from "react";
import { sendFlutterTx } from "../../api/dashboard/data.js";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import { toast } from "react-toastify";

// const Payment = () => {
const Payment = ( ) => {
  const [action, setAction] = useState("Pay Now");
  const [status, setStatus] = useState("Pending");
  const [details, setDetails] = useState({});
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState("NGN");
  const [initialPayment, setInitialPayment] = useState()
  const [subPayment, setSubPayment] = useState('Pending')


  useEffect(() => {
    let details = sessionStorage.getItem("user_details");
      console.log(details);
      setDetails(JSON.parse(details));
      setInitialPayment(JSON.parse(details).firstInstallment);
      if(initialPayment == 1) {setStatus('Approved')}
      if(subPayment == 1) {setStatus('Approved')}
      else if(subPayment == 2) {setStatus('Approved')}
      else if(subPayment == 3) {setStatus('Approved')}
      else if(subPayment == 4) {setStatus('Approved')}
      else if(subPayment == 5) {setStatus('Approved')}
      else if(subPayment == 6) {setStatus('Approved')}
      else if(subPayment == 7) {setStatus('Approved')}
      else if(subPayment == 8) {setStatus('Approved')}
      else if(subPayment == 9) {setStatus('Approved')}
  } , [])


  var Data = [
    {
      id: 1,
      month: "Initial Payment",
      amount: 250,
      status: status,
      action: "",
    },

    {
      id: 2,
      month: "February",
      amount: 100,
      status: status,
      action: "",
    },
    {
      id: 3,
      month: "March",
      amount: 100,
      status: status,
      action: "",
    },
    {
      id: 4,
      month: "April",
      amount: 100,
      status: status,
      action: "",
    },
    {
      id: 5,
      month: "May",
      amount: 1000,
      status: status,
      action: "",
    },
    {
      id: 6,
      month: "June",
      amount: 1000,
      status: status,
      action: "",
    },
    {
      id: 7,
      month: "July",
      amount: 1000,
      status: status,
      action: "",
    },
    {
      id: 8,
      month: "August",
      amount: 1000,
      status: status,
      action: "",
    },
    {
      id: 9,
      month: "September",
      amount: 1000,
      status: status,
      action: "",
    },
    {
      id: 10,
      month: "October",
      amount: 1000,
      status: status,
      action: "",
    },
  ];

  

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
    console.log(amount)
    flutterWavePayment();
    if (action === "Paid") {
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
    public_key: "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",
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
            {Data.map((item) => (
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
                 onClick={() => {
                  console.log(item.amount)
                  setAmount(item.amount)
                  makePayment()
                  }
                }>
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
