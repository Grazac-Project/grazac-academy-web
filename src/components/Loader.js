// import { FavIcon } from "../icons";
import Modal from "./Modal";
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
