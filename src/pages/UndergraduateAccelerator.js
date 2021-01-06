import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeedAdvice from "../components/NeedAdvice";
import PopularCourses from "../components/PopularCourses";
import Qualities from "../components/Qualities";

import undergraduate from "../images/undergraduate.png";



const UndergraduateAccelerator = () => {
    return(
        <div>
            <Navbar/>
            <div className="gua">
                <div className="gua_hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="gua_hero-text">
                                    <div className="gua_hero-text-b">
                                        <h1>
                                            Undergraduate Accelerator Track
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
                                <img src={undergraduate} alt="undergraduate"  className="gua_hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="gga">
                        <div className="course_mode-intro course_mode-intro">
                            <h4 style={{marginTop:'100px'}}>How it works</h4>
                            <h2>Highlighted Learning</h2>
                        </div>
                    </div>
                    <div className="gua_highlight">
                        <div className="boxes44 gua_highlight-box1">
                            <div className="gua_highlight-box3">
                                <div className="gua_highlight-box4">
                                    <h3><strong>Student Lead</strong></h3>
                                    <p>Learn how to use Structured Query</p>
                                    <p>Language (SQL) to extract and analyze data stored in databases.</p>
                                    <p>Analyze data stored in databases.</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxes44 gua_highlight-box2">
                            <div  className="gua_highlight-box3">
                                <div className="gua_highlight-box4">
                                    <h3><strong>Affiliated Campuses</strong></h3>
                                    <p>Learn how to use Structured Query</p>
                                    <p>Language (SQL) to extract and analyze data stored in databases.</p>
                                    <p>Analyze data stored in databases.</p>
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

export default UndergraduateAccelerator;