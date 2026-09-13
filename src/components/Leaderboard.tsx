import React, { useState } from 'react';
import { Trophy, Flame, Award, Medal, Star } from 'lucide-react';
import { LeaderboardEntry } from '../types';

export const Leaderboard: React.FC = () => {
  const [entries] = useState<LeaderboardEntry[]>([
    { rank: 1, studentId: 'g-1', name: 'Maya Wizard', avatar: '🧙‍♀️', xp: 3450, streak: 18, accuracy: 98 },
    { rank: 2, studentId: 'g-2', name: 'Oliver Star', avatar: '⭐', xp: 3120, streak: 15, accuracy: 96 },
    { rank: 3, studentId: 'g-3', name: 'Luna Sparkle', avatar: '🦄', xp: 2890, streak: 14, accuracy: 95 },
    { rank: 4, studentId: 'g-4', name: 'Leo Explorer', avatar: '🚀', xp: 2650, streak: 11, accuracy: 92 },
    { rank: 5, studentId: 'g-5', name: 'Sophie Ninja', avatar: '🥷', xp: 2400, streak: 10, accuracy: 90 },
    { rank: 6, studentId: 'g-6', name: 'Felix Comet', avatar: '☄️', xp: 2150, streak: 8, accuracy: 88 },
    { rank: 7, studentId: 'g-7', name: 'Chloe Pixel', avatar: '🎨', xp: 1980, streak: 7, accuracy: 87 },
    { rank: 8, studentId: 'g-8', name: 'Maximus King', avatar: '👑', xp: 1850, streak: 5, accuracy: 85 }
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-600 rounded-3xl p-8 mb-8 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-3xl mx-auto flex items-center justify-center text-3xl mb-3 shadow-inner">
          🏆
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-2 text-white">Global Punctuation Champions</h1>
        <p className="text-amber-100 max-w-xl mx-auto font-medium">
          The top grammar masters from around the world! Compete daily to earn XP and reach the top spot.
        </p>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="divide-y divide-slate-100">
          {entries.filter(entry => entry.studentId !== 'g-1').map((entry) => {
            const rankBg = 
              entry.rank === 1 ? 'bg-amber-50 text-amber-700 border-amber-200' :
              entry.rank === 2 ? 'bg-slate-100 text-slate-700 border-slate-200' :
              entry.rank === 3 ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-slate-50 text-slate-600 border-slate-100';

            return (
              <div 
                key={entry.studentId}
                className="p-4 md:p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm border ${rankBg}`}>
                    {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-2xl flex items-center justify-center shadow-xs">
                    {entry.avatar}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base">
                      {entry.name}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">Accuracy: {entry.accuracy}%</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="hidden sm:block text-right">
                    <div className="text-xs text-slate-400 font-bold uppercase">Streak</div>
                    <div className="text-sm font-black text-amber-600 flex items-center justify-end space-x-1">
                      <Flame className="w-4 h-4" />
                      <span>{entry.streak} Days</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-bold uppercase">Total XP</div>
                    <div className="text-base font-black text-indigo-600">{entry.xp} XP</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
