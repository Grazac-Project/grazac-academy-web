import React, { useEffect, useState } from "react";
import { sendFlutterTx } from "../../api/dashboard/data.js";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import { toast } from "react-toastify";

const Payment = ({ selectedTrack }) => {
  const [action, setAction] = useState("Pay Now");
  const [status, setStatus] = useState("Pending");
  const [details, setDetails] = useState({});
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState("NGN");
  const [initialPayment, setInitialPayment] = useState();
  const [subInstallment, setSubInstallment] = useState();
  const [subInstallmentOne, setSubInstallmentOne] = useState();
  const [subInstallmentTwo, setSubInstallmentTwo] = useState();
  const [subInstallmentThree, setSubInstallmentThree] = useState();
  const [subInstallmentFour, setSubInstallmentFour] = useState();
  const [subInstallmentFive, setSubInstallmentFive] = useState();
  const [subInstallmentSix, setSubInstallmentSix] = useState();
  const [subInstallmentSeven, setSubInstallmentSeven] = useState();
  const [subInstallmentEight, setSubInstallmentEight] = useState();
  const [displayBtn, setDisplayBtn] = useState();

  useEffect(() => {
    let details = sessionStorage.getItem("user_details");
    // console.log(details);
    setDetails(JSON.parse(details));
    setInitialPayment(JSON.parse(details).firstInstallment);
    setSubInstallment(JSON.parse(details).subInstallment);
    setSubInstallmentOne(JSON.parse(details).subInstallmentOne);
    setSubInstallmentTwo(JSON.parse(details).subInstallmentTwo);
    setSubInstallmentThree(JSON.parse(details).subInstallmentThree);
    setSubInstallmentFour(JSON.parse(details).subInstallmentFour);
    setSubInstallmentFive(JSON.parse(details).subInstallmentFive);
    setSubInstallmentSix(JSON.parse(details).subInstallmentSix);
    setSubInstallmentSeven(JSON.parse(details).subInstallmentSeven);
    setSubInstallmentEight(JSON.parse(details).subInstallmentEight);
  }, []);

  const flutterWavePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "completed") {
          toast.success("Payment successful! Verifying payment...");
          window.location = "/dashboard"
          // setTimeout(() => {
          //   window.location = "/dashboard";
          // }, 2500);
          // console.log(response);
          // console.log(response);
          // console.log(response);

          sendFlutterTx(response.transaction_id)
            .then((response) => response.data)
            .then((res) => {
              if (res.data.status === "successful") {
                setAction("paid");
                // window.location = "/dashboard";
              } else {
                setAction("Pay Now");
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
  useEffect(() => {
    makePayment();
  }, [amount]);

  const makePayment = () => {
    // console.log(amount);
    flutterWavePayment();
    // if (action === "Paid") {
    //   setStatus("Approved");
    // } else if (action === "Pay Now") {
    //   setStatus("Pending");
    // } else {
    //   toast.info("Something is wrong!");
    // }
  };

  // FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X
  // public_key: "FLWPUBK-006bdc82ad878f1518af32f44af6478f-X",

  const config = {
    // public_key: "FLWPUBK_TEST-db62329aaf72156409b8ba67895226d6-X",
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
      logo: "https://grazac.com.ng/logo.png",
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
            <tr>
              <td>January</td>
              <td>{selectedTrack === "physical" ? "350,000" : "140,000"}</td>
              <td>
                <span className={initialPayment ? "approved" : "pending"}>
                  {initialPayment ? "Approved" : "Pending"}
                </span>
              </td>
              <td>
                <button
                  disabled={initialPayment ? true : false}
                  onClick={() => {
                    setAmount(selectedTrack === "physical" ? 350000 : 140000);
                  }}
                  className={initialPayment ? "paid" : "pay-now"}
                >
                  {initialPayment ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>
            <tr>
              <td>February</td>
              <td>{selectedTrack === "physical" ? "180,000" : "110,000"}</td>
              <td>
                <span className={subInstallment ? "approved" : "pending"}>
                  {/* {status} */}
                  {subInstallment ? "Approved" : "Pending"}
                </span>
              </td>
              <td>
                <button
                  disabled={subInstallment ? true : false}
                  onClick={() => {
                    setAmount(selectedTrack === "physical" ? 180000 : 110000);
                  }}
                  className={subInstallment ? "paid" : "pay-now"}
                >
                  {subInstallment ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>
            <tr>
              <td>March</td>
              <td>{selectedTrack === "physical" ? "170,000" : "100,000"}</td>
              <td>
                <span className={subInstallmentOne ? "approved" : "pending"}>
                  {subInstallmentOne ? "Approved" : "Pending"}
                </span>
              </td>
              <td>
                <button
                  disabled={subInstallmentOne ? true : false}
                  onClick={() => {
                    setAmount(selectedTrack === "physical" ? 170000 : 100000);
                  }}
                  className={subInstallmentOne ? "paid" : "pay-now"}
                >
                  {subInstallmentOne ? "Paid" : "Pay Now"}
                </button>
              </td>
            </tr>
            {/* <tr>
                <td>April</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentTwo == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentTwo == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    disabled={subInstallmentTwo == 1 ? true : false }
                    onClick={() => {
                      setAmount(85000);
                    }}
                    className={
                       subInstallmentTwo == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentTwo == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>May</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentThree == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentThree == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    disabled={subInstallmentThree == 1 ? true : false} 
                    onClick={() => {
                    setAmount(85000);
                    }}
                    className={
                       subInstallmentThree == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentThree == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>June</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentFour == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentFour == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    disabled={subInstallmentFour == 1 ? true : false}
                    onClick={() => {
                      setAmount(85000);
                    }}
                    className={
                       subInstallmentFour == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentFour == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>July</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentFive == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentFive == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    disabled={subInstallmentFive == 1 ? true : false}
                    onClick={() => {
                      setAmount(85000);
                    }}
                    className={
                       subInstallmentFive == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentFive == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>August</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentSix == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentSix == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                  disabled={subInstallmentSix == 1 ? true : false}
                    onClick={() => {
                      setAmount(85000);
                    }}
                    className={
                       subInstallmentSix == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentSix == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>September</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentSeven == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentSeven == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    disabled={subInstallmentSeven == 1 ? true : false}
                    onClick={() => {
                      setAmount(85000);
                    }}
                    className={
                       subInstallmentSeven == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentSeven == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>October</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentEight == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {subInstallmentEight == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    disabled={subInstallmentEight == 1 ? true : false}
                    onClick={() => {
                      setAmount(85000);
                    }}
                    className={
                       subInstallmentEight == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {subInstallmentEight == 1 ? 'Paid' : 'Pay Now'}
                  </button>
                </td>
              </tr> */}
          </tbody>
        </table>
      </div>
      <div className="payment-mobile">
        <div>
          <div className="payment-mobile-container">
            <div className="details">
              <span>Month:</span> January
            </div>
            <div className="details">
              <span>Amount:</span> 350,000
            </div>
            <div className="details">
              <span>Status: </span>
              <span className={initialPayment ? "approved" : "pending"}>
                {initialPayment ? "Approved" : "Pending"}
              </span>
            </div>
            <div className="payment-mobile-action">
              <button
                disabled={initialPayment == 1 ? true : false}
                onClick={() => {
                  setAmount(150);
                }}
                className={initialPayment ? "paid" : "pay-now"}
              >
                {initialPayment ? "Paid" : "Pay Now"}
              </button>
            </div>
          </div>
          <div className="payment-mobile-container">
            <div className="details">
              <span>Month:</span> February
            </div>
            <div className="details">
              <span>Amount:</span> 175,000
            </div>
            <div className="details">
              <span>Status: </span>
              <span className={subInstallment == 1 ? "approved" : "pending"}>
                {subInstallment == 1 ? "Approved" : "Pending"}
              </span>
            </div>
            <div className="payment-mobile-action">
              <button
                className={subInstallment == 1 ? "paid" : "pay-now"}
                disabled={subInstallment == 1 ? true : false}
                onClick={() => {
                  setAmount(175000);
                }}
              >
                {subInstallment == 1 ? "Paid" : "Pay Now"}
              </button>
            </div>
          </div>
          <div className="payment-mobile-container">
            <div className="details">
              <span>Month:</span> March
            </div>
            <div className="details">
              <span>Amount:</span> 175,000
            </div>
            <div className="details">
              <span>Status: </span>
              <span className={subInstallmentOne == 1 ? "approved" : "pending"}>
                {subInstallmentOne == 1 ? "Approved" : "Pending"}
              </span>
            </div>
            <div className="payment-mobile-action">
              <button
                className={subInstallmentOne == 1 ? "paid" : "pay-now"}
                disabled={subInstallmentOne == 1 ? true : false}
                onClick={() => {
                  setAmount(175000);
                }}
              >
                {subInstallmentOne == 1 ? "Paid" : "Pay Now"}
              </button>
            </div>
          </div>
          {/* <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> April
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentTwo == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentTwo == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div className="payment-mobile-action">
                <button className={subInstallmentTwo == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentTwo == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentTwo == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> May
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentThree == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentThree == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div
              className="payment-mobile-action">
                <button className={subInstallmentThree == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentThree == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentThree == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> June
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentFour == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentFour == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div className="payment-mobile-action">
                <button className={subInstallmentFour == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentFour == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentFour == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> July
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentFive == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentFive == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div className="payment-mobile-action">
                <button className={subInstallmentFive == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentFive == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentFive == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> August
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentSix == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentSix == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div className="payment-mobile-action">
                <button className={subInstallmentSix == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentSix == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentSix == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> September
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentSeven == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentSeven == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div className="payment-mobile-action">
                <button className={subInstallmentSeven == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentSeven == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentSeven == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> October
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentEight == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentEight == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div className="payment-mobile-action">
                <button className={subInstallmentEight == 1 ?'paid':'pay-now'}
                  disabled={subInstallmentEight == 1 ? true : false}
                  onClick={() => {
                    setAmount(85000);
                  }}
                >
                  {subInstallmentEight == 1 ? 'Paid' : 'Pay Now'}
                </button>
              </div>
            </div> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
