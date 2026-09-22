import React from 'react';
import { 
  Sprout, 
  TrendingUp, 
  DollarSign, 
  Award, 
  MapPin, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export const PDFReportPreview = ({ reportData, componentRef }) => {
  return (
    <div className="glass-panel p-4 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark overflow-x-auto">
      
      {/* Printable Paper Canvas Container */}
      <div 
        ref={componentRef}
        id="printable-report"
        className="w-full max-w-[800px] mx-auto bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-2xl font-sans space-y-8 text-xs border border-slate-200"
      >
        
        {/* Document Header */}
        <div className="flex items-center justify-between border-b-2 border-agri-600 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-agri-600 flex items-center justify-center text-white font-bold">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">AI AGROW</h1>
              <p className="text-[10px] font-bold text-agri-600 uppercase tracking-wider">
                Farmer Business Growth & Product Recommendation System
              </p>
            </div>
          </div>

          <div className="text-right text-[10px] text-slate-500">
            <p className="font-bold text-slate-800 text-xs">EXECUTIVE BUSINESS PLAN</p>
            <p>Report ID: {reportData.reportId}</p>
            <p>Date Generated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Section 1: Executive Profile Summary */}
        <div className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-agri-700 border-b pb-1">
            1. Farmer Resource Profile & Scope
          </h2>
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <p className="text-slate-500">Farmer / Enterprise Owner:</p>
              <p className="font-bold text-slate-900">{reportData.farmerName}</p>
            </div>
            <div>
              <p className="text-slate-500">Geographic Location:</p>
              <p className="font-bold text-slate-900">{reportData.location}</p>
            </div>
            <div>
              <p className="text-slate-500">Primary Raw Crop:</p>
              <p className="font-bold text-slate-900">{reportData.commodity} ({reportData.quantity})</p>
            </div>
            <div>
              <p className="text-slate-500">Allocated Capital Budget:</p>
              <p className="font-bold text-slate-900">${reportData.budget.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Section 2: Hybrid AI Recommendation */}
        <div className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-agri-700 border-b pb-1">
            2. Value-Added Product Strategy (Hybrid AI Recommendation)
          </h2>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-emerald-800">
                Recommended Output: {reportData.recommendedProduct}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold text-[10px]">
                {reportData.recommendationScore} / 100 AI Score
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Transforming {reportData.commodity} into {reportData.recommendedProduct} yields a projected profit margin increase of <span className="font-bold text-emerald-700">+{reportData.profitMargin}%</span> compared to raw commodity liquidation.
            </p>
          </div>
        </div>

        {/* Section 3: Predictive Analytics (XGBoost & LSTM) */}
        <div className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-agri-700 border-b pb-1">
            3. Demand & Mandi Price Forecasting (XGBoost & LSTM)
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">XGBoost Demand Index</p>
              <p className="text-lg font-black text-agri-600">{reportData.demandScore} / 100</p>
              <p className="text-[10px] text-slate-500 mt-1">Peak Demand Month: {reportData.peakDemandMonth}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">LSTM Price Peak</p>
              <p className="text-lg font-black text-emerald-600">${reportData.peakPrice} / kg</p>
              <p className="text-[10px] text-slate-500 mt-1">Optimal Sell Window: {reportData.peakWindow}</p>
            </div>
          </div>
        </div>

        {/* Section 4: Cost Breakdown & Profitability */}
        <div className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-agri-700 border-b pb-1">
            4. Cost Structure & Profitability Summary
          </h2>
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 font-extrabold text-slate-700">
                <th className="p-2 border border-slate-200">Financial Metric</th>
                <th className="p-2 border border-slate-200 text-right">Value ($ USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-2 border border-slate-200">Total Operational Cost</td>
                <td className="p-2 border border-slate-200 text-right font-bold">${reportData.totalCost.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200">Expected Gross Revenue</td>
                <td className="p-2 border border-slate-200 text-right font-bold">${reportData.expectedRevenue.toLocaleString()}</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="p-2 border border-slate-200 font-black text-emerald-800">Net Estimated Profit</td>
                <td className="p-2 border border-slate-200 text-right font-black text-emerald-800">+${reportData.netProfit.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200">Return on Investment (ROI)</td>
                <td className="p-2 border border-slate-200 text-right font-bold text-agri-600">{reportData.roi}%</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200">Break-Even Selling Rate</td>
                <td className="p-2 border border-slate-200 text-right font-bold">${reportData.breakEvenPrice} / unit</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5: Supplier & Market Matching */}
        <div className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-agri-700 border-b pb-1">
            5. Supply Chain & Market Target Execution
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-[10px] uppercase font-bold text-slate-400">Matched Supplier (Weighted Scoring)</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{reportData.supplierName}</p>
              <p className="text-[10px] text-slate-500">{reportData.supplierLocation} ({reportData.supplierDistance} km away)</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-[10px] uppercase font-bold text-slate-400">Target Wholesale Market (TOPSIS)</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{reportData.targetMarket}</p>
              <p className="text-[10px] text-slate-500">Relative Closeness $C_i^* = {reportData.topsisScore}$</p>
            </div>
          </div>
        </div>

        {/* Footer Authorization Signoff */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
          <div>
            <p className="font-bold text-slate-700">AI AGROW SYSTEM GENERATED REPORT</p>
            <p>Algorithms: Hybrid Rec, XGBoost, LSTM, Weighted Scoring, TOPSIS</p>
          </div>
          <div className="text-right">
            <div className="h-8 border-b border-slate-300 w-32 mb-1" />
            <p>Authorized Signature / Stamp</p>
          </div>
        </div>

      </div>
    </div>
  );
};