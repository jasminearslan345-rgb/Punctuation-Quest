import React, { useState } from 'react';
import { FileText, Download, Printer, Award, CheckCircle2, AlertCircle, BarChart2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { StudentProfile } from '../types';
import { soundManager } from '../utils/soundEffects';

interface ReportGeneratorProps {
  currentProfile: StudentProfile;
}

export const ReportGenerator: React.FC<ReportGeneratorProps> = ({ currentProfile }) => {
  const [selectedMonth, setSelectedMonth] = useState('September 2026');

  // Chart data from history or mock monthly breakdown
  const chartData = [
    { week: 'Week 1', accuracy: 82, score: 320 },
    { week: 'Week 2', accuracy: 88, score: 410 },
    { week: 'Week 3', accuracy: 91, score: 490 },
    { week: 'Week 4', accuracy: 95, score: 580 },
  ];

  const handleExportCSV = () => {
    soundManager.playClick();
    const csvContent = [
      ['Student Name', 'Grade', 'Month', 'Total Sessions', 'Overall Accuracy', 'Total XP'],
      [currentProfile.name, currentProfile.grade, selectedMonth, currentProfile.gamesPlayed, `${Math.round((currentProfile.correctAnswers / (currentProfile.totalAnswers || 1)) * 100)}%`, currentProfile.xp]
    ].map(e => e.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${currentProfile.name.replace(/\s+/g, '_')}_Monthly_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div>
          <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Assessment & Analytics
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">Monthly Assessment Report</h1>
          <p className="text-slate-600">Detailed performance summaries and exportable data dashboards for educators.</p>
        </div>

        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-md transition-all text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl transition-all text-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Report Card Body */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10 mb-8 space-y-8">
        {/* Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-50 p-6 rounded-2xl border border-slate-100 gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{currentProfile.avatar}</div>
            <div>
              <h2 className="text-xl font-black text-slate-900">{currentProfile.name}</h2>
              <p className="text-sm text-slate-500">{currentProfile.grade} • Student ID: {currentProfile.id}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 font-bold uppercase">Assessment Period</div>
            <div className="text-base font-extrabold text-indigo-600">{selectedMonth}</div>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>Executive Summary</span>
          </h3>
          <p className="text-slate-700 leading-relaxed">
            During {selectedMonth}, <span className="font-bold text-slate-900">{currentProfile.name}</span> demonstrated strong consistent engagement with the Punctuation Quest learning modules. Accuracy rates improved steadily across weekly practice sessions, reaching mastery in terminal punctuation (periods, question marks) and showing commendable progress in advanced clause separators (semicolons, colons).
          </p>
        </div>

        {/* Recharts Chart */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            <span>Weekly Accuracy Trend (%)</span>
          </h3>
          <div className="h-64 w-full bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" />
                <YAxis domain={[0, 100]} stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#4f46e5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strengths and Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-2xl">
            <h4 className="font-extrabold text-emerald-900 mb-2 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Key Strengths</span>
            </h4>
            <ul className="space-y-2 text-sm text-emerald-800">
              <li>• Exceptional speed and accuracy in terminal marks (98%)</li>
              <li>• Consistent 7+ day practice streak maintained</li>
              <li>• Strong comprehension of quotation and dialogue rules</li>
            </ul>
          </div>

          <div className="bg-indigo-50/60 border border-indigo-100 p-6 rounded-2xl">
            <h4 className="font-extrabold text-indigo-900 mb-2 flex items-center space-x-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>Teacher Recommendations</span>
            </h4>
            <ul className="space-y-2 text-sm text-indigo-800">
              <li>• Continue weekly practice in semicolon and colon rules</li>
              <li>• Encourage participation in classroom group challenges</li>
              <li>• Ready for advanced Grade 4 punctuation curriculum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
