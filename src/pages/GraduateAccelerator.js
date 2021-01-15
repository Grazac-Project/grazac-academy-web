import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeedAdvice from "../components/NeedAdvice";
import PopularCourses from "../components/PopularCourses";
import Qualities from "../components/Qualities";
import PrimaryBtn from "../components/PrimaryBtn";
import Graduates from "../images/graduates.png";
import Card1 from "../images/svg/card1.svg";
import Card2 from "../images/svg/card1.svg";

const GraduateAccelerator = () => {

    React.useEffect(() => {
        document.title = 'Graduate Accelerator Track - Grazac Academy';
        window.scrollTo(0,0);
    }, []);

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
                                            We are bridging the gap between unemployment and entry - level jobs 21st century.
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
                                    <p>A wide range of industry leaders that will walk you through your career path.</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxes22">
                            <div className="">
                                <div className="boxes">
                                    <div className="svg-box2"></div>
                                    <h3>Mentorship Access</h3>
                                    <p>Set out on the right path by leveraging on the experience of those who have gone ahead.</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxes22">
                            <div className="">
                                <div className="boxes">
                                    <div className="svg-box2"></div>
                                    <h3>Resources and tools</h3>
                                    <p>Access to facilities, resources and tools needed for your quick learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopularCourses />
                <Qualities />
                <div className="landing__cards">
                    <div className="landing__cards--container">
                        <div className="landing__bottom--text">
                            <div className="landing__bottom--text--right">
                            <h5>What we do</h5>
                            <h1>Get Ready For The Future Of Work</h1>
                        </div>
                    </div>

                    <div className="landing__card--box">
                        <div className="landing__card landing__card--1">
                            <img src={Card1} alt="illustration" />
                            <h3><span>Full-time </span>Plan</h3>
                           
                            <div className="landing__btn">
                                <PrimaryBtn yellow link="/signup">Get Started</PrimaryBtn>
                            </div>
                        </div>

                        <div className="landing__card landing__card--2">
                            <img src={Card2} alt="illustration" />
                            <h3><span>Part-time </span>Plan</h3>
                           
                            <div className="landing__btn">
                                <PrimaryBtn link="/signup">Get Started</PrimaryBtn>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <NeedAdvice />
            </div>
            <Footer/>
        </div>
    );
}

export default GraduateAccelerator;