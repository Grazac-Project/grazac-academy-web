import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getOneTalent } from "../../api/dashboard/hire";
import { Link } from 'react-router-dom';

import arrow from "../../images/svg/arrow-front.svg";
import purpleBack from "../../images/svg/purple-back.svg";
import instagram from "../../images/svg/icons8-instagram.svg";
import facebook from "../../images/svg/icons8-facebook.svg";
import twitter from "../../images/svg/icons8-twitter.svg";
import github from "../../images/svg/icons8-github.svg";
import linkedin from "../../images/svg/icons8-linkedin.svg";
import profile from "../../images/man.jpg";


function Profile () {
    const talentId = new URLSearchParams(window.location.search).get('id');
    const [talentInfo, setTalentInfo] = useState({})

    useEffect(()=>{
        getOneTalent(talentId)
            .then(response => response)
            .then(resp => {
                console.log(resp.data.profile);
                if(resp.status===200){
                    setTalentInfo(resp.data.profile)
                } else {
                    alert(`Something went wrong, please try again!!! Message: ${resp.data.message}`)
                }
            })
            .catch(err => {
                console.log(err)
                alert(`Something went wrong, please try again!!!`)
            })
    }, []);

    return (
        <div className="hire-bg">
            <Navbar/>
            <div className="hire">
                <Container>
                    <div className="hire_profile">
                        <div className="hire_profile-main">
                            <div>
                                <Link to="/hire/listing"><img src={purpleBack} alt="back" width="100px" className="purpleBack" /></Link>
                                <div className="hire_profile-main-bio">
                                    <div className="hire_profile-main-bio-image1">
                                        <div className="hire_profile-main-bio-image">
                                            <img src={profile} alt="profile" />
                                        </div>
                                        <div className="hire_profile-main-bio-icons">
                                            {talentInfo?.user.github===""?<div></div>:<a href={talentInfo?.user.github}><img src={github} alt="github" /></a>}
                                            {talentInfo?.user.linkedin===""?<div></div>:<a href={talentInfo?.user.linkedin}><img src={linkedin} alt="linkedin" /></a>}
                                            {talentInfo?.user.twitter===""?<div></div>:<a href={talentInfo?.user.twitter}><img src={twitter} alt="twitter" /></a>}
                                            {/* <a href={talentInfo?.user.facebook}><img src={facebook} alt="facebook" /></a> */}
                                            {talentInfo?.user.instagram===""?<div></div>:<a href={talentInfo?.user.instagram}><img src={instagram} alt="instagram" /></a>}
                                        </div>
                                    </div>
                                    <div className="hire_profile-main-bio-text">
                                        <div className="hire_profile-main-info">
                                            <p className="text-1">{talentInfo?.user.firstName} {talentInfo?.user.lastName}</p>
                                            <p>{talentInfo?.user.profession} <span>{talentInfo?.user.location}</span></p>
                                            <p className={talentInfo?.user.status==="Available" ? "available" : "hired"}>{talentInfo?.user.status}</p>
                                            <p>{talentInfo?.user.shortBio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="hire_profile-main-info">
                                <div>
                                    <h4>Education</h4>
                                    <hr/>
                                    <div className="hire_profile-main-info-shift">
                                        {talentInfo?.education.map((item, idx)=> (
                                            <div key={idx}>
                                                <p className="text-1">{item.institution}</p>
                                                <p>{item.course}</p>
                                                <p>{item.startYear} - {item.endYear}</p>
                                                <hr/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4>Award &#38; Certification</h4>
                                    <hr/>
                                    <div className="hire_profile-main-info-shift">
                                        {talentInfo?.award.map((item, idx)=> (
                                            <div key={idx}>
                                                <p className="text-1">{item.title}</p>
                                                <p>{item.awarder}</p>
                                                <p>{item.yearAwarded}</p>
                                                <hr/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4>Projects and Experience</h4>
                                    <hr/>
                                    <div className="hire_profile-main-info-shift">
                                        {talentInfo?.project.map((item, idx)=> (
                                            <div key={idx}>
                                                <div className="hire_profile-main-info-shift-flx">
                                                    <div className="hire_profile-main-info-shift-flx-1">
                                                        <p className="text-1">{item.role}</p>
                                                        <p>{item.startYear} - {item.endYear}</p>
                                                    </div>
                                                    <div className="hire_profile-main-info-shift-flx-2">
                                                        <p className="text-1">{item.title}</p>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/hire/listing"><button className="hire_profile-backBtn"><img src={arrow} alt="alt" />Back To Listing</button></Link>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>   
    )
}

export default Profile;