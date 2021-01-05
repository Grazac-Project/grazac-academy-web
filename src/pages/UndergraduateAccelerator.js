import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateAccount from "../components/CreateAccount";

import design from "../images/design.png";



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
                            <div className="col-sm-6">
                                
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
                <div className="container">
                    <div className="gga">
                        <div className="course_mode-intro course_mode-intro">
                            <h4 style={{marginTop:'100px'}}>How It Works</h4>
                            <h2>Popular Courses</h2>
                        </div>
                        <div className="gga_container">
                            <div className="boxes33">
                                <div className="gua_cardview">
                                    <div className="gua_cardview-box">
                                        <img src={design} alt="course-desc" />
                                    </div>
                                    <div className="gua_cardview-text">
                                        <p>Design</p>
                                        <h4>UI/UX Design</h4>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                        <span>LEARN MORE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gua_cardview">
                                    <div className="gua_cardview-box">
                                        <img src={design} alt="course-desc" />
                                    </div>
                                    <div className="gua_cardview-text">
                                        <p>Design</p>
                                        <h4>UI/UX Design</h4>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                        <span>LEARN MORE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gua_cardview">
                                    <div className="gua_cardview-box">
                                        <img src={design} alt="course-desc" />
                                    </div>
                                    <div className="gua_cardview-text">
                                        <p>Design</p>
                                        <h4>UI/UX Design</h4>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                        <span>LEARN MORE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gua_cardview">
                                    <div className="gua_cardview-box">
                                        <img src={design} alt="course-desc" />
                                    </div>
                                    <div className="gua_cardview-text">
                                        <p>Design</p>
                                        <h4>UI/UX Design</h4>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                        <span>LEARN MORE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes33">
                                <div className="gua_cardview">
                                    <div className="gua_cardview-box">
                                        <img src={design} alt="course-desc" />
                                    </div>
                                    <div className="gua_cardview-text">
                                        <p>Design</p>
                                        <h4>UI/UX Design</h4>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                        <span>LEARN MORE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" style={{textAlign:'center'}}>
                    <div className="container">
                        <div className="course_wwd-intro">
                            <h4>How It Works</h4>
                            <h2>We stand for quality</h2>
                            <p>You determine the starting points, we provide the best possible interception to achieve the goals.</p>
                        </div>
                        <div className="course_mode-container">
                            <div className="boxes22">
                                <div className="">
                                    <div className="boxes">
                                        <div className="svg-box1"></div>
                                        <h3>Energetic</h3>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for </p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes22">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box1"></div>
                                        <h3>Innovative</h3>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for </p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxes22">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box1"></div>
                                        <h3>Social Heart</h3>
                                        <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gua_advice" >
                    <div className="container">
                        <div className="gua_advice-box">
                            <div className="boxes44">jipef
                            </div>
                            <div className="boxes44">osddigoi
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UndergraduateAccelerator;