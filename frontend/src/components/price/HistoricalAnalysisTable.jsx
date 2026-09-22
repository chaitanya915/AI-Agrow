import React from 'react';
import { ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';

export const HistoricalAnalysisTable = ({ rows }) => {
  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Historical Mandi Price & Arrival Log
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Past 10 trading sessions sequence fed into LSTM training layers[cite: 1, 2]
          </p>
        </div>
        <span className="text-xs font-bold text-agri-600 dark:text-emerald-400 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" /> Updated Daily
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Mandi Market</th>
              <th className="py-3 px-4">Arrivals (Tons)</th>
              <th className="py-3 px-4">Min Price</th>
              <th className="py-3 px-4">Max Price</th>
              <th className="py-3 px-4">Modal Price</th>
              <th className="py-3 px-4 text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 font-medium">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="py-3.5 px-4 text-slate-900 dark:text-white font-bold">{row.date}</td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{row.market}</td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{row.arrivals} T</td>
                <td className="py-3.5 px-4 text-slate-500">${row.minPrice}</td>
                <td className="py-3.5 px-4 text-slate-500">${row.maxPrice}</td>
                <td className="py-3.5 px-4 text-slate-900 dark:text-white font-black">${row.modalPrice}</td>
                <td className="py-3.5 px-4 text-right">
                  <span className={`inline-flex items-center gap-1 font-bold ${
                    row.isUp ? 'text-emerald-500' : 'text-rose-500'
                  }`}>
                    {row.change}
                    {row.isUp ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};