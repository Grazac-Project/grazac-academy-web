import {useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const UndergraduateForm = () => {
    useEffect(() => {
        document.title = 'Join our Undergraduate Track - Grazac Academy';
        window.scrollTo(0,0);
    }, []);

    return(
        <div>
            <Navbar/>
            <div style={{marginTop:'80px'}}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWpfJyT5ePKGizkxMMX475w5P5tsyVmy3p63eUJYZOiRp9LA/viewform" width="100%" height="2000px"></iframe>
            </div>
            <Footer/>
        </div>
    )
}

export default UndergraduateForm;