import { SOUND_URLS } from './utils/sounds';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface DifficultySetting {
  level: Difficulty;
  timePerQuestion: number;
  description: string;
}

export interface Question {
  id: number;
  sentencePart1: string;
  sentencePart2: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: Difficulty;
}
