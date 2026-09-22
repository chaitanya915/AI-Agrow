import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, LineChart } from 'lucide-react';

import { PricePredictionForm } from '../components/price/PricePredictionForm';
import { PriceMetricsCards } from '../components/price/PriceMetricsCards';
import { LSTMPriceChart } from '../components/price/LSTMPriceChart';
import { HistoricalAnalysisTable } from '../components/price/HistoricalAnalysisTable';

export const PricePredictionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    commodity: 'Organic Mango Juice Concentrate',
    market: 'Nashik Main Mandi (Maharashtra)',
    lookback: '60',
    forecastDays: '30'
  });

  const [isPredicting, setIsPredicting] = useState(false);

  useEffect(() => {
    if (location.state?.product) {
      setFormData((prev) => ({
        ...prev,
        commodity: typeof location.state.product === 'string' 
          ? location.state.product 
          : location.state.product.productName
      }));
    }
  }, [location.state]);

  const [metrics, setMetrics] = useState({
    currentPrice: '34.20',
    peakPrice: '43.80',
    priceIncrease: '28.1',
    peakWindow: 'Day 22 - Day 27',
    volatility: '0.14 Index (Low)'
  });

  const chartData = [
    { day: 'Day -10', actual: 31.5, forecast: null },
    { day: 'Day -5', actual: 33.0, forecast: null },
    { day: 'Day 0', actual: 34.2, forecast: 34.2 },
    { day: 'Day 5', actual: null, forecast: 35.8 },
    { day: 'Day 10', actual: null, forecast: 37.1 },
    { day: 'Day 15', actual: null, forecast: 38.5 },
    { day: 'Day 20', actual: null, forecast: 41.2 },
    { day: 'Day 22', actual: null, forecast: 43.1 },
    { day: 'Day 25', actual: null, forecast: 43.8 },
    { day: 'Day 27', actual: null, forecast: 43.2 },
    { day: 'Day 30', actual: null, forecast: 41.0 },
  ];

  const historicalRows = [
    { date: 'Sep 21, 2026', market: 'Nashik APMC', arrivals: '142', minPrice: '32.0', maxPrice: '35.5', modalPrice: '34.2', change: '+2.4%', isUp: true },
    { date: 'Sep 20, 2026', market: 'Nashik APMC', arrivals: '158', minPrice: '31.5', maxPrice: '34.8', modalPrice: '33.4', change: '+1.1%', isUp: true },
    { date: 'Sep 19, 2026', market: 'Nashik APMC', arrivals: '165', minPrice: '31.0', maxPrice: '34.0', modalPrice: '33.0', change: '-0.8%', isUp: false },
    { date: 'Sep 18, 2026', market: 'Nashik APMC', arrivals: '180', minPrice: '30.5', maxPrice: '33.8', modalPrice: '33.2', change: '+1.5%', isUp: true },
    { date: 'Sep 17, 2026', market: 'Nashik APMC', arrivals: '190', minPrice: '30.0', maxPrice: '33.5', modalPrice: '32.7', change: '+0.5%', isUp: true },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPredicting(true);

    setTimeout(() => {
      setIsPredicting(false);
      setMetrics({
        currentPrice: '34.20',
        peakPrice: (42 + Math.random() * 3).toFixed(2),
        priceIncrease: '28.1',
        peakWindow: 'Day 22 - Day 27',
        volatility: '0.12 Index (Low)'
      });
    }, 1000);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Locked Algorithm: LSTM Neural Network[cite: 1, 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              LSTM Price Prediction Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Forecast daily mandi prices and pinpoint optimal liquidation windows to maximize net margins[cite: 1, 2].
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <PriceMetricsCards metrics={metrics} />

      {/* Main Grid: Form & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <PricePredictionForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isPredicting={isPredicting}
          />
        </div>

        <div className="lg:col-span-2 space-y-8">
          <LSTMPriceChart 
            data={chartData} 
            commodityName={formData.commodity}
            peakWindowLabel={metrics.peakWindow}
          />

          <HistoricalAnalysisTable rows={historicalRows} />
        </div>
      </div>

      {/* Next Step Action Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Find Optimal Suppliers & Processors
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Match with nearby verified suppliers evaluated via Weighted Scoring[cite: 1, 2].
          </p>
        </div>

        <button
          onClick={() => navigate('/supplier-recommendation', { state: { commodity: formData.commodity } })}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center justify-center gap-2"
        >
          <span>Proceed to Supplier Recommendation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};