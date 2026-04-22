import React, { useEffect, useState } from 'react';
import { api } from '../store';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Wallet, TrendingDown, HandCoins, ArrowRightLeft, Sparkles, SmartphoneNfc } from 'lucide-react';

const COLORS = ['#e62429', '#0b4a99', '#fbc02d', '#512da8', '#00796b'];

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    api.get('/dashboard').then(res => setData(res.data)).catch(console.error);
    api.get('/expenses').then(res => setExpenses(res.data)).catch(console.error);
  }, []);

  if (!data) return <div className="p-10 text-gray-400 animated pulse">Loading Dashboard...</div>;

  const expenseCategoryData = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const pieData = Object.keys(expenseCategoryData).map((cat) => ({
    name: cat,
    value: expenseCategoryData[cat]
  }));

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto z-10 relative">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Overview</h1>
        <p className="text-gray-400 text-sm md:text-base">Welcome back. Here is your financial summary.</p>
      </header>

      {/* Coming Soon UPI Banner */}
      <div className="mb-8 bg-gradient-to-r from-[#e62429]/20 to-[#0b4a99]/20 border border-primary/30 rounded-2xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[#fbc02d] flex items-center justify-center shadow-[0_0_20px_rgba(230,36,41,0.4)] shrink-0">
            <SmartphoneNfc size={32} className="text-white" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              Coming Soon: UPI Pay & Rewards <Sparkles className="text-[#fbc02d]" size={18} />
            </h3>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Get ready to save money using a real-time UPI system and earn exclusive rewards for your heroic financial discipline!
            </p>
          </div>
          <button className="px-6 py-2 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors whitespace-nowrap mt-4 md:mt-0">
            Notify Me
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <StatCard title="Total Balance" amount={data.totalBalance} color="text-white" icon={<Wallet size={24} className="text-[#10b981]" />} bgIcon="bg-[#10b981]/20" />
        <StatCard title="Total Expenses" amount={data.totalExpenses} color="text-primary" icon={<TrendingDown size={24} className="text-primary" />} bgIcon="bg-primary/20" />
        <StatCard title="Lent (Pending)" amount={data.lent} color="text-[#0b4a99]" icon={<HandCoins size={24} className="text-[#0b4a99]" />} bgIcon="bg-[#0b4a99]/20" />
        <StatCard title="You Owe (Pending)" amount={data.borrowed} color="text-[#fbc02d]" icon={<ArrowRightLeft size={24} className="text-[#fbc02d]" />} bgIcon="bg-[#fbc02d]/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 md:mb-0">
        <div className="glass-panel p-6 border-t-4 border-t-primary">
          <h3 className="text-xl font-bold mb-6">Expense Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#12141f', borderColor: '#374151', borderRadius: '10px' }} itemStyle={{ color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 border-t-4 border-t-[#0b4a99]">
          <h3 className="text-xl font-bold mb-6">Recent Expenses</h3>
          <div className="space-y-4">
            {expenses.slice(0, 5).map(exp => (
              <div key={exp.id} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0 group hover:bg-gray-800/30 px-2 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center border border-gray-700">
                    <TrendingDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">{exp.note || exp.category}</p>
                    <p className="text-xs text-gray-500">{new Date(exp.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="font-bold text-primary">-₹{exp.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, amount, color, icon, bgIcon }) {
  return (
    <div className="glass-panel p-4 md:p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg ${bgIcon}`}>
        {icon}
      </div>
      <h3 className="text-gray-400 text-xs md:text-sm font-medium mb-1 truncate">{title}</h3>
      <p className={`text-xl md:text-3xl font-bold ${color}`}>₹{amount.toLocaleString()}</p>
    </div>
  );
}
