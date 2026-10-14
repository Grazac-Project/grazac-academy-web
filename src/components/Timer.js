import React, { useState, useEffect, useRef } from "react";

const secondsUntil = (expiresAt) =>
  Math.max(0, Math.ceil((Date.parse(expiresAt) - Date.now()) / 1000));

const Timer = ({ expiresAt, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(() => secondsUntil(expiresAt));
  const onTimeUpRef = useRef(onTimeUp);
  const notifiedDeadline = useRef();

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    const tick = () => {
      const remaining = secondsUntil(expiresAt);
      setTimeLeft(remaining);
      if (remaining === 0 && notifiedDeadline.current !== expiresAt) {
        notifiedDeadline.current = expiresAt;
        onTimeUpRef.current();
      }
      return remaining;
    };

    if (tick() === 0) return;
    const timerId = setInterval(() => {
      if (tick() === 0) clearInterval(timerId);
    }, 1000);
    return () => clearInterval(timerId);
  }, [expiresAt]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p id="timer">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </p>
  );
};

export default Timer;