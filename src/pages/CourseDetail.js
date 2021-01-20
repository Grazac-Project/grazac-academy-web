import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import {productDesign} from "../content/courses.js";

import quote from '../images/svg/quote.svg';
import paper from '../images/svg/paper-ribbon.svg';
import sprint from '../images/sprint.png';

const CourseDetail = (props) => {
    const [course, setCourse] = useState('');
    const [outline, setOutline] = useState([]);

    React.useEffect(() => {
        document.title = 'Course Details - Grazac Academy';
        window.scrollTo(0,0);
        const param = props.location.search.substring(8);
        if (param === 'productDesign'){
            setCourse(productDesign);
            setOutline(productDesign.outline)
        }
    },[]);
    
    const RenderOutline = _ => {
        const list = outline.map((item, index) => (
            <div key={index}>
                <div className="course_learn-main-list">
                    <div className="box1">
                        <h3>{item.id}</h3>
                    </div>
                    <div className="box2">
                        <h3>{item.topic}</h3>
                    </div>
                    <div className="box3">
                        <p>{item.content}</p>
                    </div>
                </div>
                <hr/>
            </div>
        ))
        return(<div>{list}</div>)
    }
    return(
        <div>
            <Navbar/>
            <div className="course">
                <div className="gua_hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="gua_hero-text">
                                    <div className="gua_hero-text-b">
                                        <h1>
                                            {course.name}
                                        </h1>
                                        <p>
                                            {course.description}
                                        </p>
                                        <div className="contact_hero-privacy" >
                                            <button>Download Brochure</button>
                                            <button>Enroll now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={paper} alt="academy"  className="gga_hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course_learn">
                    <div className="container">
                        <div className="course_wwd-intro">
                            <h4>GRAZAC ACADEMY</h4>
                            <h2>What you'll Learn</h2>
                        </div>
                        <div className="course_learn-main">
                            <RenderOutline/>
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
                                        <h3></h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3></h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3></h3>
                                        <p>Learn the foundations of database management with focus on relational database systems and its terminologies.</p>
                                    </div>
                                    <div className="boxes">
                                        <div className="svg-box"></div>
                                        <h3></h3>
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