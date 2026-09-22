import React from 'react';
import { SlidersHorizontal, BarChart3, RotateCcw } from 'lucide-react';

export const MarketTOPSISForm = ({ weights, onChange, onReset }) => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-5">
      <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-500">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              TOPSIS Model Weights Configuration
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customize decision criteria weights to re-index market target rankings[cite: 1, 2]
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          title="Reset criteria weights"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 text-xs">
        {/* Weight 1: Demand Volume */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>1. Market Demand Index (Benefit [+])</span>
            <span className="text-agri-600 dark:text-emerald-400 font-extrabold">{(weights.demand * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="0.6"
            step="0.05"
            name="demand"
            value={weights.demand}
            onChange={onChange}
            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-agri-500"
          />
        </div>

        {/* Weight 2: Average Selling Price */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>2. Selling Price Rate (Benefit [+])</span>
            <span className="text-agri-600 dark:text-emerald-400 font-extrabold">{(weights.price * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="0.6"
            step="0.05"
            name="price"
            value={weights.price}
            onChange={onChange}
            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-agri-500"
          />
        </div>

        {/* Weight 3: Competition Density */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>3. Competitive Density (Cost [-])</span>
            <span className="text-rose-500 font-extrabold">{(weights.competition * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0.05"
            max="0.4"
            step="0.05"
            name="competition"
            value={weights.competition}
            onChange={onChange}
            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
        </div>

        {/* Weight 4: Freight Distance */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>4. Logistics Proximity (Cost [-])</span>
            <span className="text-rose-500 font-extrabold">{(weights.distance * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0.05"
            max="0.4"
            step="0.05"
            name="distance"
            value={weights.distance}
            onChange={onChange}
            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
        </div>
      </div>
    </div>
  );
};