import React from "react";

function ProfileCard({ image, name, cohort }) {
  return (
    <div className="profilecard__container">
      <div className="profilecard-image" >
        <img src={image} />
      </div>
      <div className="profilecard-details">
        <div className="profilecard-details-name">{name}</div>
        <div className="profilecard-details-cohort">COHORT {cohort}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
