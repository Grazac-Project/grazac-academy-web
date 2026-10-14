import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getGuarantor,
  getDetailsC,
  editDetails,
  editGuarantor,
} from "../../api/dashboard/data";

// import Loader from "../Loader";

import loader from "../../images/loader-purple.gif";
import btn_loader from "../../images/svg/dashboard/loader.gif";
function Details() {
  const [userId, setUserId] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [profileError, setProfileError] = useState("");
  const [guarantorsLoading, setGuarantorsLoading] = useState(false);
  const [guarantorsError, setGuarantorsError] = useState("");
  const [savingGuarantor, setSavingGuarantor] = useState({});
  const guarantorWrites = useRef({});
  const savedGuarantors = useRef({});
  const [userDetails, setUserDetails] = useState({});
  const [guarantorDetails_1, setGuarantorDetails_1] = useState([]);
  const [guarantorDetails_2, setGuarantorDetails_2] = useState([]);
  const [guarantorError_1, setGuarantorError_1] = useState("");
  const [guarantorError_2, setGuarantorError_2] = useState("");

  const [clicked, setClicked] = useState("bio");
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    try {
      let details = sessionStorage.getItem("user_details");
      let fee = sessionStorage.getItem("applicationFee");
      setUserId(JSON.parse(details).id);
      setAccepted(fee);

      if (JSON.parse(details).applicationFee) {
        setClicked("bio");
      }
    } catch (err) {}
    // setBioData(userDetails)
  }, []);


  const submitData = (e) => {
    e.preventDefault();
    var btn = document.getElementById("actionBtn");
    btn.innerHTML = `<img src=${btn_loader} width="20px" />`;

    var data = new FormData();

    data.append("maritalStatus", userDetails?.maritalStatus);
    data.append("haveKids", userDetails?.haveKids);
    data.append("ageRange", userDetails?.ageRange);

    data.append("dob", userDetails?.dob);

    data.append("gender", userDetails?.gender);
    data.append("preferred_course", userDetails?.preferred_course);
    data.append("state_of_residence", userDetails?.state_of_residence);
    data.append(
      "current_city_and_location",
      userDetails?.current_city_and_location
    );
    // data.append("means_of_identification", bioData.id);

    editDetails(data, userId)
      .then((response) => response.data)
      .then((res) => {
        if (Number(res.status) === 201) {
          toast.success("Submission successful!");
          btn.innerHTML = `Submit`;


          window.location = "/dashboard";
        } else {
          toast.error("Submission not successful, try again!!!");
          btn.innerHTML = `Submit`;
        }
      })

      .catch((err) => {
        if (err.response.data === "File size limit has been reached") {
          toast.error("File size exceeded for Means of Identification Field");
        }
        if (err.response) {
          toast.error(err.response);
          btn.innerHTML = `Submit`;
        }
        // else {
        //   toast.error(
        //     "Something went wrong!!! Please make sure you have a good internet connection."
        //   );
        btn.innerHTML = `Submit`;
        // }
      });
  };

  // const userImage = `https://api.grazacacademy.com/uploads/${userDetails.means_of_identification}`;

  const handleChange_1 = (e) => {
    const { name, value } = e.target;
    setGuarantorDetails_1((records) =>
      records.length ? [{ ...records[0], [name]: value }] : records
    );
  };

  const handleChange_2 = (e) => {
    const { name, value } = e.target;
    setGuarantorDetails_2((records) =>
      records.length ? [{ ...records[0], [name]: value }] : records
    );
  };


  const saveGuarantor = async (e, record, slot, setError) => {
    e.preventDefault();
    if (guarantorWrites.current[slot]) return;
    if (!record?.id) {
      setError("Guarantor information not found. Reload guarantor data before saving.");
      return;
    }
    const saved = savedGuarantors.current[slot];
    if (!["phone_number", "gender", "office_address", "home_address", "profession"]
      .some((field) => record[field] !== saved?.[field])) {
      setError("No changes to phone number, gender, addresses, or profession to save. The current service does not save changes to the other fields.");
      return;
    }

    const { id, ...data } = record;
    guarantorWrites.current[slot] = true;
    setSavingGuarantor((pending) => ({ ...pending, [slot]: true }));
    setError("");
    try {
      const response = await editGuarantor(data, id);
      toast.success(response.data?.message || "Saved successfully");
      savedGuarantors.current[slot] = { ...record };
    } catch (err) {
      const message = err.response?.data?.message ||
        "Unable to save guarantor details. Please try again.";
      setError(message);
      toast.error(message);
      if (err.response?.status === 401) window.location = "/login";
    } finally {
      guarantorWrites.current[slot] = false;
      setSavingGuarantor((pending) => ({ ...pending, [slot]: false }));
    }
  };

  const handleWhatToShow = (value) => {
    if (accepted) {
      setClicked(value);
    }
  };

  const loadGuarantors = useCallback(async () => {
    setGuarantorsLoading(true);
    setGuarantorsError("");
    setGuarantorDetails_1([]);
    setGuarantorDetails_2([]);
    setGuarantorError_1("");
    setGuarantorError_2("");
    try {
      const response = await getGuarantor();
      const records = response.data?.data;
      if (!Array.isArray(records)) {
        throw new Error("Unable to read guarantor data. Please try again.");
      }
      const loadSlot = (slot, setRecords, setError) => {
        const matches = records.filter((record) => record.guarantor_2 === slot);
        if (matches.length !== 1 || !matches[0]._id) {
          setError(matches.length > 1
            ? "Multiple records were returned for this guarantor. Unable to select a record safely."
            : "Guarantor information not found.");
          return;
        }
        const record = matches[0];
        const details = {
          id: record._id,
          firstname: record.first_name ?? "",
          lastname: record.last_name ?? "",
          email: record.email_address ?? "",
          phone_number: record.phone_number ?? "",
          gender: record.gender ?? "",
          office_address: record.office_address ?? "",
          home_address: record.home_address ?? "",
          profession: record.profession ?? "",
          name_of_organization: record.organization_name ?? "",
          name_of_employer: "",
          email_address_of_employer: record.employer_email_address ?? "",
          phone_number_of_employer: record.employer_phone_number ?? "",
          relationship_with_the_guarantor: record.relationship ?? "",
          user_id: record.userId,
        };
        savedGuarantors.current[slot] = details;
        setRecords([details]);
      };
      loadSlot("guarantor1", setGuarantorDetails_1, setGuarantorError_1);
      loadSlot("guarantor2", setGuarantorDetails_2, setGuarantorError_2);
    } catch (err) {
      const message = err.response?.data?.message ||
        err.message || "Unable to load guarantor data. Please try again.";
      setGuarantorsError(message);
      toast.error(message);
      if (err.response?.status === 401) window.location = "/login";
    } finally {
      setGuarantorsLoading(false);
    }
  }, []);

  const loadProfile = useCallback(async () => {
    setIsLoading(true);
    setProfileError("");
    try {
      const response = await getDetailsC();
      const profile = response.data?.data?.result;
      if (!profile || typeof profile !== "object" || Array.isArray(profile)) {
        throw new Error("Unable to read your profile. Please try again.");
      }
      setUserDetails(profile);
      if (profile.payment_plan === "pay as you earn") loadGuarantors();
    } catch (err) {
      const message = err.response?.data?.message ||
        err.message || "Unable to load your profile. Please try again.";
      setProfileError(message);
      toast.error(message);
      if (err.response?.status === 401) window.location = "/login";
    } finally {
      setIsLoading(false);
    }
  }, [loadGuarantors]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return (
    <div className="dashboard-content">
      <ToastContainer />
      {isLoading ? (
        <div>
          <img
            style={{ marginLeft: "30rem", marginTop: "20rem" }}
            src={loader}
            alt="Loading profile"
          />
        </div>
      ) : profileError ? (
        <div role="alert">
          <p>{profileError}</p>
          <button type="button" onClick={loadProfile}>Try again</button>
        </div>
      ) : (
        <div>
          <h3 style={{ marginLeft: "20px", marginBottom: "20px" }}>Details</h3>
          <div className="det-btn-container">
            <div className="dashboard-content-detail">
              <button
                className={
                  clicked === "bio"
                    ? "dashboard-content-detail-p active w-1/5"
                    : "dashboard-content-detail-p"
                }
                onClick={() => handleWhatToShow("bio")}
              >
                Bio Data
              </button>
              {/* <button
                className={
                  clicked === "edu"
                    ? "dashboard-content-detail-p active"
                    : "dashboard-content-detail-p"
                }
                onClick={() => handleWhatToShow("edu")}
              >
                Educational Background
              </button> */}

              {userDetails.payment_plan === "pay as you earn" && (
                <button
                  className={
                    clicked === "gua"
                      ? "dashboard-content-detail-p active"
                      : "dashboard-content-detail-p"
                  }
                  onClick={() => handleWhatToShow("gua")}
                >
                  Guarantor Data
                </button>
              )}
            </div>
          </div>

          {clicked === "bio" && (
            <div className="dashboard-content-form">
              <form onSubmit={(e) => submitData(e)}>
                <div className="dashboard-content-form-container mb-4">
                  <h5>First Name</h5>
                  <p>{userDetails?.firstName}</p>
                  <hr />
                </div>

                <div className="dashboard-content-form-container mb-4">
                  <h5 className="">Last Name</h5>
                  <p>{userDetails?.lastName}</p>
                  <hr />
                </div>

                <div className="dashboard-content-form-container mb-4">
                  <h5>Email Address</h5>
                  <p>{userDetails?.email}</p>
                  <hr />
                </div>

                <div className="dashboard-content-form-container mb-4">
                  <h5>Phone Number</h5>
                  <p>{userDetails?.phoneNumber}</p>
                  <hr />
                </div>

                {/* <div className="dashboard-content-form-container">
                  <h5>Date of Birth</h5>
                  <p>{userDetails?.dob?.slice(0, 10)}</p>
                </div>
                <hr /> */}
                <div className="dashboard-content-form-container mb-4">
                  <h5>Gender</h5>
                  <p>{userDetails?.gender}</p>
                  <hr />
                </div>

                <div className="dashboard-content-form-container">
                  <h5>Preferred course at Grazac</h5>
                  <p>{userDetails?.preferred_course}</p>
                </div>
                {/* <hr /> */}
                {/* <div className="dashboard-content-form-container">
                  <h5>State of residence</h5>
                  <p>{userDetails?.state_of_residence}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Current city and Location</h5>
                  <p>{userDetails?.current_city_and_location}</p>
                </div> */}
                {/* <hr /> */}
                {/* <div className="dashboard-content-form-container">
                  <h5>Means of Identification (NIN/ Voter's Card)</h5>
                  <img
                    className="dashboard-content-form-container-image"
                    src={userImage}
                    alt={userDetails.means_of_identification}
                  />
                </div> */}

                {/* {(!userDetails?.ageRange ||
                  !userDetails?.haveKids ||
                  !userDetails?.maritalStatus) && (
                  <>
                    <hr />
                    <h3>Edit Data</h3>
                  </>
                )} */}

                {/* <hr />
                <div className="dashboard-content-form-container">
                  <h5>Marital Status</h5>
                  {userDetails?.maritalStatus ? (
                    <p>{userDetails?.maritalStatus}</p>
                  ) : (
                    <select
                      name="maritalStatus"
                      required
                      value={userDetails?.maritalStatus}
                      onChange={handleDataChange}
                    >
                      <option value="">Select an option</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </select>
                  )}
                </div> */}

                {/* <hr />
                <div className="dashboard-content-form-container">
                  <h5>Have Kids?</h5>
                  {userDetails?.haveKids ? (
                    <p>{userDetails?.haveKids}</p>
                  ) : (
                    <select
                      name="haveKids"
                      required
                      value={userDetails?.haveKids}
                      onChange={handleDataChange}
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  )}
                </div> */}

                <hr />

                {/* <div className="dashboard-content-form-container"> */}
                {/* <h5>Age Range</h5>
                  {userDetails?.ageRange ? (
                    <p>{userDetails?.ageRange}</p>
                  ) : (
                    <select
                      name="ageRange"
                      required
                      value={userDetails?.ageRange}
                      onChange={handleDataChange}
                    >
                      <option value="">Select an option</option>
                      <option value="18 - 24">18 - 24</option>
                      <option value="25 - 30">25 - 30</option>
                      <option value="31 - 35">31 - 35</option>
                      <option value="36 and above">36 and above</option>
                    </select>
                  )} */}
                {/* {!(
                    tempData?.ageRange &&
                    tempData?.maritalStatus &&
                    tempData?.haveKids
                  ) && (
                    <button id="actionBtn" type="submit">
                      Save
                    </button>
                  )} */}

                {/* {(!userDetails?.ageRange ||
                    !userDetails?.haveKids ||
                    !userDetails?.maritalStatus ||
                    submitted) && (
                    <button id="actionBtn" type="submit">
                      Save
                    </button>
                  )} */}
                {/* </div> */}
              </form>
            </div>
          )}

          {clicked === "edu" && (
            <div className="dashboard-content-form">
              <form>
                <div className="dashboard-content-form-container">
                  <h5>Course of Study</h5>
                  <p>{userDetails?.course_of_study}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Grade Achieved</h5>
                  <p>{userDetails?.grade_achieved}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Qualifications</h5>
                  <p>{userDetails?.qualifications}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Programming / Design Experience</h5>
                  <p>{userDetails?.programming_skills}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>NYSC Status</h5>
                  <p>{userDetails?.nysc_status}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>
                    Why do you think you should be selected as a part of this
                    cohort?
                  </h5>
                  <p>{userDetails?.why_selected_for_cohort}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>
                    Will you be physically available for the next 6 months?
                  </h5>
                  <p>{userDetails?.will_you_pay_legal_fees}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>
                    If selected, will you be able to pay the legal fees of
                    #50,000?
                  </h5>
                  <p>{userDetails?.physically_available}</p>
                </div>
              </form>
            </div>
          )}
          {clicked === "gua" && (
            <div className="dashboard-content-form">
              <p>
                The current service saves phone number, gender, office address,
                home address, and profession only. Changes to the other fields
                are not saved.
              </p>
              {guarantorsLoading && <p role="status">Loading guarantor data...</p>}
              {guarantorsError && <p role="alert">{guarantorsError}</p>}
              <button
                type="button"
                onClick={loadGuarantors}
                disabled={guarantorsLoading || savingGuarantor.guarantor1 || savingGuarantor.guarantor2}
              >
                Reload guarantor data
              </button>
              <form
                id="guarantor-editor-1"
                onSubmit={(e) => saveGuarantor(e, guarantorDetails_1[0], "guarantor1", setGuarantorError_1)}
              >
                <h4>Guarantor details 1</h4>
                {guarantorError_1 && <p role="alert">{guarantorError_1}</p>}
                <fieldset disabled={guarantorsLoading || !guarantorDetails_1[0]?.id || savingGuarantor.guarantor1}>
                <div
                  className="dashboard-content-form-container"
                  id={guarantorDetails_1[0]?.id}
                >
                  <h5>First Name</h5>

                  <input
                    type="text"
                    name="firstname"
                    value={guarantorDetails_1[0]?.firstname ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Last Name</h5>
                  {/* <p>{guarantorDetails_1[0]?.lastname}</p> */}
                  <input
                    type="text"
                    name="lastname"
                    value={guarantorDetails_1[0]?.lastname ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Email Address</h5>
                  {/* <p>{guarantorDetails_1[0]?.email}</p> */}
                  <input
                    type="text"
                    name="email"
                    value={guarantorDetails_1[0]?.email ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Phone Number</h5>
                  {/* <p>{guarantorDetails_1[0]?.phone_number}</p> */}
                  <input
                    type="text"
                    name="phone_number"
                    value={guarantorDetails_1[0]?.phone_number ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Gender</h5>
                  {/* <p>{guarantorDetails_1[0]?.gender}</p> */}
                  <input
                    type="text"
                    name="gender"
                    value={guarantorDetails_1[0]?.gender ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Office Address</h5>
                  {/* <p>{guarantorDetails_1[0]?.office_address}</p> */}
                  <input
                    type="text"
                    name="office_address"
                    value={guarantorDetails_1[0]?.office_address ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Home Address</h5>
                  {/* <p>{guarantorDetails_1[0]?.home_address}</p> */}
                  <input
                    type="text"
                    name="home_address"
                    value={guarantorDetails_1[0]?.home_address ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Profession</h5>
                  {/* <p>{guarantorDetails_1[0]?.profession}</p> */}
                  <input
                    type="text"
                    name="profession"
                    value={guarantorDetails_1[0]?.profession ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Name of Organization</h5>
                  {/* <p>{guarantorDetails_1[0]?.name_of_organization}</p> */}
                  <input
                    type="text"
                    name="name_of_organization"
                    value={guarantorDetails_1[0]?.name_of_organization ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Name of Employer</h5>
                  {/* <p>{guarantorDetails_1[0]?.name_of_employer}</p> */}
                  <input
                    type="text"
                    name="name_of_employer"
                    value={guarantorDetails_1[0]?.name_of_employer ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Email Address of Employer</h5>
                  {/* <p>{guarantorDetails_1[0]?.email_address_of_employer}</p> */}
                  <input
                    type="text"
                    name="email_address_of_employer"
                    value={guarantorDetails_1[0]?.email_address_of_employer ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Phone Number of Employer</h5>
                  {/* <p>{guarantorDetails_1[0]?.phone_number_of_employer}</p> */}
                  <input
                    type="text"
                    name="phone_number_of_employer"
                    value={guarantorDetails_1[0]?.phone_number_of_employer ?? ""}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Relationship with guarantor</h5>
                  {/* <p>{guarantorDetails_1[0]?.relationship_with_the_guarantor}</p> */}
                  <input
                    type="text"
                    name="relationship_with_the_guarantor"
                    value={
                      guarantorDetails_1[0]?.relationship_with_the_guarantor ?? ""
                    }
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>

                <button type="submit">{savingGuarantor.guarantor1 ? "Saving..." : "Save"}</button>
                </fieldset>
              </form>

              <form
                id="guarantor-editor-2"
                onSubmit={(e) => saveGuarantor(e, guarantorDetails_2[0], "guarantor2", setGuarantorError_2)}
              >
                <h4 style={{ marginTop: "40px" }}>Guarantor details 2</h4>
                {guarantorError_2 && <p role="alert">{guarantorError_2}</p>}
                <fieldset disabled={guarantorsLoading || !guarantorDetails_2[0]?.id || savingGuarantor.guarantor2}>
                <div
                  className="dashboard-content-form-container"
                  id={guarantorDetails_2[0]?.id}
                  key={guarantorDetails_2[0]?.id}
                >
                  <h5>First Name</h5>
                  <input
                    type="text"
                    name="firstname"
                    value={guarantorDetails_2[0]?.firstname ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Last Name</h5>
                  {/* <p>{guarantorDetails_2?.lastname}</p> */}
                  <input
                    type="text"
                    name="lastname"
                    value={guarantorDetails_2[0]?.lastname ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Email Address</h5>
                  {/* <p>{guarantorDetails_2?.email}</p> */}
                  <input
                    type="text"
                    name="email"
                    value={guarantorDetails_2[0]?.email ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Phone Number</h5>
                  {/* <p>{guarantorDetails_2?.phone_number}</p> */}
                  <input
                    type="text"
                    name="phone_number"
                    value={guarantorDetails_2[0]?.phone_number ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Gender</h5>
                  {/* <p>{guarantorDetails_2?.gender}</p> */}
                  <input
                    type="text"
                    name="gender"
                    value={guarantorDetails_2[0]?.gender ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Office Address</h5>
                  {/* <p>{guarantorDetails_2?.office_address}</p> */}
                  <input
                    type="text"
                    name="office_address"
                    value={guarantorDetails_2[0]?.office_address ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Home Address</h5>
                  {/* <p>{guarantorDetails_2?.home_address}</p> */}
                  <input
                    type="text"
                    name="home_address"
                    value={guarantorDetails_2[0]?.home_address ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Profession</h5>
                  {/* <p>{guarantorDetails_2?.profession}</p> */}
                  <input
                    type="text"
                    name="profession"
                    value={guarantorDetails_2[0]?.profession ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Name of Organization</h5>
                  {/* <p>{guarantorDetails_2?.name_of_organization}</p> */}
                  <input
                    type="text"
                    name="name_of_organization"
                    value={guarantorDetails_2[0]?.name_of_organization ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Name of Employer</h5>
                  {/* <p>{guarantorDetails_2?.name_of_employer}</p> */}
                  <input
                    type="text"
                    name="name_of_employer"
                    value={guarantorDetails_2[0]?.name_of_employer ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Email Address of Employer</h5>
                  {/* <p>{guarantorDetails_2?.email_address_of_employer}</p> */}
                  <input
                    type="text"
                    name="email_address_of_employer"
                    value={guarantorDetails_2[0]?.email_address_of_employer ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Phone Number of Employer</h5>
                  {/* <p>{guarantorDetails_2?.phone_number_of_employer}</p> */}
                  <input
                    type="text"
                    name="phone_number_of_employer"
                    value={guarantorDetails_2[0]?.phone_number_of_employer ?? ""}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Relationship with guarantor</h5>
                  {/* <p>{guarantorDetails_2?.relationship_with_the_guarantor}</p> */}
                  <input
                    type="text"
                    name="relationship_with_the_guarantor"
                    value={
                      guarantorDetails_2[0]?.relationship_with_the_guarantor ?? ""
                    }
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>

                {/*  */}
                {/*  */}
                <button type="submit">{savingGuarantor.guarantor2 ? "Saving..." : "Save"}</button>
                </fieldset>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
