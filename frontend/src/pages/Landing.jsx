import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Zap, PiggyBank, Target, Sparkles, ArrowRight, SmartphoneNfc, BarChart3, Users, ChevronDown } from 'lucide-react';
import Background3D from '../components/Background3D';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Background3D />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0b10]/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold shadow-[0_0_10px_rgba(230,36,41,0.5)]">F</div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#fbc02d]">Finance Flow</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-5 py-2 rounded-lg text-sm font-bold bg-primary hover:bg-primary-dark text-white transition-colors shadow-[0_0_15px_rgba(230,36,41,0.3)]"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 relative">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-[#0b4a99]/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-[50%] left-[50%] w-48 h-48 bg-[#fbc02d]/8 blur-[80px] rounded-full pointer-events-none -translate-x-1/2" />

        <div className="animate-fade-in max-w-3xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-8">
            <Sparkles size={14} /> Built for Students, Powered by Ambition
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#ff6b35] to-[#fbc02d]">ASSEMBLE</span>
            <br />
            <span className="text-white">YOUR WEALTH</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto font-light">
            The ultimate financial command center for students. Track expenses, set savings goals, and build your financial future — superhero style.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => navigate('/login')}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Get Started Free <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/login?guest=true')}
              className="px-8 py-4 rounded-xl text-lg font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white transition-all w-full sm:w-auto"
            >
              Try as Guest
            </button>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 text-gray-500 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to <span className="text-primary">Win</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Powerful tools designed to give students superhero-level control over their finances.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BarChart3 size={28} />}
              title="Smart Dashboard"
              desc="Real-time overview of your balance, expenses, and financial health at a glance."
              color="#e62429"
              gradient="from-[#e62429] to-[#ff6b35]"
            />
            <FeatureCard
              icon={<Target size={28} />}
              title="Savings Goals"
              desc="Set targets, track progress, and spin the wheel of fortune every time you save!"
              color="#0b4a99"
              gradient="from-[#0b4a99] to-[#1e88e5]"
            />
            <FeatureCard
              icon={<PiggyBank size={28} />}
              title="Expense Tracking"
              desc="Categorize every rupee. Food, Travel, Rent, Study, Fun — know where it all goes."
              color="#fbc02d"
              gradient="from-[#fbc02d] to-[#ff8f00]"
            />
            <FeatureCard
              icon={<Users size={28} />}
              title="Borrow & Lend"
              desc="Track who owes you and what you owe. Never lose track of shared expenses."
              color="#512da8"
              gradient="from-[#512da8] to-[#7c4dff]"
            />
            <FeatureCard
              icon={<SmartphoneNfc size={28} />}
              title="UPI Rewards (Soon)"
              desc="Save using real-time UPI and earn exclusive rewards. Coming very soon!"
              color="#00796b"
              gradient="from-[#00796b] to-[#26a69a]"
            />
            <FeatureCard
              icon={<Shield size={28} />}
              title="Secure & Private"
              desc="Your data is yours. We follow the S.H.I.E.L.D. protocol for data protection."
              color="#c2185b"
              gradient="from-[#c2185b] to-[#e91e63]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">100%</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Free to Use</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#0b4a99]">5+</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Tracking Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#fbc02d]">∞</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Savings Goals</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#512da8]">24/7</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Access Anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to be a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#fbc02d]">Financial Hero</span>?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">Join now. It takes 10 seconds. No credit card required.</p>
          <button
            onClick={() => navigate('/login')}
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
          >
            Start Your Journey <Zap size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-xs font-bold">F</div>
            <span className="text-sm text-gray-400">Finance Flow © 2026</span>
          </div>
          <p className="text-xs text-gray-600">Built with 💪 for students who want financial freedom.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color, gradient }) {
  return (
    <div className="glass-panel p-6 group hover:-translate-y-2 transition-all duration-300 hero-card-glow">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
