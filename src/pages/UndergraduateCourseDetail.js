import React,{useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import MOT from "../components/MOT";

import paper from '../images/svg/paper-ribbon.svg';
import loader from "../images/loader.gif";

const CourseDetail = (props) => {
    const [course, setCourse] = useState('');
    const [outline, setOutline] = useState([]);

    React.useEffect(() => {
        document.title = 'Course Details - Grazac Academy';
        window.scrollTo(0,0);
        const slug = props.location.search.substring(8);
        fetch(`https://grazacacademy.com/courses/undergraduate/${slug}`)
            .then(resp => resp.json())
            .then(resp => {
                setCourse(resp.data);
                setOutline(JSON.parse(resp.data.outline));
            })
            .catch(error => {
                console.log('An error occurred when fetching course details, refreshing...')
                window.location.reload();
            })
    },[]);
    
    return(
        <div>
            <Navbar/>
            <div className="course">
                <div className="course_hero">
                    <div className="container">
                        {course ? 
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
                                                <a href={course.brochure} target="_blank" className="download-brochure">Download Brochure</a>
                                                <Link><button>Enroll now</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={paper} alt="academy"  className="gga_hero-image" />
                                </div>
                            </div> : 
                            <img src={loader} alt="loader" className="loader" />
                        }
                    </div>
                </div>
                <div className="course_learn">
                    <div className="container">
                        <div className="course_wwd-intro">
                            <h4>GRAZAC ACADEMY</h4>
                            <h2>What you'll Learn</h2>
                        </div>
                        <div className="course_learn-main">
                            {outline.length ?
                                outline.map((item, index) => (
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
                                )) :
                                <div>
                                    <img src={loader} alt="loader" className="loader" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <MOT />
                <div className="course_purple">
                    <div className="course_purple_txt">
                        <p>Pricing</p>
                        <h1>100%</h1>
                        <p>Discount Available</p>
                    </div>
                    <div className="course_purple-main">
                        <div className="course_purple-main-boxes grad-box">
                            <h4>Tuition</h4>
                            <h2>
                                FREE
                            </h2>
                        </div>
                        <div className="course_purple-main-boxes grad-box">
                            <h4>Note</h4>
                            <p><span>You are required to pay a sum of ₦15,550 for your certificate and to ensure we secure a befitting environment to aid your learning. </span></p>
                        </div>
                    </div>
                    <div className="course_purple-btn">
                        <PrimaryBtn>Enroll Now</PrimaryBtn>
                        <a href="tel:+234806 836 5951"><p>Talk to course rep</p></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CourseDetail;