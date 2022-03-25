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
import Loader from "../../components/Loader";


function Profile () {
    const talentId = new URLSearchParams(window.location.search).get('id');
    const [education, setEducation] = useState([]);
    const [award, setAward] = useState([]);
    const [project, setProject] = useState([]);
    const [talent, setTalent] = useState({});


    const isEmptyObject=(obj)=> {
        var name;
        for (name in obj) {
            if (obj.hasOwnProperty(name)) {
                return false;
            }
        }
        return true;
    }

    useEffect(()=>{
        getOneTalent(talentId)
            .then(response => response)
            .then(resp => {
                if(resp.status===200){
                    setTalent(resp.data.profile.user);
                    setEducation(resp.data.profile.education);
                    setAward(resp.data.profile.award);
                    setProject(resp.data.profile.project);
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
        <div>
      {/* {console.log(isEmptyObject(talent))} */}

       
        {isEmptyObject(talent) == false ? 
       ( <div>
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
                                        <img src={talent.profile_upload} alt="profile" />
                                    </div>
                                    <div className="hire_profile-main-bio-icons">
                                        {talent?.github===""?<div></div>:<a href={talent?.github}><img src={github} alt="github" /></a>}
                                        {talent?.linkedin===""?<div></div>:<a href={talent?.linkedin}><img src={linkedin} alt="linkedin" /></a>}
                                        {talent?.twitter===""?<div></div>:<a href={talent?.twitter}><img src={twitter} alt="twitter" /></a>}
                                        {/* <a href={talent?.facebook}><img src={facebook} alt="facebook" /></a> */}
                                        {talent?.instagram===""?<div></div>:<a href={talent?.instagram}><img src={instagram} alt="instagram" /></a>}
                                    </div>
                                </div>

                                <div className="hire_profile-main-bio-text">
                                    <div className="hire_profile-main-info">
                                        <p className="text-1">{talent?.firstName} {talent?.lastName}</p>
                                        <p>{talent?.profession} <span>{talent?.location}</span></p>
                                        <p className={talent?.status==="Unhired" ? "available" : "hired"}>{talent?.status =="Unhired" ? "Available":"Hired"}</p>
                                        {/* {console.log(talent.status)} */}
                                        <p>{talent?.shortBio}</p>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="hire_profile-main-info">
                            <div>
                                <h4>Education</h4>
                                <hr/>
                                <div className="hire_profile-main-info-shift">
                                    {education?.map((item, idx)=> (
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
                                    {award?.map((item, idx)=> (
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
                                    {project?.map((item, idx)=> (
                                        <div key={idx}>
                                            <div className="hire_profile-main-info-shift-flx">
                                                <div className="hire_profile-main-info-shift-flx-1">
                                                    <p className="text-1">{item.role}</p>
                                                    <p>{item.startYear} - {item.endYear}</p>
                                                </div>
                                                <div className="hire_profile-main-info-shift-flx-2">
                                                    <p className="text-1">{item.title}</p>
                                                    {/* {console.log(item)} */}
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                  
                                                    <p>  <a href={item.project_link}>{item.project_link}</a>  </p>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Link to="/hire/listing"><button className="hire_profile-backBtn"><img src={arrow} alt="alt" />Back To Listing</button></Link>
                        <Link to="/hire/contact"><button className="hire_profile-backBtn2">Contact Us<img src={arrow} alt="alt" /></button></Link>
                    </div>
                </div>
            </Container>
        </div>
        <Footer/>
    </div>   

        
        </div>)
    :
(<div>
<Loader />
</div>)
}

</div>
    )
}

export default Profile;