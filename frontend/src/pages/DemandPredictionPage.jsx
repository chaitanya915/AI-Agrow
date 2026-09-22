import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BarChart3, Layers, CheckCircle2 } from 'lucide-react';

import { DemandPredictionForm } from '../components/demand/DemandPredictionForm';
import { DemandMetricsCards } from '../components/demand/DemandMetricsCards';
import { DemandTrendChart } from '../components/demand/DemandTrendChart';

export const DemandPredictionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product: 'Organic Mango Juice Concentrate',
    region: 'Western Region (Maharashtra/Gujarat)',
    horizon: '6',
    batchVolume: '5000'
  });

  const [isPredicting, setIsPredicting] = useState(false);

  useEffect(() => {
    if (location.state?.product) {
      setFormData((prev) => ({
        ...prev,
        product: location.state.product.productName
      }));
    }
  }, [location.state]);

  // XGBoost Mock Output Data
  const [metrics, setMetrics] = useState({
    peakMonth: 'July 2026',
    demandScore: '94',
    growthRate: '18.4',
    accuracy: '95.2'
  });

  const [chartData, setChartData] = useState([
    { month: 'Jan', historical: 2100, projected: 2100 },
    { month: 'Feb', historical: 2400, projected: 2400 },
    { month: 'Mar', historical: 3100, projected: 3100 },
    { month: 'Apr', historical: 4200, projected: 4500 },
    { month: 'May', historical: 5800, projected: 6400 },
    { month: 'Jun', historical: 7100, projected: 8200 },
    { month: 'Jul', historical: null, projected: 9800 },
    { month: 'Aug', historical: null, projected: 8900 },
    { month: 'Sep', historical: null, projected: 7600 },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPredicting(true);

    // Simulate XGBoost Model Re-Inference
    setTimeout(() => {
      setIsPredicting(false);
      setMetrics({
        peakMonth: 'August 2026',
        demandScore: (88 + Math.floor(Math.random() * 8)).toString(),
        growthRate: (15 + (Math.random() * 8)).toFixed(1),
        accuracy: '95.2'
      });
    }, 1000);
  };

  const featureImportance = [
    { name: 'Seasonality & Weather Cycle', weight: '42%' },
    { name: 'Historical Regional Sales Volume', weight: '28%' },
    { name: 'Macro Mandi Arrival Volume', weight: '18%' },
    { name: 'Urban Retail Density Index', weight: '12%' },
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Page Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-3 border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Locked Algorithm: XGBoost Regression[cite: 1, 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Demand Forecasting Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Predict future market demand for value-added products across target regions to optimize production timing[cite: 1, 2].
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <DemandMetricsCards metrics={metrics} />

      {/* Main Grid: Config Form & Demand Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <DemandPredictionForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isPredicting={isPredicting}
          />
        </div>

        <div className="lg:col-span-2 space-y-8">
          <DemandTrendChart data={chartData} productName={formData.product} />

          {/* Feature Importance Panel */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-agri-500" />
              XGBoost Model Feature Importance Weights[cite: 1, 2]
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureImportance.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{feat.name}</span>
                  <span className="font-extrabold text-agri-600 dark:text-emerald-400">{feat.weight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Step Action Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Ready to Analyze Mandi Price Trends?
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Proceed to the LSTM Price Prediction engine to forecast optimal selling dates[cite: 1, 2].
          </p>
        </div>

        <button
          onClick={() => navigate('/price-prediction', { state: { product: formData.product } })}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center justify-center gap-2"
        >
          <span>Proceed to LSTM Price Prediction</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};