/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GamePlay } from './components/GamePlay';
import { ReferenceLibrary } from './components/ReferenceLibrary';
import { Leaderboard } from './components/Leaderboard';
import { ParentTeacherDashboard } from './components/ParentTeacherDashboard';
import { INITIAL_PROFILES } from './data/initialProfiles';
import { StudentProfile } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('game');
  const [profiles, setProfiles] = useState<StudentProfile[]>(INITIAL_PROFILES);
  const [currentProfile, setCurrentProfile] = useState<StudentProfile>(INITIAL_PROFILES[0]);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [musicOn, setMusicOn] = useState<boolean>(false);

  const handleUpdateProfile = (updated: StudentProfile) => {
    setCurrentProfile(updated);
    setProfiles(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-blue-50/50 text-slate-800 font-sans flex flex-col">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profiles={profiles}
        currentProfile={currentProfile}
        setCurrentProfile={setCurrentProfile}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
        musicOn={musicOn}
        setMusicOn={setMusicOn}
      />

      <main className="flex-1 pb-16">
        {activeTab === 'game' && (
          <GamePlay currentProfile={currentProfile} onUpdateProfile={handleUpdateProfile} />
        )}
        {activeTab === 'encyclopedia' && (
          <ReferenceLibrary />
        )}
        {activeTab === 'leaderboard' && (
          <Leaderboard />
        )}
        {activeTab === 'parent-teacher' && (
          <ParentTeacherDashboard currentProfile={currentProfile} />
        )}
      </main>

      <footer className="bg-white border-t border-indigo-100 py-6 text-center text-xs text-slate-500">
        <p>Punctuation Quest • Immersive Grammar Practice for Elementary Students & Educators</p>
      </footer>
    </div>
  );
}
