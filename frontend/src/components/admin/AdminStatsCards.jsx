import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sprout, Truck, Sparkles, TrendingUp } from 'lucide-react';

export const AdminStatsCards = ({ stats }) => {
  const cards = [
    {
      title: 'Total Farmers Registered',
      value: stats.totalFarmers.toLocaleString(),
      change: '+14.2% this mo',
      isPositive: true,
      subtext: 'Active across 18 states',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    },
    {
      title: 'Value-Added Products',
      value: stats.totalProducts.toString(),
      change: '+8 new added',
      isPositive: true,
      subtext: 'Cataloged processing pipelines',
      icon: <Sprout className="w-5 h-5" />,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
    },
    {
      title: 'Verified Suppliers',
      value: stats.verifiedSuppliers.toString(),
      change: '98.5% uptime',
      isPositive: true,
      subtext: 'Active processing partners',
      icon: <Truck className="w-5 h-5" />,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
    },
    {
      title: 'Monthly AI Queries',
      value: stats.monthlyQueries.toLocaleString(),
      change: '+24.8% growth',
      isPositive: true,
      subtext: 'Hybrid, XGBoost & LSTM runs',
      icon: <Sparkles className="w-5 h-5" />,
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
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-400 truncate">{item.subtext}</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 shrink-0">
              <TrendingUp className="w-3 h-3" /> {item.change}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};