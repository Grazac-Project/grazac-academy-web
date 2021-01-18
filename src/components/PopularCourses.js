import {Link} from 'react-router-dom';
import design from "../images/design.png";

const PopularCourses = () => {
  return(
    <div className="background1">
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
                                <Link to="/course-detail?course=productDesign"><a>Learn More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="boxes33">
                        <div className="gua_cardview">
                            <div className="gua_cardview-box">
                                <img src={design} alt="course-desc" />
                            </div>
                            <div className="gua_cardview-text">
                                <p>Web Development</p>
                                <h4>Frontend Development</h4>
                                <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                <Link to="/course-detail"><a>Learn More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="boxes33">
                        <div className="gua_cardview">
                            <div className="gua_cardview-box">
                                <img src={design} alt="course-desc" />
                            </div>
                            <div className="gua_cardview-text">
                                <p>Web Development</p>
                                <h4>Bankend Development</h4>
                                <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                <Link to="/course-detail"><a>Learn More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="boxes33">
                        <div className="gua_cardview">
                            <div className="gua_cardview-box">
                                <img src={design} alt="course-desc" />
                            </div>
                            <div className="gua_cardview-text">
                                <p>Mobile Application</p>
                                <h4>Android Development</h4>
                                <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                <Link to="/course-detail"><a>Learn More</a></Link>
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
                                <h4>Brand Identity Design</h4>
                                <p>This course helps you accelerate your career into Data Analytics. Learn Structured Query Language and Power BI for Data Analytics and Visualization.</p>
                                <Link to="/course-detail"><a>Learn More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PopularCourses;