import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Accordion, Card} from 'react-bootstrap';
import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = () => {
    React.useEffect(() => {
        document.title = 'FAQs - Grazac Academy';
        window.scrollTo(0,0);
    },[]);
    
    const handleFaq = (e) => {
        var icon = e.target.querySelector('img');
        //console.log(icon.classList);
        icon.classList.toggle("faq-icon_transition")  
    }
    
    return(
        <div>
            <Navbar/>
            <div>
                {/* FAQ section */}
                <div className="landing_faq">
                    <div className="container">
                        <h1>FAQs - Frequently Asked Questions:</h1>
                        <div>
                        <Accordion defaultActiveKey="0">
                            <h3>Academy</h3>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What is Grazac Academy?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Grazac Academy is closing the gap between youths and entry-level jobs in the technology industry. We strongly believe the job market for youths has changed and the future of work will be skill-based.</p>
                                    <p>We are approaching this in two ways:</p>
                                    <p>Grazac Academy Graduate Accelerator - This plan is for tertiary institutions graduates who have full time to build a career in tech. This plan has been arranged in a way to prepare them for work.</p>
                                    <p>Grazac Academy Undergraduate Accelerator - This plan is to equip undergraduates in their institutions, we believe the earlier the better and we want to prepare them for life after school by upskilling them while they are still in school.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>When was the academy established?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Grazac Academy has been in operation since 2018</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>How many students have graduated from your academy?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Excluding our partnership with Haptics.ng in 2019 to execute Google project of upskilling Nigerians on Digital skills where we trained about 500 youths, we have impacted over 2,000 lives through our trainings, meetups and events.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Where is the academy located?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Our headquarter is located at Abeokuta, Ogun State, Nigeria.</p>
                                    <p>Address: Suite 106, PROHUB, Salawu Olabode Avenue, Ewang Road, Idi-aba, Abeokuta.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>How do I enroll in the academy?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Visit <a href="https://www.grazacacademy.com">www.grazacacademy.com</a> to enroll for your preferred course.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <h3>Payment Structure</h3>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What are the payment options?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>We have three (2) payment options for our Gradaute Accelerator, you can either pay once or pay installmentally.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Do you offer discounts?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Yes, we offer early bird discounts.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="7">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Do you offer scholarships?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>No. We don’t have scholarship offers at the moment.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="100">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Do you offer compensation to a referrer?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="100">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Yes, for our Graduate Accelerator, you can refer someone and earn 5,000 naira immediately after the referred person enroll. The referred person must put your name while registering.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="8">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Can I switch my payment plan?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>No, you can’t switch payment plans.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="9">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Can I apply for a refund?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>You are only eligible for a refund if you make a request for course cancellation within 1 week of commencement of lectures. After 1 week, you are not eligible to request a refund.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <h3>Lecture/Class Model</h3>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="10">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Do I need to have any previous experience or knowledge before coming to learn?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Not at all. All our courses are designed to help people from any educational background and experience level achieve a successful career in IT.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="11">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Are classes virtual or physical?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>For our Graduate Accelerator, classes are 100% physical at our location in Abeokuta and our undergraduate accelerator is held around the school area.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="12">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Can I take the course online?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="12">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>No, you cannot. All courses are strictly onsite for now.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="13">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Can I take two courses at a time?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="13">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>No, you cannot. This is because we want you to be focused and dedicated to a particular course and give it your best.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="14">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What course is right for me?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="14">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>You can give us a call or chat with us for guidance.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="15">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What is the duration of the program?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Grazac Academy Graduate Accelerator runs for 4 months (3 months of training and 1 month internship) while our Undergraduate Accelerator runs for 2 months (Weekends only)</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="16">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What is the internship like?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="16">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>You will be grouped into teams alongside other learners to work on real-life projects within the organization.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="17">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What courses do you offer?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="17">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Our courses are:</p>
                                    <p>Product Designing</p>
                                    <p>Brand Identity Designing</p>
                                    <p>Digital Marketing</p>
                                    <p>Front-end Web Development (HTML, CSS, Javascript (ReactJS))</p>
                                    <p>Back-end Web Development with Nodejs.</p>
                                    <p>Mobile Application Development (Android with Kotlin)</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="18">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Can I enroll as a secondary school leaver?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="18">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>No, you cannot but the good news is that we are currently working on bringing up an academy program for secondary school leavers. Follow us @grazacacademy on instagram for more updates.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="19">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What materials do I need to enroll for the course?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="19">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>You need a functional laptop and a ready to learn mindset.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="20">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>How accessible are the tutors?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="20">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Our tutors are always available to respond swiftly to all your questions and offer you support.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="21">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>How can I defer a course?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="21">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>There is no opportunity to defer a course.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="22">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What happens If I miss a class due to an emergency?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="22">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Follow up with what you have missed when you return to class. It is advisable to inform your tutor in case of an emergency.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="23">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Can I enroll for Graduate Accelerator If I am yet to go for NYSC?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="23">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Yes, if you will be available all through the period of the training which is four (4) months</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="24">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What days of the week do the classes hold?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="24">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Classes are held at least 3 times a week.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="25">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Is there an option for a full-time worker?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="25">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>No, we currently run 100% physical classes.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <h3>Graduation and Certification</h3>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="26">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Will the certificate be recognized locally and globally?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="26">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Yes. Grazac is a corporate organisation incorporated under the COMPANIES AND ALLIED MATTERS act 1990 and the company is limited by shares with RC 1643778.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="27">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What’s the probability that I will be good after enrolling for Grazac Academy?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="27">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>We have been training youths since 2019 and our success stories speak for us. What differentiates us from other academy is we are practical oriented and what gives us joy is seeing our students making a living after graduating.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="28">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What happens if I fail an exam?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="28">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>We will give you 1 month to revise what you have learnt and after 1 month, we will conduct another exam for you at no extra cost.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="29">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What kind of certificate do I get (Soft or Hard Copy)?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="29">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>For undergraduates, you get a soft copy immediately and a hard copy at our next annual event (Ogun Digital Summit).</p>
                                <p>For graduates, you get both soft copy and hard copy upon successful graduation.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="30">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>When do I get my certificate?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="30">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>You get the soft copy certificate upon successful graduation.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="31">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>Is a job guaranteed for me after taking the course?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="31">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>For our graduate accelerator, yes!! We outsource all successful graduates to both local and global companies.</p>
                                    <p>For our Undergraduate accelerator, whenever we are taking interns, we consider our undergraduate students first and we also share job opportunities with their community group</p>
                                    <p>For employment offer, we put all our academy students first.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                            <hr/>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="32">
                                <div className="landing_faq-question" onClick={handleFaq}>
                                <h4>What are the prerequisites for graduation?</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="32">
                                <Card.Body>
                                <div className="landing_faq-answer">
                                    <p>Students must have at least 90% attendance and 70% in projects and challenges.</p>
                                </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Faq;