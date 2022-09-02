import React from "react";
import Progress from "./Progress/Progress";
import LearningProgress from "./Learning/LearningProgress";
function DashboardComponent() {
  return (
    <div>
      <LearningProgress />
     
      <Progress
        bgColor="#FBFAF1"
        price={true}
        title="Learning"
        current={600}
        maximum={1200}
      />
      <Progress
        bgColor="#F4FCF9"
        price={false}
        title="Challenge"
        current={0}
        maximum={3}
      />
    </div>
  );
}

export default DashboardComponent;
