import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { submitContact } from "../../api/dashboard/hire";

import telephone from "../../images/svg/telephone.svg";
import location from "../../images/svg/location.svg";
import email from "../../images/svg/email-white.svg";


function Contact () {
    const [data, setData] = useState({
        your_name: '',
        email_address: '',
        subject: '',
        inquiry: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const submitForm = (e) => {
        e.preventDefault();
        let payload = JSON.stringify({data});
        submitContact(payload)
            .then(response => response)
            .then(resp => {
                console.log(resp);
                if(resp.status===200){
                    // setTalents(resp.data.result)
                } else {
                    alert(`Something went wrong, please try again!!! Message: ${resp.data.message}`)
                }
            })
            .catch(err => {
                console.log(err)
                alert(`Something went wrong, please try again!!!`)
            })
    };

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
                                        <form onSubmit={submitForm}>
                                            <input type="text" name="your_name" placeholder="Your Name" onChange={handleChange} />
                                            <input type="email" name="email_address" required placeholder="Email Address" onChange={handleChange} />
                                            <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
                                            <textarea placeholder="Message" name="inquiry" required rows="6" onChange={handleChange} />
                                            <button type="submit">Send Message</button>
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