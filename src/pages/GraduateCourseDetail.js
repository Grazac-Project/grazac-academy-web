import React,{useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import MOT from "../components/MOT";

import paper from '../images/svg/paper-ribbon.svg';

const CourseDetail = (props) => {
    const [course, setCourse] = useState('');
    const [outline, setOutline] = useState([]);

    React.useEffect(() => {
        document.title = 'Course Details - Grazac Academy';
        window.scrollTo(0,0);
        const slug = props.location.search.substring(8);
        fetch(`https://grazacacademy.com/courses/graduate/${slug}`)
            .then(resp => resp.json())
            .then(resp => {
                setCourse(resp.data);
                setOutline(JSON.parse(resp.data.outline));
                console.log(resp.data)
            })
            .catch(error => {
                alert("An error occured")
            })
    },[]);
    
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
                                            {course.name}
                                        </h1>
                                        <p>
                                            {course.description}
                                        </p>
                                        <div className="contact_hero-privacy" >
                                            <button>Download Brochure</button>
                                            <Link to="/graduate-form"><button>Enroll now</button></Link>
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
                            {outline.map((item, index) => (
                                <div key={index}>
                                    <div className="course_learn-main-list">
                                        <div className="box1">
                                            <h3>{(index<10) ? '0'+index : index}</h3>
                                        </div>
                                        <div className="box2">
                                            <h3>{item.topic}</h3>
                                        </div>
                                        <div className="box3">
                                            <p>{item.summary}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <MOT />
                <div className="course_purple">
                    <div className="course_purple_txt">
                        <p>Pricing</p>
                        <h1>70%</h1>
                        <p>Scholarship Available</p>
                    </div>
                    <div className="course_purple-main">
                        <div className="course_purple-main-boxes grad-box">
                            <h4>Full Tuition</h4>
                            <h2>₦{course.tuition}</h2>
                        </div>
                        <div className="course_purple-main-boxes grad-box">
                            <h4>Scholarship Offer</h4>
                            <h2>₦{course.discounted_tuition}</h2>
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