import React from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ReferenceArea 
} from 'recharts';

export const LSTMPriceChart = ({ data, commodityName, peakWindowLabel }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
          <p className="font-bold text-slate-900 dark:text-white mb-1">{label}</p>
          {payload[0] && payload[0].value !== null && (
            <p className="text-slate-500">
              Actual Price: <span className="font-bold text-slate-800 dark:text-slate-200">${payload[0].value} / kg</span>
            </p>
          )}
          {payload[1] && payload[1].value !== null && (
            <p className="text-emerald-500 font-bold">
              LSTM AI Forecast: ${payload[1].value} / kg
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            30-Day Mandi Price Prediction Curve
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            LSTM neural sequence forecast for <span className="font-bold text-agri-600 dark:text-emerald-400">{commodityName}</span>[cite: 1, 2]
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Historical
          </span>
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> LSTM Forecast
          </span>
          <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/30 border border-amber-500" /> Peak Sell Window
          </span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[28, 48]} tickFormatter={(v) => `$${v}`} />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Highlight Peak Selling Window */}
            <ReferenceArea x1="Day 22" x2="Day 27" fill="#f59e0b" fillOpacity={0.15} stroke="#f59e0b" strokeDasharray="3 3" />

            <Line type="monotone" dataKey="actual" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" dot={false} />
            <Line type="monotone" dataKey="forecast" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center justify-between">
        <span className="font-bold text-amber-700 dark:text-amber-300">
          💡 Recommended Strategy: Hold inventory until {peakWindowLabel} to capture maximum projected rate ($43.80/kg).
        </span>
        <span className="text-[10px] uppercase font-black px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
          Peak Window Active
        </span>
      </div>
    </div>
  );
};