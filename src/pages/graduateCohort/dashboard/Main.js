import { useState, useEffect } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Details from "../../../components/dashboard/Details";
import NotSubmitted from "../../../components/dashboard/not-submitted";
import UnderReview from "../../../components/dashboard/UnderReview";
import PaymentReceived from "../../../components/dashboard/selected/PaymentReceived";
import Selected from "../../../components/dashboard/Selected";
import Rejected from "../../../components/dashboard/Rejected";
import OutsideClickHandler from "react-outside-click-handler";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  submitGuarantor,
  sendFlutterTx,
  addPlan,
  getGuarantor,
} from "../../../api/dashboard/data";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import arrow from "../../../images/svg/dashboard/arrow.svg";
import menu from "../../../images/svg/dashboard/menu.svg";
import cancel from "../../../images/svg/dashboard/cancel.svg";
import loader from "../../../images/svg/dashboard/loader.gif";

import termsandconds from "../../../content/TermsandCondition.pdf";
import Loader from "../../../components/Loader";
import { usePayercoins } from "payercoins-react";

function Dashboard() {
  const [status, setStatus] = useState("Not Submitted");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  // const [status, setStatus] = useState("Admitted");
  const [selectStatus, setSelectStatus] = useState("congrats");
  const [selectStatus2, setSelectStatus2] = useState("");
  const [sidebarClick, setSidebarClick] = useState("dashboard");
  const [details, setDetails] = useState({});
  const [payOpt, setPayOpt] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [userId, setUserId] = useState(0);
  const [guarantorForm1, setGuarantorForm1] = useState(true);
  const [showProfessionalInput1, setShowProfessionalInput1] = useState(false);
  const [showGuarantorRelationshipInput1, setShowGuarantorRelationshipInput1] =
    useState(false);

  const [guarantorStatus, setGuarantorStatus] = useState(false);
  // const [guarantorDetails_2,setGuarantorDetails_2]=useState([])
  const [guarantor, setGuarantor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    officeAddress: "",
    homeAddress: "",
    profession: "",
    organisation: "",
    employer: "",
    employerMail: "",
    employerPhone: "",
    relationship: "",
  });

  const item = 1;

  const usdValue = "10";
  const ngnValue = "720000";

  useEffect(() => {
    // setSelectStatus("paid");
    // setSelectStatus("paid")

    try {
      let details = sessionStorage.getItem("user_details");
      setStatus(sessionStorage.getItem("status"));

      setDetails(JSON.parse(details));

      setUserId(JSON.parse(details).id);

      if (JSON.parse(details).isPaid === 1) {
        setSelectStatus("paid");
      }

      if (!details) {
        window.location = "/login";
      }
    } catch (err) {
      window.location = "/login";
    }

    setLoading(true);

    getGuarantor()
      .then((response) => response.data)
      .then((res) => {
        setLoading(false);

        if (res.data.length > 1 || res.data.length === 1) {
          setGuarantorForm1(false);
        }
        // work on this part for the payment page
        if (res.data.length > 2 || res.data.length == 2) {
          setGuarantorForm1(false);
          setGuarantorStatus(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          toast.error(err.response);
        } else {
          toast.error(
            "Something went wrong!!! Please make sure you have a good internet connection."
          );
        }
      });
  }, [guarantorForm1]);

  const handleChange = (e) => {
    setGuarantor({
      ...guarantor,
      [e.target.name]: e.target.value,
    });
  };

  const showNavMobile = () => {
    document.getElementById("sidebar").style.left = "0px";
  };
  const closeNavMobile = () => {
    if (window.innerWidth < 769) {
      document.getElementById("sidebar").style.left = "-210px";
    }
  };

  const flutterWavePayment = () => {
    // const url =
    //   "https://admin-api.grazacacademy.com/api/v1/admin/download?status=Under Review";

    //   axios({
    //     url: url, //your url
    //     method: 'GET',
    //     responseType: 'blob', // important
    // }).then((response) => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'file.csv'); //or any other extension
    //     document.body.appendChild(link);
    //     link.click();
    // });

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
                setSelectStatus("paid");
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
    if (payOpt === "part") {
      setSelectStatus2("");
      setSelectStatus("pay-as-you-earn");
    } else if (payOpt === "full") {
      setSelectStatus2("");

      var planData = new FormData();
      planData.append("payment_plan", "pay at once");
      addPlan(planData)
        .then((response) => response.data)
        .then((res) => {})
        .catch((err) => {});

      flutterWavePayment();
    } else {
      toast.info("You need to select a payment option to continue!");
    }
  };

  const showForm = () => {
    if (document.getElementById("mark").checked) {
      setSelectStatus("form");
    } else {
      toast.info("You need to accept our terms and conditions to continue");
    }
  };

  const SubmitGuarantorForm_1 = (e) => {
    e.preventDefault();
    var btn = document.getElementById("actionBtn");
    btn.innerHTML = `<img src=${loader} width="20px" />`;

    getGuarantor()
      .then((response) => response.data)
      .then((res) => {
        setLoading(false);

        if (!(res.data.length == 1 || res.data.length > 1)) {
          // setGuarantorForm1(false);

          e.preventDefault();
          var data = new FormData();

          var btn = document.getElementById("actionBtn");
          btn.innerHTML = `<img src=${loader} width="20px" />`;
          btn.disabled = false;

          if (!(guarantor.phone.length > 10)) {
            btn.innerHTML = `<img src=${loader} width="20px" />`;

            toast.error("please enter a correct phone number");
            setIsError(true);
            btn.innerHTML = `Proceed`;
            // btn.disabled = true
          }

          if (!(guarantor.employerPhone.length > 10)) {
            btn.innerHTML = `<img src=${loader} width="20px" />`;

            toast.error("please enter a correct employer's phone number");
            setIsError(true);
            btn.innerHTML = `Proceed`;
            // btn.disabled = true
          }

          if (
            guarantor.phone.length > 10 ||
            guarantor.employerPhone.length > 10
          ) {
            // btn.disabled = false
          }

          if (
            guarantor.phone.length > 10 &&
            guarantor.employerPhone.length > 10
          ) {
            setIsError(false);
            // btn.disabled = false

            // btn.innerHTML = `<img src=${loader} width="20px" />`;
            data.append("firstname", guarantor.firstName);
            data.append("lastname", guarantor.lastName);
            data.append("email", guarantor.email);
            data.append("phone_number", guarantor.phone);
            data.append("gender", guarantor.gender);
            data.append("office_address", guarantor.officeAddress);
            data.append("home_address", guarantor.homeAddress);
            data.append("profession", guarantor.profession);
            data.append("name_of_organization", guarantor.organisation);
            data.append("name_of_employer", guarantor.employer);
            data.append("email_address_of_employer", guarantor.employerMail);
            data.append("phone_number_of_employer", guarantor.employerPhone);
            data.append(
              "relationship_with_the_guarantor",
              guarantor.relationship
            );
            data.append("user_id", userId);

            submitGuarantor(data)
              .then((response) => response.data)
              .then((res) => {
                if (res.status === 200) {
                  // window.location = "/dashboard";
                  window.scrollTo(0, 0);
                  // document.getElementById("guarantorForm2").reset()
                  setGuarantorForm1(false);
                  btn.disabled = true;
                  toast.success("Submission successful");
                  btn.innerHTML = `<img src=${loader} width="20px" />`;
                  btn.disabled = true;
                  // flutterWavePayment();
                } else {
                  toast.error("Submission not successful, try again!!!");
                  // btn.innerHTML = `<img src=${loader} width="20px" />`;
                  btn.innerHTML = `Procede`;
                }
              })
              .catch((err) => {
                if (err.response) {
                  toast.error(err.response);
                  btn.innerHTML = `Procede`;
                }
                // else {
                //   toast.error(
                //     "Something went wrong!!! Please make sure you have a good internet connection."
                //   );
                //   btn.innerHTML = `Procede`;
                // }
              });
          }
        }
      });
  };

  const SubmitGuarantorForm_2 = (e) => {
    e.preventDefault();
    var data = new FormData();

    var btn = document.getElementById("actionBtn");
    btn.innerHTML = `<img src=${loader} width="20px" />`;
    // btn.disabled = true

    if (!(guarantor.phone.length > 10)) {
      btn.innerHTML = `<img src=${loader} width="20px" />`;

      toast.error("please enter a correct phone number");
      setIsError(true);
      btn.innerHTML = `Proceed`;
      // btn.disabled = true
    }

    if (!(guarantor.employerPhone.length > 10)) {
      btn.innerHTML = `<img src=${loader} width="20px" />`;

      toast.error("please enter a correct employer's phone number");
      setIsError(true);
      btn.innerHTML = `Proceed`;
      // btn.disabled = false
    }

    if (guarantor.phone.length > 10 && guarantor.employerPhone.length > 10) {
      setIsError(false);

      // btn.innerHTML = `<img src=${loader} width="20px" />`;
      data.append("firstname", guarantor.firstName);
      data.append("lastname", guarantor.lastName);
      data.append("email", guarantor.email);
      data.append("phone_number", guarantor.phone);
      data.append("gender", guarantor.gender);
      data.append("office_address", guarantor.officeAddress);
      data.append("home_address", guarantor.homeAddress);
      data.append("profession", guarantor.profession);
      data.append("name_of_organization", guarantor.organisation);
      data.append("name_of_employer", guarantor.employer);
      data.append("email_address_of_employer", guarantor.employerMail);
      data.append("phone_number_of_employer", guarantor.employerPhone);
      data.append("relationship_with_the_guarantor", guarantor.relationship);
      data.append("user_id", userId);

      submitGuarantor(data)
        .then((response) => response.data)
        .then((res) => {
          if (res.status === 200) {
            btn.disabled = true;
            window.location = "/dashboard";
            // toast.success("Submission successful");
            btn.innerHTML = `Submit & Pay`;

            // flutterWavePayment();
          } else {
            toast.error("Submission not successful, try again!!!");
            btn.innerHTML = `Submit & Pay`;
          }
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response);
            btn.innerHTML = `Submit & Pay`;
          }

          // else {
          //   toast.error(
          //     "Something went wrong!!! Please make sure you have a good internet connection."
          //   );
          //   btn.innerHTML = `Submit & Pay`;
          // }
        });

      var planData = new FormData();
      planData.append("payment_plan", "pay as you earn");
      addPlan(planData)
        .then((response) => response.data)
        .then((res) => {})
        .catch((err) => {});
    } else {
      btn.innerHTML = `Proceed`;
    }
  };

  const submitForm = (e, whichForm) => {
    e.preventDefault();
    var btn = document.getElementById("actionBtn");
    btn.innerHTML = `<img src=${loader} width="20px" />`;

    var data = new FormData();

    if (!(guarantor.phone.length > 10)) {
      btn.innerHTML = `<img src=${loader} width="20px" />`;

      toast.error("please enter a correct phone number");
      setIsError(true);
      btn.innerHTML = `Proceed`;
    }

    if (!(guarantor.employerPhone.length > 10)) {
      btn.innerHTML = `<img src=${loader} width="20px" />`;

      toast.error("please enter a correct employer's phone number");
      setIsError(true);
      btn.innerHTML = `Proceed`;
    }

    if (guarantor.phone.length > 10 && guarantor.employerPhone.length > 10) {
      setIsError(false);
    }

    if (isError === false) {
      btn.innerHTML = `<img src=${loader} width="20px" />`;
      data.append("firstname", guarantor.firstName);
      data.append("lastname", guarantor.lastName);
      data.append("email", guarantor.email);
      data.append("phone_number", guarantor.phone);
      data.append("gender", guarantor.gender);
      data.append("office_address", guarantor.officeAddress);
      data.append("home_address", guarantor.homeAddress);
      data.append("profession", guarantor.profession);
      data.append("name_of_organization", guarantor.organisation);
      data.append("name_of_employer", guarantor.employer);
      data.append("email_address_of_employer", guarantor.employerMail);
      data.append("phone_number_of_employer", guarantor.employerPhone);
      data.append("relationship_with_the_guarantor", guarantor.relationship);
      data.append("user_id", userId);

      if (whichForm === "guarantor1" && isError === false) {
        var btn = document.getElementById("actionBtn");

        btn.innerHTML = `<img src=${loader} width="20px" />`;

        submitGuarantor(data)
          .then((response) => response.data)
          .then((res) => {
            if (res.status === 200) {
              toast.success("Submission successful");
              btn.innerHTML = `Proceed`;
              setGuarantorForm1(false);

              window.scrollTo(0, 0);
              document.getElementById("guarantorForm2").reset();
            } else {
              toast.error("Submission not successful, try again!!!");
              btn.innerHTML = `Proceed`;
            }
          })
          .catch((err) => {
            if (err.response) {
              toast.error(err.response);
              btn.innerHTML = `Proceed`;
            } else {
              toast.error(
                "Something went wrong!!! Please make sure you have a good internet connection."
              );
              btn.innerHTML = `Proceed`;
            }
          });
      } else {
        btn.innerHTML = `Proceed`;
      }

      if (whichForm === "guarantor2" && isError === false) {
        var btn = document.getElementById("actionBtn");
        btn.innerHTML = `<img src=${loader} width="20px" />`;

        submitGuarantor(data)
          .then((response) => response.data)
          .then((res) => {
            if (res.status === 200) {
              window.location = "/dashboard";
              // toast.success("Submission successful");
              btn.innerHTML = `Submit & Pay`;
              // flutterWavePayment();
            } else {
              toast.error("Submission not successful, try again!!!");
              btn.innerHTML = `Submit & Pay`;
            }
          })
          .catch((err) => {
            if (err.response) {
              toast.error(err.response);
              btn.innerHTML = `Submit & Pay`;
            } else {
              toast.error(
                "Something went wrong!!! Please make sure you have a good internet connection."
              );
              btn.innerHTML = `Submit & Pay`;
            }
          });

        var planData = new FormData();
        planData.append("payment_plan", "pay as you earn");
        addPlan(planData)
          .then((response) => response.data)
          .then((res) => {})
          .catch((err) => {});
      } else {
        btn.innerHTML = `Proceed`;
      }
    }
  };

  // FLWPUBK_TEST-50065c317f5144179f94b776f7604026-X
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

  const changeStatus = (par1) => {
    setStatus(`${par1}`);
    sessionStorage.setItem("status", `${par1}`);
  };

  //payercoins LIVE public key PYC-PUB_339d368f5254b0149ad6c7
  //payercoins TEST public key PYC-PUB_a04caeeba00b80ae762bbe_TEST
  const payercoinsConfig = {
    key: "PYC-PUB_a04caeeba00b80ae762bbe_TEST",
    customer_name: "Grazac Academy",
    customer_email: "mitchelinajuo@gmail.com",
    amount: parseFloat(usdValue), // amount as a number or string
    currency: "ethereum", // [ethereum, bitcoin, usdt-eth].  optional, if not provided will use your default currencies activated in your account
    // description: "Test Payment", // optional
    redirect_url: "", // optional - will default to current page
    invoice_id: "239313200190.40646", // optional - unique identifier for your payment and minLength 8, else we will automatically generate one
    // callback_url: 'https://sandbox-api.payercoins.com/api/v1/withdrawal' //This is just a test sandbox
    callback_url: "https://webhook.site/c573fd7d-2e6f-478d-b16d-b97e15c533c1", //This is just a test sandbox
  };
  const [initializePayment] = usePayercoins();
  const handlePayercoinsPayment = async () => {
    initializePayment(payercoinsConfig);
  };

  return (
    <>
      {loading === false ? (
        <div>
          <ToastContainer closeButton={false} />
          <OutsideClickHandler
            onOutsideClick={() => {
              closeNavMobile();
            }}
          >
            <div className="layout_dashboard-sidebar" id="sidebar">
              <Sidebar
                clicked={sidebarClick}
                showDetails={status}
                clickedDashboard={setSidebarClick}
                clickedDetails={setSidebarClick}
              />
            </div>
          </OutsideClickHandler>
          <div className="layout_dashboard-content">
            <div className="dashboard-nav">
              <img
                src={menu}
                alt="menu"
                className="dashboard-nav-menu"
                onClick={showNavMobile}
              />
              <div className="dashboard-nav-status">
                <h3>Status: {status}</h3>
                <div
                  className={
                    status === "Not Submitted"
                      ? `dashboard-nav-status-dot not-submitted`
                      : status === "Under Review"
                      ? `dashboard-nav-status-dot under-review`
                      : `dashboard-nav-status-dot ${status}`
                  }
                ></div>
              </div>
              <div className="dashboard-nav-user">
                <div>
                  <h2>
                    {details.firstName?.substring(0, 1)}
                    {details?.lastName?.substring(0, 1)}
                  </h2>
                </div>
                <p>
                  {details.firstName} {details.lastName}
                </p>
              </div>
            </div>
            {sidebarClick === "dashboard" && (
              <div className="dashboard-content">
                {status === "Not Submitted" && (
                  <NotSubmitted
                    userDetails={details}
                    fname={details.firstName}
                    lname={details.lastName}
                    email={details.email}
                    phone={details.phone}
                    setNewStatus={() => changeStatus("Under Review")}
                  />
                )}
                {status === "Under Review" && (
                  <UnderReview fname={details.firstName} />
                )}
                {status === "Selected" && (
                  <Selected fname={details.firstName} />
                )}

                {status === "Admitted" && (
                  <div>
                    {/* {guarantorStatus === false  && selectStatus !== "paid" ? ( */}
                    {guarantorStatus === false ? (
                      <div>
                        {selectStatus === "congrats" && (
                          <div>
                            <h3>Hello {details.firstName}</h3>
                            <p className="text1">Congratulations!</p>
                            <p>
                              Your application has been selected. Click on the
                              button below to continue you admission process.
                            </p>
                            <button onClick={() => setSelectStatus2("pay")}>
                              Continue admission process
                            </button>
                          </div>
                        )}

                        {selectStatus2 === "pay" && (
                          <div className="dashboard-content-modal">
                            <div className="dashboard-content-modal-backdrop"></div>
                            <div className="dashboard-content-modal-container">
                              <div className="dashboard-content-modal-main">
                                <div className="dashboard-content-modal-main-text">
                                  <h4>Choose Payment Option</h4>
                                  <img
                                    src={cancel}
                                    alt="cancel"
                                    onClick={() => setSelectStatus2("")}
                                  />
                                </div>
                                <div
                                  className={
                                    payOpt === "part"
                                      ? "active"
                                      : "dashboard-content-modal-main-frame1"
                                  }
                                  onClick={() => {
                                    setPayOpt("part");
                                    setAmount(50000);
                                    setCurrency("NGN");
                                  }}
                                >
                                  <div></div>
                                  <p>Pay as you earn (NGN 50,000 legal fee)</p>
                                </div>
                                <div
                                  className={
                                    payOpt === "full"
                                      ? "active"
                                      : "dashboard-content-modal-main-frame1"
                                  }
                                  onClick={() => {
                                    setPayOpt("full");
                                    setAmount(720000);
                                    setCurrency("NGN");
                                  }}
                                >
                                  <div></div>
                                  <p>Pay at once (USD 1,200 = NGN 720,000)</p>
                                </div>
                                <button onClick={makePayment}>Proceed</button>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectStatus === "pay-as-you-earn" && (
                          <div>
                            <div
                              className="dashboard-content-back"
                              onClick={() => setSelectStatus("congrats")}
                            >
                              <img src={arrow} alt="back" />
                              <p>Back</p>
                            </div>
                            <h3>Pay as you earn</h3>
                            <div className="dashboard-content-guarantor_paragraph_text">
                              <p className="text1">
                                Learn with us for 6 months and pay no tuition
                                till you’re hired!
                              </p>
                              <p>
                                The Pay as You Earn is a financial instrument to
                                help you participate in our training for FREE.
                                You are expected to start repaying the credit
                                once you get a job at the end of the program. It
                                is governed by a legally binding contract. The
                                repayment procedure can be found in our terms
                                and conditions. This contract is bonded by the
                                law firm.
                              </p>
                              <p>
                                Note that: This policy requires you bringing two
                                guarantors and making a one-time payment for
                                legal fees bonded by the law firm.
                              </p>
                              <p>
                                The legal fee cost is a total of 50,000 Naira.
                                Kindly note that this amount is not refundable
                                under any circumstance.
                              </p>
                            </div>

                            <ul>
                              <p>
                                The following are of utmost necessity when
                                bringing your guarantors;
                              </p>
                              <li>
                                You must bring 2 guarantors who are over 18
                                years of age and must have completed a higher
                                institution of learning.
                              </li>
                              <li>
                                Guarantors must have a stable source of income.
                              </li>

                              <li>They must be residents within Nigeria.</li>
                              <li>
                                If your guarantor does not meet our eligibility
                                status, you'll be asked to get a replacement.
                              </li>
                              <li>
                                Kindly seek the consent of your guarantors
                                before filling their details as we will contact
                                them on your behalf.
                              </li>
                              <li>
                                You can also share our terms and conditions with
                                your guarantor to keep them informed.
                              </li>
                            </ul>
                            <div className="checkbox">
                              <input type="checkbox" id="mark" />
                              {/* <p>I accept the <a href="#">Terms ‌and‌ ‌Conditions‌</a></p> */}
                              <p>
                                I accept the{" "}
                                <a
                                  href={termsandconds}
                                  download
                                  target="_blank"
                                >
                                  Terms ‌and‌ ‌Conditions‌
                                </a>
                              </p>
                            </div>

                            <button onClick={showForm}>
                              Upload Guarantor Details
                            </button>
                          </div>
                        )}

                        {selectStatus === "form" && (
                          <div>
                            <div
                              className="dashboard-content-back"
                              onClick={() => setSelectStatus("pay-as-you-earn")}
                            >
                              <img src={arrow} alt="back" />
                              <p>Back</p>
                            </div>
                            <h4 style={{ marginLeft: "20px" }}>
                              Guarantor Form {guarantorForm1 ? "1" : "2"}
                            </h4>

                            {guarantorForm1 ? (
                              <div className="dashboard-content-form">
                                <form
                                  // onSubmit={(e) => submitForm(e, "guarantor1")}
                                  onSubmit={(e) => SubmitGuarantorForm_1(e)}
                                >
                                  <div className="dashboard-content-form-container">
                                    <label>First Name</label>
                                    <input
                                      type="text"
                                      required
                                      name="firstName"
                                      placeholder="FirstName"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Last Name</label>
                                    <input
                                      type="text"
                                      required
                                      name="lastName"
                                      placeholder="LastName"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Email Address</label>
                                    <input
                                      type="email"
                                      required
                                      name="email"
                                      placeholder="Email Address"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Phone Number</label>
                                    <input
                                      type="number"
                                      required
                                      name="phone"
                                      placeholder="Phone Number"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Gender</label>
                                    <select
                                      name="gender"
                                      required
                                      onChange={handleChange}
                                    >
                                      <option value="">Select Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </div>

                                  <div className="dashboard-content-form-container">
                                    <label>Office Address</label>
                                    <input
                                      type="text"
                                      required
                                      name="officeAddress"
                                      placeholder="Office Address"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Home Address</label>
                                    <input
                                      type="text"
                                      required
                                      name="homeAddress"
                                      placeholder="Home Address"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Profession</label>
                                    {/* <select
                                          name="profession"
                                          required
                                          onChange={handleChange}
                                        >
                                          <option value="">
                                            Choose Profession
                                          </option>
                                          <option value="Civil Servant">
                                            Civil Servant
                                          </option>
                                          <option value="Self Employed">
                                            Self Employed
                                          </option>
                                          <option value="Private worker">
                                            Private worker
                                          </option>

                                          <option
                                            className="other"
                                            key="Other"
                                            value="Other"
                                          >
                                            Other
                                          </option>
                                        </select> */}
                                    <input
                                      onChange={handleChange}
                                      required
                                      name="profession"
                                      type="text"
                                      placeholder="Enter Profession"
                                    ></input>

                                    {/* {showProfessionalInput1 ? (
                                          <input
                                            onChange={handleChange}
                                            name="profession"
                                            type="text"
                                            placeholder="Enter Profession"
                                          ></input>
                                        ) : (
                                          <>
                                          </>
                                        )} */}
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Name of Organisation</label>
                                    <input
                                      type="text"
                                      required
                                      name="organisation"
                                      placeholder="Name of organisation"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Name of Employer</label>
                                    <input
                                      type="text"
                                      required
                                      name="employer"
                                      placeholder="Name of employer"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Email Address of Employer</label>
                                    <input
                                      type="email"
                                      required
                                      name="employerMail"
                                      placeholder="Email Address of Employer"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Phone of Employer</label>
                                    <input
                                      type="phone"
                                      required
                                      name="employerPhone"
                                      placeholder="Phone of Employer"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>
                                      Relationship with guarantor (Who is your
                                      guarantor to you?)
                                    </label>

                                    <input
                                      onChange={handleChange}
                                      required
                                      name="relationship"
                                      type="text"
                                      placeholder="Enter Relationship"
                                    ></input>

                                    {/* <select
                                          name="relationship"
                                          required
                                          onChange={handleChange}
                                        >
                                          <option value="">
                                            Select Relationship
                                          </option>
                                          <option value="Parents">Parents</option>
                                          <option value="Legal Guardian">
                                            Legal Guardian
                                          </option>
                                          <option value="Employer">Employer</option>
                                          <option value="Other">Other</option>
                                        </select> */}

                                    {/* {showGuarantorRelationshipInput1 ? (
                                          <input
                                            onChange={handleChange}
                                            name="relationship"
                                            type="text"
                                            placeholder="Enter Relationship"
                                          ></input>
                                        ) : (
                                          <></>
                                        )} */}
                                  </div>
                                  <button
                                    style={{ float: "right", width: "100px" }}
                                    type="submit"
                                    id="actionBtn"
                                  >
                                    Proceed
                                  </button>
                                </form>
                              </div>
                            ) : (
                              <div className="dashboard-content-form">
                                <form
                                  // onSubmit={(e) => submitForm(e, "guarantor2")}
                                  onSubmit={(e) => SubmitGuarantorForm_2(e)}
                                  id="guarantorForm2"
                                >
                                  <div className="dashboard-content-form-container">
                                    <label>First Name</label>
                                    <input
                                      type="text"
                                      required
                                      name="firstName"
                                      placeholder="FirstName"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Last Name</label>
                                    <input
                                      type="text"
                                      required
                                      name="lastName"
                                      placeholder="LastName"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Email Address</label>
                                    <input
                                      type="email"
                                      required
                                      name="email"
                                      placeholder="Email Address"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Phone Number</label>
                                    <input
                                      type="number"
                                      required
                                      name="phone"
                                      placeholder="Phone Number"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Gender</label>
                                    <select
                                      name="gender"
                                      required
                                      onChange={handleChange}
                                    >
                                      <option value="">Select Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Office Address</label>
                                    <input
                                      type="text"
                                      required
                                      name="officeAddress"
                                      placeholder="Office Address"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Home Address</label>
                                    <input
                                      type="text"
                                      required
                                      name="homeAddress"
                                      placeholder="Home Address"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Profession</label>
                                    <input
                                      onChange={handleChange}
                                      name="profession"
                                      required
                                      type="text"
                                      placeholder="Enter Profession"
                                    ></input>

                                    {/* <select
                                          name="profession"
                                          required
                                          onChange={handleChange}
                                        >
                                          <option value="">
                                            Choose Profession
                                          </option>
                                          <option value="Civil Servant">
                                            Civil Servant
                                          </option>
                                          <option value="Self Employed">
                                            Self Employed
                                          </option>
                                          <option value="Private worker">
                                            Private worker
                                          </option>
                                          <option value="Other">Other</option>
                                        </select> */}
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Name of Organisation</label>
                                    <input
                                      type="text"
                                      required
                                      name="organisation"
                                      placeholder="Name of organisation"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Name of Employer</label>
                                    <input
                                      type="text"
                                      required
                                      name="employer"
                                      placeholder="Name of employer"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Email Address of Employer</label>
                                    <input
                                      type="email"
                                      required
                                      name="employerMail"
                                      placeholder="Email Address of Employer"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Phone of Employer</label>
                                    <input
                                      type="phone"
                                      required
                                      name="employerPhone"
                                      placeholder="Phone of Employer"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="dashboard-content-form-container">
                                    <label>Relationship with guarantor</label>
                                    <input
                                      onChange={handleChange}
                                      required
                                      name="relationship"
                                      type="text"
                                      placeholder="Enter Relationship"
                                    ></input>
                                    {/* 
                                        <select
                                          name="relationship"
                                          required
                                          onChange={handleChange}
                                        >
                                          <option value="">
                                            Select Relationship
                                          </option>
                                          <option value="Parents">Parents</option>
                                          <option value="Legal Guardian">
                                            Legal Guardian
                                          </option>
                                          <option value="Employer">Employer</option>
                                          <option value="Other">Other</option>
                                        </select> */}
                                  </div>
                                  <button
                                    style={{ float: "right", width: "100px" }}
                                    type="submit"
                                    id="actionBtn"
                                  >
                                    Submit
                                  </button>
                                </form>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {selectStatus === "congrats" &&
                          selectStatus !== "paid" && (
                            <div>
                              <h3>Hello {details.firstName}</h3>
                              <p className="text1">Congratulations!</p>
                              <p>
                                Your application has been Admitted. Click on the
                                button below to Pay Now.
                              </p>
                              <button onClick={() => setSelectStatus2("pay")}>
                                Pay Now
                              </button>

                              {selectStatus2 === "pay" && (
                                <div className="dashboard-content-modal">
                                  <div className="dashboard-content-modal-backdrop"></div>
                                  <div className="dashboard-content-modal-container">
                                    <div className="dashboard-content-modal-main">
                                      <div className="dashboard-content-modal-main-text">
                                        <h4>Choose Payment Option</h4>
                                        <img
                                          src={cancel}
                                          alt="cancel"
                                          onClick={() => setSelectStatus2("")}
                                        />
                                      </div>
                                      <div
                                        className={
                                          payOpt === "part"
                                            ? "active"
                                            : "dashboard-content-modal-main-frame1"
                                        }
                                        onClick={() => {
                                          setPayOpt("part");
                                          setAmount(50000);
                                          setCurrency("NGN");
                                        }}
                                      >
                                        <div></div>
                                        <p>
                                          Pay as you earn (NGN 50,000 legal fee)
                                        </p>
                                      </div>
                                      <div
                                        className={
                                          payOpt === "full"
                                            ? "active"
                                            : "dashboard-content-modal-main-frame1"
                                        }
                                        onClick={() => {
                                          setPayOpt("full");
                                          setAmount(720000);
                                          setCurrency("NGN");
                                        }}
                                      >
                                        <div></div>
                                        <p>
                                          Pay at once (USD 1,200 = NGN 720,000)
                                        </p>
                                      </div>
                                      <button
                                        onClick={() => flutterWavePayment()}
                                        // onClick={() =>
                                        //   handlePayercoinsPayment()
                                        // }
                                      >
                                        Proceed
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                      </div>
                    )}

                    {selectStatus === "paid" && (
                      <PaymentReceived fname={details.firstName} />
                    )}
                  </div>
                )}

                {status === "Rejected" && (
                  <Rejected fname={details.firstName} />
                )}
              </div>
            )}
            {sidebarClick === "details" && <Details />}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Dashboard;
