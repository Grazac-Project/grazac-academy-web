import { useEffect, useState } from "react";
import Timer from "./Timer";
import { fetchAssessment, submitAssessment } from "../api/dashboard/data";
import loader from "../images/loader-purple.gif";
import loader2 from "../images/load.gif";

const Assessment = ({
  setShowScore,
  setScore,
  setStatus,
  setShowAssessment,
}) => {
  const [assessmentData, setAssessmentData] = useState();
  const [time, setTime] = useState();
  const [selectedOption, setSelectedOption] = useState({});
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    fetchAssessment()
      .then((res) => {
        setLoading(false);
        setAssessmentData(res.data.data[0]);
        if (res.data.data[0].time) {
          setTime(res.data.data[0].time * 60);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (e, questionId) => {
    setSelectedOption((prev) => ({
      ...prev,
      [questionId]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setLoad(true);

    const values = Object.values(selectedOption);
    const data = { answers: values };
    const testId = assessmentData._id;

    submitAssessment(data, testId)
      .then((res) => {
        setLoad(false);
        setScore(res.data.data.assessmentScore);
        setShowAssessment(false);
        setShowScore(true);
        setStatus(res.data.message);
      })
      .catch(() => {
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
      {/* {showConfirmation &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Submit Assessment?</h2>
              <p className="mb-4">Are you sure you want to submit?</p>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                  onClick={() => setShowConfirmation(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
                  onClick={() => {
                    setShowConfirmation(false);
                    handleSubmit();
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>,
          document.body
        )} */}

      <div className="assessment-container">
        {loading ? (
          <div className="img-container">
            <img src={loader} alt="loader" />
          </div>
        ) : (
          <>
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

                <form className="assessment-container-form pt-20">
                  {assessmentData?.questions.map((element, i) => (
                    <div key={`${element._id}-${i}`} className="question mb-6">
                      <p className="assessment-form mb-2">
                        {i + 1}. {element.question}
                      </p>
                      <div className="options-container space-y-2">
                        {element.options.map((option, index) => (
                          <div
                            key={`${option._id}-${index}`}
                            className="option-container flex items-center gap-2"
                          >
                            <input
                              type="radio"
                              id={`${option._id}-${element._id}`}
                              name={`option-${element._id}`}
                              value={option.value}
                              checked={
                                selectedOption[element._id] === option.value
                              }
                              onChange={(e) =>
                                handleOptionChange(e, element._id)
                              }
                            />
                            <label htmlFor={`${option._id}-${element._id}`}>
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
