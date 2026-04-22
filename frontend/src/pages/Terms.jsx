import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export default function Terms() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-3xl mx-auto z-10 relative mt-4 md:mt-10 mb-20 md:mb-0">
      <div className="glass-panel p-8 md:p-10 relative">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
          <div className="p-3 bg-red-500/20 rounded-xl">
            <ShieldAlert className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
        </div>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 mb-10 h-64 overflow-y-auto pr-4 custom-scrollbar">
          <p>
            Welcome to the S.H.I.E.L.D. Protocol for Financial Management. By using Finance Flow, you agree to the following terms and conditions:
          </p>
          <h3 className="text-xl text-white font-semibold mt-6 mb-2">1. Data Privacy</h3>
          <p>
            We take your data security seriously. Your financial records are encrypted and stored securely. We will not sell your data to HYDRA or any third-party marketing agencies.
          </p>
          <h3 className="text-xl text-white font-semibold mt-6 mb-2">2. Usage Responsibilities</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. Do not share your login details, not even with your multiverse variants.
          </p>
          <h3 className="text-xl text-white font-semibold mt-6 mb-2">3. Rewards Program (Coming Soon)</h3>
          <p>
            The upcoming real-time UPI and rewards system is subject to beta testing. Rewards are granted based on consistent saving behaviors and heroic financial discipline.
          </p>
          <p className="pt-4 text-sm text-gray-500 italic">
            *This is a student project. The information provided is for educational and tracking purposes.
          </p>
        </div>

        <div className="bg-[#1a1c29] p-6 rounded-xl border border-gray-800 mb-8">
          <label className="flex items-start gap-4 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-1">
              <input 
                type="checkbox" 
                className="peer appearance-none w-6 h-6 border-2 border-gray-600 rounded bg-[#0a0b10] checked:bg-primary checked:border-primary transition-all cursor-pointer"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <CheckCircle className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" size={16} />
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              I have read, understood, and accept the Terms and Conditions of Finance Flow. I am ready to assemble my wealth.
            </span>
          </label>
        </div>

        <button 
          onClick={() => navigate(-1)}
          disabled={!accepted}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            accepted 
              ? 'bg-primary hover:bg-primary-dark text-white shadow-[0_0_20px_rgba(230,36,41,0.5)] active:scale-95 cursor-pointer' 
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          {accepted ? 'Acknowledge & Go Back' : 'Accept Terms to Continue'}
        </button>
      </div>
    </div>
  );
}
