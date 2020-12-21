import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateAccount from '../components/CreateAccount';
import PrimaryBtn from "../components/PrimaryBtn";

import Facebook from "../images/svg/facebook.svg"
import Instagram from "../images/svg/instagram.svg"
import Twitter from "../images/svg/twitter.svg"
import Youtube from "../images/svg/youtube.svg"

const Contact = () => {
    return(
        <div>
            <Navbar/>
            <div className="contact">
                <div className="contact_layer">
                    <div className="container">
                        <div className="contact_hero">
                            <div className="contact_hero_first">
                                <h1>Have <br/>questions<br/>about Grazac<br/>Academy?</h1>
                                <p>If you have questions about one of Grazac Academy’s study center and courses, please contact us using the form.</p>
                            </div>
                            <div className="contact_hero_second">
                                <div className="contact_hero_insecond">
                                    <input type="text" name="first_name" placeholder="First Name*" />
                                    <input type="text" name="last_name" placeholder="Last Name*" />
                                </div>
                                <input type="text" name="email" placeholder="Email Address*" />
                                <textarea placeholder="Message*" />
                                <div className="contact_hero_second-btn">
                                    <PrimaryBtn>Get Started</PrimaryBtn>
                                    <p>We'll get back to you in 1-2 business days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact_campus">
                        <div className="contact_campus-intro">
                            <h4>What we do</h4>
                            <h2>Campus Inquiries</h2>
                            <p>Connect with Us</p>
                            <div className="contact_campus-intro-grey-box"></div>
                        </div>
                        <div className="contact_campus-main">
                            <div className="contact_campus-main-div">
                                <h3>Office</h3>
                                <p>PROHUB, Salawu Olabode Avenue, Ewang Road, </p>
                                <p>Idi-aba, 110124, Abeokuta</p>
                                <p>0906 122 3395</p>
                            </div>
                            <div className="contact_campus-main-div">
                                <h3>Book A Call</h3>
                                <p>We are here to help with any questions. </p>
                                <p>Talk to our programme leads.</p>
                                <div style={{display:'flex'}}>
                                    <PrimaryBtn>Book A Call</PrimaryBtn>
                                </div>
                            </div>
                            <div className="contact_campus-main-div">
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
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=PROHUB,%20Salawu%20Olabode%20Avenue,%20Ewang%20Road,%20Idi-aba,%20110124,%20Abeokuta%20Abeokuta+(Grazac%20Office)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <CreateAccount/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;