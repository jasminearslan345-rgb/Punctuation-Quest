import { StudentProfile, LeaderboardEntry, ClassroomAssignment } from '../types';

export const INITIAL_PROFILES: StudentProfile[] = [
  {
    id: 'student-1',
    name: 'Alex Sparkle',
    avatar: '🌟',
    xp: 1420,
    level: 4,
    streak: 7,
    gamesPlayed: 18,
    correctAnswers: 165,
    totalAnswers: 180,
    badges: [
      { id: 'b1', title: 'Punctuation Master', description: 'Scored 100% in a timed challenge', icon: '🏆', unlockedAt: '2026-09-10' },
      { id: 'b2', title: 'Speedy Speller', description: 'Answered under 5 seconds', icon: '⚡', unlockedAt: '2026-09-11' },
      { id: 'b3', title: '7-Day Streak', description: 'Practiced 7 days in a row', icon: '🔥', unlockedAt: '2026-09-12' }
    ],
    history: [
      { id: 'h1', date: '2026-09-12', mode: 'Timed Challenge', score: 350, correctCount: 10, totalCount: 10, accuracy: 100, timeSpentSeconds: 65 },
      { id: 'h2', date: '2026-09-11', mode: 'Endless Practice', score: 520, correctCount: 18, totalCount: 20, accuracy: 90, timeSpentSeconds: 120 }
    ]
  },
  {
    id: 'student-2',
    name: 'Maya Wizard',
    avatar: '🧙‍♀️',
    xp: 2150,
    level: 6,
    streak: 12,
    gamesPlayed: 25,
    correctAnswers: 230,
    totalAnswers: 250,
    badges: [
      { id: 'b1', title: 'Punctuation Master', description: 'Scored 100% in a timed challenge', icon: '🏆', unlockedAt: '2026-09-05' },
      { id: 'b4', title: 'Grammar Genius', description: 'Completed 200 questions', icon: '🧠', unlockedAt: '2026-09-09' }
    ],
    history: [
      { id: 'h3', date: '2026-09-12', mode: 'Timed Challenge', score: 480, correctCount: 15, totalCount: 15, accuracy: 100, timeSpentSeconds: 58 }
    ]
  },
  {
    id: 'student-3',
    name: 'Leo Explorer',
    avatar: '🚀',
    xp: 920,
    level: 3,
    streak: 4,
    gamesPlayed: 12,
    correctAnswers: 98,
    totalAnswers: 120,
    badges: [
      { id: 'b5', title: 'First Step', description: 'Completed your first punctuation game', icon: '🎯', unlockedAt: '2026-09-01' }
    ],
    history: [
      { id: 'h4', date: '2026-09-11', mode: 'Timed Challenge', score: 210, correctCount: 7, totalCount: 10, accuracy: 70, timeSpentSeconds: 85 }
    ]
  }
];

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, studentId: 'student-2', name: 'Maya Wizard', avatar: '🧙‍♀️', xp: 2150, streak: 12, accuracy: 92 },
  { rank: 2, studentId: 'student-1', name: 'Alex Sparkle', avatar: '🌟', xp: 1420, streak: 7, accuracy: 91 },
  { rank: 3, studentId: 'student-3', name: 'Leo Explorer', avatar: '🚀', xp: 920, streak: 4, accuracy: 81 }
];

export const INITIAL_ASSIGNMENTS: ClassroomAssignment[] = [
  { id: 'as-1', title: 'Terminal Punctuation Mastery', targetPunctuation: ['period', 'question-mark', 'exclamation-mark'], dueDate: '2026-09-20', completedCount: 22, totalAssigned: 25 },
  { id: 'as-2', title: 'Comma & Pause Challenge', targetPunctuation: ['comma', 'semicolon', 'colon'], dueDate: '2026-09-25', completedCount: 15, totalAssigned: 25 },
  { id: 'as-3', title: 'Quotation & Dialogue Rules', targetPunctuation: ['quotation-marks', 'apostrophe', 'single-quotes'], dueDate: '2026-09-30', completedCount: 8, totalAssigned: 25 }
];
