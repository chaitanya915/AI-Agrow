import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export const PlatformAnalyticsCharts = () => {
  const userGrowthData = [
    { month: 'Jan', farmers: 450, queries: 1200 },
    { month: 'Feb', farmers: 620, queries: 1850 },
    { month: 'Mar', farmers: 780, queries: 2400 },
    { month: 'Apr', farmers: 920, queries: 3100 },
    { month: 'May', farmers: 1080, queries: 4200 },
    { month: 'Jun', farmers: 1248, queries: 5800 },
  ];

  const modelAccuracyData = [
    { model: 'Hybrid Rec', accuracy: 96 },
    { model: 'XGBoost Demand', accuracy: 95 },
    { model: 'LSTM Price', accuracy: 94 },
    { model: 'Weighted Supplier', accuracy: 98 },
    { model: 'TOPSIS Market', accuracy: 92 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* User Growth & AI Queries Chart */}
      <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Platform User & Query Growth
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Monthly active farmers vs AI model runs[cite: 5]
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +24.8% YoY
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="glass-panel p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                        <p className="font-bold text-slate-900 dark:text-white">{label}</p>
                        <p className="text-agri-600 font-bold">Farmers: {payload[0].value}</p>
                        <p className="text-purple-500 font-bold">AI Queries: {payload[1].value}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line type="monotone" dataKey="farmers" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="queries" stroke="#a855f7" strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Machine Learning Model Validation Accuracy */}
      <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              ML Model Accuracy Metrics ($R^2$ Score %)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Locked algorithm validation results
            </p>
          </div>
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={modelAccuracyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" vertical={false} />
              <XAxis dataKey="model" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[80, 100]} />
              <Tooltip
                cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="glass-panel p-2.5 rounded-xl text-xs font-bold shadow-lg">
                        {payload[0].payload.model}: {payload[0].value}% Accuracy Score
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="accuracy" fill="#10b981" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};