import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import Logo from "../../images/svg/grazac-logo.svg";

function Sidebar({ clicked, clickedDashboard, clickedDetails, showDetails }) {
  // console.log(clickedDashboard)

  const [clickLink, setClickLink] = useState(false);
  console.log(clickLink);

  const signOut = () => {
    sessionStorage.clear();
    toast.info("Signing out ...");
    setTimeout(function () {
      window.location = "/dashboard";
    }, 2500);
  };

  return (
    <div className="sidebar">
      <ToastContainer closeButton={false} />
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="sidebar-portal">
        <p className="sidebar-portal-heading">PORTAL</p>
        <div
          className={
            clicked === "dashboard" ? "active" : "sidebar-portal-links"
          }
          onClick={() => clickedDashboard("dashboard")}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 18.0003C18.5 18.2655 18.3946 18.5198 18.2071 18.7074C18.0196 18.8949 17.7652 19.0003 17.5 19.0003H1.5C1.23478 19.0003 0.98043 18.8949 0.792893 18.7074C0.605357 18.5198 0.5 18.2655 0.5 18.0003V7.49027C0.499895 7.33788 0.534617 7.18749 0.601516 7.05057C0.668415 6.91365 0.76572 6.79384 0.886 6.70027L8.886 0.478272C9.06154 0.341717 9.2776 0.267578 9.5 0.267578C9.7224 0.267578 9.93846 0.341717 10.114 0.478272L18.114 6.70027C18.2343 6.79384 18.3316 6.91365 18.3985 7.05057C18.4654 7.18749 18.5001 7.33788 18.5 7.49027V18.0003ZM4.5 13.0003V15.0003H14.5V13.0003H4.5Z"
              fill="#787676"
            />
          </svg>
          <p onClick={() => setClickLink(!clickLink)}>Dashboard</p>

       

        </div>
        {showDetails != "Not Submitted" && (
          <div
            className={
              clicked === "details" ? "active" : "sidebar-portal-links"
            }
            onClick={() => clickedDetails("details")}
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20ZM9.5 9V15H11.5V9H9.5ZM9.5 5V7H11.5V5H9.5Z"
                fill="#787676"
              />
            </svg>
            <p>Details</p>
          </div>
        )}
        <div className="sidebar-portal-links signout" onClick={signOut}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5 9V6L0 10L5 14V11H13V9H5Z"
              fill="#909198"
            />
          </svg>
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
