import React from 'react';
import { 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Award, 
  Globe 
} from 'lucide-react';

export const ReportSummaryCard = ({ reportData }) => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-agri-500/10 text-agri-600 dark:text-emerald-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Business Proposal Summary
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generated for {reportData.farmerName} • Ref #{reportData.reportId}
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
          Ready for PDF Export
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-slate-400 block mb-1 font-semibold">Primary Commodity</span>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{reportData.commodity} ({reportData.quantity})</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-slate-400 block mb-1 font-semibold">Recommended Value Product</span>
          <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{reportData.recommendedProduct}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-slate-400 block mb-1 font-semibold">Projected Net Profit</span>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">+${reportData.netProfit.toLocaleString()} ({reportData.roi}% ROI)</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-slate-400 block mb-1 font-semibold">Matched Processing Supplier</span>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{reportData.supplierName}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-slate-400 block mb-1 font-semibold">Top Target Market</span>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">{reportData.targetMarket}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
          <span className="text-slate-400 block mb-1 font-semibold">Peak Selling Window</span>
          <span className="text-sm font-extrabold text-amber-500">{reportData.peakWindow}</span>
        </div>
      </div>
    </div>
  );
};