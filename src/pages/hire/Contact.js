import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { submitContact } from "../../api/dashboard/hire";

import telephone from "../../images/svg/telephone.svg";
import location from "../../images/svg/location.svg";
import email from "../../images/svg/email-white.svg";
import loader from "../../images/loader.gif";

function Contact() {
  const [data, setData] = useState({
    your_name: "",
    email_address: "",
    contact_number: "",
    company_name: "",
    company_website: "",
    hiring_location: "",
    subject: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const btn = document.getElementById("contact_submit");
    btn.innerHTML = `<img src=${loader} alt="loader" width="20px" />`;
    let payload = JSON.stringify({
      your_name: data.your_name,
      email_address: data.email_address,
      subject: data.subject,
      inquiry: data.inquiry,
      contact_number: data.contact_number,
      company_name: data.contact_number,
      company_website: data.company_website,
      hiring_location: data.hiring_location,
    });

    console.log(payload);
    submitContact(payload)
      .then((response) => response)
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          alert(`${resp.data.message}`);
          document.getElementById("contact_form").reset();
        } else {
          alert(
            `Something went wrong, please try again!!! Message: ${resp.data.message}`
          );
        }
        btn.innerHTML = `Send Message`;
      })
      .catch((err) => {
        console.log(err);
        alert(`Something went wrong, please try again!!!`);
        btn.innerHTML = `Send Message`;
      });
  };

  return (
    <div className="hire-bg">
      <Navbar />
      <div className="hire">
        <Container>
          <div className="hire_contact">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="hire_contact-text">
                    <h2>Get In Touch</h2>
                    <p className="hire_contact-text-1">
                      Fill up the form and our support staff will get back to
                      you as soon as possible
                    </p>
                    <div className="hire_contact-text-box">
                      <div className="hire_contact-text-box-flx">
                        <img src={telephone} alt="icon" />
                        <p>+234 806 836 5951</p>
                      </div>
                    </div>
                    <div className="hire_contact-text-box">
                      <div className="hire_contact-text-box-flx">
                        <img src={email} alt="icon" />
                        <p>support@grazacacademy.com</p>
                      </div>
                    </div>
                    <div className="hire_contact-text-box">
                      <div className="hire_contact-text-box-flx">
                        <img src={location} alt="icon" />
                        <p>
                          PROHUB, Suite 302, Salawu Olabode Avenue, Ewang Road,
                          Idi Aba, Abeokuta, Ogun State.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="hire_contact-form">
                    <form onSubmit={submitForm} id="contact_form">
                      <input
                        type="text"
                        required
                        name="your_name"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        required
                        name="contact_number"
                        placeholder="Contact Number"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        required
                        name="company_name"
                        placeholder="Company Name"
                        onChange={handleChange}
                      />

                      <input
                        type="text"
                        required
                        name="company_website"
                        placeholder="Company Website"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        required
                        name="hiring_location"
                        placeholder="Hiring Location"
                        onChange={handleChange}
                      />

                      <input
                        type="email"
                        required
                        name="email_address"
                        placeholder="Email Address"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        required
                        name="subject"
                        placeholder="Subject"
                        onChange={handleChange}
                      />
                      <textarea
                        placeholder="Message"
                        name="inquiry"
                        required
                        rows="6"
                        onChange={handleChange}
                      />
                      <button type="submit" id="contact_submit">
                        Send Message
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
