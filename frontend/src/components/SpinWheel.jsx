import React, { useState } from 'react';
import { X, Trophy } from 'lucide-react';

const QUOTES = [
  "\"Part of the journey is the end. Keep saving!\" - Tony Stark",
  "\"I can do this all day. Keep building your wealth!\" - Captain America",
  "\"With great power comes great financial responsibility.\" - Spider-Man",
  "\"Just because something works, doesn't mean it can't be improved. Save more!\" - Shuri",
  "\"I am Groot. (Translation: I am saving for my future.)\" - Groot",
  "\"The hardest choices require the strongest wills. Don't spend it all!\" - Thanos",
  "\"There was an idea... to bring together a group of remarkable savings.\" - Nick Fury",
  "\"Higher, further, faster, richer!\" - Captain Marvel"
];

const COLORS = ['#e62429', '#0b4a99', '#fbc02d', '#512da8', '#00796b', '#c2185b', '#e65100', '#424242'];

export default function SpinWheel({ onClose }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [quote, setQuote] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    if (spinning || hasSpun) return;
    
    setSpinning(true);
    setQuote(null);
    
    // Random spins (5 to 10 full rotations + random angle)
    const spins = Math.floor(Math.random() * 5) + 5;
    const randomDegree = Math.floor(Math.random() * 360);
    const newRotation = rotation + (spins * 360) + randomDegree;
    
    setRotation(newRotation);

    // Calculate which segment won
    setTimeout(() => {
      setSpinning(false);
      setHasSpun(true);
      // Actual degree after mod 360
      const finalDegree = newRotation % 360;
      // 8 segments, each 45 degrees. The arrow points at the top (0 degrees).
      // Segment 0 is at top. If rotation is 45, segment 7 comes to top.
      const segmentIndex = Math.floor(((360 - finalDegree + 22.5) % 360) / 45);
      setQuote(QUOTES[segmentIndex]);
    }, 4000); // 4 seconds animation
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="glass-panel w-full max-w-md p-6 flex flex-col items-center relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:text-white p-2"
        >
          <X size={24} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
            <Trophy className="text-[#fbc02d]" /> Savings Reward!
          </h2>
          <p className="text-gray-400 text-sm">Spin the wheel of destiny for your financial quote.</p>
        </div>

        {/* The Wheel */}
        <div className="relative w-64 h-64 my-6">
          {/* Arrow pointing down */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          
          {/* Wheel Container */}
          <div 
            className="w-full h-full rounded-full border-4 border-gray-800 shadow-[0_0_30px_rgba(230,36,41,0.3)] overflow-hidden relative transition-transform duration-[4000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* Segments */}
            {COLORS.map((color, idx) => (
              <div 
                key={idx}
                className="absolute w-[50%] h-[50%] origin-bottom-right"
                style={{
                  backgroundColor: color,
                  transform: `rotate(${idx * 45}deg) skewY(45deg)`,
                  top: 0,
                  left: 0,
                  border: '1px solid rgba(0,0,0,0.1)'
                }}
              />
            ))}
            
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 border-2 border-white rounded-full z-10" />
          </div>
        </div>

        {!quote ? (
          <button 
            onClick={spinWheel}
            disabled={spinning || hasSpun}
            className={`btn-primary w-full text-lg mt-4 ${spinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {spinning ? 'Spinning...' : 'SPIN THE WHEEL'}
          </button>
        ) : (
          <div className="mt-4 p-4 bg-[#1a1c29] border border-primary/30 rounded-xl w-full text-center animate-fade-in shadow-[0_0_20px_rgba(230,36,41,0.2)]">
            <p className="text-gray-900 dark:text-white font-medium italic text-lg leading-relaxed">
              {quote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
