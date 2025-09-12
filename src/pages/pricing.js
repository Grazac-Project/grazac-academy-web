import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NewPricing from "../components/NewPrice/NewPrice";
import VirtualPricing from "../components/VirtualPricing/Virtual";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("onsite");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pricing">
      <Navbar top={true} />
      <div style={{ height: 10 }}></div>
      <div className="pricing">
        <h1>Plans and Pricings</h1>
        <p>No surprise fees, no hidden charges</p>
        <div className="pricing_toggle">
          <div
            className={
              activeTab === "onsite" ? "onsiteButtons" : "activebtn" 
            }
            onClick={() => handleTabClick("onsite")}
          >
            Onsite pricing
          </div>
          <div
            className={
              activeTab === "Virtual" ? "virtualButtons" : "activebtn"
            }
            onClick={() => handleTabClick("Virtual")}
          >
            Virtual pricing
          </div>
        </div>
        <div className="pricing_container">
          {activeTab === "onsite" && <NewPricing />}
          {activeTab === "Virtual" && <VirtualPricing />}
        </div>
        <div className="Vitual_btn_1">
          <Link to="/login">
            <button>
              <div>Proceed</div>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
