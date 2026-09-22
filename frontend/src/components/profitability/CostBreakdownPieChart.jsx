import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const CostBreakdownPieChart = ({ costs, totalCost }) => {
  const chartData = [
    { name: 'Raw Material', value: costs.rawMaterialCost, color: '#10b981' },
    { name: 'Processing', value: costs.processingCost, color: '#06b6d4' },
    { name: 'Packaging', value: costs.packagingCost, color: '#8b5cf6' },
    { name: 'Storage', value: costs.storageCost, color: '#f59e0b' },
    { name: 'Transport', value: costs.transportCost, color: '#ec4899' },
  ].filter(item => item.value > 0);

  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
          Cost Breakdown Distribution
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Proportional split across $ {totalCost.toLocaleString()} total expenses[cite: 2]
        </p>
      </div>

      <div className="h-56 w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const pct = ((payload[0].value / totalCost) * 100).toFixed(1);
                  return (
                    <div className="glass-panel p-2.5 rounded-xl text-xs font-bold shadow-lg">
                      {payload[0].name}: ${payload[0].value.toLocaleString()} ({pct}%)
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
        {chartData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-slate-600 dark:text-slate-300 font-medium">{item.name}</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white">${item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};