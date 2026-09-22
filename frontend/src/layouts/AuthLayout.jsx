import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TrendingUp, LineChart, Compass, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AuthLayout = ({ children, title, subtitle }) => {
  const navigate = useNavigate();

  const highlights = [
    { icon: <Sprout className="w-5 h-5" />, label: "Product Recommendation" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Demand Forecasting" },
    { icon: <LineChart className="w-5 h-5" />, label: "Price Prediction" },
    { icon: <Compass className="w-5 h-5" />, label: "Business Guidance" },
  ];

  return (
    <div className="min-h-screen w-full flex bg-slate-50 dark:bg-[#070d18] text-slate-900 dark:text-slate-100 font-sans overflow-hidden">
      
      {/* Left Visual Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden flex-col justify-between p-12">
        {/* Background Image with Dark Gradient Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop&q=80" 
            alt="Agri Background" 
            className="w-full h-full object-cover opacity-35 scale-105 filter saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-agri-950/70 to-transparent" />
        </div>

        {/* Top Header Logo */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-agri-600 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight">AI Agrow</span>
              <span className="block text-[10px] font-extrabold text-emerald-400 tracking-wider uppercase">
                Farmer Intelligence
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
        </div>

        {/* Middle Value Proposition */}
        <div className="relative z-10 my-auto max-w-lg">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            AI-Powered <br />
            <span className="bg-gradient-to-r from-emerald-400 via-agri-300 to-teal-200 bg-clip-text text-transparent">
              Farmer Business Growth
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 text-base leading-relaxed mb-10"
          >
            Smarter Decisions. Better Harvests. Greater Profits.
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all group"
              >
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-slate-100">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Footer Quote */}
        <div className="relative z-10 text-xs text-slate-400 border-t border-white/10 pt-4 flex items-center justify-between">
          <span>© {new Date().getFullYear()} AI Agrow Inc.</span>
          <span className="text-emerald-400 font-medium">Enterprise Security Grade</span>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 relative">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

    </div>
  );
};