import React from 'react'
import ChallengeProgress from '../../component/challenge/challenges/ChallengeProgress'

function Challenge() {
  return (
    <div>
      
      <ChallengeProgress percentage={70} noCompleted={2} />
    </div>
  )
}

export default Challenge