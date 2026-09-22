import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';

export const DemandTrendChart = ({ data, productName }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-xs">
          <p className="font-bold text-slate-900 dark:text-white mb-1">{label}</p>
          <p className="text-slate-500">Historical Demand: <span className="font-bold text-slate-800 dark:text-slate-200">{payload[0].value.toLocaleString()} units</span></p>
          <p className="text-emerald-500 font-bold">XGBoost Projected: {payload[1].value.toLocaleString()} units</p>
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
            XGBoost Demand Trajectory & Projection
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Forecasting demand curve for <span className="font-bold text-agri-600 dark:text-emerald-400">{productName}</span>[cite: 1, 2]
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Historical Sales
          </span>
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> XGBoost Forecast
          </span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="historicalDemand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="xgboostForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
            <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} tickFormatter={(v) => `${v/1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="historical" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" fill="url(#historicalDemand)" />
            <Area type="monotone" dataKey="projected" stroke="#10b981" strokeWidth={3} fill="url(#xgboostForecast)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};