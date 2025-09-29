import { useState, useEffect, useRef } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Details from "../../../components/dashboard/Details";
import NotSubmitted from "../../../components/dashboard/not-submitted";
import UnderReview from "../../../components/dashboard/UnderReview";
import PaymentReceived from "../../../components/dashboard/selected/PaymentReceived";
import Selected from "../../../components/dashboard/Selected";
import Rejected from "../../../components/dashboard/Rejected";
// import OutsideClickHandler from "react-outside-click-handler";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  submitGuarantor,
  sendFlutterTx,
  addPlan,
  getGuarantor,
  getDetailsC,
} from "../../../api/dashboard/data";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import arrow from "../../../images/svg/dashboard/arrow.svg";
import menu from "../../../images/svg/dashboard/menu.svg";
import cancel from "../../../images/svg/dashboard/cancel.svg";
import loader from "../../../images/svg/dashboard/loader.gif";

import termsandconds from "../../../content/TermsandCondition.pdf";
import Loader from "../../../components/Loader";
import AdmissionFeePage from "../../../components/dashboard/not-submitted/AdmissionFeePage";
import Payment from "../../../components/dashboard/payment";
import Pending from "../../../components/dashboard/Pending";
import Failed from "../../../components/dashboard/Failed";
import OutsideClickHandler from "react-outside-click-handler";
import { set } from "date-fns";
// import { usePayercoins } from "payercoins-react";

// const specialCoursePayment = {
//   Physical: {
//     full: { label: "Pay at Once", amount: 850000 },
//     instalment: { label: "Pay in Installments", amount: 900000 },
//   },
//   Virtual: {
//     full: { label: "Pay at Once", amount: 450000 },
//     instalment: { label: "Pay in Installments", amount: 500000 },
//   },
// };

