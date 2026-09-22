import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MapPin, TrendingUp, Sparkles } from 'lucide-react';

export const MarketHeatmapGrid = ({ markets }) => {
  const getIntensityGradient = (score) => {
    if (score >= 0.85) return 'from-emerald-600/30 via-agri-500/20 to-transparent border-emerald-500/40';
    if (score >= 0.70) return 'from-teal-600/30 via-cyan-500/20 to-transparent border-cyan-500/40';
    return 'from-amber-600/30 via-orange-500/20 to-transparent border-amber-500/40';
  };

  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark space-y-4">
      <div className="flex items-center gap-2">
        <Flame className="w-5 h-5 text-amber-500" />
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Regional Opportunity Heatmap
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Market density mapped across demand volume vs price premium ratios[cite: 2]
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {markets.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className={`p-5 rounded-3xl border bg-gradient-to-br ${getIntensityGradient(m.topsisScore)} relative overflow-hidden group`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/60 text-white backdrop-blur-md">
                TOPSIS $C_i^* = {m.topsisScore.toFixed(2)}$
              </span>
              <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +{m.growthPct}%
              </span>
            </div>

            <h4 className="text-lg font-black text-slate-900 dark:text-white tracking-tight mb-1">
              {m.name}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-4">
              <MapPin className="w-3.5 h-3.5 text-agri-500 shrink-0" />
              {m.state} ({m.distanceKm} km)
            </p>

            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Demand Index:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{m.demandScore}/100</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Mandi Rate:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">${m.avgPrice}/kg</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};