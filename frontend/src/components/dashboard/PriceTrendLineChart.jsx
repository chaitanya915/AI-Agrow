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

const priceData = [
  { day: 'Day 1', actual: 34.0, lstmForecast: 34.2 },
  { day: 'Day 5', actual: 35.5, lstmForecast: 35.8 },
  { day: 'Day 10', actual: 37.0, lstmForecast: 36.9 },
  { day: 'Day 15', actual: 36.2, lstmForecast: 36.5 },
  { day: 'Day 20', actual: 39.8, lstmForecast: 40.1 },
  { day: 'Day 25', actual: 41.5, lstmForecast: 42.0 },
  { day: 'Day 30', actual: 43.2, lstmForecast: 43.8 },
];

export const PriceTrendLineChart = () => {
  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            LSTM Price Prediction Engine
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            30-Day Mandi Price Trend ($/kg) vs LSTM Neural Network
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Historical
          </span>
          <span className="flex items-center gap-1.5 text-agri-600 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> LSTM Forecast
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.15)" />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[30, 48]} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="glass-panel p-3 rounded-xl text-xs space-y-1 shadow-lg">
                      <p className="font-bold text-slate-900 dark:text-white">{payload[0].payload.day}</p>
                      <p className="text-slate-500">Actual: ${payload[0].value}/kg</p>
                      <p className="text-emerald-500 font-bold">LSTM AI: ${payload[1].value}/kg</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line type="monotone" dataKey="actual" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            <Line type="monotone" dataKey="lstmForecast" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};