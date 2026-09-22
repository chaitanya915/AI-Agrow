import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StatWidgetCard = ({ title, value, change, isPositive, subtext, icon, gradient, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className="glass-panel p-6 rounded-3xl relative overflow-hidden shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 transition-all group"
    >
      {/* Background Accent Blur */}
      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${gradient} opacity-10 group-hover:opacity-25 transition-opacity filter blur-2xl`} />

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className={`p-3.5 rounded-2xl ${gradient} text-white shadow-md shadow-emerald-500/10`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
          isPositive 
            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
            : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
        }`}>
          {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          <span>{change}</span>
        </div>
      </div>

      <div className="relative z-10">
        <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
          {title}
        </span>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
          {value}
        </div>
        <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 truncate">
          {subtext}
        </p>
      </div>
    </motion.div>
  );
};