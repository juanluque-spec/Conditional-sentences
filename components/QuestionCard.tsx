import React from 'react';
import { Question } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import Timer from './Timer';
import { playSound, SOUND_URLS } from '../utils/sounds';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  onOptionSelect: (option: string) => void;
  isAnswered: boolean;
  isGenerating: boolean;
  incorrectFeedback: string | null;
  onAcknowledgeFeedback: () => void;
  timeLeft: number;
  totalTime: number;
  pointsAwarded: number | null;
}

const ConfettiExplosion: React.FC = () => {
    const confettiCount = 20;
    const colors = ['bg-cyan-400', 'bg-pink-500', 'bg-amber-400', 'bg-violet-500'];
  
    return (
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: confettiCount }).map((_, i) => (
          <div
            key={i}
            className={`confetti ${colors[i % colors.length]}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    );
  };

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedOption, 
  onOptionSelect, 
  isAnswered, 
  isGenerating, 
  incorrectFeedback, 
  onAcknowledgeFeedback,
  timeLeft,
  totalTime,
  pointsAwarded
}) => {
  const getButtonClass = (option: string) => {
    const baseClass = "flex items-center justify-between w-full p-4 rounded-lg border-2 text-left transition-all duration-200 transform-gpu";

    if (isAnswered) {
      if (option === question.answer) return `${baseClass} bg-green-500/30 border-green-400 text-white animate-thump shadow-lg shadow-green-500/20`;
      if (option === selectedOption) return `${baseClass} bg-red-500/30 border-red-400 text-white/70 opacity-75 animate-shake`;
      return `${baseClass} bg-white/5 border-white/10 text-slate-400 cursor-not-allowed opacity-50`;
    }
    
    if (incorrectFeedback !== null || isGenerating) {
        if (option === selectedOption) {
            return `${baseClass} bg-red-500/30 border-red-400 text-white animate-shake`;
        }
        return `${baseClass} bg-white/5 border-white/10 text-slate-400 cursor-not-allowed`;
    }

    return `${baseClass} bg-white/10 hover:bg-white/20 border-white/20 text-slate-200 hover:scale-105 active:scale-95 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400`;
  };
  
  const getIcon = (option: string) => {
    if (!isAnswered) return null;
    if (option === question.answer) return <CheckIcon />;
    if (option === selectedOption) return <XIcon />;
    return null;
  };

  const handleAcknowledgeClick = () => {
    playSound(SOUND_URLS.CLICK);
    onAcknowledgeFeedback();
  };
  
  const buttonsDisabled = isAnswered || incorrectFeedback !== null || isGenerating;
  const isCorrect = isAnswered && selectedOption === question.answer;

  return (
    <div className="relative">
      {isCorrect && <ConfettiExplosion />}
      
      <div className="flex justify-center mb-4 relative">
        <Timer timeLeft={timeLeft} totalTime={totalTime} />
        {pointsAwarded !== null && pointsAwarded > 0 && isAnswered && (
             <div className="absolute -top-4 animate-bounce text-lg font-bold text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full">
                +{pointsAwarded} Points!
             </div>
        )}
      </div>

      <p className="text-xl sm:text-2xl font-medium text-slate-100 mb-6 h-24 flex items-center justify-center text-center">
        {question.sentencePart1}{' '}
        <span className="font-bold text-cyan-400 underline decoration-dotted underline-offset-4 mx-2">
            {isAnswered ? question.answer : '______'}
        </span>{' '}
        {question.sentencePart2}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={option}
            onClick={() => onOptionSelect(option)}
            disabled={buttonsDisabled}
            className={`${getButtonClass(option)} animate-pop-in`}
            style={{ animationDelay: `${50 + index * 75}ms` }}
            aria-pressed={selectedOption === option}
          >
            <span className="font-semibold">{option}</span>
            {getIcon(option)}
          </button>
        ))}
      </div>
      
      {isGenerating && (
        <div className="mt-6 p-4 text-center">
          <p className="text-slate-300 animate-pulse font-medium">Checking your answer...</p>
        </div>
      )}

      {incorrectFeedback && !isAnswered && (
        <div className="mt-6 p-4 rounded-lg bg-red-500/20 border border-red-400/50">
            <h3 className="font-bold text-red-300">Not Quite</h3>
            <p className="text-red-300/80 mt-1">{incorrectFeedback}</p>
            <div className="text-right mt-4">
              <button 
                onClick={handleAcknowledgeClick}
                className="bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Show Correct Answer
              </button>
            </div>
        </div>
      )}

      {isAnswered && selectedOption === null && (
        <div className="mt-6 text-center text-xl font-bold text-red-400">
            Time's Up!
        </div>
      )}

      {isAnswered && (
        <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <h3 className="font-bold text-slate-100">Explanation</h3>
            <p className="text-slate-300 mt-1">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;