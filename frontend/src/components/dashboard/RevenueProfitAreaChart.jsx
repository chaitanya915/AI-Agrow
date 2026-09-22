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

const data = [
  { month: 'Jan', revenue: 42000, profit: 18500 },
  { month: 'Feb', revenue: 51000, profit: 22400 },
  { month: 'Mar', revenue: 68000, profit: 31200 },
  { month: 'Apr', revenue: 84000, profit: 39800 },
  { month: 'May', revenue: 105000, profit: 48200 },
  { month: 'Jun', revenue: 124500, profit: 58900 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-xs">
        <p className="font-bold text-slate-900 dark:text-white mb-1.5">{label} Projection</p>
        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
          Revenue: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-teal-600 dark:text-teal-400 font-semibold">
          Net Profit: ${payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueProfitAreaChart = () => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            Revenue & Profit Growth
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Mathematical model calculated yield from value-added processing
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Revenue
          </span>
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" /> Profit
          </span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
            <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="profit" stroke="#2dd4bf" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};