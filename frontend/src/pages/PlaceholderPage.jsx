import React from 'react';
import { motion } from 'framer-motion';

export const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-10 rounded-3xl max-w-md w-full shadow-apple dark:shadow-apple-dark"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-emerald-600 to-agri-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-emerald-500/20">
          🌱
        </div>
        <h1 className="text-2xl font-bold mb-2 tracking-tight">{title}</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          System routing initialized. This module will be populated during the active screen development sequence.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agri-500/10 text-agri-600 dark:text-agri-400 text-xs font-semibold border border-agri-500/20">
          <span className="w-2 h-2 rounded-full bg-agri-500 animate-pulse" />
          Phase 1 Architecture Active
        </div>
      </motion.div>
    </div>
  );
};