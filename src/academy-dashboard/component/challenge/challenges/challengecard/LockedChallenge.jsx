import React from "react";
import { AiFillLock  } from 'react-icons/ai';


function LockedChallenge({ text }) {
  return (
    <div className="lockedchallenge__container">
      <p className="lockedchallenge-text">{text}</p>
      <p className="lockedchallenge-icon">
        <AiFillLock size={30} />

      </p>
      <p>Locked</p>
    </div>
  );
}

export default LockedChallenge;
