import React from 'react';
import { useStore } from '../store';
import darkBg from '../assets/hero_bg.png';
import lightBg from '../assets/light_hero_bg.png';

export default function Background3D() {
  const theme = useStore(state => state.theme);
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none transition-colors duration-500" style={{ touchAction: 'none' }}>
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ${isDark ? 'opacity-40 mix-blend-screen' : 'opacity-80 mix-blend-multiply'}`}
        style={{ backgroundImage: `url(${isDark ? darkBg : lightBg})` }}
      />
      {isDark ? (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10]/60 via-transparent to-[#0a0b10]/90 transition-opacity duration-500" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-transparent to-slate-50/90 transition-opacity duration-500" />
      )}
    </div>
  );
}
