import { useCallback, useRef, useState, useEffect } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Details from "../../../components/dashboard/Details";
import NotSubmitted from "../../../components/dashboard/not-submitted";
import UnderReview from "../../../components/dashboard/UnderReview";
import PaymentReceived from "../../../components/dashboard/selected/PaymentReceived";
import Selected from "../../../components/dashboard/Selected";
import Rejected from "../../../components/dashboard/Rejected";

import { ToastContainer, toast } from "react-toastify";
import {
  submitGuarantor,
  sendFlutterTx,
  addPlan,
  getGuarantor,
  getDetailsC,
  createCheckout,
  getPaymentDue,
} from "../../../api/dashboard/data";
import {
  useFlutterwave,
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
// import { usePayercoins } from "payercoins-react";

function Dashboard() {
  const statusClasses = {
    "Not Submitted": "c:bg-gray-300 px-8 py-4 rounded-full",
    "Under Review": "c:bg-yellow-200 px-8 py-4 rounded-full",
    Admitted: "c:bg-green-400 px-8 py-4 rounded-full",
    Selected: "c:bg-purple-300 px-8 py-4 rounded-full",
    Rejected: "c:bg-red-300 px-8 py-4 rounded-full",
    Pending: "c:bg-yellow-200 px-8 py-4 rounded-full",
  };

  // const [accepted, setAccepted] = useState(false);

  // const accepted = useApplicationFee();

  // const [status, setStatus] = useState("Not Submitted");
  const [status, setStatus] = useState("Not Applied Yet");
  const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState("Admitted");
  const [selectStatus, setSelectStatus] = useState("congrats");
  const [payShowModal, setPayShowModal] = useState("");
  const [sidebarClick, setSidebarClick] = useState("dashboard");
  const [details, setDetails] = useState({});
  const [payOpt, setPayOpt] = useState("");
  const [paymentDue, setPaymentDue] = useState(null);
  const [savingPlan, setSavingPlan] = useState(false);
  const verificationPending = useRef(false);
  const [checkout, setCheckout] = useState(null);
  const paymentBusy = useRef(false);
  const paymentOpened = useRef(false);
  const [userId, setUserId] = useState(0);
  const [guarantorForm1, setGuarantorForm1] = useState(true);
  // const [chosenCourse, setChosenCourse] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [isSpecialCourse, setIsSpecialCourse] = useState(false);
  const [paymentChoice, setPaymentChoice] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [guarantorStatus, setGuarantorStatus] = useState(false);
  const [isFeePaid, setIsFeePaid] = useState(false);
  const [paymentVerification, setPaymentVerification] = useState("");
  const [paymentTransactionId, setPaymentTransactionId] = useState("");
  const [checkingPayment, setCheckingPayment] = useState(false);
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


  useEffect(() => {
    // setSelectStatus("paid");
    // setSelectStatus("paid")
    try {
      let details = sessionStorage.getItem("user_details");
      let fee = sessionStorage.getItem("applicationFee");

      setDetails(JSON.parse(details));
      setUserId(JSON.parse(details)?.id);
      // setAccepted(JSON.parse(details)?.applicationFee);
      setIsFeePaid(fee);
      // console.log(JSON.parse(details).applicationFee);

      console.log("paiiiiid ", fee);
      if (fee === "true" || fee === true) {
        console.log("feeeee", fee);
        // console.log("fkjdkj");
        // setStatus("Not Submitted");
        setStatus(JSON.parse(details).status);
        // console.log(status)

        if (
          JSON.parse(details).isPaid === true ||
          JSON.parse(details).isPaid === 1
        ) {
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
        if (res.data.length >= 2) {
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
  }, [guarantorForm1, trigger]);

  useEffect(() => {
    getDetailsC().then((res) => {
      const profile = res.data.data.result;
      if (!profile) {
        toast.error("Unable to load your profile. Please try again.");
        return;
      }
      const session = {
        ...JSON.parse(sessionStorage.getItem("user_details")),
        ...profile,
        id: profile.id,
        phone: profile.phoneNumber,
      };

      setPaymentChoice(res.data.data.result?.paymentOption);

      // setChosenCourse(res.data.data.result?.preferred_course);
      setSelectedTrack(res.data.data.result?.learningTrack);
      sessionStorage.setItem(
        "user_details",
        JSON.stringify(session)
      );
      setDetails(session);
      getPaymentDue().then((result) => {
        setPaymentDue(result.data.data);
      }).catch((err) => toast.error(err.response?.data?.message || "Unable to load payment due. Please refresh and try again."));
      setUserId(session.id);
      sessionStorage.setItem(
        "applicationFee",
        `${res.data.data.result?.applicationFee}`
      );
      setTrigger(true);

      if (
        res.data.data.result?.preferred_course === "cyber security" ||
        res.data.data.result?.preferred_course === "cloud"
      ) {
        setIsSpecialCourse(true);
      }
    }).catch((err) => {
      if (err.response?.status === 401) {
        window.location = "/login";
        return;
      }
      toast.error(
        err.response?.data?.message ||
          "Unable to load your profile. Please check your internet connection and try again."
      );
    });
  }, []);

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

  const checkPaymentStatus = useCallback(async (transactionId) => {
    verificationPending.current = true;
    setPaymentTransactionId(transactionId);
    setCheckingPayment(true);
    setPaymentVerification("pending");
    let confirmed = false;
    try {
      const result = await sendFlutterTx(transactionId);
      if (
        result.status === 200 &&
        result.data?.status === 200 &&
        result.data?.data?.status === "successful" &&
        result.data?.data?.transaction_id === transactionId
      ) {
        confirmed = true;
        const profileResult = await getDetailsC();
        const profile = profileResult.data?.data?.result;
        if (!profile) throw new Error("Unable to refresh your profile");
        sessionStorage.setItem("user_details", JSON.stringify({
          ...JSON.parse(sessionStorage.getItem("user_details")),
          ...profile,
          phone: profile.phoneNumber,
        }));
        sessionStorage.setItem("applicationFee", String(profile.applicationFee));
        toast.success("Payment verified successfully");
        window.location.reload();
      }
    } catch (err) {
      setPaymentVerification(confirmed ? "profile-refresh-failed" : "request-failed");
      toast.error(confirmed
        ? "Payment verified, but your profile did not refresh. Do not pay again."
        : "Unable to request payment verification. Do not pay again.");
    } finally {
      setCheckingPayment(false);
    }
  }, []);

  const flutterWavePayment = async () => {
    if (paymentVerification || verificationPending.current || paymentBusy.current) return;
    paymentBusy.current = true;
    try {
      const result = await getPaymentDue();
      const current = result.data?.data;
      setPaymentDue(current);
      if (paymentDue?.due && (current?.due?.item !== paymentDue.due.item ||
          current?.due?.purpose !== paymentDue.due.purpose || current?.due?.amount !== paymentDue.due.amount)) {
        throw new Error("Payment due changed. Review the updated payment details before paying.");
      }
      if (current?.reason === "no_plan") {
        setPayShowModal("pay");
        paymentBusy.current = false;
        return;
      }
      if (!current?.due) throw new Error("No online payment is due. Please check your payment details.");
      const response = await createCheckout({ purpose: current.due.purpose });
      const created = response.data?.data;
      if (response.data?.status !== 201 || !created?.tx_ref || !(created.amount > 0) || created.currency !== "NGN") {
        throw new Error("Unable to start payment. Please try again.");
      }
      if (created.amount !== current.due.amount || created.currency !== "NGN") {
        setPaymentDue((await getPaymentDue()).data?.data);
        throw new Error("Payment due changed. Review the updated payment details before paying.");
      }
      setPayShowModal("");
      setCheckout(created);
    } catch (err) {
      paymentBusy.current = false;
      toast.error(err.response?.data?.message || err.message);
    }
  };


  const config = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,

    tx_ref: checkout?.tx_ref,
    amount: checkout?.amount,
    currency: checkout?.currency,
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
  useEffect(() => {
    if (!checkout || paymentOpened.current === checkout.tx_ref) return;
    paymentOpened.current = checkout.tx_ref;
    handleFlutterPayment({
      callback: async (response) => {
        paymentBusy.current = false;
        if (response.status === "completed" || response.status === "successful") {
          verificationPending.current = true;
          const transactionId = String(response.transaction_id);
          closePaymentModal();
          await checkPaymentStatus(transactionId);
        } else {
          setCheckout(null);
          paymentBusy.current = false;
          toast.error("Payment unsuccessful!");
          closePaymentModal();
        }
      },
      onClose: () => {
        paymentBusy.current = false;
        setCheckout(null);
      },
    }).catch(() => {
      paymentBusy.current = false;
      setCheckout(null);
      toast.error("Unable to open payment. Please try again.");
    });
  }, [checkout, handleFlutterPayment, checkPaymentStatus]);

  const makePayment = async () => {
    if (savingPlan || paymentBusy.current || verificationPending.current || paymentVerification) return;
    if (!payOpt) {
      toast.info("Please select a payment plan.");
      return;
    }
    paymentBusy.current = true;
    setSavingPlan(true);
    try {
      const planData = new FormData();
      planData.append("payment_plan", payOpt === "instalment" ? "pay in instalment" : "training only");
      const saved = await addPlan(planData);
      if (saved.status !== 200 || saved.data?.status !== 200) throw new Error("Unable to save your payment plan.");
      paymentBusy.current = false;
      await flutterWavePayment();
    } catch (err) {
      paymentBusy.current = false;
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setSavingPlan(false);
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

        if (res.data.length < 1) {
          // setGuarantorForm1(false);

          e.preventDefault();
          var data = new FormData();

          btn = document.getElementById("actionBtn");
          btn.innerHTML = `<img src=${loader} width="20px" />`;
          btn.disabled = false;

          if (!(guarantor.phone.length > 10)) {
            btn.innerHTML = `<img src=${loader} width="20px" />`;

            toast.error("please enter a correct phone number");
            btn.innerHTML = `Proceed`;
            // btn.disabled = true
          }

          if (!(guarantor.employerPhone.length > 10)) {
            btn.innerHTML = `<img src=${loader} width="20px" />`;

            toast.error("please enter a correct employer's phone number");
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
      btn.innerHTML = `Proceed`;
      // btn.disabled = true
    }

    if (!(guarantor.employerPhone.length > 10)) {
      btn.innerHTML = `<img src=${loader} width="20px" />`;

      toast.error("please enter a correct employer's phone number");
      btn.innerHTML = `Proceed`;
      // btn.disabled = false
    }

    if (guarantor.phone.length > 10 && guarantor.employerPhone.length > 10) {

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



  const changeStatus = (par1) => {
    setStatus(`${par1}`);
    sessionStorage.setItem("status", `${par1}`);
  };

  //payercoins LIVE public key PYC-PUB_339d368f5254b0149ad6c7
  //payercoins TEST public key PYC-PUB_a04caeeba00b80ae762bbe_TEST
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
          {/* <div
            className="layout_dashboard-sidebar"
            id="sidebar"
            onClick={closeNavMobile}
            ref={sidebarRef}
          >
            <Sidebar
              clicked={sidebarClick}
              showDetails={status}
              clickedDashboard={setSidebarClick}
              clickedDetails={setSidebarClick}
              clickedPayment={setSidebarClick}
              paymentChoice={paymentChoice}
            />
          </div> */}
          <OutsideClickHandler onOutsideClick={closeNavMobile}>
            <div className="layout_dashboard-sidebar" id="sidebar">
              <Sidebar
                clicked={sidebarClick}
                showDetails={status}
                clickedDashboard={setSidebarClick}
                clickedDetails={setSidebarClick}
                clickedPayment={setSidebarClick}
                paymentChoice={paymentChoice}
              />
            </div>
          </OutsideClickHandler>

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
                <h3>
                  Status:{"    "}
                  <span className={statusClasses[status]}>{status}</span>
                </h3>
                <div
                  className={
                    status === "Not Submitted"
                      ? `dashboard-nav-status-dot not-submitted ${status}}`
                      : status === "Under Review"
                      ? `dashboard-nav-status-dot under-review ${status}`
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
            {paymentVerification && (
              <div className="pending" role="status">
                <p>{paymentVerification === "profile-refresh-failed"
                  ? "Your payment is verified. Do not pay again."
                  : "Your payment is not yet verified. Do not pay again."}</p>
                {paymentVerification === "pending" && (
                  <p>Payment verification is pending.</p>
                )}
                {paymentVerification === "request-failed" && (
                  <p role="alert">We cannot request payment verification. Please contact support.</p>
                )}
                {paymentVerification === "profile-refresh-failed" && (
                  <p role="alert">Your profile did not refresh. Check payment status again to retry, or contact support.</p>
                )}
                <button
                  type="button"
                  disabled={checkingPayment || !paymentTransactionId}
                  onClick={() => checkPaymentStatus(paymentTransactionId)}
                >
                  {checkingPayment ? "Checking payment status..." : "Check payment status"}
                </button>
              </div>
            )}
            {sidebarClick === "dashboard" && (
              <div className="dashboard-content">
                {isFeePaid === "false" || isFeePaid === false ? (
                  <div>
                    <AdmissionFeePage
                      details={details}
                      fname={details?.firstName}
                      checkPaymentStatus={checkPaymentStatus}
                      paymentVerification={paymentVerification}
                      lname={details?.lastName}
                      email={details?.email}
                      phone={details?.phone}
                    />
                    {/* <p>Please Make your Admission Fee Payment</p> */}
                  </div>
                ) : null}

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
                    {paymentDue?.due && <p>Next payment: {paymentDue.due.item} — NGN {paymentDue.due.amount.toLocaleString()}.</p>}
                    {paymentDue?.reason === "lnpl" && <p>Your current plan has no online tuition payment due.</p>}
                    {paymentDue?.reason === "no_price" && <p>No tuition price is available. Please contact support.</p>}
                    {payShowModal === "pay" && paymentDue?.reason === "no_plan" && paymentDue.prices && (
                      <div className="dashboard-content-modal">
                        <div className="dashboard-content-modal-backdrop"></div>
                        <div className="dashboard-content-modal-container">
                          <div className="dashboard-content-modal-main">
                            <div className="dashboard-content-modal-main-text">
                              <h4>Choose Payment Option</h4>
                              <img src={cancel} alt="cancel" onClick={() => setPayShowModal("")} />
                            </div>
                            <div className={payOpt === "fullTrainingOnly" ? "active" : "dashboard-content-modal-main-frame1"}
                              onClick={() => setPayOpt("fullTrainingOnly")}>
                              <div></div><p>Pay at once (NGN {paymentDue.prices.full.toLocaleString()})</p>
                            </div>
                            <div className={payOpt === "instalment" ? "active" : "dashboard-content-modal-main-frame1"}
                              onClick={() => setPayOpt("instalment")}>
                              <div></div><p>Pay in installments (NGN {paymentDue.prices.instalments.reduce((sum, price) => sum + price, 0).toLocaleString()})</p>
                            </div>
                            {payOpt === "instalment" && <p>
                              First installment: NGN {paymentDue.prices.instalments[0].toLocaleString()}.
                              Second installment: NGN {paymentDue.prices.instalments[1].toLocaleString()}.
                              Third installment: NGN {paymentDue.prices.instalments[2].toLocaleString()}.
                            </p>}
                            <button disabled={savingPlan} onClick={makePayment}>{savingPlan ? "Saving plan..." : "Proceed"}</button>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* {guarantorStatus === false  && selectStatus !== "paid" ? ( */}
                    {guarantorStatus === false ? (
                      <div>
                        {selectStatus === "congrats" && (
                          <div>
                            <h3>Hello {details?.firstName}</h3>
                            <p className="text1">Congratulations!</p>
                            
                            <p>
                              You have been selected to be part of the Grazac
                              Academy Cohort 17 training program. Kindly click
                              the button below to pay and finalize the admission
                              process.
                            </p>
                            <button onClick={flutterWavePayment}>
                              Continue admission process
                            </button>
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
                                until you’re hired!
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
                                  rel="noreferrer"
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
                                Your application has been selected. Click on the
                                button below to continue you admission process.
                              </p>
                              <button onClick={flutterWavePayment}>
                                Continue admission process
                              </button>

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
            {sidebarClick === "payment" && (
              <Payment
                selectedTrack={selectedTrack}
                isSpecialCourse={isSpecialCourse}
                paymentVerification={paymentVerification}
                checkPaymentStatus={checkPaymentStatus}
              />
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Dashboard;
