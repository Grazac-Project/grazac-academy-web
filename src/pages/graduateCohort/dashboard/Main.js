import { useState } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Details from "../../../components/dashboard/Details";
import NotSubmitted from "../../../components/dashboard/not-submitted";
import UnderReview from "../../../components/dashboard/UnderReview";
import PaymentReceived from "../../../components/dashboard/selected/PaymentReceived";
import Admitted from "../../../components/dashboard/Admitted";
import Rejected from "../../../components/dashboard/Rejected";
import OutsideClickHandler from 'react-outside-click-handler';
import { ToastContainer, toast } from 'react-toastify';

import arrow from "../../../images/svg/dashboard/arrow.svg";
import menu from "../../../images/svg/dashboard/menu.svg";
import cancel from "../../../images/svg/dashboard/cancel.svg";


function Dashboard () {
    const [status, setStatus] = useState("selected");
    const [selectStatus, setSelectStatus] = useState("congrats");
    const [selectStatus2, setSelectStatus2] = useState("");
    const [sidebarClick, setSidebarClick] =  useState("dashboard");
    const [payOpt, setPayOpt] = useState("");
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

    const makePayment = () => {
        if(payOpt==="part"){
            setSelectStatus2("");
            setSelectStatus("pay-as-you-earn");
        } else if (payOpt==="full"){
            setSelectStatus2("");
            //do payment, if succesful
            setSelectStatus("paid");
        } else {
            toast.info("You need to select a payment option to continue!");
        }
    }

    const showForm = () => {
        if(document.getElementById("mark").checked){
            setSelectStatus("form")
        }else{
            toast.info("You need to accept our terms and conditions to continue");
        }
    }

    return(
        <div>
            <ToastContainer closeButton={false} />
            <OutsideClickHandler
                onOutsideClick={() => {
                    closeNavMobile();
                }}
                >
                <div className="layout_dashboard-sidebar" id="sidebar">
                    <Sidebar clicked={sidebarClick} clickedDashboard={setSidebarClick} clickedDetails={setSidebarClick} />
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
                { sidebarClick==="dashboard" &&
                    <div className="dashboard-content" >
                        {status === "not-submitted" && (
                            <NotSubmitted />
                        )}
                        {status === "under-review" && (
                            <UnderReview/>
                        )}
                        {status === "selected" && (
                            <div>
                                { selectStatus === "congrats" &&
                                    <div>
                                        <h3>Hello John</h3>
                                        <p className="text1">Congratulations!</p>
                                        <p>Your application has been selected. Click on the button below to continue you admission process.</p>
                                        <button onClick={()=>setSelectStatus2("pay")}>Continue admission process</button>
                                    </div>
                                }
                                {selectStatus2 === "pay" &&
                                    <div className="dashboard-content-modal">
                                        <div className="dashboard-content-modal-backdrop"></div>
                                        <div className="dashboard-content-modal-container">
                                            <div className="dashboard-content-modal-main">
                                                <div className="dashboard-content-modal-main-text">
                                                    <h4>Choose Payment Option</h4>
                                                    <img src={cancel} alt="cancel" onClick={()=>setSelectStatus2("")} />
                                                </div>
                                                <div className={payOpt==="part" ? "active":"dashboard-content-modal-main-frame1"} onClick={()=>setPayOpt("part")}>
                                                    <div></div>
                                                    <p>Pay as you earn (NGN 30,000 legal fee)</p>
                                                </div>
                                                <div className={payOpt==="full" ? "active":"dashboard-content-modal-main-frame1"} onClick={()=>setPayOpt("full")}>
                                                    <div></div>
                                                    <p>Pay at once (USD 1,000)</p>
                                                </div>
                                                <button onClick={makePayment}>Proceed</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {selectStatus === "pay-as-you-earn" &&
                                    <div>
                                        <div className="dashboard-content-back" onClick={()=>setSelectStatus("congrats")} >
                                            <img src={arrow} alt="back" />
                                            <p>Back</p>
                                        </div>
                                        <h3>Pay as you earn</h3>
                                        <p className="text1">Learn with us for 5 months and pay no tuition till you’re hired!</p>
                                        <p>The Pay as You Earn is a financial instrument to help you participate in our training for FREE. You are expected to start repaying the credit once you get a job at the end of the program. It is governed by a legally binding contract. The repayment procedure can be found in our terms and conditions. This contract is bonded by the law firm.</p>
                                        <p>Note that: This policy requires you bringing two guarantors and making a one-time payment for legal fees bonded by the law firm.</p>
                                        <p>The legal fee cost is a total of 30,000 Naira. Kindly note that this amount is not refundable under any circumstance.</p>
                                        <p>The following are of utmost necessity when bringing your guarantors;</p>
                                        <ul>
                                            <li>You must bring 2 guarantors who are over 18 years of age.</li>
                                            <li>They must be residents within the locality of Abeokuta, Ogun State.</li>
                                            <li>If your guarantor does not meet our eligibility status, you'll be asked to get a replacement.</li>
                                            <li>Kindly seek the consent of your guarantors before filling their details as we will contact them on your behalf.</li>
                                            <li>You can also share our terms and conditions with your guarantor to keep them informed.</li>
                                        </ul>
                                        <div className="checkbox">
                                            <input type="checkbox" id="mark" />
                                            <p>I accept the <a href="#">Terms ‌and‌ ‌Conditions‌</a></p>
                                        </div>
                                        <button onClick={showForm}>Upload Guarantor Details</button>
                                    </div>
                                }
                                { selectStatus === "form" &&
                                    <div>
                                        <div className="dashboard-content-back" onClick={()=>setSelectStatus("pay-as-you-earn")} >
                                            <img src={arrow} alt="back" />
                                            <p>Back</p>
                                        </div>
                                        <h4 style={{marginLeft:"20px"}}>Guarantor Form</h4>
                                        <div className="dashboard-content-form">
                                            <form>
                                                <div className="dashboard-content-form-container">
                                                    <label>First Name</label>
                                                    <input type="text" name="firstName" placeholder="FirstName" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Last Name</label>
                                                    <input type="text" name="lastName" placeholder="LastName" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Email Address</label>
                                                    <input type="email" name="email" placeholder="Email Address" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Phone Number</label>
                                                    <input type="number" name="phone" placeholder="Phone Number" />
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
                                                    <label>Office Address</label>
                                                    <input type="text" name="officeAddress" placeholder="Office Address" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Home Address</label>
                                                    <input type="text" name="homeAddress" placeholder="Home Address" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Profession</label>
                                                    <select>
                                                        <option>Choose Profession</option>
                                                        <option>Product Design</option>
                                                    </select>
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Name of Organisation</label>
                                                    <input type="text" name="organisation" placeholder="Name of organisation" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Name of Employer</label>
                                                    <input type="text" name="employer" placeholder="Name of employer" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Email Address of Employer</label>
                                                    <input type="email" name="employerMail" placeholder="Email Address of Employer" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Phone of Employer</label>
                                                    <input type="phone" name="employerMail" placeholder="Phone of Employer" />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Relationship with guarantor</label>
                                                    <select>
                                                        <option>Select Relationship</option>
                                                        <option>Ogun</option>
                                                    </select>
                                                </div>
                                                <button style={{float:"right"}}>Submit & Pay</button>
                                            </form>
                                        </div>
                                    </div>
                                }
                                { selectStatus === "paid" &&
                                    <PaymentReceived />
                                }
                            </div>
                        )}
                        {status === "admitted" && (
                            <Admitted/>
                        )}
                        {status === "rejected" && (
                            <Rejected />
                        )}
                    </div>
                }
                { sidebarClick==="details" &&
                    <Details />
                }
            </div>
        </div>
    );
}

export default Dashboard;