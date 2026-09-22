import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PieChart, ShieldCheck } from 'lucide-react';

import { ProfitabilityForm } from '../components/profitability/ProfitabilityForm';
import { ProfitabilityMetricsCards } from '../components/profitability/ProfitabilityMetricsCards';
import { CostBreakdownPieChart } from '../components/profitability/CostBreakdownPieChart';
import { SensitivityAnalysisBarChart } from '../components/profitability/SensitivityAnalysisBarChart';

export const ProfitabilityAnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [costs, setCosts] = useState({
    rawMaterialCost: 2000,
    processingCost: 1500,
    packagingCost: 600,
    storageCost: 400,
    transportCost: 500,
    sellingPrice: 4.80,
    batchYield: 2500,
  });

  useEffect(() => {
    if (location.state?.supplier) {
      const s = location.state.supplier;
      setCosts((prev) => ({
        ...prev,
        processingCost: Math.round(s.pricePerKg * prev.batchYield),
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCosts((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleReset = () => {
    setCosts({
      rawMaterialCost: 2000,
      processingCost: 1500,
      packagingCost: 600,
      storageCost: 400,
      transportCost: 500,
      sellingPrice: 4.80,
      batchYield: 2500,
    });
  };

  // Mathematical Model Calculations
  const totalCost = costs.rawMaterialCost + costs.processingCost + costs.packagingCost + costs.storageCost + costs.transportCost;
  const revenue = costs.batchYield * costs.sellingPrice;
  const netProfit = revenue - totalCost;
  const roi = totalCost > 0 ? (netProfit / totalCost) * 100 : 0;
  const breakEvenPrice = costs.batchYield > 0 ? totalCost / costs.batchYield : 0;
  const profitMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const summary = {
    totalCost,
    revenue,
    netProfit,
    roi,
    breakEvenPrice,
    profitMargin,
    batchYield: costs.batchYield,
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Locked Algorithm: Mathematical Formula Engine[cite: 1, 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Financial Profitability & ROI Modeling
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Calculate exact profit yields, ROI, unit break-even thresholds, and cost structures for value-added processing pipelines[cite: 2].
            </p>
          </div>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <ProfitabilityMetricsCards summary={summary} />

      {/* Main Grid: Inputs vs Visual Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProfitabilityForm
            costs={costs}
            onChange={handleChange}
            onReset={handleReset}
          />
        </div>

        <div className="lg:col-span-1">
          <CostBreakdownPieChart costs={costs} totalCost={totalCost} />
        </div>
      </div>

      {/* Sensitivity Analysis Section */}
      <SensitivityAnalysisBarChart summary={summary} unitPrice={costs.sellingPrice} />

      {/* Next Step Action Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Analyze Target Market Opportunities
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Proceed to the Market Intelligence module powered by TOPSIS multi-criteria analysis[cite: 1, 2].
          </p>
        </div>

        <button
          onClick={() => navigate('/market-intelligence', { state: { summary } })}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center justify-center gap-2"
        >
          <span>Proceed to Market Intelligence (TOPSIS)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};