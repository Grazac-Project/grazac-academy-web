import Modal from "./Modal";
import Logo from "../images/logo.png";

const Loader = () => {
  return (
    <div className="loading">
      <div className="loading_container">
        <div className="loading_box ">
          <img src={Logo} className="lds-img" alt="ccc" />
          <div className="lds-ring ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
