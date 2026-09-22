import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const productData = [
  { name: 'Mango Pulp', value: 38, color: '#10b981' },
  { name: 'Organic Mango Juice', value: 28, color: '#06b6d4' },
  { name: 'Pickle Processing', value: 20, color: '#f59e0b' },
  { name: 'Dried Mango Slices', value: 14, color: '#8b5cf6' },
];

export const ProductSharePieChart = () => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Recommended Product Mix
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Hybrid Recommendation Engine profit distribution
        </p>
      </div>

      <div className="h-48 w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={productData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={5}
              dataKey="value"
            >
              {productData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-panel p-2 rounded-xl text-xs font-bold shadow-md">
                      {payload[0].name}: {payload[0].value}% Share
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
        {productData.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
            <span className="truncate text-slate-600 dark:text-slate-300 font-medium">{item.name}</span>
            <span className="ml-auto font-bold text-slate-900 dark:text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};