import React, { useState } from 'react';
import { Search, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PUNCTUATION_MARKS } from '../data/punctuationData';
import { PunctuationMarkInfo } from '../types';
import { soundManager } from '../utils/soundEffects';

export const ReferenceLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMark, setSelectedMark] = useState<PunctuationMarkInfo>(PUNCTUATION_MARKS[0]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const filteredMarks = PUNCTUATION_MARKS.filter(mark => {
    const matchesSearch = mark.name.toLowerCase().includes(searchQuery.toLowerCase()) || mark.uses.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategoryFilter === 'all' || mark.category === selectedCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 mb-8 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <span className="bg-gradient-to-r from-pink-500 to-amber-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-md">
          Encyclopedia & Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-black mb-3 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
          Punctuation Marks and Their Uses
        </h1>
        <p className="text-pink-100 max-w-2xl mx-auto font-medium">
          Explore all 15 elementary punctuation marks with rules, definitions, and 30+ interactive examples per mark!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar List */}
        <div className="lg:col-span-5 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search punctuation marks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {['all', 'terminal', 'pause', 'quotation', 'special'].map(cat => (
              <button
                key={cat}
                onClick={() => { soundManager.playClick(); setSelectedCategoryFilter(cat); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  selectedCategoryFilter === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
            {filteredMarks.map(mark => {
              const isSelected = selectedMark.id === mark.id;
              return (
                <div
                  key={mark.id}
                  onClick={() => { soundManager.playClick(); setSelectedMark(mark); }}
                  className={`p-4 flex items-center justify-between cursor-pointer transition-colors ${
                    isSelected ? 'bg-indigo-50/80 border-l-4 border-indigo-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-mono text-xl font-black flex items-center justify-center shrink-0">
                      {mark.symbol}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{mark.name}</div>
                      <div className="text-xs text-slate-500 capitalize">{mark.category} • {mark.examplesList.length} Examples</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-indigo-600' : 'text-slate-300'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel with 30 Examples */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-mono text-3xl font-black flex items-center justify-center shadow-md">
                  {selectedMark.symbol}
                </div>
                <div>
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider capitalize">
                    {selectedMark.category}
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">{selectedMark.name}</h2>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Rule & Uses</h4>
                <p className="text-slate-700 font-medium">{selectedMark.uses}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Sample Sentence</h4>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-indigo-900 font-bold">
                  {selectedMark.example}
                </div>
              </div>
            </div>

            {/* 30 Examples Accordion / List */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>30 Random Practice Examples for {selectedMark.name}</span>
              </h3>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {selectedMark.examplesList.map((ex, idx) => (
                  <div key={ex.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-indigo-600">Example #{idx + 1}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        ex.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
                        ex.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {ex.difficulty}
                      </span>
                    </div>
                    <div className="font-mono text-slate-900 font-bold text-sm mb-1">
                      {ex.sentenceComplete}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{ex.explanation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
