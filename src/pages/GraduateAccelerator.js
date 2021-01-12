import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeedAdvice from "../components/NeedAdvice";
import PopularCourses from "../components/PopularCourses";
import Qualities from "../components/Qualities";

import Graduates from "../images/graduates.png";



const GraduateAccelerator = () => {
    return(
        <div>
            <Navbar/>
            <div className="gga">
                <div className="gga_hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="gga_hero-text">
                                    <div className="gga_hero-text-b">
                                        <h1>
                                            Graduate Accelerator Track
                                        </h1>
                                        <p>
                                            We are bridging the gap between unemployment and entry - level jobs in the technology industry.
                                        </p>
                                        <div className="gua_hero_search-box">
                                            <input type="text" className="gua_hero_search" placeholder="Select a category" />
                                            <button type="submit" className="gua_hero_search-button">Search Course</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={Graduates} alt="Graduates"  className="gga_hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="course_mode-container">
                        <div className="boxes22">
                            <div className="">
                                <div className="boxes">
                                    <div className="svg-box2"></div>
                                    <h3>Expert Instructors</h3>
                                    <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxes22">
                            <div className="">
                                <div className="boxes">
                                    <div className="svg-box2"></div>
                                    <h3>100k+ Online Courses</h3>
                                    <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxes22">
                            <div className="">
                                <div className="boxes">
                                    <div className="svg-box2"></div>
                                    <h3>100k+ Online Courses</h3>
                                    <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopularCourses />
                <Qualities />
                <NeedAdvice />
            </div>
            <Footer/>
        </div>
    );
}

export default GraduateAccelerator;