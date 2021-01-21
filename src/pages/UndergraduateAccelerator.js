import React, {useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeedAdvice from "../components/NeedAdvice";
import Qualities from "../components/Qualities";

import undergraduate from "../images/undergraduate.png";

const UndergraduateAccelerator = () => {
    const [courses, setCourses] = useState([]);

    React.useEffect(() => {
        document.title = 'Undergraduate Accelerator Track - Grazac Academy';
        window.scrollTo(0,0);
        fetch('https://grazacacademy.com/courses/undergraduate',)
            .then(resp => resp.json())
            .then(resp => {
                setCourses(resp.data);
            })
            .catch(error => {
                alert('An error occured')
            })
    }, []);

    return(
        <div>
            <div className="gua">
                <div className="gua_hero">
                        <Navbar/>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="gua_hero-text">
                                    <div className="gua_hero-text-b">
                                        <h1>
                                            Undergraduate Accelerator Plan
                                        </h1>
                                        <p> We equip you for the future of the career you desire. Become an asset in this 21st century before leaving the four walls of school. Join thousands of young undergraduates now, get mentorship tailored to your career path and be the next best talent to be employed. </p>
                                        
                                        <div className="contact_hero-privacy" >
                                            <a href="#courses"><button>Join Us Today!</button></a>
                                            <Link to="/lead"><button>Apply as student Lead</button></Link>
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
                            <h4 style={{marginTop:'100px'}}>We are preparing you for the future of work</h4>
                            <h2>Join our community</h2>
                        </div>
                    </div>
                    <div className="gua_highlight">
                        <div className="boxes44 gua_highlight-box1">
                            <div className="gua_highlight-box3">
                                <div className="gua_highlight-box4">
                                    <h3><strong>Student Lead</strong></h3>
                                    <p>Become our ambassador in your institution. </p>
                                    <p>Lead other students who are ready to prepare themselves for the future of work.</p>
                                    <Link to="/lead"><a className="white-link">Apply as Student Lead</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="boxes44 gua_highlight-box2">
                            <div  className="gua_highlight-box3">
                                <div className="gua_highlight-box4">
                                    <h3><strong>Affiliated Campuses</strong></h3>
                                    <p>We are well represented in various institutions of learning across Nigeria.</p>
                                    <p>We want to prepare you for the future of work before you leave the four walls of learning.</p>
                                    <a className="white-link">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background1" id="courses">
                    <div className="container">
                        <div className="gga">
                            <div className="course_mode-intro course_mode-intro">
                                <h2>Available Courses</h2>
                            </div>
                            <div className="gga_container">
                                {courses.map((item,index) => (
                                <div className="boxes33" key={index}>
                                    <div className="gua_cardview">
                                        <div className="gua_cardview-box">
                                            <img src={item.thumb} alt="course-desc" />
                                        </div>
                                        <div className="gua_cardview-text">
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <Link to={"/course-detail-undergraduate?course="+item.slug}><a>Learn More</a></Link>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Qualities />
                <NeedAdvice />
            </div>
            <Footer/>
        </div>
    );
}

export default UndergraduateAccelerator;