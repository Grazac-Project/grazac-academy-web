import { useState, useEffect } from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import Details from "../../../components/dashboard/Details";
import NotSubmitted from "../../../components/dashboard/not-submitted";
import UnderReview from "../../../components/dashboard/UnderReview";
import PaymentReceived from "../../../components/dashboard/selected/PaymentReceived";
import Admitted from "../../../components/dashboard/Admitted";
import Rejected from "../../../components/dashboard/Rejected";
import OutsideClickHandler from 'react-outside-click-handler';
import { ToastContainer, toast } from 'react-toastify';
import { submitGuarantor } from "../../../api/dashboard/data";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import arrow from "../../../images/svg/dashboard/arrow.svg";
import menu from "../../../images/svg/dashboard/menu.svg";
import cancel from "../../../images/svg/dashboard/cancel.svg";
import loader from "../../../images/svg/dashboard/loader.gif";


function Dashboard () {
    const [status, setStatus] = useState("Under Review");
    const [selectStatus, setSelectStatus] = useState("congrats");
    const [selectStatus2, setSelectStatus2] = useState("");
    const [sidebarClick, setSidebarClick] =  useState("dashboard");
    const [details, setDetails] = useState({})
    const [payOpt, setPayOpt] = useState("");
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState(0);
    const [guarantor, setGuarantor] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        officeAddress: "",
        homeAddress: "",
        profession: "",
        organisation: "",
        employer: "",
        employerMail: "",
        employerPhone: "",
        relationship: ""
    })

    useEffect(() => {
        try {
            let details = sessionStorage.getItem('user_details');
            // console.log(JSON.parse(details));
            setStatus(JSON.parse(details).status);
            setDetails(JSON.parse(details));
            console.log(JSON.parse(details));
            
            if(!details){
                window.location = '/login';
             }
        } catch (err) {
            //redirect to login
            window.location = '/login'; 
        }
    }, []);

    const handleChange = (e) => {
        setGuarantor({
            ...guarantor,
            [e.target.name]: e.target.value
        });
    }

    const showNavMobile = () => {
        document.getElementById("sidebar").style.left = "0px"
    }
    const closeNavMobile = () => {
        if(window.innerWidth < 769){
            document.getElementById("sidebar").style.left = "-210px";
        }
    }

    const flutterWavePayment = () => {
        handleFlutterPayment({
            callback: (response) => {
                console.log(response);
                if (response.status === "successful"){
                    toast.success("Payment successful!")
                    setSelectStatus("paid");
                }else{
                    toast.error("Payment unsuccessful!")
                }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: (response) => {
                console.log(response);
            },
        });
    }

    const makePayment = () => {
        if(payOpt==="part"){
            setAmount(30000);
            setCurrency('NGN');
            setSelectStatus2("");
            setSelectStatus("pay-as-you-earn");
        } else if (payOpt==="full"){
            setAmount(1000);
            setCurrency('USD');
            setSelectStatus2("");
            setSelectStatus("paid");
            flutterWavePayment()
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

    const submitForm = (e) => {
        e.preventDefault();
        var btn = document.getElementById("actionBtn");
        btn.innerHTML = `<img src=${loader} width="20px" />`;

        const payload = JSON.stringify({
            firstName: guarantor.firstName,
            lastName: guarantor.lastName,
            email: guarantor.email,
            phone: guarantor.phone,
            gender: guarantor.gender,
            officeAddress: guarantor.officeAddress,
            homeAddress: guarantor.homeAddress,
            profession: guarantor.profession,
            organisation: guarantor.organisation,
            employer: guarantor.employer,
            employerMail: guarantor.employerMail,
            employerPhone: guarantor.employerPhone,
            relationship: guarantor.relationship
        })
        submitGuarantor(payload)
            .then((response) => response.data)
            .then((res) => {
                console.log(res);
                if (res.success === true) {
                    toast.success("Submission successful");
                    btn.innerHTML = `Submit & Pay`;
                    flutterWavePayment();
                } else {
                    toast.error("Submission not successful, try again!!!")
                    btn.innerHTML = `Submit & Pay`;
                }
            })
            .catch((err) => {
                if(err.response){
                    toast.error(err.response);
                    btn.innerHTML = `Submit & Pay`;
                } else{
                    toast.error("Something went wrong!!! Please make sure you have a good internet connection.");
                    btn.innerHTML = `Submit & Pay`;
                }
            });
    }

    const config = {
        public_key: 'FLWPUBK_TEST-50065c317f5144179f94b776f7604026-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: currency,
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '07064586146',
          name: 'joel ugwumadu',
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
    const handleFlutterPayment = useFlutterwave(config);

    return(
        <div>
            <ToastContainer closeButton={false} />
            <OutsideClickHandler
                onOutsideClick={() => {
                    closeNavMobile();
                }}
                >
                <div className="layout_dashboard-sidebar" id="sidebar">
                    <Sidebar clicked={sidebarClick} showDetails={status} clickedDashboard={setSidebarClick} clickedDetails={setSidebarClick} />
                </div>
            </OutsideClickHandler>
            <div className="layout_dashboard-content">
                <div className="dashboard-nav">
                    <img src={menu} alt="menu" className="dashboard-nav-menu" onClick={showNavMobile} />
                    <div className="dashboard-nav-status">
                        <h3>Status: {status}</h3>
                        <div className={
                                status==="Not Submitted" ? `dashboard-nav-status-dot not-submitted` :
                                status==="Under Review" ? `dashboard-nav-status-dot under-review` :
                                `dashboard-nav-status-dot ${status}`
                            }
                        ></div>
                    </div>
                    <div className="dashboard-nav-user">
                        <div>
                            <h2>{details.firstName?.substring(0,1)}{details?.lastName?.substring(0,1)}</h2>
                        </div>
                        <p>{details.firstName} {details.lastName}</p>
                    </div>
                </div>
                { sidebarClick==="dashboard" &&
                    <div className="dashboard-content" >
                        {status === "Not Submitted" && (
                            <NotSubmitted fname={details.firstName} lname={details.lastName} email={details.email} phone={details.phone} setNewStatus={()=>{setStatus("Under Review")}} />
                        )}
                        {status === "Under Review" && (
                            <UnderReview fname={details.firstName}/>
                        )}
                        {status === "Selected" && (
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
                                            <form onSubmit={submitForm}>
                                                <div className="dashboard-content-form-container">
                                                    <label>First Name</label>
                                                    <input type="text" required name="firstName" placeholder="FirstName" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Last Name</label>
                                                    <input type="text" required name="lastName" placeholder="LastName" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Email Address</label>
                                                    <input type="email" required name="email" placeholder="Email Address" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Phone Number</label>
                                                    <input type="number" required name="phone" placeholder="Phone Number" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Gender</label>
                                                    <select name="gender" required onChange={handleChange}>
                                                        <option value="">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>

                                                    </select>
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Office Address</label>
                                                    <input type="text" required name="officeAddress" placeholder="Office Address" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Home Address</label>
                                                    <input type="text" required name="homeAddress" placeholder="Home Address" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Profession</label>
                                                    <select name="profession" required onChange={handleChange}>
                                                        <option value="">Choose Profession</option>
                                                        <option value="Civil Servant">Civil Servant</option>
                                                        <option value="Self Employed">Self Employed</option>
                                                        <option value="Private worker">Private worker</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Name of Organisation</label>
                                                    <input type="text" required name="organisation" placeholder="Name of organisation" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Name of Employer</label>
                                                    <input type="text" required name="employer" placeholder="Name of employer" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Email Address of Employer</label>
                                                    <input type="email" required name="employerMail" placeholder="Email Address of Employer" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Phone of Employer</label>
                                                    <input type="phone" required name="employerPhone" placeholder="Phone of Employer" onChange={handleChange} />
                                                </div>
                                                <div className="dashboard-content-form-container">
                                                    <label>Relationship with guarantor</label>
                                                    <select name="relationship" required onChange={handleChange}>
                                                        <option value="">Select Relationship</option>
                                                        <option value="Parents">Parents</option>
                                                        <option value="Legal Guardian">Legal Guardian</option>
                                                        <option value="Employer">Employer</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                <button style={{float:"right", width:"100px"}} type="submit" id="actionBtn">Submit & Pay</button>
                                            </form>
                                        </div>
                                    </div>
                                }
                                { selectStatus === "paid" &&
                                    <PaymentReceived fname={details.firstName} />
                                }
                            </div>
                        )}
                        {status === "Admitted" && (
                            <Admitted fname={details.firstName}/>
                        )}
                        {status === "Rejected" && (
                            <Rejected fname={details.firstName} />
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