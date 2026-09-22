import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart2, 
  LineChart as LineIcon, 
  Truck, 
  Sparkles, 
  PlusCircle, 
  FileSpreadsheet 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { StatWidgetCard } from '../components/dashboard/StatWidgetCard';
import { RevenueProfitAreaChart } from '../components/dashboard/RevenueProfitAreaChart';
import { RegionalDemandBarChart } from '../components/dashboard/RegionalDemandBarChart';
import { ProductSharePieChart } from '../components/dashboard/ProductSharePieChart';
import { PriceTrendLineChart } from '../components/dashboard/PriceTrendLineChart';
import { RecentOpportunitiesPanel } from '../components/dashboard/RecentOpportunitiesPanel';

export const DashboardPage = () => {
  const navigate = useNavigate();

  const widgets = [
    {
      title: 'Estimated Revenue',
      value: '$124,500',
      change: '+18.4%',
      isPositive: true,
      subtext: 'Calculated mathematical projection',
      icon: <DollarSign className="w-5 h-5" />,
      gradient: 'bg-gradient-to-tr from-emerald-600 to-agri-400'
    },
    {
      title: 'Net Profit Margin',
      value: '$58,900',
      change: '+22.1%',
      isPositive: true,
      subtext: 'ROI ROI = (Profit / Cost) x 100',
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: 'bg-gradient-to-tr from-teal-600 to-cyan-400'
    },
    {
      title: 'Demand Confidence',
      value: '94 / 100',
      change: '+4.2%',
      isPositive: true,
      subtext: 'XGBoost Regressor Confidence',
      icon: <BarChart2 className="w-5 h-5" />,
      gradient: 'bg-gradient-to-tr from-blue-600 to-indigo-400'
    },
    {
      title: 'Mandi Price Signal',
      value: '$43.80 / kg',
      change: '+8.5%',
      isPositive: true,
      subtext: 'LSTM 30-Day Forecast Peak',
      icon: <LineIcon className="w-5 h-5" />,
      gradient: 'bg-gradient-to-tr from-purple-600 to-pink-400'
    },
    {
      title: 'Verified Suppliers',
      value: '18 Active',
      change: '98.2%',
      isPositive: true,
      subtext: 'Weighted Scoring Match Index',
      icon: <Truck className="w-5 h-5" />,
      gradient: 'bg-gradient-to-tr from-amber-600 to-orange-400'
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> AI Engine Active
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Welcome back, Rohit Patil 👋
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Your agricultural portfolio is operating at <span className="font-bold text-emerald-400">+22.1% higher profitability</span> after processing raw mangoes into value-added juice concentrate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/farmer-input')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-agri-500 hover:from-emerald-400 hover:to-agri-400 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" /> New Crop Analysis
            </button>
            <button
              onClick={() => navigate('/reports')}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" /> Download Report
            </button>
          </div>
        </div>
      </div>

      {/* 5 Statistics Widgets Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {widgets.map((w, idx) => (
          <StatWidgetCard key={idx} {...w} delay={idx * 0.08} />
        ))}
      </div>

      {/* Main Charts Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RevenueProfitAreaChart />
        </div>
        <div className="lg:col-span-1">
          <ProductSharePieChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RegionalDemandBarChart />
        <PriceTrendLineChart />
      </div>

      {/* Bottom Value-Added Opportunities Panel */}
      <RecentOpportunitiesPanel />

    </div>
  );
};