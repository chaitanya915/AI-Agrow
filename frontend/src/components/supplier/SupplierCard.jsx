import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Award, 
  DollarSign, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';

export const SupplierCard = ({ supplier, onSelect, index = 0 }) => {
  const getScoreBadgeColor = (score) => {
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
        {/* Supplier Header Banner */}
        <div className="relative h-44 w-full overflow-hidden bg-slate-900">
          <img
            src={supplier.image}
            alt={supplier.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Weighted Score Badge */}
          <div className="absolute top-3 right-3">
            <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${getScoreBadgeColor(supplier.weightedScore)} shadow-lg text-xs font-black flex items-center gap-1.5`}>
              <Award className="w-3.5 h-3.5" />
              <span>{supplier.weightedScore} Weighted Score</span>
            </div>
          </div>

          {/* Verification Pill */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-[11px] font-extrabold border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              {supplier.verifiedStatus}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-lg font-extrabold text-white tracking-tight drop-shadow-md truncate">
              {supplier.name}
            </h3>
            <p className="text-xs text-slate-200 font-medium opacity-90 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-agri-400 shrink-0" />
              {supplier.location} • <span className="text-emerald-300 font-bold">{supplier.distanceKm} km away</span>
            </p>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="p-5 space-y-4">
          
          {/* Key Metrics Pill Grid */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 block mb-0.5">
                Rating
              </span>
              <span className="text-xs font-black text-amber-500 flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-current" /> {supplier.rating}
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 block mb-0.5">
                Rate / kg
              </span>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                ${supplier.pricePerKg}
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 block mb-0.5">
                Reliability
              </span>
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                {supplier.reliability}%
              </span>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="space-y-2 text-xs pt-1">
            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="text-slate-400">Specialization:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 truncate max-w-[180px]">
                {supplier.specialization}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="text-slate-400">Daily Capacity:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {supplier.dailyCapacity}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="text-slate-400">Min Order Qty:</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {supplier.minOrderQty}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={() => onSelect(supplier)}
          className="w-full py-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-agri-600 dark:hover:bg-agri-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn shadow-md"
        >
          <span>View Full Specifications</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};