import React from 'react'
import ChallengeProgress from '../challenges/ChallengeProgress'

function index() {
  return (
    <div >index
        <ChallengeProgress percentage={70} noCompleted={2} />
    </div>
  )
}

export default index