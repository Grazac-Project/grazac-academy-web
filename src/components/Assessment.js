import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import { assignAssessment, submitAssessment } from "../api/dashboard/data";
import loader from "../images/loader-purple.gif";
import loader2 from "../images/load.gif";

const Assessment = ({
  setShowScore,
  setScore,
  setStatus,
  setShowAssessment,
}) => {
  const [assignment, setAssignment] = useState();
  const assessmentData = assignment?.test;
  const time = assignment
    ? (Date.parse(assignment.expiresAt) - Date.parse(assignment.startedAt)) / 1000
    : undefined;
  const [assignmentError, setAssignmentError] = useState("");
  const [selectedOption, setSelectedOption] = useState({});
  const submitting = useRef(false);
  const pendingSubmission = useRef();
  const completed = useRef(false);
  const [submissionError, setSubmissionError] = useState("");
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    assignAssessment()
      .then((res) => {
        const assigned = res.data?.data;
        if (
          !assigned?.attemptId ||
          !assigned.test?.id ||
          !Array.isArray(assigned.test.questions) ||
          !Number.isFinite(Date.parse(assigned.startedAt)) ||
          !Number.isFinite(Date.parse(assigned.expiresAt))
        ) {
          setAssignmentError("Unable to load your assigned assessment.");
          return;
        }
        setAssignment(assigned);
      })
      .catch((error) => {
        const response = error.response?.data;
        setAssignmentError(
          response?.code === "attempt_already_passed"
            ? "You already passed this assessment. An administrator must reset your attempt."
            : response?.message || "Unable to load your assigned assessment. Please try again later."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const handleOptionChange = (e, questionId) => {
    setSelectedOption((prev) => ({
      ...prev,
      [questionId]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (submitting.current || completed.current || !assessmentData) return;

    const orderedSelections = assessmentData.questions.map(
      (question) => selectedOption[question.id]
    );
    const signature = JSON.stringify(orderedSelections);
    if (pendingSubmission.current?.signature !== signature) {
      const bytes = window.crypto.getRandomValues(new Uint8Array(16));
      pendingSubmission.current = {
        signature,
        payload: {
          answers: orderedSelections.filter((answer) => answer !== undefined),
          idempotencyKey: Array.from(bytes, (byte) =>
            byte.toString(16).padStart(2, "0")
          ).join(""),
        },
      };
    }

    submitting.current = true;
    setLoad(true);
    setSubmissionError("");

    submitAssessment(pendingSubmission.current.payload)
      .then((res) => {
        if (completed.current) return;
        completed.current = true;
        setScore(res.data.data.assessmentScore);
        setShowAssessment(false);
        setShowScore(true);
        setStatus(res.data.message);
      })
      .catch((error) => {
        const response = error.response?.data;
        if (response?.code === "incomplete") {
          setSubmissionError(
            `Answer every question before you submit. Expected ${response.data.expected} answers; received ${response.data.received}.`
          );
        } else if (response?.code === "no_active_attempt") {
          setSubmissionError("No active assessment attempt. Please reopen the assessment.");
        } else if (response?.code === "payment_option_required") {
          setSubmissionError("Choose a payment option before you submit the assessment.");
        } else {
          setSubmissionError(
            response?.message || "Unable to submit your assessment. Please try again."
          );
        }
      })
      .finally(() => {
        submitting.current = false;
        setLoad(false);
      });
  };

  const handleTimeUp = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("time_left");
    }
    handleSubmit(new Event("submit"));
  };

  return (
    <>
      <div className="assessment-container">
        {loading ? (
          <div className="img-container">
            <img src={loader} alt="loader" />
          </div>
        ) : assignmentError ? (
          <p role="alert" className="assessment-form px-4 py-6">
            {assignmentError}
          </p>
        ) : (
          <>
            {submissionError && (
              <p role="alert" className="assessment-form px-4 py-6">
                {submissionError}
              </p>
            )}
            {showConfirmation ? (
              // confirmation replaces assessment
              <div className="flex items-center justify-center w-full mt-48">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-10">
                  <h2 className="text-[15px] font-semibold mb-4 text-center">
                    Are you sure you want to submit?
                  </h2>
                  <p className="mb-4 font-bold text-[20px] text-center">
                    Once submitted, you will not be able to change your answers
                  </p>
                  <div className="flex justify-center ">
                    <button
                      type="button"
                      className="px-4 py-2 rounded text-primary bg-white"
                      onClick={() => setShowConfirmation(false)} // back to assessment
                    >
                      Go back
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
                      onClick={() => {
                        setShowConfirmation(false);
                        handleSubmit();
                      }}
                      disabled={load}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // assessment form
              <>
                <div className="assessment-container-timer sticky top-[-30px] w-full bg-white z-40 py-6 flex items-center justify-between px-4 shadow">
                  <h2>Assessment</h2>
                  {time && <Timer initialTime={time} onTimeUp={handleTimeUp} />}
                </div>

                <form className="assessment-container-form">
                  {assessmentData?.questions.map((element, i) => (
                    <div key={element.id} className="question mb-6">
                      <p className="assessment-form mb-2">
                        {i + 1}. {element.question}
                      </p>
                      <div className="options-container space-y-2">
                        {element.options.map((option) => (
                          <div
                            key={option.id}
                            className="option-container flex items-center gap-2"
                          >
                            <input
                              type="radio"
                              id={`${option.id}-${element.id}`}
                              name={`option-${element.id}`}
                              value={option.value}
                              checked={
                                selectedOption[element.id] === option.value
                              }
                              onChange={(e) =>
                                handleOptionChange(e, element.id)
                              }
                            />
                            <label htmlFor={`${option.id}-${element.id}`}>
                              {option.option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {assessmentData && (
                    <button
                      type="button"
                      className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                      onClick={() => setShowConfirmation(true)}
                      disabled={load}
                    >
                      {load ? (
                        <img src={loader2} alt="loading" className="h-5" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  )}
                </form>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Assessment;
