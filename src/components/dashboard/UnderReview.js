import { useState } from "react";
import Assessment from "../Assessment";
import success from "../../images/assessment/success-assessment.png";
import fail from "../../images/assessment/fail-assessment.png";
import sorry from "../../images/assessment/sorry.png";

function UnderReview({ fname }) {
  const [showModal, setShowModal] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(false);
  const [status, setStatus] = useState();
  const handleModal = () => {
    setShowModal(true);
  };
  const handleOpenAssessment = () => {
    setShowAssessment(true);
    setShowModal(false);
  };
  const handleReload = () => {
    // sessionStorage.clear();
    // toast.info("Signing out ...");
    window.location = "/dashboard";
  };
  const handleCloseAssessment = () => {
    setShowAssessment(false);
    setShowModal(false);
  };
  
  return (
    <div>
      <h3>Hello {fname}</h3>
      <p className="text1">Thanks for applying to Grazac Academy!</p>
      <p>
        Your application has been submitted successfully and currently under
        review. Kindly take assessment to proceed to the next stage
      </p>
      <button className={"button"} onClick={handleModal}>
        Take Assessment
      </button>
      {showModal && (
        <div className="assessment-prompt">
          <div
            className="prompt-backdrop"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="prompt-content">
            <span onClick={() => setShowModal(false)}>&times;</span>
            <h2>Take Assessment</h2>
            <p>
              You are about to start your assessment, this will determine if you
              will be admitted into the academy.{" "}
            </p>
            <p>Note that you can’t cancel halfway once you click on proceed</p>
            <div className="flex ">
              <button
                style={{ backgroundColor: "white", color: "black" }}
                onClick={handleCloseAssessment}
              >
                Cancel
              </button>
              <button onClick={handleOpenAssessment}>Proceed</button>
            </div>
          </div>
        </div>
      )}
      {showAssessment && (
        <div className="assessment">
          <div className="assessment-backdrop"></div>
          <Assessment
            setShowScore={setShowScore}
            setScore={setScore}
            setStatus={setStatus}
            setShowAssessment={setShowAssessment}
          />
        </div>
      )}
      {showScore && (
        <div className="message-prompt">
          <div className="message-backdrop"></div>
          {status === "You passed!" && (
            <div className="message-content">
              {/* <span class='ass-times' onClick={() => setShowScore(false)}>&times;</span> */}
              <img src={success} alt="passed icon" />
              <h2>Congratulations</h2>
              <div className="pass">{score}%</div>
              <p>You passed your assessment</p>
              <button onClick={handleReload}>Proceed to Dashboard</button>
            </div>
          )}
          {status === "You failed." && (
            <div className="message-content">
              {/* <span onClick={() => setShowScore(false)}>&times;</span> */}
              <img src={sorry} alt="sorry image" />
              <h2>Your assessment has been received</h2>
              {/* <h3 className="fail">{score}%</h3> */}
              <p>We will be in touch soon</p>
              <button onClick={handleReload}>Go to Dashboard</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UnderReview;
