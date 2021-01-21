import sprint from '../images/sprint.png';
import quote from '../images/svg/quote.svg';

const ModeOfTeaching = _ => {
    return( 
        <div className="course_mode">
            <div className="container">
                <div className="course_wwd-intro">
                    <h4>What we do</h4>
                    <h2>Mode Of Learning</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ</p>
                </div>
                <div className="course_mode-container">
                    <div className="">
                        <div>
                            <div className="boxes">
                                <div className="svg-box"></div>
                                <h3>Instructor-led live classes</h3>
                                <p>Join other students in our 90% physical classes and 10% virtual classes with experts in the industry.</p>
                            </div>
                            <div className="boxes">
                                <div className="svg-box"></div>
                                <h3>Networking</h3>
                                <p>Collaborate and communicate by exchanging ideas with other students of same interest to facilitate your career and build a community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <div className="boxes">
                                <div className="svg-box"></div>
                                <h3>Case Studies</h3>
                                <p>Opportunity to work on real-life projects by applying what you learn to enhance your skills and solve related problems.</p>
                            </div>
                            <div className="boxes">
                                <div className="svg-box"></div>
                                <h3>Mentorship Access</h3>
                                <p>Access to counselling and personalized guidance from mentors and thought leaders in your field that will increase your visibility to other employers.</p>
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
    )
}
export default ModeOfTeaching;