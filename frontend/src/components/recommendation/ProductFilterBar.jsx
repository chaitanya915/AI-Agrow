import React from 'react';
import { Search, Filter, ArrowUpDown, Sparkles, SlidersHorizontal } from 'lucide-react';

export const ProductFilterBar = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  sortBy,
  setSortBy,
  minScore,
  setMinScore
}) => {
  const categories = ['All Commodities', 'Fruits', 'Vegetables', 'Dairy', 'Grains'];

  return (
    <div className="glass-panel p-5 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Search Bar */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products or raw material..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-agri-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-agri-700 to-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-agri-500" />
            <span>Sort By:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-agri-500 cursor-pointer"
          >
            <option value="score">AI Composite Score</option>
            <option value="profit">Profit Margin %</option>
            <option value="demand">Demand Score</option>
            <option value="cost">Lowest Processing Cost</option>
          </select>
        </div>

      </div>

      {/* Threshold Slider Bar */}
      <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
          <SlidersHorizontal className="w-4 h-4 text-agri-500" />
          <span>Minimum Recommendation Score:</span>
          <span className="text-agri-600 dark:text-emerald-400 font-extrabold">{minScore}+</span>
        </div>
        <input
          type="range"
          min="50"
          max="95"
          value={minScore}
          onChange={(e) => setMinScore(Number(e.target.value))}
          className="w-48 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-agri-500"
        />
      </div>
    </div>
  );
};