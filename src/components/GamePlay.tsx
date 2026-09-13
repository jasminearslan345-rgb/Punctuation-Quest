import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, Zap, Award, CheckCircle2, XCircle, RotateCcw, Sparkles, HelpCircle, Gamepad2, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { StudentProfile, PunctuationExample } from '../types';
import { PUNCTUATION_MARKS } from '../data/punctuationData';
import { soundManager } from '../utils/soundEffects';

interface GamePlayProps {
  currentProfile: StudentProfile;
  onUpdateProfile: (updated: StudentProfile) => void;
}

export const GamePlay: React.FC<GamePlayProps> = ({ currentProfile, onUpdateProfile }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
  const [questions, setQuestions] = useState<PunctuationExample[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || showExplanation || selectedOption !== null) return;

    if (timeLeft <= 0) {
      handleAnswerTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 3 && prev > 1) {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft, showExplanation, selectedOption]);

  const startGame = (category: string) => {
    soundManager.playClick();
    setSelectedCategory(category);
    
    // Gather all matching examples
    let pool: PunctuationExample[] = [];
    if (category === 'all') {
      PUNCTUATION_MARKS.forEach(m => pool.push(...m.examplesList));
    } else {
      const mark = PUNCTUATION_MARKS.find(m => m.id === category);
      if (mark) pool = [...mark.examplesList];
    }

    if (difficulty !== 'All') {
      pool = pool.filter(e => e.difficulty === difficulty);
    }

    // Shuffle and pick 20 random questions
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, 20);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setTotalAnswered(0);
    setTimeLeft(10);
    setGameState('playing');
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
  };

  const handleAnswerTimeout = () => {
    soundManager.playWrong();
    setSelectedOption('');
    setIsCorrect(false);
    setShowExplanation(true);
    setStreak(0);
    setTotalAnswered(prev => prev + 1);

    setTimeout(() => {
      nextQuestion();
    }, 2500);
  };

  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null) return; // already answered

    const currentQ = questions[currentIndex];
    const correct = opt === currentQ.correctSymbol;
    setSelectedOption(opt);
    setIsCorrect(correct);
    setShowExplanation(true);
    setTotalAnswered(prev => prev + 1);

    if (correct) {
      soundManager.playCorrect();
      const timeBonus = timeLeft * 15;
      const streakBonus = streak * 10;
      const points = 100 + timeBonus + streakBonus;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      setCorrectCount(prev => prev + 1);

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      soundManager.playWrong();
      setStreak(0);
    }

    setTimeout(() => {
      nextQuestion();
    }, 2500);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(10);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      // Game Over / Summary
      soundManager.playFanfare();
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });
      setGameState('gameover');

      // Update student profile
      const gainedXp = score + (correctCount * 50);
      const newTotalCorrect = currentProfile.correctAnswers + correctCount;
      const newTotalAnswers = currentProfile.totalAnswers + questions.length;
      const newXp = currentProfile.xp + gainedXp;
      const newLevel = Math.floor(newXp / 500) + 1;

      const newRecord = {
        id: `sess-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        mode: selectedCategory === 'all' ? 'Mix Game (All 15 Marks)' : selectedCategory,
        score,
        correctCount,
        totalCount: questions.length,
        accuracy: Math.round((correctCount / questions.length) * 100),
        timeSpentSeconds: 100 - (timeLeft * questions.length)
      };

      const updatedProfile: StudentProfile = {
        ...currentProfile,
        xp: newXp,
        level: newLevel,
        streak: streak > currentProfile.streak ? streak : currentProfile.streak,
        gamesPlayed: currentProfile.gamesPlayed + 1,
        correctAnswers: newTotalCorrect,
        totalAnswers: newTotalAnswers,
        history: [newRecord, ...currentProfile.history]
      };

      onUpdateProfile(updatedProfile);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Menu State */}
      {gameState === 'menu' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl border border-indigo-400/30 p-6 md:p-10 text-center relative overflow-hidden text-white"
        >
          {/* Decorative floating colorful glows */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-amber-500 text-white px-5 py-2 rounded-full text-sm font-extrabold shadow-lg mb-6 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Colorful Punctuation Arcade (10s Timer)</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
              Master All 15 Punctuation Marks! 🚀
            </h1>
            <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-8 font-medium">
              Test your skills with 10 seconds per question! Choose the Mix Game for all marks or pick any specific punctuation mark below.
            </p>

            {/* Difficulty Selector */}
            <div className="flex flex-wrap justify-center items-center space-x-2 mb-8 bg-black/30 backdrop-blur-md p-3 rounded-2xl max-w-md mx-auto border border-white/10">
              <span className="text-xs font-black uppercase tracking-wider text-pink-300 mr-2">Level:</span>
              {(['All', 'Easy', 'Medium', 'Hard'] as const).map(d => (
                <button
                  key={d}
                  onClick={() => { soundManager.playClick(); setDifficulty(d); }}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    difficulty === d
                      ? 'bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Featured Mix Game Banner */}
            <div className="mb-8">
              <button
                onClick={() => startGame('all')}
                className="w-full p-6 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-black shadow-2xl hover:shadow-pink-500/50 hover:scale-[1.02] transition-all text-left flex flex-col sm:flex-row items-center justify-between group border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform">
                    🌟
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-amber-300 font-extrabold">Ultimate Challenge</div>
                    <div className="text-2xl font-black">Mix Game (All 15 Marks)</div>
                    <div className="text-sm text-pink-100 font-normal">Random questions from all punctuation marks with 10s timer!</div>
                  </div>
                </div>
                <div className="bg-white text-indigo-900 font-black px-6 py-3 rounded-2xl shadow-md group-hover:bg-amber-300 transition-colors">
                  Play Mix Game ⚡
                </div>
              </button>
            </div>

            {/* All 15 Punctuation Marks Grid */}
            <h3 className="text-xs font-black uppercase tracking-widest text-pink-300 mb-4">Or Choose Any Punctuation Mark</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
              {PUNCTUATION_MARKS.map(mark => (
                <button
                  key={mark.id}
                  onClick={() => startGame(mark.id)}
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-pink-400 transition-all text-left flex flex-col justify-between group backdrop-blur-md shadow-md"
                >
                  <div className="text-2xl font-black text-amber-300 mb-1 group-hover:scale-110 transition-transform font-mono">
                    {mark.symbol}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white line-clamp-1">{mark.name}</div>
                    <div className="text-[10px] text-pink-200 capitalize">{mark.category}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Profile Bar */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between text-left max-w-md mx-auto">
              <div className="flex items-center space-x-3">
                <div className="text-3xl p-2 rounded-xl bg-white/10">{currentProfile.avatar}</div>
                <div>
                  <div className="text-sm font-extrabold text-white">{currentProfile.name}</div>
                  <div className="text-xs text-pink-300 font-bold">Level {currentProfile.level} • {currentProfile.xp} XP</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-pink-300 uppercase font-extrabold">Streak</div>
                <div className="text-sm font-black text-amber-400">🔥 {currentProfile.streak} Days</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Playing State */}
      {gameState === 'playing' && questions.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-6 md:p-8"
        >
          {/* Top Bar Stats */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-bold px-3 py-1 rounded-full">
                Question {currentIndex + 1} / {questions.length}
              </span>
              <span className="text-sm font-bold text-slate-600 hidden sm:inline">
                Streak: 🔥 {streak}
              </span>
            </div>

            {/* Timer Bar (10s) */}
            <div className="flex items-center space-x-2">
              <Timer className={`w-5 h-5 ${timeLeft <= 3 ? 'text-red-500 animate-bounce' : 'text-indigo-600'}`} />
              <div className="w-24 sm:w-32 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 rounded-full ${
                    timeLeft <= 3 ? 'bg-red-500' : timeLeft <= 6 ? 'bg-amber-500' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${(timeLeft / 10) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-extrabold text-slate-700 w-6">{timeLeft}s</span>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block">Score</span>
              <span className="text-lg font-black text-indigo-600">{score}</span>
            </div>
          </div>

          {/* Sentence Card (Vibrant Colorful Gradient) */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-10 mb-8 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <span className="inline-block text-xs font-black uppercase tracking-widest bg-white/20 px-4 py-1 rounded-full mb-3 shadow-sm text-amber-200">
              Guess the Missing Punctuation 🎯
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight my-4 font-mono drop-shadow-md text-amber-100">
              {questions[currentIndex].sentenceWithBlank}
            </h2>
            <p className="text-sm text-pink-100 font-medium">
              Choose the correct punctuation mark before time runs out!
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {questions[currentIndex].options.map((opt, idx) => {
              const isSelected = selectedOption === opt;
              const isTheCorrect = opt === questions[currentIndex].correctSymbol;

              let btnStyle = 'bg-slate-50 hover:bg-indigo-50 border-slate-200 text-slate-800';
              if (selectedOption !== null) {
                if (isTheCorrect) {
                  btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-lg scale-105';
                } else if (isSelected && !isTheCorrect) {
                  btnStyle = 'bg-red-500 text-white border-red-600';
                } else {
                  btnStyle = 'bg-slate-100 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelectOption(opt)}
                  className={`p-6 rounded-2xl border-2 font-mono text-3xl font-black transition-all shadow-sm flex items-center justify-center ${btnStyle}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Explanation Modal / Banner */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`p-4 rounded-2xl flex items-center space-x-3 ${
                  isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-red-50 border border-red-200 text-red-900'
                }`}
              >
                {isCorrect ? <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" /> : <XCircle className="w-6 h-6 text-red-600 shrink-0" />}
                <div>
                  <div className="font-bold text-sm">
                    {isCorrect ? 'Correct! Awesome job! 🎉' : `Incorrect. The correct answer was "${questions[currentIndex].correctSymbol}"`}
                  </div>
                  <div className="text-xs opacity-90 mt-0.5">{questions[currentIndex].explanation}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Game Over State */}
      {gameState === 'gameover' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8 text-center max-w-lg mx-auto"
        >
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl mx-auto flex items-center justify-center text-4xl mb-4 shadow-inner">
            🏆
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Challenge Completed!</h2>
          <p className="text-slate-600 mb-6">Fantastic punctuation practice! Here are your results:</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-xs text-slate-400 uppercase font-bold">Total Score</div>
              <div className="text-3xl font-black text-indigo-600 mt-1">{score}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="text-xs text-slate-400 uppercase font-bold">Accuracy</div>
              <div className="text-3xl font-black text-emerald-600 mt-1">
                {Math.round((correctCount / questions.length) * 100)}%
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => startGame(selectedCategory)}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Play Again</span>
            </button>
            <button
              onClick={() => { soundManager.playClick(); setGameState('menu'); }}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-2xl transition-all"
            >
              Main Menu
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

