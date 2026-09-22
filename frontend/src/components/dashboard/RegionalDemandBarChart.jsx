import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell 
} from 'recharts';

const demandData = [
  { region: 'Western', demandScore: 92, fill: '#16a34a' },
  { region: 'Northern', demandScore: 84, fill: '#22c55e' },
  { region: 'Southern', demandScore: 78, fill: '#4ade80' },
  { region: 'Eastern', demandScore: 65, fill: '#86efac' },
  { region: 'Central', demandScore: 72, fill: '#2dd4bf' },
];

export const RegionalDemandBarChart = () => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Regional Market Demand
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          XGBoost Regressor score (0 - 100) across target regions
        </p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={demandData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" vertical={false} />
            <XAxis dataKey="region" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[0, 100]} />
            <Tooltip 
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-panel p-2.5 rounded-xl text-xs font-bold shadow-lg">
                      {payload[0].payload.region}: {payload[0].value} / 100
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="demandScore" radius={[12, 12, 0, 0]}>
              {demandData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};