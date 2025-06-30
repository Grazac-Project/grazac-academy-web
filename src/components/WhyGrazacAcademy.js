import why1 from "../images/svg/why1.svg";
import why2 from "../images/svg/why2.svg";
import why3 from "../images/svg/why3.svg";
import why4 from "../images/svg/why4.svg";

const WhyGrazacAcademy = () => {
  return (
    <div>
              <div>
                {/* <Container> */}
                <div className="course_mode-intro course_mode-intro">
                  <h2 style={{ margin: "80px 0 30px" }} className="join_heading">
                    Why Grazac Academy <br className="hide-at-600" />
                    is the best for you
                  </h2>
                </div>
                {/* </Container> */}
              </div>
      
              {/* <div style={{ boxSizing: "border-box", margin: "0 0 0px" }}> */}
              <div className="join_container">
                {/* <Container> */}
                {/* <Row> */}
                {/* <Col md={6}> */}
                <div className="join_box1">
                  <div className="">
                    <img src={why1} alt="profile" />
                  </div>
                  <h4>There are no learning barriers </h4>
                  <p className="hire_dev-grey">
                    We make starting a career in tech accessible to anyone. Whether
                    you are a graduate or you are an undergraduate; whether you are
                    young or old, and no matter your experience level - our model,
                    courses, and community has been designed to make you feel
                    comfortable and fully engaged in the learning process.
                  </p>
                </div>
                {/* </Col> */}
                {/* <Col md={6}> */}
                <div className="join_box1">
                  <div className="">
                    <img src={why2} alt="profile" />
                  </div>
                  <h4>Expert Instructors</h4>
                  <p className="hire_dev-grey">
                    Our tech academy is home to a team of industry-leading experts who
                    are not just educators but also practitioners in their respective
                    fields. They bring real-world experience, insights, and up-to-date
                    knowledge to every lesson, ensuring you receive the highest
                    quality education.
                  </p>
                </div>
                {/* </Col> */}
                {/* </Row> */}
                {/* <Row> */}
                {/* <Col md={6}> */}
                <div className="join_box1">
                  <div className="">
                    <img src={why3} alt="profile" />
                  </div>
                  <h4> 6-months Internship</h4>
                  <p className="hire_dev-grey">
                    Get real workplace experience. You stand a chance to work with
                    amazing teams on real-life projects to solve related problems so
                    you can build your portfolio for 6-months.
                  </p>
                </div>
                {/* </Col> */}
                {/* <Col md={6}> */}
                <div className="join_box1">
                  <div className="">
                    <img src={why4} alt="profile" />
                  </div>
                  <h4> Career-Ready Certification</h4>
                  <p className="hire_dev-grey">
                    Our programs are designed to prepare you for the workforce. Upon
                    completion, you'll receive industry-recognized certifications that
                    validate your skills and open doors to exciting job opportunities
                  </p>
                </div>
                {/* </Col> */}
                {/* </Row> */}
                {/* </Container> */}
              </div>
    </div>
  )
}

export default WhyGrazacAcademy