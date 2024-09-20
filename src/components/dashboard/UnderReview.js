import { useState } from "react";
import Assessment from '../Assessment'

function UnderReview ({fname}) {
    const [showModal, setShowModal] = useState(false)
    const [showAssessment, setShowAssessment] = useState(false)
    const handleModal = () => {
        setShowModal(true)
    }
    const handleOpenAssessment = () => {
        setShowAssessment(true)
        setShowModal(false)
    }
    return(
        <div>
            <h3>Hello {fname}</h3>
            <p className="text1">Thanks for applying to Grazac Academy!</p>
            <p>Your application has been submitted successfully and currently under review. Kindly take assessment to proceed to the next stage</p>
            <button className={"button"} onClick={handleModal}>Take Assessment</button>
            {showModal && <div className="assessment-prompt">
                <div className="prompt-backdrop" onClick={() => setShowModal(false)}></div>
                <div className="prompt-content">
                    <span onClick={() => setShowModal(false)}>&times;</span>
                    <h2>Take Assessment</h2>
                    <p>You are about to start your assessment, this will determine if you will be admitted into the academy. </p>
                    <p>Note that you can’t cancel halfway once you click on proceed</p>
                    <button onClick={handleOpenAssessment}>Proceed</button>
                </div>
            </div>}
            {showAssessment && <div className="assessment">
                <div className="assessment-backdrop" onClick={() => setShowAssessment(false)}></div>
                <Assessment />
            </div>}
        </div>
    )
}

export default UnderReview;