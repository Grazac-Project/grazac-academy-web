import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import authImg from "../../../images/auth.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../images/svg/academy-logo.svg";
import Physical from "../../../images/svg/physical.svg";
import Virtual from "../../../images/svg/virtual.svg";

const Mode = () => {
  const containerStyle = {
    display: "flex",
    width: "201px",
    height: "201px",
    padding: "19.716px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "13.144px",
    borderRadius: "13.144px",
    background: "#FFF",
    boxShadow: "0px 1.64297px 6.57189px 0px rgba(0, 0, 0, 0.15)",
  };

  return (
    <div className="mode">
      <div className="mode_main" main_>
        <div className="mode_main_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <h3>Welcome to our learning community!</h3>
          <p>How would you like to learn with us?</p>

          <div className="content_selectFlex">
            <Link to='/dashboard'>
              <div className="content_selectFlex_select">
                <div className="selectContainer">
                  <img src={Physical} alt="img" />
                  <h4>Physical Class</h4>
                </div>
              </div>
            </Link>
            <div className="content_selectFlex_select">
              <div className="selectContainer">
                <img src={Virtual} alt="img" />
                <h4>Virtual Class</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layout_auth-image">
        <LazyLoadImage
          src={authImg}
          effect="blur"
          alt="auth"
          height="auto"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Mode;
