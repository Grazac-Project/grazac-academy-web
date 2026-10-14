import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Facebook from "../images/svg/facebook.svg";
import Instagram from "../images/svg/instagram.svg";
import Twitter from "../images/svg/twitter.svg";
import Youtube from "../images/svg/youtube.svg";

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        document.title = 'Contact - Grazac Academy';
        window.scrollTo(0,0);
    }, []);

    const handleSubmit = () => {
        if(name.length && email.length && subject.length && message.length) {
            const btn = document.querySelector('#submit');
            btn.setAttribute('disabled', '');
            btn.textContent = 'Submitting...';
            axios.post('http://grazacacademy.com/contact/create', {
                name: name,
                email: email,
                subject: subject,
                message: message
            })
            .then(resp => resp.data)
            .then(response => {
                if(response.success === true) {
                    btn.removeAttribute('disabled');
                    btn.textContent = 'Submit';
                    alert(response.msg);
                    setName(''); setEmail(''); setSubject(''); setMessage('');
                } else {

                }
            })
            .catch((err) => {
                
            });
        } else {
            alert('Invalid input');
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="contact">
                <div className="contact_layer">
                    <div className="container">
                        <div className="contact_layer-text">
                            <h1>Get In Touch</h1>
                            <p>We want to hear from you. Let us know how we can help</p>
                        </div>
                        {/*<div classname="contact_layer-circles">
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-1" />
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-2" />
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-3" />
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-4" />
                        </div>*/}
                        <div className="contact_hero">
                            <div className="contact_hero-flexdiv">
                                <div className="contact_hero-flexdiv-1" >
                                    <label>Full Name  <span>*</span></label>
                                    <input type="text" placeholder="ex. John Doe" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="contact_hero-flexdiv-2">
                                    <label>Email  <span>*</span></label>
                                    <input type="text" placeholder="ex. john@gmail.com" value={email} onChange={e => setEmail(e.target.value)}  />
                                </div>
                            </div>
                            <div>
                                <label>Subject  <span>*</span></label>
                                <input  type="text" placeholder="ex. John Doe" value={subject} onChange={e => setSubject(e.target.value)}  />
                            </div>
                            <div>
                                <label>Message  <span>*</span></label>
                                <textarea  type="text" placeholder="Describe your task for us" value={message} onChange={e => setMessage(e.target.value)}  />
                            </div>
                            <div className="contact_hero-privacy" >
                                <p>By submitting this form your consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <span>Privacy Policy</span></p>
                                <button id="submit" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact_campus">
                        <div className="contact_campus-intro">
                            <h2>Campus Inquiries</h2>
                            <p>Connect with Us</p>
                        </div>
                        <div className="contact_campus-main">
                            <div className="contact_campus-main-div boxes33">
                                <h3>Office</h3>
                                <p>PROHUB, Salawu Olabode Avenue, Ewang Road, </p>
                                <p>Idi-aba, 110124, Abeokuta</p>
                                <p>+234 806 836 5951</p>
                            </div>
                            <div className="contact_campus-main-div boxes33">
                                <h3>Book A Call</h3>
                                <p>We are here to help with any questions. </p>
                                <p>Talk to our programme leads.</p>
                                <div style={{display:'flex'}}>
                                    <a href="tel:+2348068365951" ><div className="nav__btn--text">Book a Call</div></a>
                                </div>
                            </div>
                            <div className="contact_campus-main-div boxes33">
                                <h3>Social Media</h3>
                                <div className="social">
                                    <img src={Facebook} alt="social"/>
                                </div>
                                <div className="social">
                                    <img src={Twitter} alt="social"/>
                                </div>
                                <div className="social">
                                    <img src={Youtube} alt="social"/>
                                </div>
                                <div className="social">
                                    <img src={Instagram} alt="social"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <iframe title="Grazac campus location" src="https://www.google.com/maps/d/embed?mid=16NZ9a9VhKkk2-5nnYEdL93mxq7kjDZLT" width="100%" height="600"></iframe>
                </div>
                {/*<extracomponent/> a component used in the landing page comes here*/}
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;