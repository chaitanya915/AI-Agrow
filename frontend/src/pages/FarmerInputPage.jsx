import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Sprout, 
  Scale, 
  DollarSign, 
  Sun, 
  MapPin, 
  Warehouse, 
  Truck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';

export const FarmerInputPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rawMaterial: 'Mangoes',
    quantity: '2500',
    unit: 'kg',
    budget: '5000',
    season: 'Summer',
    location: 'Nashik, Maharashtra',
    storageAvailability: 'Cold Storage',
    transportAvailability: 'Local Logistics',
    farmerExperience: 'Intermediate (2-5 yrs)',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rawMaterialOptions = [
    { name: 'Mangoes', icon: '🥭', category: 'Fruits' },
    { name: 'Tomatoes', icon: '🍅', category: 'Vegetables' },
    { name: 'Milk', icon: '🥛', category: 'Dairy' },
    { name: 'Apples', icon: '🍎', category: 'Fruits' },
    { name: 'Potatoes', icon: '🥔', category: 'Vegetables' },
    { name: 'Sugarcane', icon: '🌾', category: 'Crops' },
    { name: 'Soybeans', icon: '🌱', category: 'Grains' },
  ];

  const seasonOptions = ['Summer', 'Monsoon / Rainy', 'Winter', 'Spring'];
  const storageOptions = ['Ambient On-Farm', 'Cold Storage Access', 'No Storage Available'];
  const transportOptions = ['Self Owned Vehicle', 'Local Logistics Network', 'Contract Freight', 'No Transport'];
  const experienceOptions = ['Beginner (< 2 yrs)', 'Intermediate (2-5 yrs)', 'Expert (> 5 yrs)'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.rawMaterial) newErrors.rawMaterial = 'Raw material is required.';
    if (!formData.quantity || Number(formData.quantity) <= 0) newErrors.quantity = 'Enter a valid quantity.';
    if (!formData.budget || Number(formData.budget) <= 0) newErrors.budget = 'Enter a valid budget.';
    if (!formData.location) newErrors.location = 'Location district is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save input state locally & navigate to recommendation module
    localStorage.setItem('farmer_input_data', JSON.stringify(formData));

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/recommendation', { state: { inputData: formData } });
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Step 1: Resource Profiling
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Farmer Yield & Capability Profile
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Provide your crop harvest specifications, available capital, and infrastructure to run the Hybrid Product Recommendation engine[cite: 1].
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Crop & Resource Selection */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
            <div className="p-2.5 rounded-2xl bg-agri-500/10 text-agri-600 dark:text-emerald-400">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                1. Commodity & Crop Harvest
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select your raw produce and current harvest quantity
              </p>
            </div>
          </div>

          {/* Commodity Preset Tiles */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
              Select Primary Commodity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {rawMaterialOptions.map((item) => {
                const isSelected = formData.rawMaterial === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, rawMaterial: item.name }))}
                    className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-gradient-to-tr from-agri-700 to-emerald-600 text-white border-agri-500 shadow-lg shadow-agri-600/25 scale-105'
                        : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-agri-500/50'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-bold truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & Unit Toggle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Available Harvest Quantity
              </label>
              <div className="relative flex items-center">
                <Scale className="w-5 h-5 absolute left-4 text-slate-400" />
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 2500"
                  className="w-full pl-12 pr-24 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
                />
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="absolute right-2 top-1.5 bottom-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 border-none outline-none cursor-pointer"
                >
                  <option value="kg">Kilograms (kg)</option>
                  <option value="quintal">Quintals</option>
                  <option value="ton">Metric Tons</option>
                </select>
              </div>
              {errors.quantity && (
                <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.quantity}
                </p>
              )}
            </div>

            {/* Processing Budget */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Processing Capital Budget ($)
              </label>
              <div className="relative">
                <DollarSign className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g. 5000"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
                />
              </div>
              {errors.budget && (
                <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.budget}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Season & Geography */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
            <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-500">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                2. Seasonal & Regional Parameters
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Helps XGBoost demand and LSTM price predictors localize forecasts[cite: 1]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Season Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Harvest Season
              </label>
              <select
                name="season"
                value={formData.season}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
              >
                {seasonOptions.map((season) => (
                  <option key={season} value={season}>{season}</option>
                ))}
              </select>
            </div>

            {/* Geographic District */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                District / State Location
              </label>
              <div className="relative">
                <MapPin className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Nashik, Maharashtra"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
                />
              </div>
              {errors.location && (
                <p className="text-xs text-rose-500 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Infrastructure & Experience */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500">
              <Warehouse className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                3. Logistics, Storage & Capabilities
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Evaluated in the Weighted Supplier Scoring & Profitability models[cite: 1]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Storage Availability */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Storage Availability
              </label>
              <select
                name="storageAvailability"
                value={formData.storageAvailability}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
              >
                {storageOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Transport Availability */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Transport Infrastructure
              </label>
              <select
                name="transportAvailability"
                value={formData.transportAvailability}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
              >
                {transportOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Farmer Experience */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Agri-Business Experience
              </label>
              <select
                name="farmerExperience"
                value={formData.farmerExperience}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500"
              >
                {experienceOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Submit Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Info className="w-4 h-4 text-agri-500 shrink-0" />
            <span>Inputs will seed candidate selection in the Hybrid AI engine[cite: 1].</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 hover:from-agri-600 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-agri-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate AI Recommendations</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};