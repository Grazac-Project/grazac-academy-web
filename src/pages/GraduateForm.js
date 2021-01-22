import {useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const GraduateForm = () => {
    useEffect(() => {
        document.title = 'Join our Graduate Track - Grazac Academy';
        window.scrollTo(0,0);
    }, []);

    return(
        <div>
            <Navbar/>
            <div style={{marginTop:'80px'}}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2SxwbUFzTJhTduhDyAChgdVRToMYjQI-q5PNt8v1FKPMfBA/viewform" width="100%" height="2000px"></iframe>
            </div>
            <Footer/>
        </div>
    )
}

export default GraduateForm;