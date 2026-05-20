import React from 'react';

const CircularProgress = ({ score = 8.2, max = 10 }) => {

  const percentage = (score / max) * 100;

  const radius = 70;
  const strokeWidth = 10;

  const normalizedRadius = radius - strokeWidth / 2;

  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[180px] h-[180px] p-5">

      {/* SVG */}
      <svg
        height={radius * 2.5}
        width={radius * 2.5}
        className="-rotate-90"
      >

        {/* Background Circle */}
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress Circle */}
        <circle
          stroke="#00e5ff"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500 drop-shadow-[0_0_10px_#00e5ff]"
        />
      </svg>

      {/* Center Content */}
      <div className="absolute flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">
          {score}
        </h1>

        <p className="text-xl text-gray-400">
          / {max}
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;