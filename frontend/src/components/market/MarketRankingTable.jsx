import React from 'react';
import { Award, MapPin, TrendingUp, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const MarketRankingTable = ({ markets }) => {
  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            TOPSIS Target Market Ranking
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Ranked by relative closeness coefficient ($C_i^*$) to ideal market metrics[cite: 2]
          </p>
        </div>
        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-agri-500/10 text-agri-600 dark:text-emerald-400 border border-agri-500/20">
          MCDM Engine Verified
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Market / APMC Mandi</th>
              <th className="py-3 px-4">TOPSIS Score ($C_i^*$)</th>
              <th className="py-3 px-4">Demand Score</th>
              <th className="py-3 px-4">Avg Rate ($/kg)</th>
              <th className="py-3 px-4">Freight Distance</th>
              <th className="py-3 px-4">Competition</th>
              <th className="py-3 px-4 text-right">Feasibility</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 font-medium">
            {markets.map((m, idx) => (
              <tr key={m.id} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="py-3.5 px-4 font-black text-slate-900 dark:text-white">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-xl font-bold ${
                    idx === 0 ? 'bg-amber-500 text-white shadow-md' :
                    idx === 1 ? 'bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-white' :
                    idx === 2 ? 'bg-amber-700 text-white' :
                    'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    #{idx + 1}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-bold text-slate-900 dark:text-white block">{m.name}</span>
                  <span className="text-[10px] text-slate-400">{m.state}</span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-black text-emerald-600 dark:text-emerald-400 text-sm">
                    {m.topsisScore.toFixed(3)}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-bold">
                  {m.demandScore} / 100
                </td>
                <td className="py-3.5 px-4 text-slate-900 dark:text-white font-bold">
                  ${m.avgPrice.toFixed(2)}
                </td>
                <td className="py-3.5 px-4 text-slate-500">
                  {m.distanceKm} km
                </td>
                <td className="py-3.5 px-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    m.competition === 'Low' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    m.competition === 'Moderate' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                    'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  }`}>
                    {m.competition}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <span className="inline-flex items-center gap-1 text-agri-600 dark:text-emerald-400 font-bold">
                    {m.status} <ArrowUpRight className="w-3.5 h-3.5" />
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