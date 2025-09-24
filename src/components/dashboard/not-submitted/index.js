/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  submitDetails,
  submitDetailsLnpl,
  submitGuarantor,
  submitGuarantor2,
} from "../../../api/dashboard/data";
import axios from "axios";

import arrow from "../../../images/svg/dashboard/arrow.svg";
import upload from "../../../images/svg/upload.svg";
import loader from "../../../images/svg/dashboard/loader.gif";
import about from "../../../images/about-1.jpg";
import termsandconds from "../../../images/newsletter/terms_and_conds.pdf";
import pricingPolicy from "../../../images/newsletter/pricing.pdf";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function NotSubmitted({
  fname,
  lname,
  phone,
  email,
  setNewStatus,
  userDetails,
}) {
  const history = useHistory();
  const [active, setActive] = useState("welcome");
  const [formActive, setFormActive] = useState("");

  // const [isError, setIsError] = useState("");
  // const [formActive, setFormActive] = useState("education");
  // const [submit, setSubmit] = useState(null);
  const [isButtonSubmitted, setIsButtonSubmitted] = useState(true);
  const [userId, setUserId] = useState(0);
  const [modeSelection, setModeSelection] = useState(null);
  const [checkAct, setCheckAct] = useState(false);
  const [checkAct2, setCheckAct2] = useState(false);
  const [nigerianStates, setNigerianStates] = useState([]);
  const [bioData, setBioData] = useState({
    firstName: `${fname}`,
    lastName: `${lname}`,
    email: `${email}`,
    phone: `${phone}`,
    gender: "",
    ageRange: "",
    preferred_course: "",
    current_city_and_location: "",
    physically_available: "",
    paymentOption: "",
    why_selected_for_cohort: "",

    state_of_residence: "",
    resident_in_abeokuta: "",
    // onSite: undefined,
    method_of_learning: "",
  });
  const [formGuarantor, setFormGuarantor] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    gender: "",
    office_address: "",
    home_address: "",
    profession: "",
    organization_name: "",
    employer_phone_address: "",
    employer_email_address: "",
    relationship_with_the_guarantor: "",
  });
  const [formGuarantor2, setFormGuarantor2] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    gender: "",
    office_address: "",
    home_address: "",
    profession: "",
    organization_name: "",
    employer_phone_address: "",
    employer_email_address: "",
    relationship_with_the_guarantor: "",
    onSite: undefined,
  });

  const [education, setEducation] = useState({
    courseOfStudy: "",
    grade: "",
    qualification: "",
    experience: "",
    nyscStatus: "",
    reason: "",
    availability: "",
    legalFee: "",
  });
  //   setBioData(userDetails)

  // window.onload = (event) => {
  //   // removeQuestions();
  //   setBioData(userDetails);
  // };
  // useEffect(() => {
  //   if(bioData.paymentOption === 'partPayment' || )
  // })
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    if (
      bioData?.paymentOption === "fullPayment" ||
      bioData?.paymentOption === "partPayment"
    ) {
      setIsButtonSubmitted(false);
      // setSubmit(submitForm)
    } else if (bioData?.paymentOption === "learn_now_pay_later") {
      setIsButtonSubmitted(false);
      // setSubmit(submitFormPayLater)
    } else if (bioData?.paymentOption === "") {
      setIsButtonSubmitted(true);
    }
  }, [bioData]);
  // useEffect(() => {
  //   try {
  //     let details = sessionStorage.getItem("user_details");
  //     setUserId(JSON.parse(details).id);
  //   } catch (err) {}
  //   // setBioData(userDetails)

  //   axios
  //     .get("https://nigerian-states-info.herokuapp.com/api/v1/states")
  //     .then((response) => {
  //       setNigerianStates(response.data.data);
  //     });

  //   {
  //     nigerianStates.length === 0 &&
  //       axios
  //         .post("https://countriesnow.space/api/v0.1/countries/states", {
  //           country: "Nigeria",
  //         })
  //         .then((response) => {
  //           setNigerianStates(response.data.data.states);
  //         });
  //   }
  // }, []);
  useEffect(() => {
    const modeChoice = sessionStorage.getItem("mode_selection");
    const choice = modeChoice ? JSON.parse(modeChoice) : {};
    const data = choice.onSite;
    setBioData((prev) => ({ ...prev, onSite: data }));
    setModeSelection(data);
  }, []);

  //   setBioData(userDetails)

  const handleChange = (e) => {
    setBioData({
      ...bioData,
      [e.target.name]: e.target.value,
    });

    // setEducation({
    //   ...education,
    //   [e.target.name]: e.target.value,
    // });
  };
  const handleChangeGuarantor = (e) => {
    setFormGuarantor({
      ...formGuarantor,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeGuarantor2 = (e) => {
    setFormGuarantor2({
      ...formGuarantor2,
      [e.target.name]: e.target.value,
    });
  };

  // const handleImage = (e) => {
  //   if (e.target.files[0].size > 2097152) {
  //     toast.error("File too large! A maximum of 2MB is allowed.");
  //   } else {
  //     //   setBioData({
  //     //     ...bioData,
  //     //     id: e.target.files[0],
  //     //   });
  //   }
  // };
  const confirmCheck = () => {
    var check = document.getElementById("check");
    if (check.checked) {
      setCheckAct(true);
    } else {
      setCheckAct(false);
    }
  };
  const confirmCheck2 = () => {
    var check2 = document.getElementById("check2");
    if (check2.checked) {
      setCheckAct2(true);
    } else {
      setCheckAct2(false);
    }
  };

  const showForm = () => {
    // toast.info("Application for this cohort has ended. Please check back later!!!")
    var check = document.getElementById("check");
    if (check.checked) {
      setActive("form");
      setFormActive("bio-data");
      window.scrollTo(0, 0);
    } else {
      toast.warn("You need to accept the terms and conditions to proceed!");
    }
  };
  const showFormVirtual = () => {
    var check = document.getElementById("check");
    if (check.checked) {
      setActive("form");
      setFormActive("bio-data-virtual");
      window.scrollTo(0, 0);
    } else {
      toast.warn("You need to accept the terms and conditions to proceed!");
    }
  };
  const showFormPayLayer = () => {
    var check2 = document.getElementById("check2");
    if (check2.checked) {
      setActive("lnpl");
      setFormActive("guarantor-form1");
      window.scrollTo(0, 0);
    } else {
      toast.warn("You need to accept the terms and conditions to proceed!");
    }
  };

  // const showEduForm = (e) => {
  //   e.preventDefault();
  //   setFormActive("education");
  // };

  const submitForm = (e) => {
    e.preventDefault();
    var btnPhy1 = document.getElementById("btn-physical-1");
    setIsButtonSubmitted(false);
    // btnPhy1.innerHTML = `<img src=${loader} width="20px" />`;
    var data = new FormData();

    try {
      //  btnPhy1.innerHTML = `Submit`;
      // btnPhy1.innerHTML = `<img src=${loader} width="20px" />`;
      if (!(bioData.phone.length > 10)) {
        // btnPhy1.innerHTML = `Submit`;
        toast.error("please check and enter a valid phone number");
      } else {
        // btnPhy1.innerHTML = `Submit`;
        // btnPhy1.innerHTML = `<img src=${loader} width="20px" />`;
        // toast.success('Successful')
        // data.append("firstName", bioData?.firstName);
        // data.append("lastName", bioData?.lastName);
        // data.append("email", bioData?.email);
        // data.append("phone", bioData.phone);
        // data.append("gender", bioData.gender);
        // data.append("ageRange", bioData.ageRange);
        // data.append("preferred_course", education.preferred_course);
        // data.append("current_city_and_location", bioData.current_city_and_location);
        // data.append("physically_available", bioData.physically_available);
        // data.append("paymentOption", bioData.paymentOption);
        // data.append("why_selected_for_cohort", bioData.why_selected_for_cohort);
        // data.append("dob", bioData.dob);
        // data.append("preferred_course", bioData.course);
        // data.append("state_of_residence", bioData.state);
        // data.append("means_of_identification", bioData.id);
        // data.append("maritalStatus", bioData.maritalStatus);
        // data.append("haveKids", bioData.haveKids);
        // data.append("reside_in_abeokuta", bioData.reside);
        // data.append("grade_achieved", education.grade);
        // data.append("qualifications", education.qualification);
        // data.append("programming_skills", education.experience);
        // data.append("nysc_status", education.nyscStatus);
        // data.append("why_selected_for_cohort", education.reason);
        // data.append("physically_available", education.availability);
        // data.append("will_you_pay_legal_fees", education.legalFee);
        console.log(data);
      }
    } catch (err) {
      toast.error("please check enter a valid phone number");
      // btnPhy1.innerHTML = `Submit`;
    }
    submitDetails(bioData, userId)
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "Submission successful! Your Application is now under review."
          );
          // btnPhy1.innerHTML = `Submit`;
          setNewStatus();
        } else {
          toast.error("Submission not successful, try again!!!");
          // btnPhy1.innerHTML = `Submit`;
        }
      })
      .catch((err) => {
        // try {
        //   if (err.response.data === "File size limit has been reached") {
        //     toast.error("File size exceeded for Means of Identification Field");
        //   }
        //   if (err.response) {
        //     console.log(err.response)
        //     toast.error(err.response);
        //     btnPhy1.innerHTML = `Submit`;
        //   } else {
        //     toast.error(
        //       "Something went wrong!!! Please make sure you have a good internet connection."
        //     );
        //     btnPhy1.innerHTML = `Submit`;
        //   }
        // } catch {
        //   toast.error("Something went wrong!!! Please Try Again");
        //   btnPhy1.innerHTML = `Submit`;
        // }
      });
  };
  const submitFormPayLater = (e) => {
    e.preventDefault();
    // var btnPhy2 = document.getElementById("btn-physical-2");
    try {
      //  btnPhy2.innerHTML = `Submit`;
      // btnPhy2.innerHTML = `<img src=${loader} width="20px" />`;
      if (!(bioData.phone.length > 10)) {
        // btnPhy2.innerHTML = `Submit`;
        // toast.error("please check and enter a valid phone number");
      } else {
      }
    } catch (err) {
      toast.error("please check and enter a valid phone number");
      // btnPhy2.innerHTML = `Submit`;
    }
    submitDetailsLnpl(bioData, userId)
      .then((res) => {
        // console.log(bioData)
        if (res.status === 200) {
          // toast.success(
          //   "Submission successful! Your Application is now under review."
          // );
          setActive("lnpl");
          setFormActive("pay-later");
          window.scrollTo(0, 0);
          // btnPhy2.innerHTML = `Submit`;
          // setNewStatus();
        } else {
          toast.error("Submission not successful, try again!!!");
          // btnPhy2.innerHTML = `Submit`;
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!!! Please Try Again");
        // try {
        //   if (err.response) {
        //     console.log(err)
        //     toast.error(err.response);
        //     btnPhy2.innerHTML = `Submit`;
        //   } else {
        //     toast.error(
        //       "Something went wrong!!! Please make sure you have a good internet connection."
        //     );
        //     btnPhy2.innerHTML = `Submit`;
        //   }
        // } catch {
        //   toast.error("Something went wrong!!! Please Try Again");
        //   btnPhy2.innerHTML = `Submit`;
        // }
      });
  };

  const submitFormGuarantor1 = (e) => {
    e.preventDefault();
    submitGuarantor(formGuarantor)
      .then((res) => {
        if (res.status === 200) {
          // toast.success(
          //   "Submission successful! Your Application is now under review."
          // );
          // btn.innerHTML = `Submit`;
          // setNewStatus();
          setFormActive("guarantor-form2");
          window.scrollTo(0, 0);
        } else {
          toast.error("Submission not successful, try again!!!");
          // btn.innerHTML = `Submit`;
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!!! Please Try Again");
        // try {
        //   if (err.response) {
        //     toast.error(err.response);
        //     btn.innerHTML = `Submit`;
        //   } else {
        //     toast.error(
        //       "Something went wrong!!! Please make sure you have a good internet connection."
        //     );
        //     btn.innerHTML = `Submit`;
        //   }
        // } catch {
        //   toast.error("Something went wrong!!! Please Try Again");
        //   btn.innerHTML = `Submit`;
        // }
      });
  };
  const submitFormGuarantor2 = (e) => {
    e.preventDefault();
    submitGuarantor2(formGuarantor2)
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "Submission successful! Your Application is now under review."
          );
          // btn.innerHTML = `Submit`;
          setNewStatus();
          window.scrollTo(0, 0);
        } else {
          toast.error("Submission not successful, try again!!!");
          // btn.innerHTML = `Submit`;
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!!! Please Try Again");
        // try {
        //   if (err.response) {
        //     toast.error(err.response);
        //     btn.innerHTML = `Submit`;
        //   } else {
        //     toast.error(
        //       "Something went wrong!!! Please make sure you have a good internet connection."
        //     );
        //     btn.innerHTML = `Submit`;
        //   }
        // } catch {
        //   toast.error("Something went wrong!!! Please Try Again");
        //   btn.innerHTML = `Submit`;
        // }
      });
  };

  return (
    <div>
      {/* {setBioData(userDetails)} */}
      <ToastContainer closeButton={false} />
      {/* ========================== WELCOME PHYSICAL ==================================  */}
      {/* {(active === "welcome" && modeSelection === true) && ( */}
      {active === "welcome" && (
        <div>
          <h3>Hello {fname} 👋</h3>
          <p>We offer both virtual live sessions and physical classes</p>

          <button
            className="bg-primary px-4 py-2"
            onClick={() => {
              setActive("form");
              setFormActive("bio-data");
            }}
          >
            Apply Now
          </button>

          {/* <p className="text1">Learn with us for 6 months</p> */}
          {/* <p>
            Grazac Academy offers a 6-month tech skills program with flexible
            payment options.
            We currently offer 9 tech courses, namely:
          </p> */}
          {/* <p>
            You can choose to learn virtually or physically with us. This
            program goes above and beyond to provide a superior educational
            experience, allowing students to develop a successful career in the
            tech industry through intensive training and internships.{" "}
          </p> */}
          {/* <p>Our curriculum covers 5 basic tech disciplines that includes;</p> */}
          {/* <ul>
            <li>Product Designing (UI/UX)</li>
            <li>Product Management</li>
            <li>
              Front end web development (HTML, CSS, and Javascript (React.js))
            </li>
            <li>Back end web development (Nodejs)</li>
            <li>Mobile Application Development (Flutter and Dart)</li>
            <li>Data Analysis</li>
            <li>Backend Web Development (Java with Spring & Springboot)</li>
            <li>Machine Learning with Python</li>
            <li>Blockchain with Solidity</li>
          </ul> */}
          {/* <h4>Pricing Plans</h4> */}
          {/* <p>There's an application fee of N7,500. Payment options include:</p> */}
          {/* <p>
            With you in mind, Grazac Academy offers Three (3) different payment
            options which include;
          </p> */}
          {/* <ul>
            <li>
              <strong>Full payment: </strong>Pay a one time payment of{" "}
              <strong> N650,000 </strong>and enjoy the full benefits of Grazac
              Academy for 6 months which covers a 4-months immersive training
              and 2-months internship program
            </li>
            <li>
              <strong>Instalment Payment: </strong>Pay N350,000 upfront and
              spread the rest at N175,000 per month for 2 months.
            </li>
            <li>
              <strong>Learn Now Pay Later: </strong>Enroll and participate in
              our training program without immediate financial commitment.
              Repayment begins immediately after securing employment
              post-program completion, as per the terms of the legally binding
              contract provided in our terms and conditions.
            </li>
          </ul> */}
          {/* <p>
            Learn now pay later candidates need two(2) guarantors and a
            non-refundable N50,000 legal fee if selected.
          </p> */}
          {/* <p>Please refer to the pricing page for more information</p> */}
          {/* <h4>Physical Learning</h4> */}
          {/* <h4>Duration</h4> */}
          {/* <ul>
            <li>6months (4months intensive training + 2months internship).</li>
          </ul> */}
          {/* <h4>Basic Criteria to be met</h4> */}
          {/* <p>
            Application fee is a non-refundable fee of 15,000 naira only the
            tuition fee is 500,000 naira only, we offer two basic forms of
            payment options and they are;
          </p> */}
          {/* <ul>
            <li>Candidates must be available (full-time) for 6 months.</li>
          
            <li>
              Note: If you have chosen the Learn Now, Pay Later payment plan,
              you will be required to pay a NGN 50,000 legal fee. The deadline
              for payment of the Legal feel is a week after you have been
              selected for the cohort.
            </li>
          </ul> */}

          {/* <div className="checkbox">
            <input type="checkbox" id="check" onClick={confirmCheck} />
            <p>
              I accept the{" "}
              <a href={termsandconds} download target="_blank">
                Terms ‌and‌ ‌Conditions‌
              </a>{" "}
              and{" "}
              <a href={pricingPolicy} download target="_blank">
                Pricing Policy
              </a>
            </p>
          </div> */}
          {/* <button
            className={!checkAct ? "disable-btn" : "button"}
            onClick={showForm}
          >
            Apply Now
          </button> */}
        </div>
      )}

      {/* ========================== WELCOME VIRTUAL =======================================  */}
      {/* {(active === "welcome" && modeSelection === false) && ( */}
      {false && modeSelection === false && (
        <div>
          <h3>Hello {fname}</h3>
          <p className="text1">Learn with us for 3 months</p>
          <p>
            Enroll for 3 months of virtual learning at Grazac Academy to build
            in-demand tech skills.
          </p>
          <p>Our curriculum covers 8 basic tech disciplines that include;</p>
          <ul>
            <li>Product Designing (UI/UX)</li>
            <li>Product Management</li>
            <li>
              Front end web development (HTML, CSS, and Javascript (React.js))
            </li>
            <li>Back end web development (Nodejs)</li>
            <li>Mobile Application Development (Flutter and Dart)</li>
            <li>Data Analysis</li>
            <li>Java</li>
            <li>Machine Learning with Python</li>
          </ul>
          <h4>Pricing Plans</h4>
          <p>
            With you in mind, Grazac Academy offers Two (2) different payment
            options which include;
          </p>
          <ul>
            <li>
              Full Payment: A Full (One time payment) of $120 and enjoy the full
              benefits the Academy is offering
            </li>
            <li>
              Installment Payment: $72 Upfront, a (60% of the total amount) and
              spread the remaining payments over the course of two (2) months.
            </li>
          </ul>
          <p>Join us for an accelerated tech education journey!</p>
          <h4>Physical Learning</h4>
          <h4>Duration</h4>
          <ul>
            <li>3 months</li>
          </ul>
          <p>Basic Criteria to be met</p>
          <ul>
            <li>
              Candidates must be available (full-time) for at least 3 months.
            </li>
            {/* <li>
              <strong>Learn now. Pay later (or ‘pay as you earn): </strong>You
              can also decide to learn now and start paying back when you get a
              job after your training. If you choose this, you would be required
              to pay a non-refundable legal fee of N50,000 immediately and after
              your training, you are expected to pay back the sum of 1500
              dollars (which would be an equivalent to the black dollar rate at
              the time that you start paying back) in 18 months after securing a
              job following our repayment procedure
            </li> */}
          </ul>

          {/* <h4>Virtual Learning</h4>
          <h5>Duration</h5>
          <ul>
            <li>2 months </li>
          </ul>
          <p>
            Application fee is a non-refundable fee of 15,000 naira only and the
            learning fee is 90,000 naira only, we offer only one form of payment
          </p>
          <ul>
            <li>
              <strong>Pay at once: </strong> You can only pay your tuition fee
              all at once with this plan
            </li>{" "}
          </ul> */}

          {/* <div className="checkbox">
            <input type="checkbox" id="check" onClick={confirmCheck} />
            <p>
              I accept the{" "}
              <a href={termsandconds} download target="_blank">
                Terms ‌and‌ ‌Conditions‌
              </a>{" "}
              and{" "}
              <a href={pricingPolicy} download target="_blank">
                Pricing Policy
              </a>
            </p>
          </div> */}
          {/* <button
            className={!checkAct ? "disable-btn" : "button"}
            onClick={showFormVirtual}
          >
            Apply Now
          </button> */}
        </div>
      )}

      {/* =======================  BIO-DATA PHYSICAL  ====================================  */}
      {active === "form" && (
        <div>
          <div>
            {formActive === "bio-data" && (
              <div>
                <div
                  className="dashboard-content-back"
                  onClick={() => {
                    setActive("welcome");
                    setCheckAct(false);
                  }}
                  // onClick={goBack}
                >
                  <img src={arrow} alt="back" />
                  <p>Back</p>
                </div>
                <h4 style={{ marginLeft: "20px" }}>Apply</h4>
                <div className="dashboard-content-form">
                  {/* <form onSubmit={showEduForm}> */}
                  {/* <form onSubmit={submitForm}> */}
                  <form
                    onSubmit={
                      bioData?.paymentOption === "fullPayment" ||
                      bioData?.paymentOption === "partPayment"
                        ? submitForm
                        : bioData?.paymentOption === "learn_now_pay_later"
                        ? submitFormPayLater
                        : ""
                    }
                  >
                    {/* <p>Step 1 of 2</p> */}
                    <p>BIO DATA</p>
                    <div className="dashboard-content-form-container">
                      <label>First Name</label>
                      <input
                        type="text"
                        required
                        name="firstName"
                        placeholder="FirstName"
                        value={bioData?.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Last Name</label>
                      <input
                        type="text"
                        required
                        name="lastName"
                        // placeholder="LastName"
                        value={bioData?.lastName}
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
                        value={bioData?.email}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        required
                        name="phone"
                        placeholder="Phone Number"
                        value={bioData?.phone}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="dashboard-content-form-container">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        required
                        name="dob"
                        placeholder="31/01/2021"
                        value={bioData.dob}
                        onChange={handleChange}
                      />
                    </div> */}
                    <div className="dashboard-content-form-container">
                      <label>Gender</label>
                      <select
                        required
                        name="gender"
                        value={bioData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    {/* <div className="dashboard-content-form-container">
                      <label>Marital Status</label>
                      <select
                        required
                        name="maritalStatus"
                        value={bioData.maritalStatus}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                      </select>
                    </div> */}

                    {/* kid status */}
                    {/* <div className="dashboard-content-form-container">
                      <label>Do you have Kids</label>
                      <select
                        required
                        name="haveKids"
                        value={bioData.haveKids}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div> */}
                    {/* age range */}
                    <div className="dashboard-content-form-container">
                      <label>Age Range</label>
                      <select
                        required
                        name="ageRange"
                        value={bioData.ageRange}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="18-24">18 - 24</option>
                        <option value="25-30">25 - 30</option>
                        <option value="31-35">31 - 35</option>
                        <option value="36 and above">36 and above</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Do you currently reside in Abeokuta?</label>
                      <select
                        required
                        name="resident_in_abeokuta"
                        value={bioData.resident_in_abeokuta}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        Would you prefer our virtual live sessions or physical
                        classes? We highly recommend physical classes. Virtaul
                        Live or Physical Classes
                      </label>
                      <select required name="method_of_learning">
                        <option value="Physical Class">Physical Class</option>
                        <option value="Virtual Class">Virtual Class</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        Will you be available physically for the next 6months?
                      </label>

                      <select
                        name="physically_available"
                        value={bioData.physically_available}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="dashboard-content-form-container">
                      <label>Preferred course at Grazac</label>

                      <select
                        required
                        name="preferred_course"
                        value={bioData.preferred_course}
                        onChange={handleChange}
                        className="cursor-pointer"
                      >
                        <option value="">Select Preferred Course</option>
                        <option
                          value="Product Marketing"
                          className="cursor-pointer"
                        >
                          Product Marketing
                        </option>
                        <option value="Frontend Web Development">
                          Front End Web Development (Reactjs)
                        </option>
                        <option value="Backend Web Development">
                          Back End Web Development(Nodejs)
                        </option>
                        <option value="Android Development">
                          Mobile Application Development (Flutter and Dart)
                        </option>
                        <option value="Quality Assurance">
                          Quality Assurance (QA)
                        </option>
                        <option value="Machine Learning">
                          Python For Machine Learning and AI
                        </option>
                        <option value="Cloud Engineering">
                          Cloud Engineering (AWS)
                        </option>
                        <option value="Data Analysis">Data Analysis</option>

                        <option value="Cyber Security">Cyber Security</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Preferred Payment Option</label>
                      <select
                        name="paymentOption"
                        value={bioData.paymentOption}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Payment Options</option>
                        <option value="fullPayment">Pay at once</option>
                        <option value="partPayment">Pay in instalment</option>
                        {/* <option value="learn_now_pay_later">
                          Learn now pay later
                        </option> */}
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        Why do you think you should be selected as a part of
                        this cohort?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="why_selected_for_cohort"
                        value={bioData.why_selected_for_cohort}
                        placeholder="Write your reasons here..."
                        onChange={(e) => {
                          const words = countWords(e.target.value);
                          if (words <= 350) {
                            handleChange(e);
                          }
                        }}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                          color:
                            countWords(bioData.why_selected_for_cohort) > 350
                              ? "red"
                              : "#666",
                        }}
                      >
                        {countWords(bioData.why_selected_for_cohort)} / 350
                        words
                        {countWords(bioData.why_selected_for_cohort) > 350 &&
                          "(Word limit reached)"}
                      </p>
                    </div>
                    {/* <div className="dashboard-content-form-container">
                      <label>State of residence</label>
                      <select
                        required
                        name="state"
                        value={bioData.state}
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        {nigerianStates.map(function (nigerianStates, index) {
                          return (
                            <option
                              value={
                                nigerianStates?.name || nigerianStates?.Name
                              }
                              key={index}
                            >
                              {nigerianStates?.name || nigerianStates?.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div> */}
                    {/* <div className="dashboard-content-form-container">
                      <label name="city" onChange={handleChange}>
                        Current city and Location
                      </label>
                      <input
                        type="text"
                        required
                        name="city"
                        value={bioData.city}
                        placeholder="Current City and Location"
                        onChange={handleChange}
                      />
                    </div> */}

                    {/* <div className="dashboard-content-form-container">
                      <label>
                        Means of Identification (NIN / Voter's Card / Driver’s
                        License / Green Passport)
                      </label>

                      <input
                        required
                        type="file"
                        name="id"
                        onChange={handleImage}
                      />

                      <p className="upload-text">
                        {bioData.id
                          ? `${bioData.id.name}`
                          : "Upload means of identification (max 2MB file size)"}
                      </p>
                      <img src={upload} alt="upload" className="upload-img" />
                    </div>   */}

                    {/* <button style={{ float: "right" }} type="submit">
                      Continue
                    </button> */}
                    <button
                      type="submit"
                      id="btn-physical-1"
                      disabled={isButtonSubmitted}
                      className={
                        bioData.paymentOption === "fullPayment" ||
                        bioData.paymentOption === "partPayment"
                          ? "button"
                          : "disable-btn"
                      }
                      // onClick={submitForm}
                    >
                      Continue
                    </button>
                    {/* <button
                      type="submit"
                      id="btn-physical-2"
                      disabled={isButtonSubmitted}
                      className={
                        bioData.paymentOption === "learn_now_pay_later"
                          ? "button"
                          : "disable-btn"
                      }
                      // onClick={submitFormPayLater}
                    >
                      Learn Now Pay Later
                    </button> */}
                  </form>
                </div>
              </div>
            )}

            {/* {formActive === "education" && (
              <div>
                <div
                  className="dashboard-content-back"
                  onClick={() => setFormActive("bio-data")}
                >
                  <img src={arrow} alt="back" />
                  <p>Back</p>
                </div>
                <h4 style={{ marginLeft: "20px" }}>Apply</h4>
                <div className="dashboard-content-form">
                  <form onSubmit={submitForm}>
                    <p>Step 2 of 2</p>
                    <p>Educational Background</p>
                    <div className="dashboard-content-form-container">
                      <label>Course of Study</label>
                      <input
                        type="text"
                        required
                        name="courseOfStudy"
                        value={education.courseOfStudy}
                        placeholder="Course of Study"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Grade Achieved</label>
                      <input
                        type="text"
                        required
                        name="grade"
                        value={education.grade}
                        placeholder="Grade Achieved"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Qualification</label>
                      <select
                        name="qualification"
                        value={education.qualification}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select Qualification</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="ND">ND</option>
                        <option value="HND">HND</option>
                        <option value="M.Sc">M.Sc</option>
                        <option value="PhD">PhD</option>
                        <option value="other">other</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Programming/Design Experience</label>
                      <select
                        name="experience"
                        value={education.experience}
                        required
                        onChange={handleChange}
                      >
                        <option value="">
                          Select Programming/Design Experience
                        </option>
                        <option value="No skill">No skill</option>
                        <option value="Basic skill">Basic skill</option>
                        <option value="Mid-level skill">Mid-level Skill</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Nysc Status</label>
                      <select
                        name="nyscStatus"
                        value={education.nyscStatus}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select Nysc Status</option>
                        <option value="Service">Completed</option>
                        <option value="Exemption">Exemption</option>
                        <option value="Use period to learn">
                          I will use my period of service to learn
                        </option>
                        <option value="nd_graduate">ND Graduate</option>
                        <option value="ud_graduate">Under Graduate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        Why do you think you should be selected as a part of
                        this cohort?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="reason"
                        value={education.reason}
                        placeholder="Write your reasons here..."
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        Will you be available physically or virtually for the
                        trainning?
                      </label>
                      <select
                        name="availability"
                        value={education.availability}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select Availability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        If selected, will you be able to pay the tuition fee?
                      </label>
                      <select
                        name="legalFee"
                        value={education.legalFee}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <button
                      style={{ float: "right", width: "50px" }}
                      type="submit"
                      id="actionBtn"
                    >
                      Submit
                    </button>
                    <button
                      className="dashboard-content-form-container-prev"
                      onClick={() => setFormActive("bio-data")}
                    >
                      Previous
                    </button>
                  </form>
                </div>
              </div>
            )} */}
          </div>
        </div>
      )}

      {/* ==================== BIO-DATA-VIRTUAL ========================   */}
      {active === "form" && (
        <div>
          <div>
            {formActive === "bio-data-virtual" && (
              <div>
                <div
                  className="dashboard-content-back"
                  onClick={() => {
                    setActive("welcome");
                    setCheckAct(false);
                  }}
                  // onClick={goBack}
                >
                  <img src={arrow} alt="back" />
                  <p>Back</p>
                </div>
                <h4 style={{ marginLeft: "20px" }}>Apply</h4>
                <div className="dashboard-content-form">
                  <form onSubmit={submitForm}>
                    {/* <p>Step 1 of 2</p> */}
                    <p>BIO DATA</p>
                    <div className="dashboard-content-form-container">
                      <label>First Name</label>
                      <input
                        type="text"
                        required
                        name="firstName"
                        placeholder="FirstName"
                        value={bioData?.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Last Name</label>
                      <input
                        type="text"
                        required
                        name="lastName"
                        // placeholder="LastName"
                        value={bioData.lastName}
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
                        value={bioData?.email}
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
                        value={bioData?.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Gender</label>
                      <select
                        required
                        name="gender"
                        value={bioData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Age Range</label>
                      <select
                        required
                        name="ageRange"
                        value={bioData.ageRange}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="18-24">18 - 24</option>
                        <option value="25-30">25 - 30</option>
                        <option value="31-35">31 - 35</option>
                        <option value="36 and above">36 and above</option>
                      </select>
                    </div>

                    <div className="dashboard-content-form-container">
                      <label>State of residence</label>
                      <select
                        required
                        name="state_of_residence"
                        value={bioData.state_of_residence}
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        {nigerianStates.map(function (nigerianStates, index) {
                          return (
                            <option
                              value={
                                nigerianStates?.name || nigerianStates?.Name
                              }
                              key={index}
                            >
                              {nigerianStates?.name || nigerianStates?.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label name="city" onChange={handleChange}>
                        Current city and Location
                      </label>
                      <input
                        type="text"
                        required
                        name="current_city_and_location"
                        value={bioData.current_city_and_location}
                        placeholder="Current City and Location"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>Preferred course at Grazac</label>

                      <select
                        required
                        name="preferred_course"
                        value={bioData.preferred_course}
                        onChange={handleChange}
                      >
                        <option value="">Select Preferred Course</option>
                        <option value="Product Design">Product Design</option>
                        <option value="Frontend Web Development">
                          Front-end Web Development
                        </option>
                        <option value="Backend Web Development">
                          Back-end Web Development
                        </option>
                        <option value="Android Development">
                          Mobile Application Development (Flutter and Dart)
                        </option>
                        <option value="Product Management">
                          Product Management
                        </option>
                        <option value="Machine Learning">
                          Machine Learning
                        </option>
                        <option value="Java">Java</option>
                        <option value="Data Analysis">Data Analysis</option>
                      </select>
                    </div>
                    <div className="dashboard-content-form-container">
                      <label>
                        Why do you think you should be selected as a part of
                        this cohort?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="why_selected_for_cohort"
                        value={bioData.why_selected_for_cohort}
                        placeholder="Write your reasons here..."
                        onChange={(e) => {
                          const words = countWords(e.target.value);
                          if (words <= 350) {
                            handleChange(e);
                          }
                        }}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                          color:
                            countWords(bioData.why_selected_for_cohort) > 350
                              ? "red"
                              : "#666",
                        }}
                      >
                        {countWords(bioData.why_selected_for_cohort)} / 350
                        words
                        {countWords(bioData.why_selected_for_cohort) > 350 &&
                          "(Word limit reached)"}
                      </p>
                    </div>

                    {/* <div className="dashboard-content-form-container">
                      <label>
                        Means of Identification (NIN / Voter's Card / Driver’s
                        License / Green Passport)
                      </label>

                      <input
                        required
                        type="file"
                        name="id"
                        onChange={handleImage}
                      />

                      <p className="upload-text">
                        {bioData.id
                          ? `${bioData.id.name}`
                          : "Upload means of identification (max 2MB file size)"}
                      </p>
                      <img src={upload} alt="upload" className="upload-img" />
                    </div>   */}

                    {/* <button style={{ float: "right" }} type="submit">
                      Continue
                    </button> */}
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================== LEARN NOW PAY LATER ==============================  */}
      {active === "lnpl" && (
        <div>
          <div>
            {formActive === "pay-later" && (
              <div>
                <div
                  className="dashboard-content-back"
                  onClick={() => {
                    setActive("welcome");
                    setCheckAct(false);
                  }}
                  // onClick={goBack}
                >
                  <img src={arrow} alt="back" />
                  <p>Back</p>
                </div>
                <h4 style={{ marginLeft: "20px" }}>Learn Now Pay Later</h4>
                <div className="dashboard-content-form">
                  {/* <form onSubmit={showEduForm}> */}
                  <div>
                    <p>
                      Learn Now Pay Later is a financial instrument to help you
                      participate in our training for FREE. You are expected to
                      start repaying the credit once you get a job at the end of
                      the program. It is governed by a legally binding contract.
                      The repayment procedure can be found in our terms and
                      conditions. This contract is bonded by the law firm.
                    </p>
                    <p>
                      Note that: This policy requires you bringing two
                      guarantors and making a one-time payment for legal fees
                      bonded by the law firm.
                    </p>
                    <p>
                      The legal fee cost is a total of 50,000 Naira. Kindly note
                      that this amount is not refundable under any circumstance.
                    </p>
                    <p>
                      The following are of utmost necessity when bringing your
                      guarantors;
                    </p>
                    <ul>
                      <li>
                        You must bring 2 guarantors who are over 18 years of
                        age.
                      </li>
                      <li>
                        You can also share our terms and conditions with your
                        guarantor to keep them informed.
                      </li>
                      <li>
                        Kindly seek the consent of your guarantors before
                        filling their details as we will contact them on your
                        behalf.
                      </li>
                      <li>
                        If your guarantor does not meet our eligibility status,
                        you'll be asked to get a replacement.
                      </li>
                      <li>
                        They must be residents within the locality of Abeokuta,
                        Ogun State.
                      </li>
                    </ul>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        id="check2"
                        onClick={confirmCheck2}
                      />
                      <p>
                        I accept the{" "}
                        <a href={termsandconds} download target="_blank">
                          Terms ‌and‌ ‌Conditions‌
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={!checkAct2 ? "disable-btn" : "button"}
                    onClick={showFormPayLayer}
                  >
                    Upload Guarantor Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================== GUARANTOR FORM 1 ==============================  */}
      {active === "lnpl" && (
        <div>
          <div>
            {formActive === "guarantor-form1" && (
              <div>
                <div
                  className="dashboard-content-back2"
                  onClick={() => {
                    setActive("welcome");
                    setCheckAct(false);
                  }}
                  // onClick={goBack}
                >
                  <img src={arrow} alt="back" />
                  <p>Back</p>
                </div>
                <h4 className="guarantor-form-label">Guarantor’s Form</h4>
                <div className="dashboard-content-form2">
                  {/* <form onSubmit={showEduForm}> */}
                  <div>
                    <form onSubmit={submitFormGuarantor1}>
                      {/* <p>Step 1 of 2</p> */}
                      {/* <p>BIO DATA</p> */}
                      <div className="dashboard-content-form-container">
                        <label>First Name</label>
                        <input
                          type="text"
                          required
                          name="first_name"
                          placeholder="First Name"
                          value={formGuarantor.first_name}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Last Name</label>
                        <input
                          type="text"
                          required
                          name="last_name"
                          placeholder="Last Name"
                          value={formGuarantor.last_name}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Email Address</label>
                        <input
                          type="email"
                          required
                          name="email_address"
                          placeholder="Email Address"
                          value={formGuarantor.email_address}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          required
                          name="phone_number"
                          placeholder="Phone Number"
                          value={formGuarantor.phone_number}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Gender</label>
                        <select
                          required
                          name="gender"
                          value={formGuarantor.gender}
                          onChange={handleChangeGuarantor}
                        >
                          <option value="">Select an option</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Office Address</label>
                        <input
                          type="text"
                          required
                          name="office_address"
                          placeholder="Office Address"
                          value={formGuarantor.office_address}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Home Address</label>
                        <input
                          type="text"
                          required
                          name="home_address"
                          placeholder="Home Address"
                          value={formGuarantor.home_address}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Profession</label>
                        <input
                          type="text"
                          required
                          name="profession"
                          placeholder="Enter Profession"
                          value={formGuarantor.profession}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Name of organization</label>
                        <input
                          type="text"
                          required
                          name="organization_name"
                          placeholder="Enter Organization"
                          value={formGuarantor.organization_name}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Phone number of employer</label>
                        <input
                          type="number"
                          required
                          name="employer_phone_number"
                          placeholder="Phone number of employer"
                          value={formGuarantor.employer_phone_number}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Email Address of Employer</label>
                        <input
                          type="email"
                          required
                          name="employer_email_address"
                          placeholder="Email Address of Employer"
                          value={formGuarantor.employer_email_address}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Relationship with the Guarantor</label>
                        <input
                          type="text"
                          required
                          name="relationship"
                          placeholder="Relationship with the Guarantor"
                          value={formGuarantor.relationship}
                          onChange={handleChangeGuarantor}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{
                          float: "right",
                          width: "213px",
                          marginRight: "0px",
                        }}
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================================== GUARANTOR FORM 2 ================================================ */}

      {active === "lnpl" && (
        <div>
          <div>
            {formActive === "guarantor-form2" && (
              <div>
                <div
                  className="dashboard-content-back2"
                  onClick={() => {
                    setActive("welcome");
                    setCheckAct(false);
                  }}
                  // onClick={goBack}
                >
                  <img src={arrow} alt="back" />
                  <p>Back</p>
                </div>
                <h4 className="guarantor-form-label">Guarantor’s Form</h4>
                <div className="dashboard-content-form2">
                  {/* <form onSubmit={showEduForm}> */}
                  <div>
                    <form onSubmit={submitFormGuarantor2}>
                      {/* <p>Step 1 of 2</p> */}
                      {/* <p>BIO DATA</p> */}
                      <div className="dashboard-content-form-container">
                        <label>First Name</label>
                        <input
                          type="text"
                          required
                          name="first_name"
                          placeholder="First Name"
                          value={formGuarantor2.first_name}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Last Name</label>
                        <input
                          type="text"
                          required
                          name="last_name"
                          placeholder="Last Name"
                          value={formGuarantor2.last_name}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Email Address</label>
                        <input
                          type="email"
                          required
                          name="email_address"
                          placeholder="Email Address"
                          value={formGuarantor2.email_address}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          required
                          name="phone_number"
                          placeholder="Phone Number"
                          value={formGuarantor2.phone_number}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Gender</label>
                        <select
                          required
                          name="gender"
                          value={formGuarantor2.gender}
                          onChange={handleChangeGuarantor2}
                        >
                          <option value="">Select an option</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Office Address</label>
                        <input
                          type="text"
                          required
                          name="office_address"
                          placeholder="Office Address"
                          value={formGuarantor2.office_address}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Home Address</label>
                        <input
                          type="text"
                          required
                          name="home_address"
                          placeholder="Home Address"
                          value={formGuarantor2.home_address}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Profession</label>
                        <input
                          type="text"
                          required
                          name="profession"
                          placeholder="Enter Profession"
                          value={formGuarantor2.profession}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Name of organization</label>
                        <input
                          type="text"
                          required
                          name="organization_name"
                          placeholder="Enter Organization"
                          value={formGuarantor2.organization_name}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Phone number of employer</label>
                        <input
                          type="number"
                          required
                          name="employer_phone_number"
                          placeholder="Phone number of employer"
                          value={formGuarantor2.employer_phone_number}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Email Address of Employer</label>
                        <input
                          type="email"
                          required
                          name="employer_email_address"
                          placeholder="Email Address of Employer"
                          value={formGuarantor2.employer_email_address}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <div className="dashboard-content-form-container">
                        <label>Relationship with the Guarantor</label>
                        <input
                          type="text"
                          required
                          name="relationship"
                          placeholder="Relationship with the Guarantor"
                          value={formGuarantor2.relationship}
                          onChange={handleChangeGuarantor2}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{
                          float: "right",
                          width: "213px",
                          marginRight: "0px",
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotSubmitted;
