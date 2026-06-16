import React from 'react';

const CircularProgress = ({ score, max = 10 }) => {

  const radius = 60;
const strokeWidth = 8;
const circumference = 2 * Math.PI * radius;
const strokeDashoffset = circumference - (score / max) * circumference;

return (
  <div className="relative flex items-center justify-center w-[160px] h-[160px]">
    <svg width="160" height="160" viewBox="0 0 160 160">
      {/* center is always half of viewBox = 80,80 */}
      <circle
        cx="80" cy="80" r={radius}
        fill="none"
        stroke="#1e293b"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="80" cy="80" r={radius}
        fill="none"
        stroke="#00e5ff"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 80 80)"
        className="transition-all duration-500 drop-shadow-[0_0_10px_#00e5ff]"
      />
    </svg>

    <div className="absolute flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">{score}</h1>
      <p className="text-lg text-gray-400">/ {max}</p>
    </div>
  </div>
)};

export default CircularProgress;