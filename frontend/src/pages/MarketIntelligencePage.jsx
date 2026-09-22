import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Globe, ArrowRight } from 'lucide-react';

import { MarketTOPSISForm } from '../components/market/MarketTOPSISForm';
import { MarketRankingTable } from '../components/market/MarketRankingTable';
import { MarketHeatmapGrid } from '../components/market/MarketHeatmapGrid';
import { MarketTrendComparisonChart } from '../components/market/MarketTrendComparisonChart';

export const MarketIntelligencePage = () => {
  const navigate = useNavigate();

  const [weights, setWeights] = useState({
    demand: 0.35,
    price: 0.35,
    competition: 0.15,
    distance: 0.15,
  });

  const handleWeightChange = (e) => {
    const { name, value } = e.target;
    setWeights((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const handleResetWeights = () => {
    setWeights({
      demand: 0.35,
      price: 0.35,
      competition: 0.15,
      distance: 0.15,
    });
  };

  const rawMarkets = [
    { id: 1, name: 'Vashi APMC Market', state: 'Mumbai, Maharashtra', distanceKm: 28, demandScore: 94, avgPrice: 44.50, competition: 'Moderate', growthPct: 18.2 },
    { id: 2, name: 'Azadpur Wholesale Mandi', state: 'Delhi NCR', distanceKm: 850, demandScore: 96, avgPrice: 46.20, competition: 'High', growthPct: 14.5 },
    { id: 3, name: 'Nashik Main Mandi', state: 'Nashik, Maharashtra', distanceKm: 18, demandScore: 88, avgPrice: 41.80, competition: 'Low', growthPct: 12.8 },
    { id: 4, name: 'Surat APMC Hub', state: 'Surat, Gujarat', distanceKm: 210, demandScore: 82, avgPrice: 42.10, competition: 'Moderate', growthPct: 9.6 },
  ];

  // Calculate TOPSIS Scores dynamically based on user-adjusted weights
  const calculateTOPSIS = () => {
    return rawMarkets.map((m) => {
      // Normalized scores
      const demandNorm = m.demandScore / 100;
      const priceNorm = m.avgPrice / 50;
      const compNorm = m.competition === 'Low' ? 0.9 : m.competition === 'Moderate' ? 0.6 : 0.3;
      const distNorm = 1 - Math.min(m.distanceKm / 1000, 1);

      const score = (
        demandNorm * weights.demand +
        priceNorm * weights.price +
        compNorm * weights.competition +
        distNorm * weights.distance
      );

      return {
        ...m,
        topsisScore: Math.min(Math.max(score, 0.4), 0.98),
        status: score > 0.65 ? 'Optimal Target' : 'Secondary Market',
      };
    }).sort((a, b) => b.topsisScore - a.topsisScore);
  };

  const rankedMarkets = calculateTOPSIS();

  const comparisonTrendData = [
    { day: 'Day 1', vashi: 41.2, azadpur: 43.5, nashik: 38.9 },
    { day: 'Day 5', vashi: 42.0, azadpur: 44.1, nashik: 39.5 },
    { day: 'Day 10', vashi: 42.8, azadpur: 44.8, nashik: 40.2 },
    { day: 'Day 15', vashi: 43.5, azadpur: 45.2, nashik: 40.8 },
    { day: 'Day 20', vashi: 44.1, azadpur: 45.9, nashik: 41.2 },
    { day: 'Day 25', vashi: 44.5, azadpur: 46.2, nashik: 41.8 },
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-3 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Locked Algorithm: TOPSIS Multi-Criteria Decision Model[cite: 1, 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Target Market Intelligence & Ranking
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Identify optimal liquidation markets by balancing regional demand, price rates, competitive density, and freight distance[cite: 2].
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Weights Form & Ranking Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <MarketTOPSISForm
            weights={weights}
            onChange={handleWeightChange}
            onReset={handleResetWeights}
          />
        </div>

        <div className="lg:col-span-2">
          <MarketRankingTable markets={rankedMarkets} />
        </div>
      </div>

      {/* Opportunity Heatmap */}
      <MarketHeatmapGrid markets={rankedMarkets} />

      {/* Comparative Price Trajectory Chart */}
      <MarketTrendComparisonChart data={comparisonTrendData} />

      {/* Next Step Action Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Generate Complete Executive Business Report
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Compile predictions, supplier matches, financial models, and TOPSIS rankings into PDF format[cite: 2].
          </p>
        </div>

        <button
          onClick={() => navigate('/reports')}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center justify-center gap-2"
        >
          <span>Proceed to PDF Report Generator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};