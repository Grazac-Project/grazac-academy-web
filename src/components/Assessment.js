import { useEffect, useState } from 'react';
import Timer from './Timer'
import { fetchAssessment, submitAssessment } from '../api/dashboard/data';
import loader from '../images/loader-purple.gif'
import loader2 from '../images/load.gif'

const Assessment = ({setShowScore, setScore, setStatus, setShowAssessment}) => {
    const [assessmentData, setAssessmentData] = useState()
    const [time, setTime] = useState()
    const [selectedOption, setSelectedOption] = useState({});
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        // setLoading(true)
        fetchAssessment()
        .then(res => {
            // console.log(res);
            setLoading(false)
            setAssessmentData(res.data.data[0])
            if(res.data.data[0].time){
                setTime(res.data.data[0].time * 60)
            }
        })
        .catch(err => {
            setLoading(false)
            // console.log(err)
        })
    }, [])
    const handleOptionChange = (e, questionId) => {
        setSelectedOption((prev) => ({
          ...prev,
          [questionId]: e.target.value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoad(true)
        const values = Object.values(selectedOption)
        // console.log(values)
        const data = {answers: values}
        // console.log(data)
        const testId = assessmentData._id
        submitAssessment(data, testId)
        .then(res => {
            // console.log(res);
            setLoad(false)
            setScore(res.data.data.assessmentScore)
            setShowAssessment(false)
            setShowScore(true)
            setStatus(res.data.message) 
        })
        .catch(err => {
            setLoad(false)
            // console.log(err);
        })
        // console.log(values);
        
      }
    // console.log(typeof assessmentData.time)
    // const time = assessmentData.time * 60;
    // const time = 60;

    const handleTimeUp = () => {
        if(typeof window != 'undefined') {
          sessionStorage.removeItem('time_left');
        }
        handleSubmit(new Event('submit'))
        // setShowModal(true);
      };
    //   console.log(selectedOption);
      
  return (
    <div className='assessment-container'>
        {loading?<div className='img-container'><img src={loader} alt='loader' /></div>:<>
            <div className='assessment-container-timer'>
                <h2>Assessment</h2>
                <Timer initialTime={time} onTimeUp={handleTimeUp}/>
            </div>
            <form className='assessment-container-form' onSubmit={handleSubmit}>
                {assessmentData?.questions.map((element, i) => {
                    return (
                        // <div key={`${i}-${i}`} className='question'>
                        <div key={`${element._id}-${i}`} className='question'>
                            <p className='assessment-form'>{i+1}. {element.question}</p>
                            <div className='options-container'>
                                {element.options.map((option, index) => {
                                    return (
                                        <div key={`${option._id}-${index}`} className='option-container'>
                                            <input type='radio' id={`${option._id}-${element._id}`} name={`option-${element._id}`} value={option.value}
                                                checked={selectedOption[element._id] === option.value}
                                                onChange={e => handleOptionChange(e, element._id)}
                                            />
                                            <label htmlFor={`${option._id}-${element._id}`}>{option.option}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                {assessmentData && <button id='button'>{load?<img src={loader2} alt='loading' />:'Submit'}</button>}
            </form>
        </>}
    </div>
  )
}

export default Assessment