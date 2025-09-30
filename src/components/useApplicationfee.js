import { useState, useEffect } from "react";

export default function useApplicationFee() {
  const [applicationFee, setApplicationFee] = useState(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("user_details"));
    return userDetails?.applicationFee || false;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const userDetails = JSON.parse(sessionStorage.getItem("user_details"));
      setApplicationFee(userDetails?.applicationFee || false);
    }, 1000); // checks every second

    return () => clearInterval(interval);
  }, []);

  return applicationFee;
}
