import React from 'react';
import { 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Box, 
  Sparkles, 
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';

export const DemandPredictionForm = ({ 
  formData, 
  onChange, 
  onSubmit, 
  isPredicting 
}) => {
  const products = [
    'Organic Mango Juice Concentrate',
    'Premium Mango Pulp',
    'Sun-Dried Tomato Puree',
    'Spiced Tomato Ketchup',
    'Artisanal Paneer Cheese',
    'Organic Sparkling Apple Cider'
  ];

  const regions = [
    'Western Region (Maharashtra/Gujarat)',
    'Northern Region (Delhi/Punjab/UP)',
    'Southern Region (Karnataka/TN)',
    'Eastern Region (WB/Odisha)',
    'Central Region (MP/CG)'
  ];

  const horizons = [
    { label: '3 Months (Quarterly)', value: '3' },
    { label: '6 Months (Bi-Annual)', value: '6' },
    { label: '12 Months (Full Year)', value: '12' }
  ];

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
        <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-500">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            XGBoost Demand Model Configuration
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Set regional parameters to recalculate gradient boosted regression predictions[cite: 1, 2]
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Product Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Value-Added Product
            </label>
            <div className="relative">
              <Box className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="product"
                value={formData.product}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {products.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Target Region */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Target Market Region
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="region"
                value={formData.region}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Forecast Horizon */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Forecast Time Horizon
            </label>
            <div className="relative">
              <Calendar className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="horizon"
                value={formData.horizon}
                onChange={onChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
              >
                {horizons.map((h) => (
                  <option key={h.value} value={h.value}>{h.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Batch Supply Volume */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Planned Production Batch (Units)
            </label>
            <div className="relative">
              <SlidersHorizontal className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="number"
                name="batchVolume"
                value={formData.batchVolume}
                onChange={onChange}
                placeholder="e.g. 5000"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
              />
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end pt-2">
          <button
            type="submit"
            disabled={isPredicting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
          >
            {isPredicting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Run XGBoost Demand Forecast</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};