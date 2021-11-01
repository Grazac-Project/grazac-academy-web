import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getDetails } from "../../api/dashboard/data";

function Details () {
    const [clicked, setClicked] = useState("bio");
    const [userDetails, setUserDetails] = useState({});

    useEffect(()=>{
        getDetails()
            .then((response) => response.data)
            .then((res) => {
                setUserDetails(res.data.result[0]);
                console.log(res.data.result)
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
            <h3 style={{marginLeft:"20px", marginBottom:"30px"}}>Details</h3>
            <div  className="dashboard-content-detail">
                <p className={clicked==="bio" ? "dashboard-content-detail-p active":"dashboard-content-detail-p"} onClick={()=>setClicked("bio")}>Bio Data</p>
                <p className={clicked==="edu" ? "dashboard-content-detail-p active":"dashboard-content-detail-p"} onClick={()=>setClicked("edu")}>Educational Background</p>
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
                            <p>{userDetails?.means_of_identification}</p>
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
        </div>
    )
}

export default Details;