import React, {useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeedAdvice from "../components/NeedAdvice";
import Qualities from "../components/Qualities";

import undergraduate from "../images/undergraduate.png";
import loader from "../images/loader.gif";
import SchoolList from "../components/SchoolList";

const UndergraduateAccelerator = () => {
    const [courses, setCourses] = useState([]);
    const [openListModal, setOpenListModal] = useState(false);

    React.useEffect(() => {
        document.title = 'Undergraduate Accelerator Track - Grazac Academy';
        window.scrollTo(0,0);
        var blur = document.getElementById('blur');
        blur.classList.add('blur-active');
        
        fetch('https://grazacacademy.com/undergraduate/courses')
            .then(resp => resp.json())
            .then(resp => {
                setCourses(resp.data);
                blur.classList.remove('blur-active');
            })
            .catch(error => {
                console.log('An error occurred when fetching the available courses, refreshing...')
                window.location.reload();
            })
    }, []);

    return(
        <div>
            {courses.length ? (<div></div>) : (
                <div>
                <img src={loader} alt="loader" className="loader-top" />
                </div>
            )}
        <div id="blur">
            <Navbar/>
            <div className="gua">
                <div className="gua_hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="gua_hero-text">
                                    <div className="gua_hero-text-b">
                                        <h1>
                                            Undergraduate Accelerator Plan
                                        </h1>
                                        <p>We equip you to be an asset in the digital age before leaving the four walls of school and we believe the future of work will be strictly skill-based. Join thousands of young undergraduates to build a career in technology and be mentored by industry experts.
                                        </p>
                                        <div className="contact_hero-privacy" >
                                            <a href="#courses"  className="download-brochure">Join Us Today!</a>
                                            <Link to="/lead"><button>Apply as Lead</button></Link>
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
                                    <a className="white-link" onClick={() => setOpenListModal(true)}>Learn More</a>
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
                                {courses.length ? 
                                    courses.map((item,index) => (
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
                                    </div>)) :
                                    <div>
                                        {/* <img src={loader} alt="loader" className="loader" /> */}
                                    </div>
                                }
                                <div className="boxes33">
                                    <div className="gua_cardview">
                                        <div className="gua_cardview-text">
                                            <h4>Can't find a course you are interested in?</h4>
                                            <p>We will be glad if you can suggest the course you'd love to learn.</p>
                                            <Link to="/contact"><a>Contact Us</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Qualities />
                <NeedAdvice />
            </div>
            <Footer/>

           { openListModal && <SchoolList onOpen={e => setOpenListModal(e)}/> }
        </div>
        </div>
    );
}

export default UndergraduateAccelerator;