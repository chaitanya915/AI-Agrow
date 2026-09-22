import React from 'react';
import { 
  Calculator, 
  DollarSign, 
  Scale, 
  Truck, 
  Warehouse, 
  Package, 
  Sparkles, 
  RefreshCw 
} from 'lucide-react';

export const ProfitabilityForm = ({ costs, onChange, onReset }) => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Cost Structure Parameters ($ USD)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Adjust cost drivers to recalculate net ROI and break-even thresholds[cite: 2]
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          title="Reset to defaults"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
        {/* Raw Material Cost */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Raw Material Procurement ($)
          </label>
          <div className="relative">
            <DollarSign className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              name="rawMaterialCost"
              value={costs.rawMaterialCost}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>

        {/* Processing Cost */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Processing & Labor Fee ($)
          </label>
          <div className="relative">
            <DollarSign className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              name="processingCost"
              value={costs.processingCost}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>

        {/* Packaging Supplies */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Packaging & Labeling ($)
          </label>
          <div className="relative">
            <Package className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              name="packagingCost"
              value={costs.packagingCost}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>

        {/* Storage Cost */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Cold / Ambient Storage ($)
          </label>
          <div className="relative">
            <Warehouse className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              name="storageCost"
              value={costs.storageCost}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>

        {/* Transport Cost */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Freight & Logistics ($)
          </label>
          <div className="relative">
            <Truck className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              name="transportCost"
              value={costs.transportCost}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>

        {/* Target Unit Selling Price */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Target Selling Price ($ / Unit)
          </label>
          <div className="relative">
            <DollarSign className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              step="0.01"
              name="sellingPrice"
              value={costs.sellingPrice}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>

        {/* Batch Yield Quantity */}
        <div className="sm:col-span-2">
          <label className="block font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            Batch Finished Output Yield (Units / Liters / kg)
          </label>
          <div className="relative">
            <Scale className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              name="batchYield"
              value={costs.batchYield}
              onChange={onChange}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};