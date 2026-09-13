import React, { useState } from 'react';
import { Settings, Users, BookOpen, Plus, CheckCircle2, Shield, Bell } from 'lucide-react';
import { StudentProfile, ClassroomAssignment } from '../types';
import { INITIAL_ASSIGNMENTS } from '../data/initialProfiles';
import { soundManager } from '../utils/soundEffects';

interface TeacherAdminPortalProps {
  profiles: StudentProfile[];
}

export const TeacherAdminPortal: React.FC<TeacherAdminPortalProps> = ({ profiles }) => {
  const [assignments, setAssignments] = useState<ClassroomAssignment[]>(INITIAL_ASSIGNMENTS);
  const [newTitle, setNewTitle] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleAddAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    soundManager.playClick();
    const newAs: ClassroomAssignment = {
      id: `as-${Date.now()}`,
      title: newTitle,
      targetPunctuation: ['period', 'comma', 'question-mark'],
      dueDate: '2026-10-10',
      completedCount: 0,
      totalAssigned: profiles.length
    };

    setAssignments([newAs, ...assignments]);
    setNewTitle('');
    setSuccessMsg('Assignment successfully published to classroom!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div>
          <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Teacher Administrative Portal
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">Classroom Management & Curriculum</h1>
          <p className="text-slate-600">Configure assignments, manage student rosters, and customize curriculum rules.</p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-purple-50 text-purple-800 px-4 py-2 rounded-2xl border border-purple-200 text-sm font-bold">
          <Shield className="w-4 h-4" />
          <span>Educator Mode Active</span>
        </div>
      </div>

      {successMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-sm flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Roster Management */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span>Enrolled Students ({profiles.length})</span>
            </h3>

            <div className="space-y-3">
              {profiles.map(student => (
                <div key={student.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{student.avatar}</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{student.name}</div>
                      <div className="text-xs text-slate-500">{student.grade} • Lvl {student.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {student.xp} XP
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assignments & Curriculum Customization */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>Classroom Homework & Quizzes</span>
            </h3>

            {/* Create Assignment Form */}
            <form onSubmit={handleAddAssignment} className="mb-6 flex gap-3">
              <input
                type="text"
                placeholder="New assignment title (e.g. Semicolon Practice)..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-2xl shadow-md transition-all flex items-center space-x-2 shrink-0"
              >
                <Plus className="w-5 h-5" />
                <span>Assign</span>
              </button>
            </form>

            <div className="space-y-3">
              {assignments.map(as => (
                <div key={as.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{as.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Due: {as.dueDate} • Completed by {as.completedCount}/{as.totalAssigned} students</div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
