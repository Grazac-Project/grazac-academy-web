import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import telephone from "../../images/svg/telephone.svg";
import location from "../../images/svg/location.svg";
import email from "../../images/svg/email-white.svg";


function Contact () {
    return(
        <div className="hire-bg">
            <Navbar/>
            <div className="hire">
                <Container>
                    <div className="hire_contact">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <div className="hire_contact-text">
                                        <h2>Get In Touch</h2>
                                        <p className="hire_contact-text-1">Fill up the form and  our support staff will get back to you as soon as possible</p>
                                        <div className="hire_contact-text-box">
                                            <div className="hire_contact-text-box-flx">
                                                <img src={telephone} alt="icon" />
                                                <p>917q83612368</p>
                                            </div>
                                        </div>
                                        <div className="hire_contact-text-box">
                                            <div className="hire_contact-text-box-flx">
                                                <img src={email} alt="icon" />
                                                <p>917q83612368</p>
                                            </div>
                                        </div>
                                        <div className="hire_contact-text-box">
                                            <div className="hire_contact-text-box-flx">
                                                <img src={location} alt="icon" />
                                                <p>PROHUB, Suite 302, Salawu Olabode Avenue, Ewang Road, Idi Aba, Abeokuta, Ogun State.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="hire_contact-form">
                                        <form>
                                            <input type="text" placeholder="Your Name" />
                                            <input type="email" placeholder="Email Address" />
                                            <input type="text" placeholder="Subject" />
                                            <textarea placeholder="Message" rows="6" />
                                            <button>Send Message</button>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;