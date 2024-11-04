import React from 'react';
import stopwatch from '../assets/stopwatch.jpg';

export const Body = () => {
  return (
    <div className="relative">
      <img src={stopwatch} alt="Stopwatch" className="w-full h-auto " />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-5xl font-bold text-center">
          The best <span className="text-blue-600">Counter App</span> Ever Made
        </p>
      </div>
    </div>
  );
};

