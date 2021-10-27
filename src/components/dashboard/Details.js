import { useState } from "react";

function Details () {
    const [clicked, setClicked] = useState("bio");
    return(
        <div className="dashboard-content" >
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
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Last Name</h5>
                            <p>kwdshfkh</p>
                        </div>
                        <div className="dashboard-content-form-container">
                            <h5>Email Address</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Phone Number</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>Date of Birth</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Gender</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Preferred course at Grazac</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>State of residence</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Current city and Location</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Means of Identification (NIN/ Voter's Card)</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                    </form>
                </div>
            )}
            {clicked === "edu" && (
                <div className="dashboard-content-form">
                    <form>
                        <div className="dashboard-content-form-container">
                            <h5>Course of Study</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Grade Achieved</h5>
                            <p>kwdshfkh</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Qualifications</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Programming / Design Experience</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr />
                        <div className="dashboard-content-form-container">
                            <h5>NYSC Status</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Why do you think you should be selected as a part of this cohort?</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>Will you be physically available for the next 6 months?</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                        <hr/>
                        <div className="dashboard-content-form-container">
                            <h5>If selected, will you be able to pay the legal fees of #30,000?</h5>
                            <p>jhsjdfahkj</p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Details;