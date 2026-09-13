import React from 'react';
import { Users, Award, Flame, CheckCircle2, Clock, Calendar, TrendingUp } from 'lucide-react';
import { StudentProfile } from '../types';
import { soundManager } from '../utils/soundEffects';

interface ParentTeacherDashboardProps {
  currentProfile: StudentProfile;
}

export const ParentTeacherDashboard: React.FC<ParentTeacherDashboardProps> = ({ currentProfile }) => {
  const accuracyRate = currentProfile.totalAnswers > 0 
    ? Math.round((currentProfile.correctAnswers / currentProfile.totalAnswers) * 100) 
    : 100;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div>
          <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Parent & Teacher Monitoring Portal
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">Student Progress Overview</h1>
          <p className="text-slate-600">Track grammar mastery, accuracy trends, and milestone badges in real-time.</p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-3xl">{currentProfile.avatar}</div>
          <div>
            <div className="font-bold text-slate-900">{currentProfile.name}</div>
            <div className="text-xs text-indigo-600 font-semibold">Level {currentProfile.level}</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total XP</span>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">✨</div>
          </div>
          <div className="text-3xl font-black text-slate-900">{currentProfile.xp}</div>
          <div className="text-xs text-indigo-600 font-semibold mt-1">Next level in {500 - (currentProfile.xp % 500)} XP</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Accuracy Rate</span>
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">🎯</div>
          </div>
          <div className="text-3xl font-black text-slate-900">{accuracyRate}%</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">{currentProfile.correctAnswers} / {currentProfile.totalAnswers} correct</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Practice Streak</span>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">🔥</div>
          </div>
          <div className="text-3xl font-black text-slate-900">{currentProfile.streak} Days</div>
          <div className="text-xs text-amber-600 font-semibold mt-1">Consistent learner!</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Games Completed</span>
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">🎮</div>
          </div>
          <div className="text-3xl font-black text-slate-900">{currentProfile.gamesPlayed}</div>
          <div className="text-xs text-purple-600 font-semibold mt-1">Practice sessions</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Badges Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Unlocked Milestones ({currentProfile.badges.length})</span>
            </h3>

            <div className="space-y-3">
              {currentProfile.badges.map(badge => (
                <div key={badge.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-4">
                  <div className="text-3xl">{badge.icon}</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{badge.title}</div>
                    <div className="text-xs text-slate-500">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Session History */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span>Recent Activity History</span>
            </h3>

            <div className="space-y-3">
              {currentProfile.history.length === 0 ? (
                <p className="text-slate-500 text-sm py-4 text-center">No game sessions recorded yet. Start playing to see history!</p>
              ) : (
                currentProfile.history.map(record => (
                  <div key={record.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{record.mode}</div>
                      <div className="text-xs text-slate-500 flex items-center space-x-2 mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{record.date}</span>
                        <span>•</span>
                        <span>{record.correctCount}/{record.totalCount} Correct</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        {record.accuracy}% Accuracy
                      </span>
                      <div className="text-xs text-indigo-600 font-bold mt-1">+{record.score} XP</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
