import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert,
  BarChart2
} from 'lucide-react';

export const ProductCard = ({ product, onSelect, index = 0 }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return 'from-emerald-500 to-agri-500 text-white';
    if (score >= 80) return 'from-teal-500 to-cyan-500 text-white';
    return 'from-amber-500 to-orange-500 text-white';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark flex flex-col justify-between transition-all duration-300 hover:border-agri-500/50 group"
    >
      <div>
        {/* Product Image Header with Badges */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Hybrid Recommendation Composite Score Badge */}
          <div className="absolute top-3 right-3">
            <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${getScoreColor(product.recommendationScore)} shadow-lg text-xs font-black flex items-center gap-1.5`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.recommendationScore} AI Score</span>
            </div>
          </div>

          {/* Raw Material Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10">
              {product.rawMaterial}
            </span>
          </div>

          {/* Product Name overlay */}
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
              {product.productName}
            </h3>
            <p className="text-xs text-slate-200 font-medium opacity-90 truncate">
              {product.category} • Yield: {product.yieldRatio}
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="p-5 space-y-4">
          
          {/* Top Key Metrics Row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400 block mb-0.5">
                Profit Margin
              </span>
              <span className="text-lg font-black text-emerald-700 dark:text-emerald-300">
                +{product.profitMargin}%
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <span className="text-[10px] font-extrabold uppercase text-blue-600 dark:text-blue-400 block mb-0.5">
                Demand Index
              </span>
              <span className="text-lg font-black text-blue-700 dark:text-blue-300">
                {product.demandScore} / 100
              </span>
            </div>
          </div>

          {/* Financial Metrics */}
          <div className="space-y-2 text-xs pt-1">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Processing Cost:
              </span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                ${product.processingCost.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-slate-400" /> Expected Revenue:
              </span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                ${product.expectedRevenue.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-slate-400" /> Market Trend:
              </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {product.marketTrend}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={() => onSelect(product)}
          className="w-full py-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-agri-600 dark:hover:bg-agri-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn shadow-md"
        >
          <span>View Detailed Breakdown</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};