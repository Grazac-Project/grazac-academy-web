import React from 'react'
import ChallengeProgress from '../challenges/ChallengeProgress'
import LearningProgress from '../dashboard-v2/Learning/LearningProgress'
import Progress from '../dashboard-v2/Progress/Progress'

function index() {
  return (
    <div >index
        <ChallengeProgress percentage={70} noCompleted={2} />
        <LearningProgress/>
        <Progress bgColor='#FBFAF1' price={true} title='Learning' current={600} maximum={1200}/>
        <Progress bgColor='#F4FCF9' price={false} title='Challenge' current={0} maximum={3}/>
    </div>
  )
}

export default index