
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(null); // Start with null

  useEffect(() => {
    let savedTime;
    if (typeof window != 'undefined') {
      savedTime = sessionStorage.getItem('time_left');
    }
    const initial = savedTime ? parseInt(savedTime, 10) : initialTime;
    setTimeLeft(initial); // Set the timeLeft once calculated
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => {
        // console.log(prevTime);
        
        const newTime = prevTime - 1;
        if (typeof window != 'undefined') {
          sessionStorage.setItem('time_left', newTime);
        }
        // console.log('newTime', newTime);
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  // console.log(timeLeft);
  

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (timeLeft === null) {
    return null; // Or a loading spinner/placeholder
  }

  // console.log(formatTime(timeLeft));
  
  return (
    <p id='timer'>
      {formatTime(timeLeft)}
      {/* 03:00 */}
    </p>
  );
};

export default Timer;