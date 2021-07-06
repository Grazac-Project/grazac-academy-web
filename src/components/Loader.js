// import { FavIcon } from "../icons";
import Modal from "./Modal";
import favicon from "../images/svg/favicon.svg";
const Loader = () => {
  return (
    <div className="loading">
      <div className="loading_container">
        <div className="w-full h-full flex items-center justify-center ">
          <div className="lds-ring ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <img src={favicon} alt="favicons" className="loading_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
