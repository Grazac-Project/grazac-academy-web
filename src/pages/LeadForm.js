import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LeadForm = () => {
  useEffect(() => {
    document.title = "Become A Lead - Grazac Academy";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <iframe
          title="map"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdRIZdhpwVGfnynf6v14c5G6kPtWGnlZx1PmtBfBMsXfw400A/viewform?usp=send_form"
          width="100%"
          height="2000px"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default LeadForm;
