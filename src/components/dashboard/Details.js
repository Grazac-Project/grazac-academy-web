import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getGuarantor,
  getDetailsB,
  editDetails,
} from "../../api/dashboard/data";
import axios from "axios";

// import Loader from "../Loader";

import loader from "../../images/loader-purple.gif";
import btn_loader from "../../images/svg/dashboard/loader.gif";
function Details() {
  const [userId, setUserId] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState("bio");
  const [userDetails, setUserDetails] = useState({});
  const [guarantorDetails_1, setGuarantorDetails_1] = useState([]);
  const [guarantorDetails_2, setGuarantorDetails_2] = useState([]);
  const [guarantorId_1, setGuarantorId_1] = useState(0);
  const [guarantorId_2, setGuarantorId_2] = useState(0);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    try {
      let details = sessionStorage.getItem("user_details");
      setUserId(JSON.parse(details).id);
    } catch (err) {
      console.log(err);
    }
    // setBioData(userDetails)
  }, []);
  useEffect(() => {

    //remove the submit button if there is data for agerange have kids and marital status
    {
      !userDetails?.ageRange &&
      !userDetails?.haveKids &&
      !userDetails?.maritalStatus
        ? setSubmitted(true)
        : setSubmitted(false);
    }
  }, []);

  const submitData = (e) => {
    e.preventDefault();
    var btn = document.getElementById("actionBtn");
    btn.innerHTML = `<img src=${btn_loader} width="20px" />`;

    var data = new FormData();

    data.append("maritalStatus", userDetails?.maritalStatus);
    data.append("haveKids", userDetails?.haveKids);
    data.append("ageRange", userDetails?.ageRange);

    data.append("dob", userDetails.dob);
    
    data.append("gender", userDetails.gender);
    data.append("preferred_course", userDetails.preferred_course);
    data.append("state_of_residence", userDetails.state_of_residence);
    data.append("current_city_and_location", userDetails.current_city_and_location);
    // data.append("means_of_identification", bioData.id);


    

    editDetails(data, userId)
      .then((response) => response.data)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          toast.success("Submission successful!");
          btn.innerHTML = `Submit`;

          setSubmitted(false);

          window.location = "/dashboard";
        } else {
          toast.error("Submission not successful, try again!!!");
          btn.innerHTML = `Submit`;
        }
      })

      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data === "File size limit has been reached") {
          toast.error("File size exceeded for Means of Identification Field");
        }
        if (err.response) {
          toast.error(err.response);
          btn.innerHTML = `Submit`;
        } else {
          toast.error(
            "Something went wrong!!! Please make sure you have a good internet connection."
          );
          btn.innerHTML = `Submit`;
        }
      });
  };

  const userImage = `https://api.grazacacademy.com/uploads/${userDetails.means_of_identification}`;
  // console.log(guarantorDetails_1,userDetails)

  const handleChange_1 = (e) => {
    console.log(guarantorDetails_1[0]);

    let guarantorData = [...guarantorDetails_1][0];
    guarantorData[e.target.name] = e.target.value;

    setGuarantorDetails_1([guarantorData]);
    setGuarantorId_1(guarantorDetails_1[0].id);

    console.log(guarantorData, guarantorId_1, guarantorDetails_1[0].id);
  };

  const handleChange_2 = (e) => {
    console.log(guarantorDetails_2[0]);

    let guarantorData = [...guarantorDetails_2][0];
    guarantorData[e.target.name] = e.target.value;

    setGuarantorDetails_2([guarantorData]);
    // setGuarantorId_1(guarantorDetails_1[0]?.id);
    setGuarantorId_2(guarantorDetails_2[0].id);
    console.log(guarantorDetails_2[0].id);

    console.log(guarantorData, guarantorId_2);
  };



  const handleDataChange = (e) => {
    if (
      e.target.value != "" ||
      e.target.value != undefined ||
      !e.target.value
    ) {
      let userData = { ...userDetails };
      console.log(userData);

      setUserDetails({
        ...userData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const SubmitGuarantorChange_1 = (e) => {
    e.preventDefault();

    const data = guarantorDetails_1;
    console.log(data);
    const final_data = [];
    const new_data_1 = {};

    for (let index = 0; index < data.length; index++) {
      new_data_1["firstname"] = data[0]["firstname"];
      new_data_1["lastname"] = data[0]["lastname"];
      new_data_1["email"] = data[0]["email"];
      new_data_1["phone_number"] = data[0]["phone_number"];
      new_data_1["gender"] = data[0]["gender"];
      new_data_1["office_address"] = data[0]["office_address"];
      new_data_1["home_address"] = data[0]["home_address"];
      new_data_1["profession"] = data[0]["profession"];
      new_data_1["name_of_organization"] = data[0]["name_of_organization"];
      new_data_1["name_of_employer"] = data[0]["name_of_employer"];
      new_data_1["email_address_of_employer"] =
        data[0]["email_address_of_employer"];
      new_data_1["phone_number_of_employer"] =
        data[0]["phone_number_of_employer"];
      new_data_1["relationship_with_the_guarantor"] =
        data[0]["relationship_with_the_guarantor"];
      new_data_1["user_id"] = data[0]["user_id"];
      console.log("end");
    }

    axios
      .put(
        `https://api.grazacacademy.com/api/v1/user/edit-gurantor/${guarantorId_1}`,
        new_data_1
      )
      .then(function (response) {
        console.log(guarantorId_1);
        console.log(response);
        toast.success("saved successfully");
      })
      .catch((res) => {
        console.log(res.data);
      });

    // editGuarantor(final_data, guaID)
    // .then((res) =>{
    //   console.log(res)
    //   toast.success(res.data)}
    // )
    // .catch((res) => {
    //   toast.error(res.response)
    //   console.log(res)
    // })
  };

  const SubmitGuarantorChange_2 = (e) => {
    e.preventDefault();

    const data = guarantorDetails_2;
    const new_data_1 = {};

    for (let index = 0; index < data.length; index++) {
      new_data_1["firstname"] = data[0]["firstname"];
      new_data_1["lastname"] = data[0]["lastname"];
      new_data_1["email"] = data[0]["email"];
      new_data_1["phone_number"] = data[0]["phone_number"];
      new_data_1["gender"] = data[0]["gender"];
      new_data_1["office_address"] = data[0]["office_address"];
      new_data_1["home_address"] = data[0]["home_address"];
      new_data_1["profession"] = data[0]["profession"];
      new_data_1["name_of_organization"] = data[0]["name_of_organization"];
      new_data_1["name_of_employer"] = data[0]["name_of_employer"];
      new_data_1["email_address_of_employer"] =
        data[0]["email_address_of_employer"];
      new_data_1["phone_number_of_employer"] =
        data[0]["phone_number_of_employer"];
      new_data_1["relationship_with_the_guarantor"] =
        data[0]["relationship_with_the_guarantor"];
      new_data_1["user_id"] = data[0]["user_id"];
      console.log("end");
    }
    console.log(new_data_1);
    console.log(guarantorId_2);
    setIsLoading(true);
    axios
      .put(
        `https://api.grazacacademy.com/api/v1/user/edit-gurantor/${guarantorId_2}`,
        new_data_1
      )
      .then(function (response) {
        console.log(response);
        toast.success("saving");
        setTimeout(() => {
          toast.success("saved Successfully");
        }, 5000);
        toast.success("saved Successfully");
        setIsLoading(false);
      })
      .catch((res) => {
        console.log(res.data);
      });

    // editGuarantor(final_data, guaID)
    // .then((res) =>{
    //   console.log(res)
    //   toast.success(res.data)}
    // )
    // .catch((res) => {
    //   toast.error(res.response)
    //   console.log(res)
    // })
  };

  const [tempData, setTemData] = useState(null)
  useEffect(() => {
    getDetailsB()
      //   .then((res) => console.log(res.data['data']['results'][0]))
      .then((res) => {
        setIsLoading(true);
        setUserDetails(res.data["data"]["results"][0]);
        setTemData(res.data["data"]["results"][0]);
        setIsLoading(false);   
        // console.log(res.data['data']['results'][0])
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error(err.response);
        } else {
          toast.error(
            "Something went wrong!!! Please make sure you have a good internet connection."
          );
        }
      });

    getGuarantor()
      .then((response) => response.data)
      .then((res) => {
        setGuarantorDetails_1([res.data[0]]);
        setGuarantorDetails_2([res.data[1]]);
        // setGuarantorId(res.data[0]["id"]);
        // console.log(guarantorDetails);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error(err.response);
        } else {
          toast.error(
            "Something went wrong!!! Please make sure you have a good internet connection."
          );
        }
      });
  }, [true]);

  return (
    <div className="dashboard-content">
      {Object.keys(userDetails).length === 0 ? (
        <div>
          <img
            style={{ marginLeft: "30rem", marginTop: "20rem" }}
            src={loader}
          />
        </div>
      ) : (
        <div>
          <ToastContainer />
          <h3 style={{ marginLeft: "20px", marginBottom: "20px" }}>Details</h3>
          <div className="det-btn-container">
            <div className="dashboard-content-detail">
              <button
                className={
                  clicked === "bio"
                    ? "dashboard-content-detail-p active"
                    : "dashboard-content-detail-p"
                }
                onClick={() => setClicked("bio")}
              >
                Bio Data
              </button>
              <button
                className={
                  clicked === "edu"
                    ? "dashboard-content-detail-p active"
                    : "dashboard-content-detail-p"
                }
                onClick={() => setClicked("edu")}
              >
                Educational Background
              </button>

              {userDetails.payment_plan === "pay as you earn" && (
                <button
                  className={
                    clicked === "gua"
                      ? "dashboard-content-detail-p active"
                      : "dashboard-content-detail-p"
                  }
                  onClick={() => setClicked("gua")}
                >
                  Guarantor Data
                </button>
              )}
            </div>
          </div>

          {clicked === "bio" && (
            <div className="dashboard-content-form">
              <form onSubmit={(e) => submitData(e)}>
                <div className="dashboard-content-form-container">
                  <h5>First Name</h5>
                  <p>{userDetails?.firstName}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Last Name</h5>
                  <p>{userDetails?.lastName}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Email Address</h5>
                  <p>{userDetails?.email}</p>
                </div>

                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Phone Number</h5>
                  <p>{userDetails?.phoneNumber}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Date of Birth</h5>
                  <p>{userDetails?.dob?.slice(0, 10)}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Gender</h5>
                  <p>{userDetails?.gender}</p>
                </div>

                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Preferred course at Grazac</h5>
                  <p>{userDetails?.preferred_course}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>State of residence</h5>
                  <p>{userDetails?.state_of_residence}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Current city and Location</h5>
                  <p>{userDetails?.current_city_and_location}</p>
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Means of Identification (NIN/ Voter's Card)</h5>
                  <img
                    className="dashboard-content-form-container-image"
                    src={userImage}
                    alt={userDetails.means_of_identification}
                  />
                </div>

                {(!userDetails?.ageRange ||
                  !userDetails?.haveKids ||
                  !userDetails?.maritalStatus) && (
                  <>
                    <hr />
                    <h3>Edit Data</h3>
                  </>
                )}

                <hr />
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
                </div>

                <hr />
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
                </div>

                <hr />

                <div className="dashboard-content-form-container">
                  <h5>Age Range</h5>
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
                  )}
                {!(tempData?.ageRange && tempData?.maritalStatus && tempData?.haveKids) && (
                 <button id="actionBtn" type="submit">
                    Save
                   </button>
                )}

                  {/* {(!userDetails?.ageRange ||
                    !userDetails?.haveKids ||
                    !userDetails?.maritalStatus ||
                    submitted) && (
                    <button id="actionBtn" type="submit">
                      Save
                    </button>
                  )} */}
                </div>
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
              <form
                onSubmit={(e) => {
                  SubmitGuarantorChange_1(e);
                  setGuarantorId_1(guarantorDetails_1[0]?.id);
                }}
              >
                <h4>Guarantor details 1</h4>
                <div
                  className="dashboard-content-form-container"
                  id={guarantorDetails_1[0]?.id}
                >
                  <h5>First Name</h5>

                  <input
                    type="text"
                    name="firstname"
                    value={guarantorDetails_1[0]?.firstname}
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
                    value={guarantorDetails_1[0]?.lastname}
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
                    value={guarantorDetails_1[0]?.email}
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
                    value={guarantorDetails_1[0]?.phone_number}
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
                    value={guarantorDetails_1[0]?.gender}
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
                    value={guarantorDetails_1[0]?.office_address}
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
                    value={guarantorDetails_1[0]?.home_address}
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
                    value={guarantorDetails_1[0]?.profession}
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
                    value={guarantorDetails_1[0]?.name_of_organization}
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Relationship with guarantor</h5>
                  {/* <p>{guarantorDetails_1[0]?.name_of_employer}</p> */}
                  <input
                    type="text"
                    name="name_of_employer"
                    value={guarantorDetails_1[0]?.name_of_employer}
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
                    value={guarantorDetails_1[0]?.email_address_of_employer}
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
                    value={guarantorDetails_1[0]?.phone_number_of_employer}
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
                      guarantorDetails_1[0]?.relationship_with_the_guarantor
                    }
                    onChange={(e) => handleChange_1(e)}
                  />
                </div>

                <button type="submit">Save</button>
              </form>

              <form
                onSubmit={(e) => {
                  SubmitGuarantorChange_2(e);
                  setGuarantorId_2(guarantorDetails_2[0]?.id);
                }}
              >
                <h4 style={{ marginTop: "40px" }}>Guarantor details 2</h4>
                <div
                  className="dashboard-content-form-container"
                  id={guarantorDetails_2[0]?.id}
                  key={guarantorDetails_2[0]?.id}
                >
                  <h5>First Name</h5>
                  <input
                    type="text"
                    name="firstname"
                    value={guarantorDetails_2[0]?.firstname}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                {/* {console.log(guarantorDetails_2[0])} */}
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Last Name</h5>
                  {/* <p>{guarantorDetails_2?.lastname}</p> */}
                  <input
                    type="text"
                    name="lastname"
                    value={guarantorDetails_2[0]?.lastname}
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
                    value={guarantorDetails_2[0]?.email}
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
                    value={guarantorDetails_2[0]?.phone_number}
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
                    value={guarantorDetails_2[0]?.gender}
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
                    value={guarantorDetails_2[0]?.office_address}
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
                    value={guarantorDetails_2[0]?.home_address}
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
                    value={guarantorDetails_2[0]?.profession}
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
                    value={guarantorDetails_2[0]?.name_of_organization}
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>
                <hr />
                <div className="dashboard-content-form-container">
                  <h5>Relationship with guarantor</h5>
                  {/* <p>{guarantorDetails_2?.name_of_employer}</p> */}
                  <input
                    type="text"
                    name="name_of_employer"
                    value={guarantorDetails_2[0]?.name_of_employer}
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
                    value={guarantorDetails_2[0]?.email_address_of_employer}
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
                    value={guarantorDetails_2[0]?.phone_number_of_employer}
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
                      guarantorDetails_2[0]?.relationship_with_the_guarantor
                    }
                    onChange={(e) => handleChange_2(e)}
                  />
                </div>

                {/*  */}
                {/*  */}
                <button type="submit">Save</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
