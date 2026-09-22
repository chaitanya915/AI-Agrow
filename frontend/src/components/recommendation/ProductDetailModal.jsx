import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

export const ProductDetailModal = ({ product, onClose }) => {
  const navigate = useNavigate();

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0b1322] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col justify-between"
        >
          {/* Modal Header */}
          <div className="relative h-48 w-full bg-slate-900 shrink-0">
            <img 
              src={product.image} 
              alt={product.productName} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-[#0b1322]/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                  {product.rawMaterial} Processing
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-1">
                  {product.productName}
                </h2>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-agri-600 to-emerald-500 text-white font-black text-sm shadow-lg">
                {product.recommendationScore} AI Score
              </div>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-slate-900 dark:text-slate-100">
            
            {/* Score Component Breakdown */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-agri-500" />
                Hybrid Model Component Breakdown[cite: 1]
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Content Match</span>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">96 / 100</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Profit Potential</span>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">+{product.profitMargin}%</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Demand Rating</span>
                  <span className="text-sm font-black text-blue-600 dark:text-blue-400">{product.demandScore} / 100</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Capital Feasibility</span>
                  <span className="text-sm font-black text-teal-600 dark:text-teal-400">Optimal</span>
                </div>
              </div>
            </div>

            {/* Financial Overview */}
            <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Financial Estimates ($ USD)
              </h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Processing Cost:</span>
                  <span className="font-bold text-slate-900 dark:text-white">${product.processingCost.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Expected Revenue:</span>
                  <span className="font-bold text-slate-900 dark:text-white">${product.expectedRevenue.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Net Profit:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    +${(product.expectedRevenue - product.processingCost).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Action Steps */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Execution Roadmap
              </h4>
              <div className="space-y-2">
                {product.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Action Buttons */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                navigate('/demand-prediction', { state: { product } });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center justify-center gap-2"
            >
              <span>Run XGBoost Demand Forecast</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};