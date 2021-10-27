import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import arrow from "../../../images/svg/dashboard/arrow.svg"


function NotSubmitted () {
    const [active, setActive] = useState("welcome");
    const [formActive, setFormActive] = useState("");
    const [bioData, setBioData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        course: "",
        state: "",
        city: "",
        id: ""
    });
    const [education, setEducation] = useState({
        courseOfStudy: "",
        grade: "",
        qualification: "",
        experience: "",
        nyscStatus: "",
        reason: "",
        availability: "",
        legalFee: ""
    });
    
    const handleChange = (e) => {
        setBioData({
            ...bioData,
            [e.target.name]: e.target.value
        })
        console.log(bioData)
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        })
        console.log(education)
    }

    const showForm = () => {
        var check = document.getElementById("check");
        if(check.checked){
            setActive("form");
            setFormActive("bio-data")
        } else {
            toast.warn("You need to accept the terms and conditions to proceed!")
        }
    }

    const showEduForm = () => {
        setFormActive("education")
    }

    const submitForm = () => {
        //do form submit
    }

    return (
        <div>
            <ToastContainer closeButton={false}/>
            {active === "welcome" &&
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
                        <input type="checkbox" id="check" />
                        <p>I accept the <a href="#">Terms ‌and‌ ‌Conditions‌</a></p>
                    </div>
                    <button className="button" onClick={showForm}>Apply Now</button>
                </div>
            }
            {active === "form"  &&
                <div>
                    <div>
                        <div className="dashboard-content-back" onClick={()=>setActive("welcome")} >
                            <img src={arrow} alt="back" />
                            <p>Back</p>
                        </div>
                        <h4 style={{marginLeft:"20px"}}>Apply</h4>
                        {formActive === "bio-data" && (
                            <div className="dashboard-content-form">
                                <div>
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
                                        <select name="gender" onChange={handleChange}>
                                            <option>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>

                                        </select>
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Preferred course at Grazac</label>
                                        <select name="course" onChange={handleChange}>
                                            <option>Select Preferred Course</option>
                                            <option value="Product Design">Product Design</option>
                                            <option value="Frontend Web Development">Front-end Web Development</option>
                                            <option value="Backend Web Development">Back-end Web Development</option>
                                            <option value="Android Development">Android Development</option>
                                        </select>
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>State of residence</label>
                                        <select name="state" onChange={handleChange}>
                                            <option>Select State</option>
                                            <option value="Ogun">Ogun</option>
                                            <option value="Lagos">Lagos</option>
                                        </select>
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label name="city" onChange={handleChange}>Current city and Location</label>
                                        <input type="text" name="city" placeholder="Current City and Location" onChange={handleChange} />
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Means of Identification (NIN/ Voter's Card)</label>
                                        <input type="file"  name="id" onChange={handleChange}/>
                                    </div>
                                    <button style={{float:"right"}} onClick={showEduForm}>Continue</button>
                                </div>
                            </div>
                        )}
                        
                        {formActive === "education" && (
                            <div className="dashboard-content-form">
                                <div>
                                    <p>Step 2 of 2</p>
                                    <p>Educational Background</p>
                                    <div className="dashboard-content-form-container">
                                        <label>Course of Study</label>
                                        <input type="text" name="courseOfStudy" placeholder="Course of Study" onChange={handleChange} />
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Grade Achieved</label>
                                        <input type="text" name="grade" placeholder="Grade Achieved" onChange={handleChange} />
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Qualification</label>
                                        <select name="qualification" onChange={handleChange}>
                                            <option>Select Qualification</option>
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
                                        <select name="experience" onChange={handleChange}>
                                            <option>Select Programming/Design Experience</option>
                                            <option value="No skill">No skill</option>
                                            <option value="Basic skill">Basic skill</option>
                                            <option value="Mid-level skill">Mid-level Skill</option>
                                        </select>
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Nysc Status</label>
                                        <select name="nyscStatus" onChange={handleChange}>
                                            <option>Select Nysc Status</option>
                                            <option value="Service">Service</option>
                                            <option value="Exemption">Exemption</option>
                                            <option value="Use period to learn">I will use my period of service to learn</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Why do you think you should be selected as a part of this cohort?</label>
                                        <textarea type="text" name="reason" placeholder="Write your reasons here..." onChange={handleChange} />
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>Will you be physically available for the next 6 months?</label>
                                        <select name="availability" onChange={handleChange}>
                                            <option>Select Availability</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="dashboard-content-form-container">
                                        <label>If selected, will you be able to pay the legal fees of #30,000?</label>
                                        <select name="legalFee" onChange={handleChange}>
                                            <option>Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <button style={{float:"right"}} onClick={submitForm}>Submit</button>
                                    <button className="dashboard-content-form-container-prev" onClick={()=>setFormActive("bio-data")}>Previous</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default NotSubmitted;