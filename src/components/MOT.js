import sprint from "../images/sprint.png";
import quote from "../images/svg/quote.svg";
import portfolio from "../images/svg/portfolio.svg";
import handshake from "../images/svg/handshake.svg";
import document from "../images/svg/document.svg";
import classroom from "../images/svg/classroom.svg";
// import Pricing, { priceData } from "./NewPrice/pricing";

const ModeOfTeaching = (_) => {
  return (
    <div className="course_mode">
      <div className="container">
        <div className="course_wwd-intro">
          <h4>What we do</h4>
          <h2>Mode Of Learning</h2>
          <p>
            We have designed strategic pathways that will fast track your
            learning curve.
          </p>
        </div>
        <div className="course_mode-container">
          <div className="">
            <div>
              <div className="boxes">
                <div className="svg-box">
                  <img src={classroom} alt="mode of learning" />
                </div>
                <h3>Instructor-led live classes</h3>
                <p className="lenght1">
                  Join other students in our classes (physically or virtually)
                  with experts in the industry.
                </p>
              </div>
              <div className="boxes">
                <div className="svg-box">
                  <img src={portfolio} alt="mode of learning" />
                </div>
                <h3>Networking</h3>
                <p className="lenght1">
                  Collaborate and communicate by exchanging ideas with other
                  students of same interest to facilitate your career and build
                  a community.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div className="boxes">
                <div className="svg-box">
                  <img src={document} alt="mode of learning" />
                </div>
                <h3>Project Based Learning</h3>
                <p className="lenght1">
                  Opportunity to work on real-life projects by applying what you
                  learn to enhance your skills and solve related problems.
                </p>
              </div>
              <div className="boxes">
                <div className="svg-box">
                  <img src={handshake} alt="mode of learning" />
                </div>
                <h3>Mentorship Access</h3>
                <p className="lenght1">
                  Access to counselling and personalized guidance from mentors
                  and thought leaders in your field that will increase your
                  visibility to other employers.
                </p>
              </div>
            </div>
          </div>
          <div className="mode-pic">
            {/* <img src={sprint} alt="jdgkj" style={{width:'100%'}} /> */}
          </div>
        </div>
        {/* <div className="price-data">
          {priceData.map((item, i) => (
            <Pricing {...item} key={i} />
          ))}
        </div> */}
        {/* <div className="course_mode-quote">
          <img src={quote} alt="quote" />
          <p>
            I've known Grazac for over a year now and having worked with some of
            their successful students, I can boldly say the competency and
            problem solving skills of their students is top-notch and their
            academy is one of the best academy promoting technology skills
            acquisition here in Nigeria
          </p>
          <span>Samson Adedamola - Consultant at Kudi</span>
        </div>  */}
      </div>
    </div>
  );
};
export default ModeOfTeaching;
