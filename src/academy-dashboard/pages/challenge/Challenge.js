import React from "react";
import ChallengeCard from "../../component/challenge/challenges/challengecard/ChallengeCard";
import ChallengeProgress from "../../component/challenge/challenges/ChallengeProgress";

function Challenge() {
  return (
    <div>
      <ChallengeProgress percentage={70} noCompleted={2} />
      <ChallengeCard
        bgColor={"#FFFF"}
        title={"Challenge 1"}
        topBand={1}
        lowerBand={100}
        submitDate={"6pm, 1st Jan, 2022"}
        dueDate={"6pm, 1st Jan, 2022"}
      />
      <ChallengeCard
      textColor={"#FFFF"}
        bgColor={"#783DD3"}
        title={"Challenge 1"}
        topBand={1}
        lowerBand={100}
        submitDate={"6pm, 1st Jan, 2022"}
        dueDate={"6pm, 1st Jan, 2022"}
        buttonText={"view"}
        buttonBgColor={"#FFFF"}
        buttonTextColor={"rgba(120, 61, 211, 0.85)"}
        disabled={false}
      />
      <ChallengeCard
      textColor={"#FFFF"}
        bgColor={"#783DD3"}
        title={"Challenge 1"}
        topBand={"--"}
        lowerBand={100}
        submitDate={"6pm, 1st Jan, 2022"}
        dueDate={"6pm, 1st Jan, 2022"}
        buttonText={"view"}
        buttonBgColor={"#FFFF"}
        buttonTextColor={"rgba(120, 61, 211, 0.85)"}
        disabled={false}
      />
    </div>
  );
}

export default Challenge;
