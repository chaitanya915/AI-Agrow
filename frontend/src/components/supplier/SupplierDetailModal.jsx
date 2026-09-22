import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Truck, 
  Award, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  Send,
  Building,
  ArrowRight
} from 'lucide-react';

export const SupplierDetailModal = ({ supplier, onClose }) => {
  const navigate = useNavigate();
  const [quoteSent, setQuoteSent] = useState(false);

  if (!supplier) return null;

  const handleSendQuote = (e) => {
    e.preventDefault();
    setQuoteSent(true);
    setTimeout(() => {
      setQuoteSent(false);
      onClose();
    }, 1500);
  };

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
          {/* Header Banner */}
          <div className="relative h-48 w-full bg-slate-900 shrink-0">
            <img 
              src={supplier.image} 
              alt={supplier.name} 
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
                  {supplier.verifiedStatus}
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-1">
                  {supplier.name}
                </h2>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-agri-600 to-emerald-500 text-white font-black text-sm shadow-lg">
                {supplier.weightedScore} Weighted Score
              </div>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-slate-900 dark:text-slate-100">
            
            {/* Weighted Model Breakdown */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-agri-500" />
                Weighted Scoring Breakdown[cite: 1, 2]
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Price (35%)</span>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">${supplier.pricePerKg}/kg</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Proximity (25%)</span>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">{supplier.distanceKm} km</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Reliability (20%)</span>
                  <span className="text-sm font-black text-blue-600 dark:text-blue-400">{supplier.reliability}%</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 block">Rating (20%)</span>
                  <span className="text-sm font-black text-amber-500 flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> {supplier.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications & Infrastructure */}
            <div className="glass-panel p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Verified Certifications & Machinery
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {supplier.certifications.map((cert, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-agri-500/10 text-agri-600 dark:text-emerald-400 font-bold border border-agri-500/20">
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Request Quotation Form */}
            {quoteSent ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Quotation RFQ Sent directly to facility dispatch office.
              </div>
            ) : (
              <form onSubmit={handleSendQuote} className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Request Processing Quote
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Batch Quantity (kg)"
                    required
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs outline-none focus:ring-2 focus:ring-agri-500"
                  />
                  <input
                    type="date"
                    required
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs outline-none focus:ring-2 focus:ring-agri-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-agri-700 to-emerald-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Direct RFQ to Supplier
                </button>
              </form>
            )}

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
                navigate('/profitability-analysis', { state: { supplier } });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center justify-center gap-2"
            >
              <span>Calculate Profitability with Supplier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};