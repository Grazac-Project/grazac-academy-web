import React from "react";
import "./challengeprogress.css";

function ChallengeProgress({ percentage, noCompleted }) {
  return (
    <div className="challengeprogress__container">
      <h4 className="challengeprogress__title">Challenge Progress</h4>
      <h5 className="challengeprogress__number">
        {percentage}
        <span>% average score</span>
      </h5>
      <h5 className="challengeprogress__nocompleted">
        {noCompleted}
        <span>challenges completed</span>
      </h5>
    </div>
  );
}

export default ChallengeProgress;
