import React from 'react';
import { DIFFICULTY_SETTINGS } from '../constants';
import { Difficulty } from '../types';

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelectDifficulty }) => {
  const levels: Difficulty[] = ['Easy', 'Medium', 'Hard'];

  const getDifficultyClass = (level: Difficulty) => {
    switch(level) {
      case 'Easy':
        return 'border-cyan-400/50 hover:bg-cyan-400/20';
      case 'Medium':
        return 'border-amber-400/50 hover:bg-amber-400/20';
      case 'Hard':
        return 'border-red-400/50 hover:bg-red-400/20';
    }
  }

  return (
    <div className="text-center py-4">
      <h2 className="text-3xl font-bold text-white mb-6">Choose Your Challenge</h2>
      <div className="grid grid-cols-1 gap-4">
        {levels.map((level) => {
          const settings = DIFFICULTY_SETTINGS[level];
          return (
            <button
              key={level}
              onClick={() => onSelectDifficulty(level)}
              className={`p-6 rounded-lg border-2 text-left transition-all duration-200 transform-gpu hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/50 ${getDifficultyClass(level)}`}
            >
              <h3 className="text-2xl font-bold">{level}</h3>
              <p className="text-slate-300 mt-1">{settings.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DifficultySelector;
