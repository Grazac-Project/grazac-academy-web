import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const LeadForm = () => {
    return(
        <div>
            <Navbar/>
            <div style={{marginTop:'80px'}}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRIZdhpwVGfnynf6v14c5G6kPtWGnlZx1PmtBfBMsXfw400A/viewform?usp=send_form" width="100%" height="2000px"></iframe>
            </div>
            <Footer/>
        </div>
    )
}

export default LeadForm;