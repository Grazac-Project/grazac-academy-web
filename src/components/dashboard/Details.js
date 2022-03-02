import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getDetails,
  getGuarantor,
  getDetailsB,
  editGuarantor,
} from "../../api/dashboard/data";

import axios from "axios";

function Details() {
  const [clicked, setClicked] = useState("bio");
  const [userDetails, setUserDetails] = useState({});
  const [guarantorDetails, setGuarantorDetails] = useState([]);
  const [guarantorId, setGuarantorId] = useState(0);
  const userImage = `https://api.grazacacademy.com/uploads/${userDetails.means_of_identification}`;
  //   const userImage = "";
  // console.log(userDetails)

  const handleChange = (e) => {
    let guarantorData = [...guarantorDetails][0];
    guarantorData[e.target.name] = e.target.value;
    // console.log(guarantoraData);
    setGuarantorDetails([guarantorData]);
  };

  const SubmitGuarantorChange = () => {
    axios
      .post(
        `https://admin-api.grazacacademy.com/api/v1/user/edit-gurantor/${guarantorId}`,
        { guarantorDetails }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch((res) => {
        console.log(res.data);
      });

    console.log(guarantorDetails);

    editGuarantor(guarantorDetails, guarantorId).then((res) =>
      console.log(res.data)
    );
  };
  useEffect(() => {
    getDetailsB()
      //   .then((res) => console.log(res.data['data']['results'][0]))
      .then((res) => {
        setUserDetails(res.data["data"]["results"][0]);
        // console.log(userDetails)
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
        setGuarantorDetails(res.data);
        // console.log()
        setGuarantorId(res.data[0]["id"]);
        // console.log(guarantorDetails)
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
  }, []);

  return (
    <div className="dashboard-content">
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

          {userDetails.payment_plan !== "pay as you earn" && (
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
          <form>
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
              <h5>Will you be physically available for the next 6 months?</h5>
              <p>{userDetails?.will_you_pay_legal_fees}</p>
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>
                If selected, will you be able to pay the legal fees of #30,000?
              </h5>
              <p>{userDetails?.physically_available}</p>
            </div>
          </form>
        </div>
      )}
      {clicked === "gua" && (
        <div className="dashboard-content-form">
          <form onSubmit={SubmitGuarantorChange()}>
            <h4>Guarantor details 1</h4>
            <div className="dashboard-content-form-container">
              <h5>First Name</h5>
              {/* <p>{guarantorDetails[0]?.firstname}</p> */}
              <input
                type="text"
                name="firstname"
                value={guarantorDetails[0]?.firstname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Last Name</h5>
              {/* <p>{guarantorDetails[0]?.lastname}</p> */}
              <input
                type="text"
                name="lastname"
                value={guarantorDetails[0]?.lastname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Email Address</h5>
              {/* <p>{guarantorDetails[0]?.email}</p> */}
              <input
                type="text"
                name="email"
                value={guarantorDetails[0]?.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Phone Number</h5>
              {/* <p>{guarantorDetails[0]?.phone_number}</p> */}
              <input
                type="text"
                name="phone_number"
                value={guarantorDetails[0]?.phone_number}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Gender</h5>
              {/* <p>{guarantorDetails[0]?.gender}</p> */}
              <input
                type="text"
                name="gender"
                value={guarantorDetails[0]?.gender}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Office Address</h5>
              {/* <p>{guarantorDetails[0]?.office_address}</p> */}
              <input
                type="text"
                name="office_address"
                value={guarantorDetails[0]?.office_address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Home Address</h5>
              {/* <p>{guarantorDetails[0]?.home_address}</p> */}
              <input
                type="text"
                name="home_address"
                value={guarantorDetails[0]?.home_address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Profession</h5>
              {/* <p>{guarantorDetails[0]?.profession}</p> */}
              <input
                type="text"
                name="profession"
                value={guarantorDetails[0]?.profession}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Name of Organization</h5>
              {/* <p>{guarantorDetails[0]?.name_of_organization}</p> */}
              <input
                type="text"
                name="name_of_organization"
                value={guarantorDetails[0]?.name_of_organization}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Relationship with guarantor</h5>
              {/* <p>{guarantorDetails[0]?.name_of_employer}</p> */}
              <input
                type="text"
                name="name_of_employer"
                value={guarantorDetails[0]?.name_of_employer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Email Address of Employer</h5>
              {/* <p>{guarantorDetails[0]?.email_address_of_employer}</p> */}
              <input
                type="text"
                name="email_address_of_employer"
                value={guarantorDetails[0]?.email_address_of_employer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Phone Number of Employer</h5>
              {/* <p>{guarantorDetails[0]?.phone_number_of_employer}</p> */}
              <input
                type="text"
                name="phone_number_of_employer"
                value={guarantorDetails[0]?.phone_number_of_employer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Relationship with guarantor</h5>
              {/* <p>{guarantorDetails[0]?.relationship_with_the_guarantor}</p> */}
              <input
                type="text"
                name="relationship_with_the_guarantor"
                value={guarantorDetails[0]?.relationship_with_the_guarantor}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <h4 style={{ marginTop: "40px" }}>Guarantor details 2</h4>

            {/*  */}
            {/*  */}

            <div className="dashboard-content-form-container">
              <h5>First Name</h5>
              {/* <p>{guarantorDetails[0]?.firstname}</p> */}
              <input
                type="text"
                name="firstname"
                value={guarantorDetails[1]?.firstname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Last Name</h5>
              {/* <p>{guarantorDetails[1]?.lastname}</p> */}
              <input
                type="text"
                name="lastname"
                value={guarantorDetails[1]?.lastname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Email Address</h5>
              {/* <p>{guarantorDetails[1]?.email}</p> */}
              <input
                type="text"
                name="email"
                value={guarantorDetails[1]?.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Phone Number</h5>
              {/* <p>{guarantorDetails[1]?.phone_number}</p> */}
              <input
                type="text"
                name="phone_number"
                value={guarantorDetails[1]?.phone_number}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Gender</h5>
              {/* <p>{guarantorDetails[1]?.gender}</p> */}
              <input
                type="text"
                name="gender"
                value={guarantorDetails[1]?.gender}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Office Address</h5>
              {/* <p>{guarantorDetails[1]?.office_address}</p> */}
              <input
                type="text"
                name="office_address"
                value={guarantorDetails[1]?.office_address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Home Address</h5>
              {/* <p>{guarantorDetails[1]?.home_address}</p> */}
              <input
                type="text"
                name="home_address"
                value={guarantorDetails[1]?.home_address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Profession</h5>
              {/* <p>{guarantorDetails[1]?.profession}</p> */}
              <input
                type="text"
                name="profession"
                value={guarantorDetails[1]?.profession}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Name of Organization</h5>
              {/* <p>{guarantorDetails[1]?.name_of_organization}</p> */}
              <input
                type="text"
                name="name_of_organization"
                value={guarantorDetails[1]?.name_of_organization}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Relationship with guarantor</h5>
              {/* <p>{guarantorDetails[1]?.name_of_employer}</p> */}
              <input
                type="text"
                name="name_of_employer"
                value={guarantorDetails[1]?.name_of_employer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Email Address of Employer</h5>
              {/* <p>{guarantorDetails[1]?.email_address_of_employer}</p> */}
              <input
                type="text"
                name="email_address_of_employer"
                value={guarantorDetails[1]?.email_address_of_employer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Phone Number of Employer</h5>
              {/* <p>{guarantorDetails[1]?.phone_number_of_employer}</p> */}
              <input
                type="text"
                name="phone_number_of_employer"
                value={guarantorDetails[1]?.phone_number_of_employer}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <hr />
            <div className="dashboard-content-form-container">
              <h5>Relationship with guarantor</h5>
              {/* <p>{guarantorDetails[1]?.relationship_with_the_guarantor}</p> */}
              <input
                type="text"
                name="relationship_with_the_guarantor"
                value={guarantorDetails[1]?.relationship_with_the_guarantor}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/*  */}
            {/*  */}
            <button type="submit" onSubmit={(e) => e.preventDefault()}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Details;
