import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { submitDetails } from "../../../api/dashboard/data";
import axios from "axios";

import arrow from "../../../images/svg/dashboard/arrow.svg";
import upload from "../../../images/svg/upload.svg";
import loader from "../../../images/svg/dashboard/loader.gif";
import termsandconds from "../../../content/TermsandCondition.pdf";


function NotSubmitted ({fname, lname, phone, email, setNewStatus}) {
    const [active, setActive] = useState("welcome");
    const [formActive, setFormActive] = useState("");
    const [userId, setUserId] = useState(0);
    const [checkAct, setCheckAct] = useState(false);
    const [nigerianStates, setNigerianStates] = useState([]);
    const [bioData, setBioData] = useState({
        firstName: `${fname}`,
        lastName: `${lname}`,
        email: `${email}`,
        phone: `${phone}`,
        dob: "",
        gender: "",
        course: "",
        state: "",
        city: "",
        id: null
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
    
    useEffect(()=>{
        try {
            let details = sessionStorage.getItem('user_details');
            setUserId(JSON.parse(details).id);  
        } catch (err) {
            console.log()
        }
        axios.get('https://nigerian-states-info.herokuapp.com/api/v1/states')
            .then(response => {
                setNigerianStates(response.data.data);
            });
    },[])
    const handleChange = (e) => {
        setBioData({
            ...bioData,
            [e.target.name]: e.target.value
        })
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        if (e.target.files[0].size > 2097152){
            toast.error("File too large! A maximum of 2MB is allowed.")
        } else{
            setBioData({
                ...bioData,
                id: e.target.files[0]
            })
        }
    }
    
    const confirmCheck = () => {
        var check = document.getElementById("check");
        if(check.checked){
            setCheckAct(true);
        } else{
            setCheckAct(false)
        }
    }

    const showForm = () => {
        // toast.info("Application for this cohort has ended. Please check back later!!!")
        var check = document.getElementById("check");
        if(check.checked){
            setActive("form");
            setFormActive("bio-data")
        } else {
            toast.warn("You need to accept the terms and conditions to proceed!")
        }
    }

    const showEduForm = (e) => {
        e.preventDefault();
        setFormActive("education")
    }

    const submitForm = (e) => {
        e.preventDefault();
        var btn = document.getElementById("actionBtn");
        btn.innerHTML = `<img src=${loader} width="20px" />`;
        var data  = new FormData();

        // data.append("firstName", bioData.firstName);
        // data.append("lastName", bioData.lastName);
        // data.append("email", bioData.email);
        // data.append("phoneNumber", bioData.phone);
        data.append("dob", bioData.dob);
        data.append("gender", bioData.gender);
        data.append("preferred_course", bioData.course);
        data.append("state_of_residence", bioData.state);
        data.append("current_city_and_location", bioData.city);
        data.append("means_of_identification", bioData.id);
        data.append("course_of_study", education.courseOfStudy);
        data.append("grade_achieved", education.grade);
        data.append("qualifications", education.qualification);
        data.append("programming_skills", education.experience);
        data.append("nysc_status", education.nyscStatus);
        data.append("why_selected_for_cohort", education.reason);
        data.append("physically_available", education.availability);
        data.append("will_you_pay_legal_fees", education.legalFee);
        
        submitDetails(data, userId)
            .then((response) => response.data)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    toast.success("Submission successful! Your Application is now under review.");
                    btn.innerHTML = `Submit`;
                    setNewStatus();
                } else {
                    toast.error("Submission not successful, try again!!!")
                    btn.innerHTML = `Submit`;
                }
            })
            .catch((err) => {
                console.log(err)
                if(err.response){
                    toast.error(err.response);
                    btn.innerHTML = `Submit`;
                } else{
                    toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                    btn.innerHTML = `Submit`;
                }
            });
        
    }

    return (
        <div>
            <ToastContainer closeButton={false}/>
            {active === "welcome" &&
                <div>
                    <h3>Hello {fname}</h3>
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
                        <input type="checkbox" id="check" onClick={confirmCheck} />
                        <p>I accept the <a href={termsandconds} download target="_blank">Terms ‌and‌ ‌Conditions‌</a></p>
                    </div>
                    <button className={!checkAct ? "disable-btn" : "button"} onClick={showForm}>Apply Now</button>
                </div>
            }
            {active === "form"  &&
                <div>
                    <div>
                        {formActive === "bio-data" && (
                            <div>
                                <div className="dashboard-content-back" onClick={()=>{setActive("welcome");setCheckAct(false);}} >
                                    <img src={arrow} alt="back" />
                                    <p>Back</p>
                                </div>
                                <h4 style={{marginLeft:"20px"}}>Apply</h4>
                                <div className="dashboard-content-form">
                                    <form onSubmit={showEduForm}>
                                        <p>Step 1 of 2</p>
                                        <p>BIO DATA</p>
                                        <div className="dashboard-content-form-container">
                                            <label>First Name</label>
                                            <input type="text" required name="firstName" placeholder="FirstName" value={bioData.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Last Name</label>
                                            <input type="text" required name="lastName" placeholder="LastName" value={bioData.lastName} onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Email Address</label>
                                            <input type="email" required name="email" placeholder="Email Address" value={email} onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Phone Number</label>
                                            <input type="number" required name="phone" placeholder="Phone Number" value={bioData.phone} onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Date of Birth</label>
                                            <input type="date" required name="dob" placeholder="31/01/2021" value={bioData.dob} onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Gender</label>
                                            <select name="gender" required value={bioData.gender} onChange={handleChange}>
                                                <option>Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>

                                            </select>
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Preferred course at Grazac</label>
                                            <select name="course" required value={bioData.course} onChange={handleChange}>
                                                <option>Select Preferred Course</option>
                                                <option value="Product Design">Product Design</option>
                                                <option value="Frontend Web Development">Front-end Web Development</option>
                                                <option value="Backend Web Development">Back-end Web Development</option>
                                                <option value="Android Development">Android Development</option>
                                            </select>
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>State of residence</label>
                                            <select name="state" required value={bioData.state} onChange={handleChange}>
                                                <option>Select State</option>
                                                {nigerianStates.map(function(nigerianStates, index){
                                                    return <option value={nigerianStates.Name} key={ index }>{nigerianStates.Name}</option>;
                                                })}
                                            </select>
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label name="city" onChange={handleChange}>Current city and Location</label>
                                            <input type="text" required name="city" value={bioData.city} placeholder="Current City and Location" onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Means of Identification (NIN/ Voter's Card)</label>
                                            <input type="file" required  name="id" onChange={handleImage}/>
                                            <p className="upload-text">{bioData.id ? `${bioData.id.name}` : "Upload means of identification (max 2MB file size)"}</p>
                                            <img src={upload} alt="upload" className="upload-img" />
                                        </div>
                                        <button style={{float:"right"}} type="submit">Continue</button>
                                    </form>
                                </div>
                            </div>
                        )}
                        
                        {formActive === "education" && (
                            <div>
                                <div className="dashboard-content-back" onClick={()=>setFormActive("bio-data")} >
                                    <img src={arrow} alt="back" />
                                    <p>Back</p>
                                </div>
                                <h4 style={{marginLeft:"20px"}}>Apply</h4>
                                <div className="dashboard-content-form">
                                    <form onSubmit={submitForm}>
                                        <p>Step 2 of 2</p>
                                        <p>Educational Background</p>
                                        <div className="dashboard-content-form-container">
                                            <label>Course of Study</label>
                                            <input type="text" required name="courseOfStudy" value={education.courseOfStudy} placeholder="Course of Study" onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Grade Achieved</label>
                                            <input type="text" required name="grade" value={education.grade} placeholder="Grade Achieved" onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Qualification</label>
                                            <select name="qualification" value={education.qualification} required onChange={handleChange}>
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
                                            <select name="experience" value={education.experience} required onChange={handleChange}>
                                                <option value="">Select Programming/Design Experience</option>
                                                <option value="No skill">No skill</option>
                                                <option value="Basic skill">Basic skill</option>
                                                <option value="Mid-level skill">Mid-level Skill</option>
                                            </select>
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Nysc Status</label>
                                            <select name="nyscStatus" value={education.nyscStatus} required onChange={handleChange}>
                                                <option value="">Select Nysc Status</option>
                                                <option value="Service">Completed</option>
                                                <option value="Exemption">Exemption</option>
                                                <option value="Use period to learn">I will use my period of service to learn</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Why do you think you should be selected as a part of this cohort?</label>
                                            <textarea type="text" required name="reason" value={education.reason} placeholder="Write your reasons here..." onChange={handleChange} />
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>Will you be physically available for the next 6 months?</label>
                                            <select name="availability" value={education.availability} required onChange={handleChange}>
                                                <option value="">Select Availability</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="dashboard-content-form-container">
                                            <label>If selected, will you be able to pay the legal fees of #30,000?</label>
                                            <select name="legalFee" value={education.legalFee} required onChange={handleChange}>
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <button style={{float:"right", width: "50px"}} type="submit" id="actionBtn">Submit</button>
                                        <button className="dashboard-content-form-container-prev" onClick={()=>setFormActive("bio-data")}>Previous</button>
                                    </form>
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