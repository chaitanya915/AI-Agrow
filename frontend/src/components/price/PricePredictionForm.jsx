import React from 'react';
import { 
  LineChart, 
  MapPin, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const PricePredictionForm = ({ 
  formData, 
  onChange, 
  onSubmit, 
  isPredicting 
}) => {
  const commodities = [
    'Organic Mango Juice Concentrate',
    'Fresh Mangoes (Kesar/Alphonso)',
    'Sun-Dried Tomato Puree',
    'Raw Tomatoes (Grade A)',
    'Artisanal Paneer Cheese',
    'Fresh Whole Milk',
    'Apples (Shimla Premium)'
  ];

  const markets = [
    'Nashik Main Mandi (Maharashtra)',
    'Azadpur Mandi (Delhi)',
    'Vashi APMC Market (Mumbai)',
    'Kolar Wholesale Market (Karnataka)',
    'Pimpalgaon Baswant Market'
  ];

  const lookbacks = [
    { label: '30 Days Historical', value: '30' },
    { label: '60 Days Historical (Optimal)', value: '60' },
    { label: '90 Days Historical', value: '90' }
  ];

  const forecastDays = [
    { label: '15 Days Ahead', value: '15' },
    { label: '30 Days Ahead (Standard)', value: '30' },
    { label: '45 Days Ahead', value: '45' }
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
        <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <LineChart className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            LSTM Neural Network Parameters
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select commodity and mandi market to initialize sequence inference[cite: 1, 2]
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Commodity Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Commodity / Value Product
            </label>
            <div className="relative">
              <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="commodity"
                value={formData.commodity}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {commodities.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mandi Market Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Mandi / Wholesale Market
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="market"
                value={formData.market}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {markets.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sequence Lookback */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              LSTM Lookback Window
            </label>
            <div className="relative">
              <Clock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="lookback"
                value={formData.lookback}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {lookbacks.map((l) => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Forecast Horizon */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Forecast Horizon
            </label>
            <div className="relative">
              <Calendar className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="forecastDays"
                value={formData.forecastDays}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {forecastDays.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end pt-2">
          <button
            type="submit"
            disabled={isPredicting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 hover:from-agri-600 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-agri-600/25 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
          >
            {isPredicting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Execute LSTM Forecast</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};