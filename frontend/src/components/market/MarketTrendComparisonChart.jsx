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

export const TrendComparisonChart = ({ data }) => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Multi-Mandi Price Trajectory Comparison
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Comparing historical & projected prices across top candidate markets[cite: 2]
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="flex items-center gap-1 text-emerald-500">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Vashi APMC
          </span>
          <span className="flex items-center gap-1 text-blue-500">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Azadpur Mandi
          </span>
          <span className="flex items-center gap-1 text-purple-500">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Kolar Market
          </span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
            <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[25, 50]} tickFormatter={(v) => `$${v}`} />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-panel p-3 rounded-xl text-xs space-y-1 shadow-lg font-semibold">
                      <p className="font-bold text-slate-900 dark:text-white mb-1">{label}</p>
                      <p className="text-emerald-500">Vashi APMC: ${payload[0]?.value}/kg</p>
                      <p className="text-blue-500">Azadpur: ${payload[1]?.value}/kg</p>
                      <p className="text-purple-500">Kolar: ${payload[2]?.value}/kg</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line type="monotone" dataKey="vashiPrice" stroke="#10b981" strokeWidth={3} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="azadpurPrice" stroke="#3b82f6" strokeWidth={3} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="kolarPrice" stroke="#a855f7" strokeWidth={3} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};