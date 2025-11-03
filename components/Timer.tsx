import React from 'react';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (timeLeft / totalTime) * circumference;

  let strokeColor = 'stroke-cyan-400';
  let textColor = 'text-cyan-400';
  if (timeLeft <= totalTime * 0.25) { // Last 25% of time
    strokeColor = 'stroke-pink-500';
    textColor = 'text-pink-500';
  } else if (timeLeft <= totalTime * 0.5) { // Last 50% of time
    strokeColor = 'stroke-amber-400';
    textColor = 'text-amber-400';
  }

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="absolute w-full h-full" viewBox="0 0 120 120">
        <circle
          className="text-white/10"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className={`${strokeColor} transition-all duration-500`}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transitionProperty: 'stroke-dashoffset, stroke' }}
        />
      </svg>
      <span className={`text-3xl font-bold ${textColor}`}>
        {timeLeft}
      </span>
    </div>
  );
};

export default Timer;