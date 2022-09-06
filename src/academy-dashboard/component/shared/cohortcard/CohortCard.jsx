import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import green from "../../../static/green.png"
function CohortCard({ cohort, status }) {
  return (
    <div className="cohortcard__container">
      <div className="cohortcard-heading">
        <>COHORT {cohort}</>
        <>
          <RiArrowDropDownLine size={35} />
        </>
      </div>
      <div className="cohortcard-status">
        <img src={status === "Admitted" ? green : grey}></img>
        {status}
      </div>
    </div>
  );
}

export default CohortCard;
