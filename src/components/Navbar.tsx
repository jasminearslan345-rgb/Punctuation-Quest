import React from 'react';
import { Gamepad2, BookOpen, Trophy, Users, Volume2, VolumeX, Music } from 'lucide-react';
import { StudentProfile } from '../types';
import { soundManager } from '../utils/soundEffects';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  profiles: StudentProfile[];
  currentProfile: StudentProfile;
  setCurrentProfile: (profile: StudentProfile) => void;
  soundOn: boolean;
  setSoundOn: (val: boolean) => void;
  musicOn: boolean;
  setMusicOn: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  profiles,
  currentProfile,
  setCurrentProfile,
  soundOn,
  setSoundOn,
  musicOn,
  setMusicOn
}) => {
  const handleSoundToggle = () => {
    const next = !soundOn;
    setSoundOn(next);
    soundManager.soundEnabled = next;
    if (next) soundManager.playClick();
  };

  const handleMusicToggle = () => {
    const next = soundManager.toggleMusic();
    setMusicOn(next);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-indigo-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('game')}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
              ✨
            </div>
            <div>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-xl tracking-tight">
                Punctuation Quest
              </span>
              <div className="text-[11px] text-slate-700 font-bold flex items-center space-x-1.5">
                <span className="text-slate-800 font-extrabold">By Humayl Arslan</span>
                <span className="text-indigo-400">•</span>
                <span className="text-red-500 font-extrabold">YouTube:</span>
                <span className="text-indigo-700 font-extrabold">My language Trampoline</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => { soundManager.playClick(); setActiveTab('game'); }}
              className={`flex items-center space-x-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'game'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Play</span>
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveTab('encyclopedia'); }}
              className={`flex items-center space-x-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'encyclopedia'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Library</span>
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveTab('leaderboard'); }}
              className={`flex items-center space-x-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'leaderboard'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Leaderboard</span>
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveTab('parent-teacher'); }}
              className={`flex items-center space-x-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'parent-teacher'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Portal</span>
            </button>
          </nav>

          {/* Medium screen collapsible dropdown / compact nav */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {[
              { id: 'game', label: 'Play', icon: Gamepad2 },
              { id: 'encyclopedia', label: 'Library', icon: BookOpen },
              { id: 'leaderboard', label: 'Ranks', icon: Trophy },
              { id: 'parent-teacher', label: 'Portal', icon: Users }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { soundManager.playClick(); setActiveTab(tab.id); }}
                className={`p-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
                title={tab.label}
              >
                <tab.icon className="w-4 h-4" />
              </button>
            ))}
          </nav>

          {/* Right Controls: Audio & Profile Switcher */}
          <div className="flex items-center space-x-3">
            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute Sound' : 'Enable Sound'}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              {soundOn ? <Volume2 className="w-5 h-5 text-indigo-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
            </button>

            {/* Music Toggle */}
            <button
              onClick={handleMusicToggle}
              title={musicOn ? 'Stop Music' : 'Play Background Music'}
              className={`p-2 rounded-xl transition-colors ${
                musicOn ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Music className="w-5 h-5" />
            </button>


          </div>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100 bg-slate-50">
        {[
          { id: 'game', icon: Gamepad2, label: 'Play' },
          { id: 'encyclopedia', icon: BookOpen, label: 'Library' },
          { id: 'leaderboard', icon: Trophy, label: 'Rank' },
          { id: 'parent-teacher', icon: Users, label: 'Portal' }
        ].map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => { soundManager.playClick(); setActiveTab(item.id); }}
              className={`flex flex-col items-center py-1 px-2 rounded-lg text-xs font-medium transition-colors ${
                isActive ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
