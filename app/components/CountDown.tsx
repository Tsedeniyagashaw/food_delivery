"use client";
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsClient(true);
    }, 0); 
    return () => clearTimeout(timeout);
  }, []);
  if (!isClient) {
    return null;
  }

  const endingDate = new Date("2025-12-31");

  return (
    <div>
      <Countdown date={endingDate} className="text-orange-600 font-bold text-5xl" />
    </div>
  );
};

export default CountDown;
