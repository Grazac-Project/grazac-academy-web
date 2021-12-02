import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

import arrow from "../../images/svg/arrow-front.svg";
import purpleBack from "../../images/svg/purple-back.svg";
import instagram from "../../images/svg/instagram.svg";
import facebook from "../../images/svg/facebook-hire.svg";
import profile from "../../images/man.jpg";


function Profile () {
    return (
        <div className="hire-bg">
            <Navbar/>
            <div className="hire">
                <Container>
                    <div className="hire_profile">
                        <div className="hire_profile-main">
                            <div>
                                <img src={purpleBack} alt="back" width="100px" className="purpleBack" />
                                <div className="hire_profile-main-bio">
                                    <div className="hire_profile-main-bio-image1">
                                        <div className="hire_profile-main-bio-image">
                                            <img src={profile} alt="profile" />
                                        </div>
                                        <div className="hire_profile-main-bio-icons">
                                            <img src={facebook} alt="facebook" />
                                            <img src={instagram} alt="instagram" />
                                        </div>
                                    </div>
                                    <div className="hire_profile-main-bio-text">
                                        <div className="hire_profile-main-info">
                                            <p className="text-1">Fedxderal Univerity Abeokuta</p>
                                            <p>Product Designer <span>Lagos, Nigeria</span></p>
                                            <p className={false ? "available" : "hired"}>hired</p>
                                            <p>Proficiency in English and Yoruba language, Self-awareness, Interpersonal communication and, proficient in English Language, Operations and Entrepreneurial, Git, Digital Marketing, HTML/CSS,JavaScript,BootStrap4, Nodejs, Reactjs</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="hire_profile-main-info">
                                <div>
                                    <h4>Education</h4>
                                    <hr/>
                                    <div className="hire_profile-main-info-shift">
                                        <p className="text-1">Fedxderal Univerity Abeokuta</p>
                                        <p>Computer science</p>
                                        <p>2004 - 2014</p>
                                        <hr/>
                                        <p className="text-1">Fedxderal Univerity Abeokuta</p>
                                        <p>Computer science</p>
                                        <p>2004 - 2014</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Projects and Experience</h4>
                                    <hr/>
                                    <div className="hire_profile-main-info-shift">
                                        <div className="hire_profile-main-info-shift-flx">
                                            <div className="hire_profile-main-info-shift-flx-1">
                                                <p className="text-1">Fedxderal Univerity Abeokuta</p>
                                                <p>Computer science</p>
                                                <p>2004 - 2014</p>
                                            </div>
                                            <div className="hire_profile-main-info-shift-flx-2">
                                                <p className="text-1">Fedxderal Univerity Abeokuta</p>
                                                <p>Computer science</p>
                                                <p>2004 - 2014</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="hire_profile-backBtn"><img src={arrow} alt="alt" />Back To Listing</button>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>   
    )
}

export default Profile;