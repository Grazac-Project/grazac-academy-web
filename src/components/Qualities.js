import heart from '../images/svg/heart.svg';
import idea from '../images/svg/idea.svg';
import energy from '../images/svg/renewable-energy.svg';

const Qualities = () => {
  return(
    <div className="" style={{textAlign:'center'}}>
        <div className="container">
            <div className="course_wwd-intro">
                <h4>How It Works</h4>
                <h2>What you stand to gain</h2>
                <p>Your path to employment and relevance in the digital age is optimized to the highest degree of success.</p>
            </div>
            <div className="course_mode-container">
                <div className="boxes22">
                    <div className="">
                        <div className="boxes">
                            <div className="svg-box1">
                                <img src={energy} alt="energy"/>
                            </div>
                            <h3>Internship opportunities </h3>
                            <p>Get a chance to work with our amazing team and partner companies on different projects to jump start your career.</p>
                        </div>
                    </div>
                </div>
                <div className="boxes22">
                    <div>
                        <div className="boxes">
                            <div className="svg-box1">
                                <img src={idea} alt="energy"/>
                            </div>
                            <h3>Recruitment</h3>
                            <p>Get hired in an organization of talented people to utilize your skills and experience to launch valuable products that solve problems for the world at large.</p>
                        </div>
                    </div>
                </div>
                <div className="boxes22">
                    <div>
                        <div className="boxes">
                            <div className="svg-box1">
                                <img src={heart} alt="energy"/>
                            </div>
                            <h3>Certification</h3>
                            <p>Get a recognised certificate that serves as a proof that you are skilled enough to work in any organisation in or outside Nigeria.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Qualities;