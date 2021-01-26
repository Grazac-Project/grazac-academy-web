import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const UndergraduateForm = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [institution, setInstitution] = useState('');
    const [availability, setAvailability] = useState('');
    const [course, setCourse] = useState('');
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        document.title = 'Join our Undergraduate Track - Grazac Academy';
        window.scrollTo(0,0);
        console.log(availability)
    }, []);

    return(
        <div>
            <Navbar/>
            <div>
                <div className="contact_layer">
                    <div className="container">
                        <div className>

                        </div>
                        <div className="contact_layer-text">
                            <h1>Grazac Academy Undergraduate Accelerator</h1>
                            <p>We are bridging the gap between unemployment and entry-level jobs in the technology industry. Become employable in just 4 months by joining us today, we provide you with the right mentorship, tools and contents to upskill yourself.</p>
                        </div>
                        <div className="form">
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>First Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. John" value={firstname} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Last Name  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. Doe" value={lastname} onChange={e => setLastName(e.target.value)}  />
                                </div>
                            </div>
                            <div className="form-flexdiv">
                                <div className="form-flexdiv-1" >
                                    <label>Mobile Number  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. 08133333333" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div className="form-flexdiv-2">
                                    <label>Email  <span>*</span></label>
                                    <input className="input" type="text" placeholder="ex. john@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  />
                                </div>
                            </div>
                            <div>
                                <label>Select your institution  <span>*</span></label><br/>
                                <select className="input" onChange={e => setInstitution(e.target.value)}>
                                    <option>---Choose institution---</option>
                                    <option>Federal University of Agriculture, Abeokuta (FUNAAB)</option>
                                    <option>Federal College of Education, Osiele Abeokuta (FCE)</option>
                                    <option>Olabisi Onabanjo University (AGO-IWOYE)</option>
                                    <option>Olabisi Onabanjo University (IBOGUN)</option>
                                    <option>University of Ibadan (UI)</option>
                                    <option>Obafemi Awolowo University (OAU)</option>
                                </select>
                            </div>
                            <div>
                                <label>Our classes will be on Weekends, will you be available ? </label><br/>
                                <input type="radio" name="availability" value="yes" className="radio-input" onClick={e => setAvailability(e.target.value)}/>Yes
                                <input type="radio" name="availability" value="no" className="radio-input" onClick={e => setAvailability(e.target.value)} style={{marginLeft:'30px'}}/>No
                            </div>
                            <div>
                                <label>Kindly choose your preferred course  <span>*</span></label><br/>
                                <select className="input">
                                    <option>---Choose course---</option>
                                    <option>Front End Web Development (HTML, CSS and Javascript (ReactJS)</option>
                                    <option>Back End Web Development using Javascript (Nodejs)</option>
                                    <option>Product Designing (UI/UX)</option>
                                    <option>Android Development using Kotlin</option>
                                    <option>Corporate Branding (Brand Identity Designing)</option>
                                </select>
                            </div>
                            <div>
                                <label>What do you expect at the end of this training?  <span>*</span></label>
                                <textarea  type="text" placeholder="Describe your task for us" value={message} onChange={e => setMessage(e.target.value)}  />
                            </div>
                            <div className="form-privacy" >
                                <a id="submit" className="download-brochure">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UndergraduateForm;