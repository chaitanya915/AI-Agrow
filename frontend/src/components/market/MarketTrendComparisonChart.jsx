import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';

export const MarketTrendComparisonChart = ({ data }) => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
            Top Candidate Markets Price Trajectory
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Comparative daily mandi prices ($/kg) across top 3 TOPSIS ranked markets[cite: 2]
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Vashi APMC (Rank #1)
          </span>
          <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> Azadpur Mandi (Rank #2)
          </span>
          <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Nashik APMC (Rank #3)
          </span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[30, 50]} tickFormatter={(v) => `$${v}`} />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-panel p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                      <p className="font-bold text-slate-900 dark:text-white mb-1">{label}</p>
                      <p className="text-emerald-500 font-bold">Vashi APMC: ${payload[0].value}/kg</p>
                      <p className="text-cyan-500 font-bold">Azadpur Mandi: ${payload[1].value}/kg</p>
                      <p className="text-amber-500 font-bold">Nashik APMC: ${payload[2].value}/kg</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line type="monotone" dataKey="vashi" stroke="#10b981" strokeWidth={3} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="azadpur" stroke="#06b6d4" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="nashik" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};