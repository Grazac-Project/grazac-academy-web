import { useState } from "react";
import { Link } from "react-router-dom";
import badge from "../images/svg/badge.svg";
import ex from "../images/svg/x-mark.svg";

const InfoModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      {showModal && (
        <div className="infomodal">
          <div className="infomodal_content">
            <img src={badge} alt="" />
            <p>
              Grazac Graduate Accelerator Program is closed for enrollment., You
              can apply for internship positions
            </p>
            <Link to="/internship">
              <button>Enroll</button>
            </Link>
            <img
              src={ex}
              alt=""
              onClick={() => setShowModal(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoModal;
