// import { FavIcon } from "../icons";
import Modal from "./Modal";
import Logo from "../images/grazac-whiteicon.png";

const Loader = () => {
  return (
    <div className="loading">
      <div className="loading_container">
        <div className="w-full h-full flex items-center justify-center ">
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
