import React from 'react';
import { Shield, Zap, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto z-10 relative mt-4 md:mt-10 mb-20 md:mb-0">
      <div className="glass-panel p-8 md:p-12 text-center relative overflow-hidden group">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-red-500 to-[#fbc02d]">
          ASSEMBLE YOUR WEALTH
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Welcome to <strong className="text-white">Finance Flow</strong>, the ultimate financial command center designed specifically for students. 
          Stop letting your money snap out of existence. Take control, track your expenses, and build your savings like a superhero building their arsenal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
          <div className="bg-[#1a1c29]/80 p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Secure Tracking</h3>
            <p className="text-sm text-gray-400">Keep your expenses guarded. Know exactly where your money goes with vibranium-level precision.</p>
          </div>
          
          <div className="bg-[#1a1c29]/80 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Lightning Fast</h3>
            <p className="text-sm text-gray-400">Log expenses and savings with the speed of Quicksilver. No complex forms, just action.</p>
          </div>
          
          <div className="bg-[#1a1c29]/80 p-6 rounded-2xl border border-gray-800 hover:border-[#fbc02d]/50 transition-colors">
            <div className="w-12 h-12 bg-[#fbc02d]/20 rounded-full flex items-center justify-center mb-4">
              <Rocket className="text-[#fbc02d]" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Future Ready</h3>
            <p className="text-sm text-gray-400">Build your savings goals and watch them soar. Your endgame is financial freedom.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
