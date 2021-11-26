import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container } from "react-bootstrap";

import man from "../../images/man.jpg";
import arrow from "../../images/svg/arrow-front.svg";


function Listing () {
    useEffect(() => {
        document.title = "Hire - Grazac Academy";
        // window.scrollTo(0, 0);
    }, []);

    const talents = [
        {
            availability: "available"
        },
        {
            availability: "hired"
        },
        {
            availability: "available"
        },
        {
            availability: "available"
        }
    ]

    return(
        <div className="hire-bg">
            <Navbar/>
            <div className="hire">
                <div className="hire_talents">
                    <h2>Our Top Talents</h2>
                </div>
                <Container>
                    {talents.map((item, map)=> (
                        <div className="hire_listing">
                            <div className="hire_listing-image">
                                <img src={man} alt="man" />
                            </div>
                            <div className="hire_listing-text">
                                <div className="disp-flex">
                                    <p className="hire_listing-text-1">Jonathan Doe</p>
                                    <p className={item.availability==="hired" ? "hire_listing-text-2-hired":"hire_listing-text-2-available"}>{item.availability}</p>
                                </div>
                                <p>Front end Developer <span>Lagos, Nigeria</span></p>
                                <p>Travelya, thank you so much for a well organized trip. We had a wonderful time. Hard to believe it’s already done and past. Weather was awesom, the hotels were nice, thanks your for everything</p>
                            </div>
                        </div>
                    ))}
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Listing;