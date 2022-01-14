import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";
import { getAllTalents } from "../../api/dashboard/hire";
import { Link } from 'react-router-dom';

import man from "../../images/man.jpg";
import arrow from "../../images/svg/arrow-front.svg";


function Listing () {
    const [talents, setTalents] = useState([]);

    useEffect(() => {
        document.title = "Hire - Grazac Academy";
        window.scrollTo(0, 0);
        getAllTalents()
            .then(response => response)
            .then(resp => {
                console.log(resp);
                if(resp.status===200){
                    setTalents(resp.data.result)
                } else {
                    alert(`Something went wrong, please try again!!! Message: ${resp.data.message}`)
                }
            })
            .catch(err => {
                console.log(err)
                alert(`Something went wrong, please try again!!!`)
            })
    }, []);

    return(
        <div className="hire-bg">
            <Navbar/>
            <div className="hire">
                <div className="hire_talents">
                    <h2>Our Top Talents</h2>
                </div>
                <Container>
                    {talents.map((item, idx)=> (
                        <Link style={{color:"black"}} to={`/hire/profile?id=${item.id}`} key={idx}>
                            <div className="hire_listing">
                                <div className="hire_listing-image">
                                    <img src={man} alt="man" />
                                </div>
                                <div className="hire_listing-text">
                                    <div className="d-flx">
                                        <div>
                                            <p className="hire_listing-text-1">{item.fullName}</p>
                                            <p>{item.talent} <span>{item.region}</span></p>
                                        </div>
                                        <span className={item.status==="hired" ? "hire_listing-text-2-hired":"hire_listing-text-2-available"}>{item.status}</span>
                                    </div>
                                    <p className="hire_listing-text-3">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className="hire_listing-pagination">
                        <div className="hire_listing-pagination-text">
                            <p>Previous</p>
                        </div>
                        <div className="hire_listing-pagination-number activePage">
                            <p>1</p>
                        </div>
                        <div className="hire_listing-pagination-number">
                            <p>22</p>
                        </div>
                        <div className="hire_listing-pagination-number">
                            <p>333</p>
                        </div>
                        <div className="hire_listing-pagination-text">
                            <p>Next</p>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Listing;