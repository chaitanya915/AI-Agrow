import React from 'react';
import { Search, MapPin, Star, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const SupplierFilterBar = ({ 
  searchTerm, 
  setSearchTerm, 
  maxDistance, 
  setMaxDistance, 
  minRating, 
  setMinRating, 
  sortBy, 
  setSortBy 
}) => {
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
            placeholder="Search supplier, facility, location..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-agri-500"
          />
        </div>

        {/* Minimum Rating Selector */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <span className="text-xs font-bold text-slate-500 shrink-0">Min Rating:</span>
          <div className="flex gap-1.5">
            {[3.5, 4.0, 4.5, 4.8].map((rating) => (
              <button
                key={rating}
                onClick={() => setMinRating(rating)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  minRating === rating
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Star className="w-3 h-3 fill-current" /> {rating}+
              </button>
            ))}
          </div>
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
            <option value="score">Weighted Score</option>
            <option value="distance">Proximity (Closest First)</option>
            <option value="price">Lowest Unit Rate</option>
            <option value="reliability">Reliability Index</option>
          </select>
        </div>

      </div>

      {/* Distance Radius Slider */}
      <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
          <MapPin className="w-4 h-4 text-agri-500" />
          <span>Maximum Freight Radius:</span>
          <span className="text-agri-600 dark:text-emerald-400 font-extrabold">{maxDistance} km</span>
        </div>
        <input
          type="range"
          min="10"
          max="200"
          step="10"
          value={maxDistance}
          onChange={(e) => setMaxDistance(Number(e.target.value))}
          className="w-48 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-agri-500"
        />
      </div>
    </div>
  );
};