import { useState } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import OutsideClickHandler from 'react-outside-click-handler';

import arrow from "../../../images/svg/dashboard/arrow.svg"
import menu from "../../../images/svg/dashboard/menu.svg"


function Dashboard () {
    const [status, setStatus] = useState("not-submitted");
    const [bioData, setBioData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: ""
    })

    const handleChange = () => {
        console.log("handle")
    }

    const showNavMobile = () => {
        document.getElementById("sidebar").style.left = "0px"
    }
    const closeNavMobile = () => {
        if(window.innerWidth < 769){
            document.getElementById("sidebar").style.left = "-210px";
        }
    }

    return(
        <div>
            <OutsideClickHandler
                onOutsideClick={() => {
                    closeNavMobile();
                }}
                >
                <div className="layout_dashboard-sidebar" id="sidebar">
                    <Sidebar/>
                </div>
            </OutsideClickHandler>
            <div className="layout_dashboard-content">
                <div className="dashboard-nav">
                    <img src={menu} alt="menu" className="dashboard-nav-menu" onClick={showNavMobile} />
                    <div className="dashboard-nav-status">
                        <h3>Status: {status}</h3>
                        <div className={`dashboard-nav-status-dot ${status}`}></div>
                    </div>
                    <div className="dashboard-nav-user">
                        <div>
                            <h2>JD</h2>
                        </div>
                        <p>John Doe</p>
                    </div>
                </div>
                <div className="dashboard-content" >
                    {status === "not-submitted" && (
                        <div>
                            <h3>Hello John</h3>
                            <p className="text1">Learn with us for 5 months and pay no tuition till you’re hired!</p>
                            <p>Grazac Accelerator Program is a full time, 5-month training program focused on building in-demand tech skills at an accelerated pace. This program goes above and beyond to provide a superior educational experience, allowing students to develop a successful career in the tech industry through intensive training and internships.</p>
                            <p>Our curriculum covers 4 basic tech disciplines that includes;</p>
                            <ul>
                                <li>Product Designing (UI/UX)</li>
                                <li>Front end web development (HTML, CSS, and Javascript (React.js)</li>
                                <li>Back end web development (Nodejs)</li>
                                <li>Mobile Application Development (Flutter and Dart)</li>
                            </ul>
                            <h4>Pricing Plans</h4>
                            <p>Enrollment is free but for the tuition fee, we offer two basic forms of payment options and they are;</p>
                            <ul>
                                <li><strong>Pay as you Earn plan:</strong> This is a financial instrument to help you participate in our training for FREE. You are expected to start paying us back once you get a job at the end of the program. It is governed by a legally binding contract. This contract is bonded by the law firm.</li>
                                <li><strong>Pay at once:</strong> You can pay your tuition fee all at once with this plan.</li>
                            </ul>
                            <h4>Duration</h4>
                            <ul>
                                <li>5months ( 3months intensive training + 2months internship).</li>
                            </ul>
                            <h4>Basic Criteria to be met</h4>
                            <ul>
                                <li>Candidates must be a Graduate and available full-time for at least 6 months.</li>
                                <li>Note that you will be mandated to provide guarantors and pay the sum of #30,000 legal fee if selected for this cohort. This must be paid within a week after selection if you have chosen our Pay as you Earn option.</li>
                            </ul>
                            <div className="checkbox">
                                <input type="checkbox" />
                                <p>I accept the <a href="#">Terms ‌and‌ ‌Conditions‌</a></p>
                            </div>
                            <button>Apply Now</button>
                            {true  &&
                                <div>
                                    <div>
                                        <div className="dashboard-content-back" >
                                            <img src={arrow} alt="back" />
                                            <p>Back</p>
                                        </div>
                                        <h4 style={{marginLeft:"20px"}}>Apply</h4>
                                        {true && (
                                            <div className="dashboard-content-form">
                                                <form>
                                                    <p>Step 1 of 2</p>
                                                    <p>BIO DATA</p>
                                                    <div className="dashboard-content-form-container">
                                                        <label>First Name</label>
                                                        <input type="text" name="firstName" placeholder="FirstName" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Last Name</label>
                                                        <input type="text" name="lastName" placeholder="LastName" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Email Address</label>
                                                        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Phone Number</label>
                                                        <input type="number" name="phone" placeholder="Phone Number" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Date of Birth</label>
                                                        <input type="date" name="dob" placeholder="31/01/2021" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Gender</label>
                                                        <select>
                                                            <option>Select Gender</option>
                                                            <option>Male</option>
                                                            <option>Female</option>

                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Preferred course at Grazac</label>
                                                        <select>
                                                            <option>Select Preferred Course</option>
                                                            <option>Product Design</option>
                                                            <option>Front-end Web Development</option>
                                                            <option>Back-end Web Development</option>
                                                            <option>Android Development</option>
                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>State of residence</label>
                                                        <select>
                                                            <option>Select State</option>
                                                            <option>Ogun</option>
                                                            <option>Lagos</option>
                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Current city and Location</label>
                                                        <input type="text" name="city" placeholder="Current City and Location" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Means of Identification (NIN/ Voter's Card)</label>
                                                        <input type="file" />
                                                    </div>
                                                    <button style={{float:"right"}}>Continue</button>
                                                </form>
                                            </div>
                                        )}
                                        
                                        {false && (
                                            <div className="dashboard-content-form">
                                                <form>
                                                    <p>Step 2 of 2</p>
                                                    <p>Educational Background</p>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Course of Study</label>
                                                        <input type="text" name="course" placeholder="Course of Study" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Grade Achieved</label>
                                                        <input type="text" name="grade" placeholder="Grade Achieved" onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Qualification</label>
                                                        <select>
                                                            <option>Select Qualification</option>
                                                            <option>B.Sc</option>
                                                            <option>ND</option>
                                                            <option>HND</option>
                                                            <option>M.Sc</option>
                                                            <option>PhD</option>
                                                            <option>other</option>
                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Programming/Design Experience</label>
                                                        <select>
                                                            <option>Programming/Design Experience</option>
                                                            <option>No skill</option>
                                                            <option>Basic skill</option>
                                                            <option>Mid-level Skill</option>
                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Nysc Status</label>
                                                        <select>
                                                            <option>Select Nysc Status</option>
                                                            <option>Service</option>
                                                            <option>Exemption</option>
                                                            <option>I will use my period of service to learn</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Why do you think you should be selected as a part of this cohort?</label>
                                                        <textarea type="text" name="grade" placeholder="Write your reasons here..." onChange={handleChange} />
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>Will you be physically available for the next 6 months?</label>
                                                        <select>
                                                            <option>Select Availability</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                    <div className="dashboard-content-form-container">
                                                        <label>If selected, will you be able to pay the legal fees of #30,000?</label>
                                                        <select>
                                                            <option>Select</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                    <button style={{float:"right"}}>Submit</button>
                                                    <button className="dashboard-content-form-container-prev">Previous</button>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                    {status === "under-review" && (
                        <div>
                            <h3>Hello John</h3>
                            <p className="text1">Thanks for applying to Grazac Academy!</p>
                            <p>Your application has been submitted successfully and currently under review. Kindly, keep an eye on your email to get an update on your application status.</p>
                        </div>
                    )}
                    {status === "selected" && (
                        <div>
                            <h3>Hello John</h3>
                            <p className="text1">Congratulations!</p>
                            <p>Your application has been selected. Click on the button below to continue you admission process.</p>
                            <button>Continue admission process</button>
                        </div>
                    )}
                    {status === "admitted" && (
                        <div>
                            <h3>Hello John</h3>
                            <p className="text1">Congratulations!</p>
                            <p>You have selected as one of our student for 2022 Grazac Academy cohort. Kindly note that the class starts from February 2022 - June 2022. Click the button below to join the class discussion forum.</p>
                            <button>Join Class</button>
                        </div>
                    )}
                    {status === "rejected" && (
                        <div>
                            <h3>Hello John</h3>
                            <p>Thank you for applying to join Grazac Academy. Unfortunately, we won't be proceeding with your application at this time.</p>
                            <p>We want to thank you for the time and effort you spent on your application. We were particularly impressed at the breadth of your experience. However, we feel that other candidates are more suitable for the class.</p>
                            <p>While you were not successful on this cohort, we would encourage you to look out for the next cohort and apply again.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;