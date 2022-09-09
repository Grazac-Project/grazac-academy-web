import React from "react";
import ChallengeCard from "../../component/challenge/challenges/challengecard/ChallengeCard";
import LockedChallenge from "../../component/challenge/challenges/challengecard/LockedChallenge";
import ChallengeProgress from "../../component/challenge/challenges/ChallengeProgress";
import ChallengeText from "../../component/challenge/challenges/challengetext/ChallengeText";
import ProfileCard from "../../component/shared/profilecard/ProfileCard";
import CohortCard from "../../component/shared/cohortcard/CohortCard";
import img from "../../static/profile_image.png"
import Carousel from "../../component/carousel/Carousel";
import CarouselDiv from "../../component/carousel/Carousel";
const Component1 = ({ String }) => {
  return <div dangerouslySetInnerHTML={{ __html: String }} />;
};
const value = `
<p>Empire Travel Group is a travel tour company which specializes in Educational and Holiday Tour. They provide educational travel and student holiday tour packages for ages 7-17. Currently, they have five (5) educational and holiday related tour products and services which schools can choose from. </p>
<p>Some of which are: 
<ul>
<ol>1.	Easter Holiday Camp</ol>
<ol>2.	Christmas Holiday Camp</ol>
<ol>3.	Musical Tours</ol>
<ol>4.	Art and Design Tours</ol>
<ol>5.	Mid Term Break Tours</ol>
</ul>
</p>
<p>You have been hired as a product designer to show the world what they offer.</p>
<p>The following sections are what they want on their landing page after the header  - Service Avaliable, Why people book tour with them , Core Values, and Testimonial from past customers.
</br>
</br>
Feel free to be creative and add features that you consider vital to the business.

</br>
</br>
Constraint: Use existing web capabilities
</br>
</br>
Mode of submission

<ul>
<ol>1. Fill this form before your presentation: Challenge 1 Submission
</ol>
<ol>2. Prepare for your presentation on Thursday, 10th February, 2022
</ol>

</ul>
I wish you best of luck

`;
function Challenge() {
  return (
      <div className="challengepage__container">
   

      <ChallengeProgress percentage={70} noCompleted={2} />

      <ChallengeCard
        size={"short"}
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
        size={"short"}
        textColor={"#00000"}
        bgColor={"#F9F9F9"}
        title={"Challenge 3"}
        topBand={"76"}
        lowerBand={100}
        dueDate={"7pm, 1st Jan, 2022"}
        buttonText={"submitted"}
        buttonBgColor={"#CFB9F9"}
        buttonTextColor={"#FFF"}
        disabled={true}
      />
      <ChallengeCard
        size={"long"}
        textColor={"#00000"}
        bgColor={"#F9F9F9"}
        title={"Challenge 3"}
        topBand={"--"}
        lowerBand={100}
        dueDate={"7pm, 1st Jan, 2022"}
        buttonText={"submitted"}
        buttonBgColor={"#99979C"}
        buttonTextColor={"#FFF"}
        disabled={true}
      />
      <LockedChallenge text="Challenge 3" />
      <ChallengeText
        heading="Empire Travel Group"
        text={<Component1 String={value} />}
      />
      <ProfileCard  image={img} name={"Daniel Owolabi"} cohort={"001"} />
      <CohortCard cohort="001" status ="Admitted" />
    </div>
  );
}

export default Challenge;
