import {useEffect, useRef, useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GraduateForm = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ plan, setPlan] = useState('');
    const [availability, setAvailability] = useState('');
    const [amount, setAmount] = useState('');
    const [course, setCourse] = useState('');
    const [ message, setMessage ] = useState('');
    const [fetchCourses, setFetched] = useState([]);
    const formInfo = useRef();

    useEffect(() => {
        document.title = 'Join our Graduate Track - Grazac Academy';
        window.scrollTo(0,0);
        fetch('https://grazacacademy.com/courses/graduate',)
            .then(resp => resp.json())
            .then(resp => {
                setFetched(resp.data);
            })
            .catch(error => {
                console.log('An error occurred when fetching course details, refreshing...')
                window.location.reload();
            })
    }, []);

    const courseChange = (e) => {
        setCourse(e.target.value)
        var rc = e.target.options[e.target.selectedIndex].dataset.index;
        setAmount( fetchCourses[rc].discounted_tuition );
    }

    const onSubmit = () => {
        window.scroll(0, formInfo.current.offsetTop);
        document.querySelector(".form-info").textContent = "Submitting, please wait..."
        document.querySelector("#submit-btn").disabled = true;

        if(amount){
            document.querySelector()
            fetch('https://grazacacademy.com/graduate/register', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname:firstname,
                    lastname: lastname,
                    email:email,
                    phone:phone,
                    availability:availability,
                    course:course,
                    package:plan,
                    expectation:message,
                })
           })
            .then(resp => resp.json())
            .then(data => {
                    if (data.success === true){
                        document.querySelector(".form-info").textContent = "Your registration was successful, To complete your registration, check your mailbox for further details";
                        document.querySelector("#submit-btn").disabled = true;
                        setFirstName("");
                        setLastName("")
                        setMessage("")
                        setPhone("")
                        setEmail("")
                        setCourse("")
                    }
                })
                .catch(err => {
                    document.querySelector(".form-info").textContent = "Something went wrong, please try again";
                    document.querySelector("#submit-btn").disabled = false;
                })
        } else {
            alert('Please select a course');
        }
    }

    return(
        <div>
            <Navbar/>
            <div>
                <div className="contact_layer">
                    <div className="form_top">
                        <div>
                            <h1>Grazac Academy Graduate Accelerator</h1>
                            <p>We are bridging the gap between unemployment and entry-level jobs in the technology industry.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="form">
                            <div className="form-info">Note: Fields with <span>*</span> are required</div>
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1">
                                    <label>First Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. John" value={firstname} onChange={e => setFirstName(e.target.value)} required/>
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Last Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. Doe" value={lastname} onChange={e => setLastName(e.target.value)} required  />
                                </div>
                            </div>
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>Mobile Number  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. 08133333333" value={phone} onChange={e => setPhone(e.target.value)} required />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Email  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. john@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  required />
                                </div>
                            </div>
                            <div>
                                <label>Our classes will be on Monday, Wednesdays and Fridays, will you be available? </label><br/>
                                <label><input
                                    type="radio"
                                    className="radio-input"
                                    id="yes"
                                    name="availability"
                                    value="1"
                                    checked={availability === "1"}
                                    onChange={(e) => setAvailability(e.target.value)}
                                />Yes</label>
                                <label><input
                                    type="radio"
                                    className="radio-input"
                                    id="no"
                                    name="availability"
                                    value="0"
                                    checked={availability === "0"}
                                    onChange={(e) => setAvailability(e.target.value)}
                                    style={{marginLeft:'30px'}}
                                />No</label>
                            </div>
                            <div>
                                <label>Kindly choose your preferred course  <span>*</span></label><br/>
                                <select className="input" onChange={courseChange}>
                                    <option>---Choose course---</option>
                                    {
                                        fetchCourses.map((item,index) => (
                                            <option key={index} data-index={index}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label>Amount</label><br/>
                                <p className="show-amount">
                                    ₦{
                                        (amount) ? new Intl.NumberFormat().format(amount) : '0'
                                    }
                                </p>
                            </div>
                            <div>
                                <label>Kindly select a package. Our Part-time students have on-site classes only on Saturdays. </label><br/>
                                <label><input
                                    type="radio"
                                    className="radio-input"
                                    id="full-time"
                                    name="plan"
                                    value="full-time"
                                    checked={plan === "full-time"}
                                    onChange={(e) => setPlan(e.target.value)}
                                />Full time</label>
                                <label><input
                                    type="radio"
                                    className="radio-input"
                                    id="part-time"
                                    name="plan"
                                    value="part-time"
                                    checked={plan === "part-time"}
                                    onChange={(e) => setPlan(e.target.value)}
                                    style={{marginLeft:'30px'}}
                                />Part time</label>
                            </div>
                            <div>
                                <label>What do you expect at the end of this training?  <span>*</span></label>
                                <textarea  type="text" placeholder="Say something ..." value={message} onChange={e => setMessage(e.target.value)}  />
                            </div>
                            <div className="form-privacy" >
                                <a id="submit" className="download-brochure" onClick={onSubmit} id="submit-btn">Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default GraduateForm;