function Dashboard() {
  const statusClasses = {
    "Not Submitted": "minmd:bg-gray-300 px-8 py-4 rounded-full",
    "Under Review": "minmd:bg-yellow-200 px-8 py-4 rounded-full",
    Admitted: "minmd:bg-green-300 minmd:text-green-100 px-8 py-4 rounded-full",
    Selected: "minmd:bg-purple-300 px-8 py-4 rounded-full",
    Rejected: "minmd:bg-red-300 px-8 py-4 rounded-full",
    Pending: "minmd:bg-yellow-200 px-8 py-4 rounded-full",
  };

  const buttonRef = useRef();
  const [accepted, setAccepted] = useState(false);

  // const [status, setStatus] = useState("Not Submitted");
  const [status, setStatus] = useState("Not Applied Yet");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  // const [status, setStatus] = useState("Admitted");
  const [selectStatus, setSelectStatus] = useState("congrats");
  const [payShowModal, setPayShowModal] = useState("");
  const [sidebarClick, setSidebarClick] = useState("dashboard");
  const [details, setDetails] = useState({});
  const [payOpt, setPayOpt] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [userId, setUserId] = useState(0);
  const [guarantorForm1, setGuarantorForm1] = useState(true);
  const [showProfessionalInput1, setShowProfessionalInput1] = useState(false);
  const [chosenCourse, setChosenCourse] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [isSpecialCourse, setIsSpecialCourse] = useState(false);
  const [showGuarantorRelationshipInput1, setShowGuarantorRelationshipInput1] =
    useState(false);
  const [paymentChoice, setPaymentChoice] = useState("");
  const [guarantorStatus, setGuarantorStatus] = useState(false);
  const learningTrack = localStorage.getItem("learningTrack");
  const chosenCourse = localStorage.getItem("preferred_course");
  console.log(chosenCourse);
  console.log(learningTrack);

  const isSpecialCourse =
    chosenCourse === "cyber security" || chosenCourse === "cloud";

  // console.log(isSpecialCourse);

  // const isSpecialCourse =
  //   selectedCourse?.toLowerCase() === "cloud" ||
  //   selectedCourse?.toLowerCase() === "cyber security";
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
      // console.log(details);

      setDetails(JSON.parse(details));

      setUserId(JSON.parse(details)?.id);
      setAccepted(JSON.parse(details)?.applicationFee);

      // console.log(JSON.parse(details).applicationFee);

      if (JSON.parse(details).applicationFee) {
        // console.log("fkjdkj");
        setStatus("Not Submitted");
        setStatus(sessionStorage.getItem("status"));
        // console.log(status)

        if (JSON.parse(details).isPaid === true) {
          setSelectStatus("paid");
        }
        if (JSON.parse(details).firstInstallment === true) {
          setSelectStatus("initialDeposit");
        }

        if (!details) {
          window.location = "/login";
        }
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
        // if (err.response) {
        //   toast.error(err.response);
        // }
        // else {
        //   toast.error(
        //     "Something went wrong!!! Please make sure you have a good internet connection."
        //   );
        // }
      });
  }, [guarantorForm1]);

  useEffect(() => {
    getDetailsC().then((res) => {
      console.log(res);

      setPaymentChoice(res.data.data.result?.paymentOption);

      // setPaymentChoice(res.data.data.result?.paymentOption);
      console.log(res.data.data.result?.gender);

      // setSelectedTrack(res.data.data.result?.learningTrack);
      setSelectedTrack(learningTrack);
      setSelectedCourse(chosenCourse);

      // console.log(res.data.data.result?.paymentOption);
      setChosenCourse(res.data.data.result?.preferred_course);
      setSelectedTrack(res.data.data.result?.learningTrack);

      if (
        res.data.data.result?.preferred_course === "cyber security" ||
        res.data.data.result?.preferred_course === "cloud"
      ) {
        setIsSpecialCourse(true);
      }
    });
  }, [learningTrack, chosenCourse]);

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
        console.log(response);
        // if (response.status === "successful") {
        if (response.status === "completed") {
          toast.success("Payment successful! Verifying payment...");
          window.location = "/dashboard";
          // console.log(response);
          // console.log(response);
          // console.log(response);

          sendFlutterTx(response.transaction_id)
            // .then((response) => response.data)
            .then((response) => console.log(response))
            .then((res) => {
              // console.log(res)
              if (res.data.status === "successful") {
                setSelectStatus("paid");
                // window.location = "/dashboard";
              } else {
                // console.log(res)
              }
            })
            .catch((err) => {
              // console.log(err)
            });
        } else {
          // console.log(response)
          toast.error("Payment unsuccessful!");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: (response) => {},
    });
  };

  const makePayment = () => {
    if (payOpt === "part") {
      setPayShowModal("");
      var planData = new FormData();
      planData.append("payment_plan", "learn now pay later");
      addPlan(planData)
        .then((response) => response.data)
        .then((res) => {})
        .catch((err) => {});

      flutterWavePayment();
      // setSelectStatus("pay-as-you-earn");
    } else if (payOpt === "full") {
      setPayShowModal("");

      var planData = new FormData();
      planData.append("payment_plan", "pay at once");
      addPlan(planData)
        .then((response) => response.data)
        .then((res) => {})
        .catch((err) => {});

      flutterWavePayment();
    } else if (payOpt === "fullTrainingOnly") {
      setPayShowModal("");

      var planData = new FormData();
      planData.append("payment_plan", "training only");
      addPlan(planData)
        .then((response) => response.data)
        .then((res) => {})
        .catch((err) => {});

      flutterWavePayment();
    } else if (payOpt === "instalment") {
      setPayOpt("instalment-pay");
      setPaymentChoice("instalment-note");
      // toast.info("You need to select a payment option to continue!");
    } else if (payOpt === "instalment-pay") {
      setPayShowModal("");

      var planData = new FormData();
      planData.append("payment_plan", "pay in instalment");
      addPlan(planData)
        .then((response) => response.data)
        .then((res) => {})
        .catch((err) => {});

      flutterWavePayment();
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
                  btn.innerHTML = `Proceed`;
                }
              })
              .catch((err) => {
                if (err.response) {
                  toast.error(err.response);
                  btn.innerHTML = `Proceed`;
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
      data.append("firstname", guarantor?.firstName);
      data.append("lastname", guarantor?.lastName);
      data.append("email", guarantor?.email);
      data.append("phone_number", guarantor?.phone);
      data.append("gender", guarantor?.gender);
      data.append("office_address", guarantor?.officeAddress);
      data.append("home_address", guarantor?.homeAddress);
      data.append("profession", guarantor?.profession);
      data.append("name_of_organization", guarantor?.organisation);
      data.append("name_of_employer", guarantor?.employer);
      data.append("email_address_of_employer", guarantor?.employerMail);
      data.append("phone_number_of_employer", guarantor?.employerPhone);
      data.append("relationship_with_the_guarantor", guarantor?.relationship);
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
      data.append("firstname", guarantor?.firstName);
      data.append("lastname", guarantor?.lastName);
      data.append("email", guarantor?.email);
      data.append("phone_number", guarantor?.phone);
      data.append("gender", guarantor?.gender);
      data.append("office_address", guarantor?.officeAddress);
      data.append("home_address", guarantor?.homeAddress);
      data.append("profession", guarantor?.profession);
      data.append("name_of_organization", guarantor?.organisation);
      data.append("name_of_employer", guarantor?.employer);
      data.append("email_address_of_employer", guarantor?.employerMail);
      data.append("phone_number_of_employer", guarantor?.employerPhone);
      data.append("relationship_with_the_guarantor", guarantor?.relationship);
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
            }
            // else {
            //   toast.error(
            //     "Something went wrong!!! Please make sure you have a good internet connection."
            //   );
            btn.innerHTML = `Proceed`;
            // }
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
            }
            // else {
            //   toast.error(
            //     "Something went wrong!!! Please make sure you have a good internet connection."
            //   );
            btn.innerHTML = `Submit & Pay`;
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
    }
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
      email: `${details?.email}`,
      phonenumber: `${details?.phone}`,
      name: `${details?.firstName} ${details?.lastName}`,
    },

    customizations: {
      title: "Grazac Academy",
      description: "Payment for Graduate Cohort",
      logo: "https://grazac.com.ng/logo.png",
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
  // const [initializePayment] = usePayercoins();
  // const handlePayercoinsPayment = async () => {
  //   initializePayment(payercoinsConfig);
  // };

  return (
    <>
      {loading === false ? (
        <div>
          <ToastContainer closeButton={false} />
          {/* <OutsideClickHandler
            onOutsideClick={() => {
              closeNavMobile();
            }}
          > */}
          <div
            className="layout_dashboard-sidebar"
            id="sidebar"
            onClick={closeNavMobile}
          >
            <Sidebar
              clicked={sidebarClick}
              showDetails={status}
              clickedDashboard={setSidebarClick}
              clickedDetails={setSidebarClick}
              clickedPayment={setSidebarClick}
              paymentChoice={paymentChoice}
            />
          </div>
          {/* </OutsideClickHandler> */}
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
                    {details?.firstName?.substring(0, 1)}
                    {details?.lastName?.substring(0, 1)}
                  </h2>
                </div>
                <p>
                  {details?.firstName} {details?.lastName}
                </p>
              </div>
            </div>
            {sidebarClick === "dashboard" && (
              <div className="dashboard-content">
                {!accepted && (
                  <div>
                    <AdmissionFeePage
                      details={details}
                      fname={details?.firstName}
                      lname={details?.lastName}
                      email={details?.email}
                      phone={details?.phone}
                    />
                    {/* <p>Please Make your Admission Fee Payment</p> */}
                  </div>
                )}

                {status === "Not Submitted" && (
                  <NotSubmitted
                    userDetails={details}
                    fname={details?.firstName}
                    lname={details?.lastName}
                    email={details?.email}
                    phone={details?.phone}
                    setNewStatus={() => changeStatus("Under Review")}
                  />
                )}
                {status === "Under Review" && (
                  <UnderReview fname={details?.firstName} />
                )}
                {status === "Selected" && (
                  <Selected fname={details?.firstName} />
                )}
                {status === "Pending" && <Pending fname={details?.firstName} />}
                {status === "Failed" && <Failed fname={details?.firstName} />}

                {status === "Admitted" && (
                  <div>
                    {guarantorStatus === false ? (
                      <div>
                        {selectStatus === "congrats" && (
                          <div>
                            <h3>Hello {details?.firstName}</h3>
                            <p className="text1">Congratulations!</p>
                            {/* <p>
                              Your application has been selected. Click on the
                              button below to continue you admission process.
                            </p> */}
                            <p>
                              You have been selected to be part of the Grazac
                              Academy Cohort 17 training program. Kindly click
                              the button below to pay and finalize the admission
                              process.
                            </p>
                            <button onClick={() => setPayShowModal("pay")}>
                              Continue admission process
                            </button>
                          </div>
                        )}

                        {payShowModal === "pay" &&
                          isSpecialCourse &&
                          selectedTrack === "physical" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      // setAmount(850000);
                                      setAmount(300);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 300)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      // setAmount(450000);
                                      setAmount(350);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}

                        {payShowModal === "pay" &&
                          isSpecialCourse &&
                          selectedTrack === "virtual" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      // setAmount(450000);
                                      setAmount(300);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 300)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      // setAmount(250000);
                                      setAmount(350);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}

                        {payShowModal === "pay" &&
                          !isSpecialCourse &&
                          selectedTrack === "physical" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      setAmount(300);
                                      // setAmount(1000);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 300)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      setAmount(150);
                                      setAmount(350);
                                      // setAmount(1000);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}
                        {payShowModal === "pay" &&
                          !isSpecialCourse &&
                          selectedTrack === "virtual" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      // setAmount(300000);
                                      setAmount(300);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 300)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      // setAmount(150000);
                                      setAmount(150);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}

                        {/* {payShowModal === "pay" &&
                        {payShowModal === "pay" &&
                          paymentChoice === "learn_now_pay_later" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
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
                                      // setAmount(1000);
                                      // setAmount(150);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>
                                      Learn Now Pay Later (NGN 50,000 legal fee)
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
                                      setAmount(650000);
                                      // setAmount(250);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at Once (650,000 Naira)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      setAmount(350000);
                                      // setAmount(220);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350,000)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )} */}

                        {payShowModal === "pay" &&
                          paymentChoice === "fullPayment" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    {/* <h4>Choose Payment Option</h4> */}
                                    <h4>Pay Tuition Fee</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      setAmount(300);
                                      // setAmount(220);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at Once (300 Naira) </p>
                                  </div>

                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}

                        {payShowModal === "pay" &&
                          !isSpecialCourse &&
                          selectedTrack === "physical" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      // setAmount(650000);
                                      setAmount(300);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 300)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      // setAmount(350000);
                                      setAmount(350);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350)</p>
                                    <p>Pay in Instalment (NGN 700,000)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}

                        {payShowModal === "pay" &&
                          !isSpecialCourse &&
                          selectedTrack === "virtual" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Choose Payment Option</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  {/* <div
                                    className={
                                      payOpt === "full"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("full");
                                      setAmount(1000000);
                                      // setAmount(1000);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 1,000,000 for Training + Internship)</p>
                                  </div> */}
                                  <div
                                    className={
                                      payOpt === "fullTrainingOnly"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("fullTrainingOnly");
                                      setAmount(300000);
                                      // setAmount(1000);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay at once (NGN 300,000)</p>
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      setAmount(150000);
                                      // setAmount(1000);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    <div></div>
                                    <p>Pay in Instalment (NGN 350,000)</p>
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )}

                        {/* {payShowModal === "pay" &&
                          paymentChoice === "instalment-note" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Pay in Installments</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      setAmount(350);
                                      // setAmount(1000);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    {selectedTrack === "physical" ? (
                                      <p>
                                        In order to proceed with this option,
                                        kindly note that an initial payment of
                                        <span className="text-primary">
                                          {"    "}
                                          {isSpecialCourse
                                            ? "₦450,000.00"
                                            : "350,000.00"}
                                        </span>
                                        {"   "}is required at the start. A
                                        second payment of{"   "}
                                        <span className="text-primary font-bold">
                                          {isSpecialCourse
                                            ? "₦225,000.00"
                                            : "175,000.00"}
                                        </span>{" "}
                                        will be due at the end of the first
                                        month, and the remaining balance of
                                        <span className="text-primary font-bold">
                                          {"  "}{" "}
                                          {isSpecialCourse
                                            ? "₦225,000.00"
                                            : "175,000.00"}
                                        </span>
                                        {"     "}
                                        will be payable at the end of the second
                                        month., just to make payment easy for
                                        you.
                                      </p>
                                    ) : (
                                      <p>
                                        In order to proceed with this option,
                                        kindly note that an initial payment of{" "}
                                        {"   "}
                                        <span className="text-primary">
                                          {isSpecialCourse
                                            ? "₦250,000.00"
                                            : "₦150,000.00"}
                                        </span>
                                        {"   "}
                                        is required at the start. A second
                                        payment of{"  "}
                                        <span className="text-primary font-bold">
                                          {isSpecialCourse
                                            ? "₦125,000.00"
                                            : " ₦100,000.00"}
                                        </span>
                                        will be due at the end of the first
                                        month, and the remaining balance of
                                        <span className="text-primary font-bold">
                                          {" "}
                                          {isSpecialCourse
                                            ? "₦125,000.00"
                                            : " ₦100,000.00"}
                                        </span>{" "}
                                        will be payable at the end of the second
                                        month., just to make payment easy for
                                        you.
                                      </p>
                                    )}

                                    {/* {isSpecialCourse ? (
                                      selectedTrack === "physical" ? (
                                        <p>
                                          In order to proceed with this option,
                                          kindly note that an initial payment of
                                          <span className="text-primary">
                                            {" "}
                                            ₦350,000.00{" "}
                                          </span>
                                          is required at the start. A second
                                          payment of
                                          <span className="text-primary font-bold">
                                            {" "}
                                            ₦275,000.00{" "}
                                          </span>
                                          will be due at the end of the first
                                          month, and the remaining balance of
                                          <span className="text-primary font-bold">
                                            {" "}
                                            ₦275,000.00{" "}
                                          </span>
                                          will be payable at the end of the
                                          second month, just to make payment
                                          easy for you.
                                        </p>
                                      ) : (
                                        <p>
                                          In order to proceed with this option,
                                          kindly note that an initial payment of
                                          <span className="text-primary">
                                            {" "}
                                            ₦225,000.00{" "}
                                          </span>
                                          is required at the start. A second
                                          payment of
                                          <span className="text-primary font-bold">
                                            {" "}
                                            ₦125,000.00{" "}
                                          </span>
                                          will be due at the end of the first
                                          month, and the remaining balance of
                                          <span className="text-primary font-bold">
                                            {" "}
                                            ₦100,000.00{" "}
                                          </span>
                                          will be payable at the end of the
                                          second month, just to make payment
                                          easy for you.
                                        </p>
                                      )
                                    ) : selectedTrack === "physical" ? (
                                      <p>
                                        In order to proceed with this option,
                                        kindly note that an initial payment of
                                        <span className="text-primary">
                                          {" "}
                                          ₦350,000.00{" "}
                                        </span>
                                        is required at the start. A second
                                        payment of
                                        <span className="text-primary font-bold">
                                          {" "}
                                          ₦175,000.00{" "}
                                        </span>
                                        will be due at the end of the first
                                        month, and the remaining balance of
                                        <span className="text-primary font-bold">
                                          {" "}
                                          ₦175,000.00{" "}
                                        </span>
                                        will be payable at the end of the second
                                        month, just to make payment easy for
                                        you.
                                      </p>
                                    ) : (
                                      <p>
                                        In order to proceed with this option,
                                        kindly note that an initial payment of
                                        <span className="text-primary">
                                          {" "}
                                          ₦150,000.00{" "}
                                        </span>
                                        is required at the start. A second
                                        payment of
                                        <span className="text-primary font-bold">
                                          {" "}
                                          ₦100,000.00{" "}
                                        </span>
                                        will be due at the end of the first
                                        month, and the remaining balance of
                                        <span className="text-primary font-bold">
                                          {" "}
                                          ₦100,000.00{" "}
                                        </span>
                                        will be payable at the end of the second
                                        month, just to make payment easy for
                                        you.
                                      </p>
                                    )} */}
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
                            </div>
                          )} */}

                        {payShowModal === "pay" &&
                          paymentChoice === "instalment-note" && (
                            <div className="dashboard-content-modal">
                              <div className="dashboard-content-modal-backdrop"></div>
                              <div className="dashboard-content-modal-container">
                                <div className="dashboard-content-modal-main">
                                  <div className="dashboard-content-modal-main-text">
                                    <h4>Pay in Installments</h4>
                                    <img
                                      src={cancel}
                                      alt="cancel"
                                      onClick={() => setPayShowModal("")}
                                    />
                                  </div>
                                  <div
                                    className={
                                      payOpt === "instalment"
                                        ? "active"
                                        : "dashboard-content-modal-main-frame1"
                                    }
                                    onClick={() => {
                                      setPayOpt("instalment");
                                      // setAmount(700000);
                                      setAmount(350);
                                      setCurrency("NGN");
                                    }}
                                  >
                                    {selectedTrack === "physical" ? (
                                      <p>
                                        In order to proceed with this option,
                                        kindly note that an initial payment of
                                        <span className="text-primary">
                                          {"    "}
                                          {isSpecialCourse
                                            ? "₦450,000.00"
                                            : "350,000.00"}
                                        </span>
                                        {"   "}is required at the start. A
                                        second payment of{"   "}
                                        <span className="text-primary font-bold">
                                          {isSpecialCourse
                                            ? "₦225,000.00"
                                            : "175,000.00"}
                                        </span>{" "}
                                        will be due at the end of the first
                                        month, and the remaining balance of
                                        <span className="text-primary font-bold">
                                          {"  "}{" "}
                                          {isSpecialCourse
                                            ? "₦225,000.00"
                                            : "175,000.00"}
                                        </span>
                                        {"     "}
                                        will be payable at the end of the second
                                        month., just to make payment easy for
                                        you.
                                      </p>
                                    ) : (
                                      <p>
                                        In order to proceed with this option,
                                        kindly note that an initial payment of{" "}
                                        {"   "}
                                        <span className="text-primary">
                                          {isSpecialCourse
                                            ? "₦250,000.00"
                                            : "₦150,000.00"}
                                        </span>
                                        {"   "}
                                        is required at the start. A second
                                        payment of{"  "}
                                        <span className="text-primary font-bold">
                                          {isSpecialCourse
                                            ? "₦125,000.00"
                                            : " ₦100,000.00"}
                                        </span>
                                        will be due at the end of the first
                                        month, and the remaining balance of
                                        <span className="text-primary font-bold">
                                          {" "}
                                          {isSpecialCourse
                                            ? "₦125,000.00"
                                            : " ₦100,000.00"}
                                        </span>{" "}
                                        will be payable at the end of the second
                                        month., just to make payment easy for
                                        you.
                                      </p>
                                    )}
                                  </div>
                                  <button onClick={makePayment}>Proceed</button>
                                </div>
                              </div>
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
                                    <input
                                      onChange={handleChange}
                                      required
                                      name="profession"
                                      type="text"
                                      placeholder="Enter Profession"
                                    ></input>
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
                                Your application has been selected. Click on the
                                button below to continue you admission process.
                              </p>
                              <button onClick={() => setPayShowModal("pay")}>
                                Continue admission process
                              </button>

                              {payShowModal === "pay" && (
                                <div className="dashboard-content-modal">
                                  <div className="dashboard-content-modal-backdrop"></div>
                                  <div className="dashboard-content-modal-container">
                                    <div className="dashboard-content-modal-main">
                                      <div className="dashboard-content-modal-main-text">
                                        <h4>Choose Payment Option</h4>
                                        <img
                                          src={cancel}
                                          alt="cancel"
                                          onClick={() => setPayShowModal("")}
                                        />
                                      </div>
                                      <div
                                        className={
                                          payOpt === "full"
                                            ? "active"
                                            : "dashboard-content-modal-main-frame1"
                                        }
                                        onClick={() => {
                                          setPayOpt("full");
                                          setAmount(500000);
                                          setCurrency("NGN");
                                        }}
                                      >
                                        <div></div>
                                        <p>Pay at once (NGN 500,000)</p>
                                      </div>
                                      <a
                                        href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSep9AvrWxiedsn8KWYTTiTAArLRwsHRSLnnd49GIrJ35Z4FUw/viewform?usp=pp_url&authuser=0"
                                        target="_blank"
                                        className={
                                          payOpt === "install"
                                            ? "active"
                                            : "dashboard-content-modal-main-frame1"
                                        }
                                      >
                                        <div></div>
                                        <p>
                                          Pay in Installments (NGN550,000:
                                          Starts from NGN 250,000)
                                        </p>
                                      </a>
                                      {/* New Installment Option */}
                                      <div
                                        className={
                                          payOpt === "instalment350"
                                            ? "active"
                                            : "dashboard-content-modal-main-frame1"
                                        }
                                        onClick={() => {
                                          setPayOpt("instalment350");
                                          setAmount(350000);
                                          setCurrency("NGN");
                                        }}
                                      >
                                        <div></div>
                                        <p>Pay in Installments (NGN 350,000)</p>
                                      </div>
                                      <button
                                        onClick={() => flutterWavePayment()}
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
                    {selectStatus === "initialDeposit" && (
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
            {sidebarClick === "payment" && <Payment />}
            {/* {sidebarClick === "payment" && <Payment handleFlutterwave = {flutterWavePayment()} setPayOpt={setPayOpt} setAmount={setAmount} setCurrency={setCurrency}/>} */}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Dashboard;