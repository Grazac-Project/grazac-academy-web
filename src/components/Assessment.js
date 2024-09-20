import Timer from './Timer'

const Assessment = () => {
    const apiData = [{
        question: 'how are you doing',
        options: [{option: 'hello', _id: 1}, {option: 'hi', _id: 2}],
        _id: 1
    }, {
        question: 'how are you doing',
        options: [{option: 'hello', _id: 1}, {option: 'hi', _id: 2}],
        _id: 1
    }]
    const time = 600;
    const handleTimeUp = () => {
        if(typeof window != 'undefined') {
          sessionStorage.removeItem('time_left');
        }
        // handleSubmit(new Event('submit'), [])
        // setShowModal(true);
      };
  return (
    <div className='assessment-container'>
        <div className='assessment-container-timer'>
            <h2>Assessment</h2>
            <Timer initialTime={time} onTimeUp={handleTimeUp}/>
        </div>
        <form className='assessment-container-form'>
            {apiData.map((element, i) => {
                return (
                    <div key={`${i}-${i}`} className='question'>
                        <p className='assessment-form'>{i+1}. {element.question}</p>
                        <div className='options-container'>
                            {element.options.map((option, index) => {
                                return (
                                    <div className='option-container'>
                                        <input type='radio' id={`${option._id}-${element._id}`} name={`option-${element._id}`}/>
                                        <label htmlFor={`${option._id}-${element._id}`}>{option.option}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <button id='button'>Submit</button>
        </form>
    </div>
  )
}

export default Assessment