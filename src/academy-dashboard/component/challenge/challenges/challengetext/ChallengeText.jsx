import React from "react";

function ChallengeText({ heading, text }) {
  return (
    <div className="challengetext__container">
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ChallengeText;
