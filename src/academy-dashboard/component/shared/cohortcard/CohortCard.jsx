import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiArrowSmDown } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import green from "../../../../academy-dashboard/static/green.png";
import DropDown from "../../../icons/DropDown";

function CohortCard({ cohort, status }) {
  return (
    <div className="cohortcard__container">
      <div className="cohortcard-heading">
        <p>COHORT {cohort}</p>
        <DropDown />
      </div>

      <div className="cohortcard-status">
        {/* <img style={{fontSize:'10px'}}  src={status === "Admitted" ? green : null} /> */}
        <p>{status}</p>
      </div>
    </div>
  );
}

export default CohortCard;
