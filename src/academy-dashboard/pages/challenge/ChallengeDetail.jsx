import React from "react";
import ChallengeCard from "../../component/challenge/challenges/challengecard/ChallengeCard";
import ChallengeText from "../../component/challenge/challenges/challengetext/ChallengeText";

function ChallengeDetail({showChallenge}) {
    
  return (
    <div className="challengedetail__container">
        <div className="challengedetail-card">
        <div className="challengepage-headtext">
        <h3>Challenges / {showChallenge}</h3>
      </div>
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
        </div>
        <div className="challengedetail-task">
            

      <ChallengeText
        heading="Empire Travel Group"
        text={<Component1 String={value} />}
        />
        </div>
    </div>
  );
}

export default ChallengeDetail;

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
