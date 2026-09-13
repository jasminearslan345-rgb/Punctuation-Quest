export type PunctuationCategory = 'terminal' | 'pause' | 'connection' | 'quotation' | 'special';

export interface PunctuationMarkInfo {
  id: string;
  name: string;
  symbol: string;
  category: PunctuationCategory;
  uses: string;
  example: string;
  examplesList: PunctuationExample[];
}

export interface PunctuationExample {
  id: string;
  sentenceWithBlank: string; // e.g. "She is a good girl___"
  sentenceComplete: string; // e.g. "She is a good girl."
  correctSymbol: string;
  options: string[];
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  streak: number;
  gamesPlayed: number;
  correctAnswers: number;
  totalAnswers: number;
  badges: Badge[];
  history: GameSessionRecord[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface GameSessionRecord {
  id: string;
  date: string;
  mode: string;
  score: number;
  correctCount: number;
  totalCount: number;
  accuracy: number;
  timeSpentSeconds: number;
}

export interface LeaderboardEntry {
  rank: number;
  studentId: string;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  accuracy: number;
}

export interface MonthlyReport {
  studentId: string;
  studentName: string;
  month: string;
  totalSessions: number;
  averageAccuracy: number;
  totalQuestionsAnswered: number;
  strongestPunctuation: string;
  weakestPunctuation: string;
  teacherNotes: string;
  recommendations: string[];
}

export interface ClassroomAssignment {
  id: string;
  title: string;
  targetPunctuation: string[];
  dueDate: string;
  completedCount: number;
  totalAssigned: number;
}

