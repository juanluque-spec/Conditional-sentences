// Fix: Replaced placeholder content with the main application component.
// This component manages the quiz game state, questions, scoring, and integrates
// with the Gemini API to provide feedback for incorrect answers.
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { DIFFICULTY_SETTINGS, QUIZ_QUESTIONS } from './constants';
import { Difficulty, Question } from './types';
import { shuffleArray } from './utils/shuffle';
import { playSound, SOUND_URLS } from './utils/sounds';
import DifficultySelector from './components/DifficultySelector';
import QuestionCard from './components/QuestionCard';
import ScoreScreen from './components/ScoreScreen';
import HomeIcon from './components/icons/HomeIcon';
import FireIcon from './components/icons/FireIcon';

// State machine for the game flow
type GameState = 'difficulty' | 'playing' | 'feedback' | 'answered' | 'score';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('difficulty');
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(false);
  const [incorrectFeedback, setIncorrectFeedback] = useState<string | null>(null);

  const [timeLeft, setTimeLeft] = useState(0);
  const [pointsAwarded, setPointsAwarded] = useState<number | null>(null);

  // Fix: Replaced `NodeJS.Timeout` with `number` for the timer ref type, as `setInterval` in a browser environment returns a number.
  const timerRef = useRef<number | null>(null);
  const ai = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    // Initialize the GoogleGenAI client. The API key is expected to be in environment variables.
    if (process.env.API_KEY) {
      ai.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else {
      console.error("API_KEY environment variable not set. AI feedback will be disabled.");
    }
  }, []);

  const timePerQuestion = difficulty ? DIFFICULTY_SETTINGS[difficulty].timePerQuestion : 20;

  const handleTimeUp = useCallback(() => {
    setSelectedOption(null); // Indicate time ran out
    setGameState('answered');
    playSound(SOUND_URLS.INCORRECT);
    setTimeout(goToNextQuestion, 2500);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeLeft(timePerQuestion);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }, [timePerQuestion, handleTimeUp]);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
  
  const handleSelectDifficulty = (selectedDifficulty: Difficulty) => {
    playSound(SOUND_URLS.CLICK);
    setDifficulty(selectedDifficulty);
    const filteredQuestions = QUIZ_QUESTIONS.filter(q => q.difficulty === selectedDifficulty);
    setQuestions(shuffleArray(filteredQuestions).slice(0, 25)); // Take 25 random questions for a round
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState('playing');
  };

  useEffect(() => {
    if (gameState === 'playing') {
      setSelectedOption(null);
      setIncorrectFeedback(null);
      setPointsAwarded(null);
      startTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, currentQuestionIndex]);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setGameState('playing');
    } else {
      setGameState('score');
    }
  };
  
  const generateIncorrectFeedback = async (question: Question, wrongAnswer: string) => {
    if (!ai.current) {
        setIncorrectFeedback("That's not the right one. The correct answer has a better grammatical fit.");
        return;
    }
    setIsGeneratingFeedback(true);
    try {
        const fullSentence = `${question.sentencePart1} ______ ${question.sentencePart2}`.trim();
        const prompt = `You are an expert English grammar teacher. A student is learning about conditionals ("as long as", "unless", "in case", "if only", "I wish", "provided that"). They were given the sentence: "${fullSentence}" and incorrectly chose "${wrongAnswer}" instead of the correct answer "${question.answer}". Explain briefly, in a friendly and encouraging tone, why their answer is incorrect and why the correct answer is right. Do not be condescending. Keep the explanation to 1-2 short sentences.`;
        
        const response = await ai.current.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        const feedback = response.text;
        setIncorrectFeedback(feedback);
    } catch (error) {
      console.error('Error generating feedback:', error);
      setIncorrectFeedback("Sorry, I couldn't generate feedback right now. The correct answer is a better fit for the sentence's meaning.");
    } finally {
      setIsGeneratingFeedback(false);
    }
  };


  const handleOptionSelect = (option: string) => {
    stopTimer();
    setSelectedOption(option);
    const currentQuestion = questions[currentQuestionIndex];
    
    if (option === currentQuestion.answer) {
      const points = 10 + timeLeft;
      setScore(prev => prev + points);
      setPointsAwarded(points);
      playSound(SOUND_URLS.CORRECT);
      setGameState('answered');
      setTimeout(goToNextQuestion, 2500);
    } else {
      playSound(SOUND_URLS.INCORRECT);
      setGameState('feedback');
      generateIncorrectFeedback(currentQuestion, option);
    }
  };

  const handleAcknowledgeFeedback = () => {
    setGameState('answered');
    setTimeout(goToNextQuestion, 2500);
  };
  
  const handleGoHome = () => {
    playSound(SOUND_URLS.CLICK);
    setGameState('difficulty');
    setDifficulty(null);
  };

  const renderContent = () => {
    if (gameState === 'score') {
      return <ScoreScreen 
        totalPoints={score} 
        totalQuestions={questions.length} 
        onGoHome={handleGoHome}
        timePerQuestion={timePerQuestion}
      />;
    }

    if (gameState === 'difficulty' || !difficulty) {
      return <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        return <p className="text-center">Loading question...</p>;
    }
    
    return (
      <QuestionCard
        question={currentQuestion}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        isAnswered={gameState === 'answered'}
        isGenerating={isGeneratingFeedback}
        incorrectFeedback={incorrectFeedback}
        onAcknowledgeFeedback={handleAcknowledgeFeedback}
        timeLeft={timeLeft}
        totalTime={timePerQuestion}
        pointsAwarded={pointsAwarded}
      />
    );
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = questions.length > 0 ? ((currentQuestionIndex) / questions.length) * 100 : 0;
  
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans flex flex-col p-4">
      <header className="flex items-center justify-between mb-4">
        <button 
          onClick={handleGoHome}
          className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Go to homescreen"
        >
            <HomeIcon />
            <span className="font-bold text-lg hidden sm:inline">Conditionals Quiz</span>
        </button>
        {gameState !== 'difficulty' && gameState !== 'score' && (
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <FireIcon />
                    <span>{score}</span>
                </div>
            </div>
        )}
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 rounded-2xl bg-slate-800/50 shadow-2xl shadow-slate-950/50 ring-1 ring-white/10">
            {gameState !== 'difficulty' && gameState !== 'score' && currentQuestion && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1 text-sm text-slate-300">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{difficulty}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                        className="bg-cyan-500 h-2.5 rounded-full transition-all duration-300" 
                        style={{ width: `${progressPercentage}%` }}>
                    </div>
                </div>
            </div>
            )}
          {renderContent()}
        </div>
      </main>

      <footer className="text-center text-slate-500 text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} English Conditionals Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;