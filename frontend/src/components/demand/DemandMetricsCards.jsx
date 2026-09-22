import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Calendar, ShieldCheck } from 'lucide-react';

export const DemandMetricsCards = ({ metrics }) => {
  const cards = [
    {
      title: 'Peak Demand Month',
      value: metrics.peakMonth,
      subtext: 'Highest projected consumer uptake',
      icon: <Calendar className="w-5 h-5" />,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    },
    {
      title: 'Predicted Demand Index',
      value: `${metrics.demandScore} / 100`,
      subtext: 'High confidence buyer signal',
      icon: <BarChart2 className="w-5 h-5" />,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
    },
    {
      title: 'YoY Growth Rate',
      value: `+${metrics.growthRate}%`,
      subtext: 'Compared to historical baseline',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20'
    },
    {
      title: 'Model Confidence',
      value: `${metrics.accuracy}%`,
      subtext: 'XGBoost $R^2$ validation metric[cite: 1, 2]',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.08 }}
          className="glass-panel p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {item.title}
            </span>
            <div className={`p-2.5 rounded-xl border ${item.color}`}>
              {item.icon}
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-0.5">
            {item.value}
          </div>
          <p className="text-[11px] text-slate-400">
            {item.subtext}
          </p>
        </motion.div>
      ))}
    </div>
  );
};