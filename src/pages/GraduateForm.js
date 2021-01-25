import {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const GraduateForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        document.title = 'Join our Graduate Track - Grazac Academy';
        window.scrollTo(0,0);
    }, []);

    return(
        <div>
            <Navbar/>
            <div>
                <div className="contact_layer">
                    <div className="container">
                        <div className="contact_layer-text">
                            <h1>Grazac Academy Graduate Accelerator</h1>
                            <p>We are bridging the gap between unemployment and entry-level jobs in the technology industry. Become employable in just 4 months by joining us today, we provide you with the right mentorship, tools and contents to upskill yourself.</p>
                        </div>
                        <div className="form">
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>First Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. John Doe" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Last Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. john@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  />
                                </div>
                            </div>
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>Mobile Number  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. John Doe" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Email  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. john@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  />
                                </div>
                            </div>
                            <div>
                                <label>Our classes will be on Monday, Wednesdays and Fridays, will you be available? </label><br/>
                                <input type="radio" className="radio-input"/>Yes
                                <input type="radio" className="radio-input" style={{marginLeft:'30px'}}/>No
                            </div>
                            <div>
                                <label>Kindly choose your preferred course  <span>*</span></label><br/>
                                <select className="input">
                                    <option>---Choose course---</option>
                                    <option>Front End Web Development (HTML, CSS and Javascript (ReactJS)</option>
                                    <option>Back End Web Development using Javascript (Nodejs)</option>
                                    <option>Product Designing (UI/UX)</option>
                                    <option>Digital Marketing</option>
                                    <option>Android Development using Kotlin</option>
                                    <option>Corporate Branding (Brand Identity Designing)</option>
                                </select>
                            </div>
                            <div>
                                <label>Kindly select a package. Our Part-time students have on-site classes only on Saturdays. </label><br/>
                                <input type="radio" className="radio-input"/>Full Time
                                <input type="radio" className="radio-input" style={{marginLeft:'30px'}}/>Part Time
                            </div>
                            <div>
                                <label>What do you expect at the end of this training?  <span>*</span></label>
                                <textarea  type="text" placeholder="Describe your task for us" value={message} onChange={e => setMessage(e.target.value)}  />
                            </div>
                            <div className="form-privacy" >
                                <p>By submitting this form your consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <span>Privacy Policy</span></p>
                                <button id="submit" >Submit</button>
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