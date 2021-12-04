import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getDetails, getGuarantor } from "../../api/dashboard/data";

function Details () {
    const [clicked, setClicked] = useState("bio");
    const [userDetails, setUserDetails] = useState({});
    const [guarantorDetails, setGuarantorDetails] = useState([]);
    const userImage = `https://api.grazacacademy.com/uploads/${userDetails.means_of_identification}`

    useEffect(()=>{
        getDetails()
            .then((response) => response.data)
            .then((res) => {
                setUserDetails(res.data.result[0]);
                // console.log(res.data.result)
            })
            .catch((err) => {
                console.log(err)
                if(err.response){
                    toast.error(err.response);
                } else{
                    toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                }
            });
        getGuarantor()
            .then((response) => response.data)
            .then((res) => {
                setGuarantorDetails(res.data);
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                if(err.response){
                    toast.error(err.response);
                } else{
                    toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                }
            });
        
    }, [])

    return(
        <div className="dashboard-content" >
            <ToastContainer/>
            <h3 style={{marginLeft:"20px", marginBottom:"20px"}}>Details</h3>
            <div className="det-btn-container">
                <div  className="dashboard-content-detail">
                    <button className={clicked==="bio" ? "dashboard-content-detail-p active":"dashboard-content-detail-p"} onClick={()=>setClicked("bio")}>Bio Data</button>
                    <button className={clicked==="edu" ? "dashboard-content-detail-p active":"dashboard-content-detail-p"} onClick={()=>setClicked("edu")}>Educational Background</button>
                    {userDetails.payment_plan==="pay as you earn" && <button className={clicked==="gua" ? "dashboard-content-detail-p active":"dashboard-content-detail-p"} onClick={()=>setClicked("gua")}>Guarantor Data</button>}
                </div>
            </div>
            {clicked === "bio" && (
                <div className="dashboard-content-form">
                    <form>
                        <div className="dashboard-content-form-container">
                            <h5>First Name</h5>
                            <p>{userDetails?.firstName}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Last Name</h5>
                            <p>{userDetails?.lastName}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Email Address</h5>
                            <p>{userDetails?.email}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Phone Number</h5>
                            <p>{userDetails?.phoneNumber}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Date of Birth</h5>
                            <p>{userDetails?.dob?.slice(0,10)}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Gender</h5>
                            <p>{userDetails?.gender}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Preferred course at Grazac</h5>
                            <p>{userDetails?.preferred_course}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>State of residence</h5>
                            <p>{userDetails?.state_of_residence}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Current city and Location</h5>
                            <p>{userDetails?.current_city_and_location}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Means of Identification (NIN/ Voter's Card)</h5>
                            <img className="dashboard-content-form-container-image" src={userImage} alt={userDetails.means_of_identification} />
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
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Grade Achieved</h5>
                            <p>{userDetails?.grade_achieved}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Qualifications</h5>
                            <p>{userDetails?.qualifications}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Programming / Design Experience</h5>
                            <p>{userDetails?.programming_skills}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>NYSC Status</h5>
                            <p>{userDetails?.nysc_status}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Why do you think you should be selected as a part of this cohort?</h5>
                            <p>{userDetails?.why_selected_for_cohort}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Will you be physically available for the next 6 months?</h5>
                            <p>{userDetails?.will_you_pay_legal_fees}</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>If selected, will you be able to pay the legal fees of #30,000?</h5>
                            <p>{userDetails?.physically_available}</p>
                        </div>
                    </form>
                </div>
            )}
            {clicked === "gua" && (
                <div className="dashboard-content-form">
                    <form>
                        <h4>Guarantor details 1</h4>
                        <div className="dashboard-content-form-container">
                            <h5>First Name</h5>
                            <p>{guarantorDetails[0]?.firstname}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Last Name</h5>
                            <p>{guarantorDetails[0]?.lastname}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Email Address</h5>
                            <p>{guarantorDetails[0]?.email}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Phone Number</h5>
                            <p>{guarantorDetails[0]?.phone_number}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Gender</h5>
                            <p>{guarantorDetails[0]?.gender}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Office Address</h5>
                            <p>{guarantorDetails[0]?.office_address}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Home Address</h5>
                            <p>{guarantorDetails[0]?.home_address}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Profession</h5>
                            <p>{guarantorDetails[0]?.profession}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Name of Organization</h5>
                            <p>{guarantorDetails[0]?.name_of_organization}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Relationship with guarantor</h5>
                            <p>{guarantorDetails[0]?.name_of_employer}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Email Address of Employer</h5>
                            <p>{guarantorDetails[0]?.email_address_of_employer}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Phone Number of Employer</h5>
                            <p>{guarantorDetails[0]?.phone_number_of_employer}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Relationship with guarantor</h5>
                            <p>{guarantorDetails[0]?.relationship_with_the_guarantor}</p>
                        </div>
                        <h4 style={{marginTop:"40px"}}>Guarantor details 2</h4>
                        <div className="dashboard-content-form-container">
                            <h5>First Name</h5>
                            <p>{guarantorDetails[1]?.firstname}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Last Name</h5>
                            <p>{guarantorDetails[1]?.lastname}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Email Address</h5>
                            <p>{guarantorDetails[1]?.email}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Phone Number</h5>
                            <p>{guarantorDetails[1]?.phone_number}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Gender</h5>
                            <p>{guarantorDetails[1]?.gender}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Office Address</h5>
                            <p>{guarantorDetails[1]?.office_address}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Home Address</h5>
                            <p>{guarantorDetails[1]?.home_address}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Profession</h5>
                            <p>{guarantorDetails[1]?.profession}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Name of Organization</h5>
                            <p>{guarantorDetails[1]?.name_of_organization}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Relationship with guarantor</h5>
                            <p>{guarantorDetails[1]?.name_of_employer}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Email Address of Employer</h5>
                            <p>{guarantorDetails[1]?.email_address_of_employer}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Phone Number of Employer</h5>
                            <p>{guarantorDetails[1]?.phone_number_of_employer}</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Relationship with guarantor</h5>
                            <p>{guarantorDetails[1]?.relationship_with_the_guarantor}</p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Details;