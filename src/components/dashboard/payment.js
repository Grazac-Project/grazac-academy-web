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
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState("NGN");
  const [initialPayment, setInitialPayment] = useState();
  const [subInstallment, setSubInstallment] = useState()
  const [subInstallmentOne, setSubInstallmentOne] = useState()
  const [subInstallmentTwo, setSubInstallmentTwo] = useState()
  const [subInstallmentThree, setSubInstallmentThree] = useState()
  const [subInstallmentFour, setSubInstallmentFour] = useState()
  const [subInstallmentFive, setSubInstallmentFive] = useState()
  const [subInstallmentSix, setSubInstallmentSix] = useState()
  const [subInstallmentSeven, setSubInstallmentSeven] = useState()
  const [subInstallmentEight, setSubInstallmentEight] = useState()
  const [displayBtn, setDisplayBtn] = useState()


  useEffect(() => {
    let details = sessionStorage.getItem("user_details");
      console.log(details);
      console.log(Data[0].id)
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
      
      // if(subPayment == 1) {setStatus('Approved')}
      // else if(subPayment == 1) {setStatus('Approved')}
      // else if(subPayment == 1) {setStatus('Approved')}
      // else if(subPayment == 1) {setStatus('Approved')}
      // else if(subPayment == 1) {setStatus('Approved')}
      // else if(subPayment == 6) {setStatus('Approved')}
      // else if(subPayment == 7) {setStatus('Approved')}
      // else if(subPayment == 8) {setStatus('Approved')}
      // else if(subPayment == 9) {setStatus('Approved')}
  } , [])


  var Data = [
    {
      id: 1,
      month: "Initial Payment",
      amount: 285000,
      status: status,
      action: action,
    },

    {
      id: 2,
      month: "February",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 3,
      month: "March",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 4,
      month: "April",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 5,
      month: "May",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 6,
      month: "June",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 7,
      month: "July",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 8,
      month: "August",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 9,
      month: "September",
      amount: 85000,
      status: status,
      action: action,
    },
    {
      id: 10,
      month: "October",
      amount: 85000,
      status: status,
      action: action,
    },
  ];

  

  const flutterWavePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "completed") {
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

  const makePayment = () => {
    console.log(amount);
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
    // <div className="payment">
    //   <h4>Payment Type: Installment</h4>
    //   <div className="payment-table">
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Month</th>
    //           <th>Amount</th>
    //           <th>Status</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {Data.map((item) => (
    //           <tr key={item.id}>
    //             <td>{item.month}</td>
    //             <td>{item.amount}</td>
    //             <td>
    //               <span
    //                 className={
    //                   status === "Pending"
    //                     ? "pending"
    //                     : status === "Approved"
    //                     ? "approved"
    //                     : "pending"
    //                 }
    //               >
    //                 {/* {status} */}
    //                 {item.status}
    //               </span>
    //             </td>
    //             <td
    //               onClick={() => {
    //                 console.log(item.amount);
    //                 setAmount(item.amount);
    //                 makePayment();
    //               }}
    //             >
    //               <p
    //                 className={
    //                   action === "Paid"
    //                     ? "paid"
    //                     : action === "Pay Now"
    //                     ? "pay-now"
    //                     : null
    //                 }
    //               >
    //                 {/* {action} */}
    //                 {item.action}
    //               </p>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   <div className="payment-mobile">
    //     <div >
    //       {Data.map((item) => (
    //         <div key={item.id} className="payment-mobile-container">
    //           <div className="details">
    //             <span>Month:</span> {item.month}
    //           </div>
    //           <div className="details">
    //             <span>Amount:</span> {item.amount}
    //           </div>
    //           <div className="details">
    //             <span>Status: </span>
    //             <span
    //               className={
    //                 status === "Pending"
    //                   ? "pending"
    //                   : status === "Approved"
    //                   ? "approved"
    //                   : "pending"
    //               }
    //             >
    //               {status}
    //             </span>
    //           </div>
    //           <div
    //           className="payment-mobile-action"
    //             onClick={() => {
    //               console.log(item.amount);
    //               setAmount(item.amount);
    //               makePayment();
    //             }}
    //           >
    //             <p
    //               className={
    //                 action === "Paid"
    //                   ? "paid"
    //                   : action === "Pay Now"
    //                   ? "pay-now"
    //                   : null
    //               }
    //             >
    //               {action}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>



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
                <td>285,000</td>
                <td>
                  <span
                    className={
                      initialPayment ?
                       "approved" : 'pending'
                    }
                  >
                    {/* {status} */}
                    {initialPayment ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(285000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       initialPayment ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {initialPayment ? 'Paid' : 'Pay Now'}
                  </p>
                </td>
              </tr>
              <tr>
                <td>February</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallment == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {/* {status} */}
                    {subInstallment == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallment == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallment == 1 ? 'Paid' : 'Pay Now'}
                  </p>
                </td>
              </tr>
              <tr>
                <td>March</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentOne == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {/* {status} */}
                    {subInstallmentOne == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentOne == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentOne == 1 ? 'Paid' : 'Pay Now'}
                  </p>
                </td>
              </tr>
              <tr>
                <td>April</td>
                <td>85,000</td>
                <td>
                  <span
                    className={
                      subInstallmentTwo == 1 ?
                       "approved" : 'pending'
                    }
                  >
                    {/* {status} */}
                    {subInstallmentTwo == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentTwo == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentTwo == 1 ? 'Paid' : 'Pay Now'}
                  </p>
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
                    {/* {status} */}
                    {subInstallmentThree == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentThree == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentThree == 1 ? 'Paid' : 'Pay Now'}
                  </p>
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
                    {/* {status} */}
                    {subInstallmentFour == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentFour == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentFour == 1 ? 'Paid' : 'Pay Now'}
                  </p>
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
                    {/* {status} */}
                    {subInstallmentFive == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentFive == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentFive == 1 ? 'Paid' : 'Pay Now'}
                  </p>
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
                    {/* {status} */}
                    {subInstallmentSix == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentSix == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentSix == 1 ? 'Paid' : 'Pay Now'}
                  </p>
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
                    {/* {status} */}
                    {subInstallmentSeven == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentSeven == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentSeven == 1 ? 'Paid' : 'Pay Now'}
                  </p>
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
                    {/* {status} */}
                    {subInstallmentEight == 1 ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td
                  onClick={() => {
                    // console.log(item.amount);
                    setAmount(85000);
                    makePayment();
                  }}
                >
                  <p
                    className={
                       subInstallmentEight == 1 ? 'paid' : 'pay-now'
                    }
                  >
                    {/* {action} */}
                    {subInstallmentEight == 1 ? 'Paid' : 'Pay Now'}
                  </p>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
      <div className="payment-mobile">
        <div >
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> January
              </div>
              <div className="details">
                <span>Amount:</span> 285,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    initialPayment ? 'approved' : 'pending'
                  }
                >
                  {initialPayment ? 'Approved': 'Pending'}
                </span>
              </div>
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(285000);
                  makePayment();
                }}
              >
                <p
                  className={
                    initialPayment?'paid':'pay-now'
                    
                  }
                >
                  {initialPayment ? 'Paid' : 'Pay Now'}
                </p>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> February
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallment == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallment == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallment == 1 ?'paid':'pay-now'}>
                  {subInstallment == 1 ? 'Paid' : 'Pay Now'}
                </p>
              </div>
            </div>
            <div className="payment-mobile-container">
              <div className="details">
                <span>Month:</span> March
              </div>
              <div className="details">
                <span>Amount:</span> 85,000
              </div>
              <div className="details">
                <span>Status: </span>
                <span
                  className={
                    subInstallmentOne == 1 ? 'approved' : 'pending'
                  }
                >
                  {subInstallmentOne == 1 ? 'Approved': 'Pending'}
                </span>
              </div>
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentOne == 1 ?'paid':'pay-now'}>
                  {subInstallmentOne == 1 ? 'Paid' : 'Pay Now'}
                </p>
              </div>
            </div>
            <div className="payment-mobile-container">
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
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentTwo == 1 ?'paid':'pay-now'}>
                  {subInstallmentTwo == 1 ? 'Paid' : 'Pay Now'}
                </p>
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
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentThree == 1 ?'paid':'pay-now'}>
                  {subInstallmentThree == 1 ? 'Paid' : 'Pay Now'}
                </p>
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
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentFour == 1 ?'paid':'pay-now'}>
                  {subInstallmentFour == 1 ? 'Paid' : 'Pay Now'}
                </p>
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
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentFive == 1 ?'paid':'pay-now'}>
                  {subInstallmentFive == 1 ? 'Paid' : 'Pay Now'}
                </p>
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
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentSix == 1 ?'paid':'pay-now'}>
                  {subInstallmentSix == 1 ? 'Paid' : 'Pay Now'}
                </p>
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
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentSeven == 1 ?'paid':'pay-now'}>
                  {subInstallmentSeven == 1 ? 'Paid' : 'Pay Now'}
                </p>
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
              <div
              className="payment-mobile-action"
                onClick={() => {
                  setAmount(85000);
                  makePayment();
                }}
              >
                <p className={subInstallmentEight == 1 ?'paid':'pay-now'}>
                  {subInstallmentEight == 1 ? 'Paid' : 'Pay Now'}
                </p>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
