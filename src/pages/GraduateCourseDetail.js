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
        fetch(`https://grazacacademy.com/graduate/course/details/${slug}`)
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
            {outline.length ? (<div></div>) : (
                <div>
                <div className="loading-blur"></div>
                <img src={loader} alt="loader" className="loader-top" />
                </div>
            )}
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
                                                <a href={course.brochure} className="download-brochure" target="_blank">Download Brochure</a>
                                                <Link to="/graduate-form"><button>Enroll now</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={paper} alt="academy"  className="gga_hero-image" />
                                </div>
                            </div> : 
                            <div>
                            {/*<img src={loader} alt="loader" className="loader" />*/}
                            </div>
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
                                )):
                                <div>
                                    {/* <img src={loader} alt="loader" className="loader" /> */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <MOT />
                <div className="course_purple">
                    <div className="course_purple_txt">
                        <p>Our Flexible Payment Plans</p>
                        <h1>{course.percent_off}%</h1>
                        <p>Discount Available</p>
                    </div>
                    <div className="course_purple-main">
                        <Link to="/graduate-form?payment=fulltime">
                            <div className="course_purple-main-boxes grad-box">
                                <h4>Full Package</h4>
                                <h3><span style={{textDecoration:'line-through'}}>₦{course.tuition}</span></h3>
                                <h2>₦{new Intl.NumberFormat().format(course.discounted_tuition)}</h2>
                                <p>This is a one-off payment. You won't be required to pay any amount again till the end of your training.</p>
                            </div>
                        </Link>
                        <Link to="/graduate-form?payment=installment">
                            <div className="course_purple-main-boxes grad-box">
                                <h4>Installment Plan</h4>
                                <h3><span style={{textDecoration:'line-through'}}>₦{course.tuition}</span></h3>
                                <h2>₦{new Intl.NumberFormat().format(100000)} <span style={{fontSize: '14px'}}>* first payment.</span></h2>
                                <p>After the first payment, a fee of ₦50,000 is to be paid at the beginning of each month for the next 3 months.</p>
                            </div>
                        </Link>
                        {/* <Link to="/graduate-form?payment=income-split">
                            <div className="course_purple-main-boxes grad-box">
                                <h4>Income Split Agreement</h4>
                                <h3><span style={{textDecoration:'line-through'}}>₦{course.tuition}</span></h3>
                                <h2>₦{new Intl.NumberFormat().format(50000)} <span style={{fontSize: '14px'}}>upfront + 15% split income.</span></h2>
                                <p>After the training, you get a job placement and you pay us 15% of your salary for a period of 12months.</p>
                            </div>
                        </Link> */}
                    </div>
                    <div className="course_purple-btn">
                        <PrimaryBtn link="/graduate-form">Enroll Now</PrimaryBtn>
                        <a href="tel:+234806 836 5951" style={{marginTop:"7px"}}><p>Talk to course rep</p></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CourseDetail;