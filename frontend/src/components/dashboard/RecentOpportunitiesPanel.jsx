import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const RecentOpportunitiesPanel = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      id: 1,
      rawMaterial: 'Fresh Mangoes',
      product: 'Organic Mango Juice Concentrate',
      profitMargin: '+42.5%',
      demandScore: '94/100',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&auto=format&fit=crop&q=80',
      tag: 'Top Hybrid AI Pick'
    },
    {
      id: 2,
      rawMaterial: 'Raw Tomatoes',
      product: 'Sun-Dried Tomato Puree',
      profitMargin: '+38.0%',
      demandScore: '88/100',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80',
      tag: 'High Price Surge'
    }
  ];

  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-agri-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Recommended Value-Added Opportunities
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Generated from your crop inputs & current market signals
          </p>
        </div>

        <button
          onClick={() => navigate('/recommendation')}
          className="text-xs font-bold text-agri-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
        >
          View All Recommendations <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opportunities.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 hover:border-agri-500/40 transition-all group cursor-pointer"
            onClick={() => navigate('/recommendation')}
          >
            <img
              src={item.image}
              alt={item.product}
              className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-agri-500/10 text-agri-600 dark:text-emerald-400 border border-agri-500/20">
                  {item.tag}
                </span>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                  {item.profitMargin}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {item.product}
              </h4>
              <p className="text-[11px] text-slate-500 truncate mb-2">
                Raw Material: {item.rawMaterial}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Demand Index: {item.demandScore}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};