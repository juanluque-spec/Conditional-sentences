import React, { useEffect, useState } from 'react';
import { playSound, SOUND_URLS } from '../utils/sounds';
import GoogleClassroomShare from './GoogleClassroomShare';

interface ScoreScreenProps {
  totalPoints: number;
  totalQuestions: number;
  onGoHome: () => void;
  timePerQuestion: number;
}

const ConfettiExplosion: React.FC = () => {
    const confettiCount = 50;
    const colors = ['bg-cyan-400', 'bg-pink-500', 'bg-amber-400', 'bg-violet-500'];
  
    return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: confettiCount }).map((_, i) => (
          <div
            key={i}
            className={`confetti ${colors[i % colors.length]}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random()}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  };


const ScoreScreen: React.FC<ScoreScreenProps> = ({ totalPoints, totalQuestions, onGoHome, timePerQuestion }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  // Max score assumes answering instantly (getting full time bonus) for every question.
  const maxPossiblePoints = totalQuestions * (10 + timePerQuestion); 
  const percentage = maxPossiblePoints > 0 ? Math.round((totalPoints / maxPossiblePoints) * 100) : 0;

  let feedbackMessage = "";
  if (percentage >= 80) {
    feedbackMessage = "Excellent work! You're a conditionals master.";
  } else if (percentage >= 50) {
    feedbackMessage = "Great job! You're well on your way to mastery.";
  } else {
    feedbackMessage = "Good start! Keep practicing to boost your score.";
  }

  useEffect(() => {
    // Trigger confetti after a short delay for a better effect
    const timer = setTimeout(() => setShowConfetti(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleGoHomeClick = () => {
    playSound(SOUND_URLS.CLICK);
    onGoHome();
  };

  return (
    <div className="text-center py-8 relative">
       {showConfetti && <ConfettiExplosion />}
      <h2 className="text-4xl font-extrabold text-white mb-2">Quiz Complete!</h2>
      <p className="text-slate-300 text-lg mb-6">
        You scored a total of <span className="font-bold text-cyan-400 text-xl">{totalPoints}</span> points.
      </p>

      <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center bg-white/10 rounded-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
          <circle
            className="text-cyan-400"
            strokeWidth="8"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={(2 * Math.PI * 45) * (1 - percentage / 100)}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1.5s ease-out' }}
          />
        </svg>
        <span className="absolute text-5xl font-bold text-white">{percentage}%</span>
      </div>

      <p className="text-xl font-medium text-slate-200 mb-8">{feedbackMessage}</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={handleGoHomeClick}
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-300/50 transform hover:scale-105"
        >
          Play Again
        </button>
        <GoogleClassroomShare totalPoints={totalPoints} />
      </div>
    </div>
  );
};

export default ScoreScreen;