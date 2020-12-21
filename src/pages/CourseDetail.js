import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";

import kamala from '../images/kamala.jpg';
import cert from '../images/svg/cert.svg';
import quote from '../images/svg/quote.svg';
import linkedin from '../images/svg/linked.svg';
import sprint from '../images/sprint.png';

const CourseDetail = () => {
    return(
        <div>
            <Navbar/>
            <div className="course">
                <div className="course_hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="course_hero-text">
                                    <div className="course_hero-text-b">
                                        <h1>
                                            Product Design (UI/UX)
                                        </h1>
                                        <p>
                                            Rideshur sets fair rates adjusted at every turn. Safety, risk level, and claims are all managed from a single dashboard. Evolve your fleet.
                                        </p>
                                        <div className="course__btn">
                                            <PrimaryBtn link="">Download Brochure</PrimaryBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course_wwd">
                    <div className="container">
                        <div className="course_wwd-intro">
                            <h4>What we do</h4>
                            <h2>What You Will <span>Learn</span></h2>
                        </div>
                        <div className="course_wwd-flex">
                            <div className="first-div">
                                <div className="course_wwd-imagebox">
                                    <img src={kamala} alt="what we do" />
                                </div>
                                <div className="first-div_1">
                                    <img src={cert} alt="certificate svg" />
                                </div>
                            </div>
                            <div >
                                <div className="course_wwd-flex-inner">
                                    <div className="info">
                                        <div className="svg-box">

                                        </div>
                                        <h3>Understanding RDMS rstanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>

                                    </div>
                                    <div className="info">
                                        <div className="svg-box">

                                        </div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>

                                    </div>
                                </div>
                                <div className="course_wwd-flex-inner">
                                    <div className="info">
                                        <div className="svg-box">

                                        </div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>

                                    </div>
                                    <div className="info">
                                        <div className="svg-box">

                                        </div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>

                                    </div>
                                </div>
                                <div className="course_wwd-flex-inner">
                                    <div className="info">
                                        <div className="svg-box">

                                        </div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>

                                    </div>
                                    <div className="info">
                                        <div className="svg-box">

                                        </div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>

                                    </div>
                                </div>
                                <div className="course_wwd-btn" style={{paddingLeft:'25px'}}>
                                    <PrimaryBtn>Join Class Now</PrimaryBtn>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="course_mode">
                    <div className="container">
                        <div className="course_wwd-intro">
                            <h4>What we do</h4>
                            <h2>Mode Of Teaching</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ</p>
                        </div>
                        <div className="course_mode-container">
                            <div className="">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3>Understanding RDMS</h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mode-pic">
                                <img src={sprint} alt="jdgkj" style={{width:'100%'}} />
                            </div>
                        </div>
                        <div className="course_mode-quote">
                            <img src={quote} alt="quote" />
                            <p>Online learning can be a lifeline to those who have obstacles, such as geographical distances or physical disabilities.</p>
                            <span>Paul Levinson</span>
                        </div>
                        <div className="course_mode-intro course_mode-intro2">
                            <h4>What we do</h4>
                            <h2>Mode Of Teaching</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ</p>
                        </div>
                        <div className="course_mode-tutors">
                            <div className="course_mode-tutors-box">
                                <div></div>
                                <h5>Blessing Orazalume</h5>
                                <p>CAREER FOUNDRY</p>
                                <p>Software Developer</p>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="course_mode-tutors-box">
                                <div></div>
                                <h5>Blessing Orazalume</h5>
                                <p>CAREER FOUNDRY</p>
                                <p>Software Developer</p>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="course_mode-tutors-box">
                                <div></div>
                                <h5>Blessing Orazalume</h5>
                                <p>CAREER FOUNDRY</p>
                                <p>Software Developer</p>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="course_mode-tutors-box">
                                <div></div>
                                <h5>Blessing Orazalume</h5>
                                <p>CAREER FOUNDRY</p>
                                <p>Software Developer</p>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="course_mode-tutors-box">
                                <div></div>
                                <h5>Blessing Orazalume</h5>
                                <p>CAREER FOUNDRY</p>
                                <p>Software Developer</p>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course_purple">
                    <div className="course_purple_txt">
                        <p>Pricing</p>
                        <h1>50%</h1>
                        <p>Scholarship Available</p>
                    </div>
                    <div className="course_purple-main">
                        <div className="course_purple-main-boxes">
                            <h4>FULL TUITION PAYMENT</h4>
                            <h2>₦540,000</h2>
                            <p>Pay your fees 100% upfront. No other charges come up during your career</p>
                        </div>
                        <div className="course_purple-main-boxes">
                            <h4>FULL TUITION PAYMENT</h4>
                            <h2>₦540,000</h2>
                            <p>Pay your fees 100% upfront. No other charges come up during your career</p>
                        </div>
                        <div className="course_purple-main-boxes">
                            <h4>FULL TUITION PAYMENT</h4>
                            <h2>₦540,000</h2>
                            <p>Pay your fees 100% upfront. No other charges come up during your career</p>
                        </div>
                    </div>
                    <div className="course_purple-btn">
                        <PrimaryBtn>Claim Scholarship</PrimaryBtn> 
                        <p>Talk to course rep</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CourseDetail;