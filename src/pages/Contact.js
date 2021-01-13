import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";

import Facebook from "../images/svg/facebook.svg";
import Instagram from "../images/svg/instagram.svg";
import Twitter from "../images/svg/twitter.svg";
import Youtube from "../images/svg/youtube.svg";
import kamala from "../images/kamala.jpg";

//name
//

const Contact = () => {
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
                        <div classname="contact_layer-circles">
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-1" />
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-2" />
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-3" />
                            <img src={kamala} alt="kamala"  classname="contact_layer-circles-4" />
                        </div>
                        <div className="contact_hero">
                            <div className="contact_hero-flexdiv">
                                <div className="contact_hero-flexdiv-1" >
                                    <label>Full Name  <span>*</span></label>
                                    <input type="text" placeholder="ex. John Doe" />
                                </div>
                                <div className="contact_hero-flexdiv-2">
                                    <label>Mail  <span>*</span></label>
                                    <input type="text" placeholder="ex. john@gmail.com" />
                                </div>
                            </div>
                            <div>
                                <label>Select a Subject  <span>*</span></label>
                                <input  type="text" placeholder="ex. John Doe" />
                            </div>
                            <div>
                                <label>Message  <span>*</span></label>
                                <textarea  type="text" placeholder="Describe your task for us" />
                            </div>
                            <div className="contact_hero-privacy" >
                                <p>By submitting this form your consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <span>Privacy Policy</span></p>
                                <button>Explore Courses</button>
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
                        </div>
                        <div className="contact_campus-main">
                            <div className="contact_campus-main-div boxes33">
                                <h3>Office</h3>
                                <p>PROHUB, Salawu Olabode Avenue, Ewang Road, </p>
                                <p>Idi-aba, 110124, Abeokuta</p>
                                <p>0906 133 3395</p>
                            </div>
                            <div className="contact_campus-main-div boxes33">
                                <h3>Book A Call</h3>
                                <p>We are here to help with any questions. </p>
                                <p>Talk to our programme leads.</p>
                                <div style={{display:'flex'}}>
                                    <PrimaryBtn>Book A Call</PrimaryBtn>
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
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=PROHUB,%20Salawu%20Olabode%20Avenue,%20Ewang%20Road,%20Idi-aba,%20110124,%20Abeokuta%20Abeokuta+(Grazac%20Office)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                {/*<extracomponent/> a component used in the landing page comes here*/}
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;