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

export const SensitivityAnalysisBarChart = ({ summary, unitPrice }) => {
  const conservativePrice = unitPrice * 0.85;
  const optimisticPrice = unitPrice * 1.15;

  const conservativeProfit = (summary.batchYield * conservativePrice) - summary.totalCost;
  const baselineProfit = summary.netProfit;
  const optimisticProfit = (summary.batchYield * optimisticPrice) - summary.totalCost;

  const data = [
    { scenario: 'Conservative (-15% Rate)', profit: conservativeProfit, fill: '#f43f5e' },
    { scenario: 'Baseline (Target Rate)', profit: baselineProfit, fill: '#10b981' },
    { scenario: 'Optimistic (+15% Rate)', profit: optimisticProfit, fill: '#06b6d4' },
  ];

  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-4">
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
          Market Price Sensitivity & Scenario Stress Test
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Estimated profit under market fluctuations (±15% unit price)[cite: 2]
        </p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" vertical={false} />
            <XAxis dataKey="scenario" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-panel p-2.5 rounded-xl text-xs font-bold shadow-lg">
                      {payload[0].payload.scenario}: ${payload[0].value.toLocaleString(undefined, { maximumFractionDigits: 0 })} Profit
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="profit" radius={[12, 12, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};