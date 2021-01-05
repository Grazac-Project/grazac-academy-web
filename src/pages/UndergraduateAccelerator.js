import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import CreateAccount from "../components/CreateAccount"


const UndergraduateAccelerator = () => {
    return(
        <div>
            <Navbar/>
            <div className="gua">
                <div className="course_hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="course_hero-text">
                                    <div className="course_hero-text-b">
                                        <h1>
                                            Undergraduate Accelerator Track
                                        </h1>
                                        <p>
                                            We are bridging the gap between unemployment and entry - level jobs in the technology industry.
                                        </p>
                                        <div className="course__btn">
                                            <PrimaryBtn link="">Check Our Courses</PrimaryBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course_mode" style={{textAlign:'center'}}>
                    <div className="container">
                        <div className="course_wwd-intro">
                            <h4>What we do</h4>
                            <h2 style={{marginBottom:'70px'}}>These are some of the reasons people choose us.</h2>
                        </div>
                        <div className="course_mode-container">
                            <div className="boxes22">
                                <div className="">
                                    <div className="boxes">
                                        <div className="svg-box1"></div>
                                        <h3>Internship Opportunities</h3>
                                        <p>With our partnership with leading tech firms in Nigeria, we offer successful students internship opportunities to sharpen their skills.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes22">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box1"></div>
                                        <h3>Transfer Your Career</h3>
                                        <p>Thinking of working in the technology industry? If Yes! you are in the right place. Make a choice to join us today and let the change begin!!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes22">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box1"></div>
                                        <h3>Venetran Facilitators</h3>
                                        <p>Here at Grazac, we believe in experience, our facilitators comes from leading tech firms in Africa.We are totally against mediocrity and we can assure you that we have the best guys with us!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="gga">
                        <div className="course_mode-intro course_mode-intro">
                            <h4 style={{marginTop:'100px'}}>What we do</h4>
                            <h2>Mode Of Teaching</h2>
                        </div>
                        <div className="gga_container">
                            <div className="boxes33">
                                <div className="gga_cardview">
                                    <div className="gga_cardview-box"></div>
                                    <div className="gga_cardview-text">
                                        <h4>UI/UX Design</h4>
                                        <div className="gga_cardview-text-section">
                                            <div className="gga_cardview-text-section-1">
                                                <div className="circle-box"></div>
                                                <span>2 Months Training</span>
                                            </div>
                                            <div>
                                                <div className="circle-box"></div>
                                                <span>Certificate Available</span>
                                            </div>
                                        </div>
                                        <p>The Data Accelerator program of the Data School is designed to help professionals learn the analytics and data strategy, bringing the value of Big Data Analytics to your current role.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gga_cardview">
                                    <div className="gga_cardview-box"></div>
                                    <div className="gga_cardview-text">
                                        <h4>UI/UX Design</h4>
                                        <div className="gga_cardview-text-section">
                                            <div className="gga_cardview-text-section-1">
                                                <div className="circle-box"></div>
                                                <span>2 Months Training</span>
                                            </div>
                                            <div>
                                                <div className="circle-box"></div>
                                                <span>Certificate Available</span>
                                            </div>
                                        </div>
                                        <p>The Data Accelerator program of the Data School is designed to help professionals learn the analytics and data strategy, bringing the value of Big Data Analytics to your current role.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gga_cardview">
                                    <div className="gga_cardview-box"></div>
                                    <div className="gga_cardview-text">
                                        <h4>UI/UX Design</h4>
                                        <div className="gga_cardview-text-section">
                                            <div className="gga_cardview-text-section-1">
                                                <div className="circle-box"></div>
                                                <span>2 Months Training</span>
                                            </div>
                                            <div>
                                                <div className="circle-box"></div>
                                                <span>Certificate Available</span>
                                            </div>
                                        </div>
                                        <p>The Data Accelerator program of the Data School is designed to help professionals learn the analytics and data strategy, bringing the value of Big Data Analytics to your current role.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gga_cardview">
                                    <div className="gga_cardview-box"></div>
                                    <div className="gga_cardview-text">
                                        <h4>UI/UX Design</h4>
                                        <div className="gga_cardview-text-section">
                                            <div className="gga_cardview-text-section-1">
                                                <div className="circle-box"></div>
                                                <span>2 Months Training</span>
                                            </div>
                                            <div>
                                                <div className="circle-box"></div>
                                                <span>Certificate Available</span>
                                            </div>
                                        </div>
                                        <p>The Data Accelerator program of the Data School is designed to help professionals learn the analytics and data strategy, bringing the value of Big Data Analytics to your current role.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CreateAccount/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UndergraduateAccelerator;