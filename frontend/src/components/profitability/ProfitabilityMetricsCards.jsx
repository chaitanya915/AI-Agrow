import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Scale, Percent } from 'lucide-react';

export const ProfitabilityMetricsCards = ({ summary }) => {
  const cards = [
    {
      title: 'Net Estimated Profit',
      value: `$${summary.netProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      subtext: `Revenue: $${summary.revenue.toLocaleString()} | Cost: $${summary.totalCost.toLocaleString()}`,
      icon: <DollarSign className="w-5 h-5" />,
      color: summary.netProfit >= 0 
        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' 
        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
    },
    {
      title: 'Return on Investment (ROI)',
      value: `${summary.roi.toFixed(1)}%`,
      subtext: 'Formula: (Net Profit / Total Cost) x 100[cite: 2]',
      icon: <TrendingUp className="w-5 h-5" />,
      color: summary.roi >= 20 
        ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' 
        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
    },
    {
      title: 'Break-Even Unit Price',
      value: `$${summary.breakEvenPrice.toFixed(2)} / unit`,
      subtext: `Minimum sale rate to cover $${summary.totalCost.toLocaleString()} cost`,
      icon: <Scale className="w-5 h-5" />,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
    },
    {
      title: 'Net Profit Margin',
      value: `${summary.profitMargin.toFixed(1)}%`,
      subtext: 'Formula: (Net Profit / Revenue) x 100[cite: 2]',
      icon: <Percent className="w-5 h-5" />,
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
          <p className="text-[11px] text-slate-400 truncate">
            {item.subtext}
          </p>
        </motion.div>
      ))}
    </div>
  );
};