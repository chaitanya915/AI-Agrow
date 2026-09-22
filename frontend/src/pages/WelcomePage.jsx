import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Sprout, 
  TrendingUp, 
  LineChart, 
  Truck, 
  PieChart, 
  ArrowRight, 
  Users, 
  Award, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  BarChart3,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const featureCards = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-500" />,
      title: "Value-Added Product AI",
      algorithm: "Hybrid Recommendation System",
      description: "Convert raw produce into high-margin products (e.g., Fresh Mangoes → Premium Pulp & Organic Juice).",
      tag: "Product Discovery"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Market Demand Forecasting",
      algorithm: "XGBoost Regressor",
      description: "Predict regional consumer demand trends for upcoming months with high precision.",
      tag: "Demand Analytics"
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-500" />,
      title: "Mandi Price Prediction",
      algorithm: "LSTM Neural Networks",
      description: "Analyze temporal mandi price signals to pinpoint optimal selling windows.",
      tag: "Price Forecast"
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-500" />,
      title: "Optimal Supplier Matching",
      algorithm: "Weighted Scoring Model",
      description: "Match with nearby verified processing suppliers evaluated on cost, reliability, and distance.",
      tag: "Supply Chain"
    },
    {
      icon: <PieChart className="w-6 h-6 text-rose-500" />,
      title: "Profitability & Financial Engine",
      algorithm: "Mathematical ROI Engine",
      description: "Accurate cost structure breakdowns covering processing, storage, transport, and profit margin.",
      tag: "Financial Planning"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
      title: "TOPSIS Market Ranking",
      algorithm: "Multi-Criteria Decision Making",
      description: "Rank target markets based on competitive density, distance, and historical volume.",
      tag: "Market Intel"
    }
  ];

  const statistics = [
    { label: "Predictive Accuracy", value: "94.8%", sub: "Validated across regional mandis" },
    { label: "Registered Farmers", value: "12,500+", sub: "Active across 18 states" },
    { label: "Value-Added Products", value: "450+", sub: "Cataloged processing pipelines" },
    { label: "Avg. Profit Increase", value: "+38%", sub: "Reported in first season" },
  ];

  const testimonials = [
    {
      quote: "AI Agrow shifted my strategy from selling raw tomatoes at throwaway prices to setting up a local pureeing facility. My net profit jumped 42% in 6 months.",
      author: "Rajesh Patil",
      role: "Tomato & Maize Farmer",
      location: "Maharashtra, India",
      avatar: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "The LSTM price forecast saved our cooperative from selling during a market crash. We held stock for 3 weeks and liquidated at peak prices.",
      author: "Sonia Verma",
      role: "Agri-Entrepreneur & FPO Leader",
      location: "Punjab, India",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-[#070d18]/70 border-b border-slate-200/80 dark:border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-agri-700 via-agri-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-agri-500/25">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-agri-800 to-emerald-600 dark:from-white dark:via-slate-200 dark:to-agri-400 bg-clip-text text-transparent">
                AI Agrow
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-agri-600 dark:text-agri-400 uppercase">
                Farmer Intelligence
              </span>
            </div>
          </div>

          {/* Navigation & Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-agri-600 dark:hover:text-agri-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-agri-600 dark:hover:text-agri-400 transition-colors"
            >
              Sign In
            </button>

            <button
              onClick={() => navigate('/register')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-agri-600 to-emerald-600 hover:from-agri-500 hover:to-emerald-500 rounded-xl shadow-lg shadow-agri-600/20 hover:shadow-agri-600/35 transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Background Graphic & Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format&fit=crop&q=80" 
            alt="Agricultural Landscape" 
            className="w-full h-full object-cover object-center opacity-15 dark:opacity-20 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/95 to-slate-50 dark:from-[#070d18]/80 dark:via-[#070d18]/95 dark:to-[#070d18]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Status Pill */}
            <motion.div 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-8 backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>Next-Gen Agribusiness Intelligence Platform</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
            >
              Transform Raw Crops into <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-agri-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                High-Profit Value Products
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-10"
            >
              AI Agrow leverages Machine Learning algorithms—XGBoost, LSTM, and Hybrid Recommendation—to predict demand, forecast prices, locate suppliers, and maximize farm profitability.
            </motion.p>

            {/* Mode Selection CTA Action Buttons */}
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
            >
              {/* Farmer Mode */}
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto flex-1 group px-8 py-4 rounded-2xl bg-gradient-to-r from-agri-600 to-emerald-600 hover:from-agri-500 hover:to-emerald-500 text-white font-bold text-base shadow-xl shadow-agri-600/25 hover:shadow-agri-600/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <Sprout className="w-5 h-5 text-emerald-200" />
                <span>Enter Farmer Mode</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Business Mode */}
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto flex-1 group px-8 py-4 rounded-2xl glass-panel hover:bg-white/80 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white font-bold text-base transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-slate-300 dark:border-slate-700"
              >
                <TrendingUp className="w-5 h-5 text-agri-500" />
                <span>Business Mode</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-400" />
              </button>
            </motion.div>

            {/* Quick Guarantees */}
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium"
            >
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Locked AI Algorithms</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-time Mandi Data</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-emerald-500" /> Complete ROI Modeling</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-agri-600 dark:text-emerald-400 tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Feature Matrix */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-agri-600 dark:text-agri-400 mb-3">
            Intelligent Pipeline
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Driven by Precision Machine Learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-3xl relative flex flex-col justify-between hover:border-agri-500/40 transition-all duration-300 shadow-apple dark:shadow-apple-dark group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>

                <div className="text-xs font-semibold text-agri-600 dark:text-agri-400 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-agri-500" />
                  {card.algorithm}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center text-xs font-semibold text-agri-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                Explore Module <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              Empowering Agricultural Leaders
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              See how data-driven crop transformation is changing outcomes on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel p-8 rounded-3xl flex flex-col justify-between"
              >
                <p className="text-slate-700 dark:text-slate-300 italic text-base leading-relaxed mb-6">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-agri-500"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.author}
                    </h4>
                    <p className="text-xs text-agri-600 dark:text-agri-400 font-medium">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#050a12] py-12 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-agri-600 flex items-center justify-center text-white font-bold">
              🌱
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
              AI Agrow System
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#features" className="hover:text-agri-500 transition-colors">Features</a>
            <a href="#algorithms" className="hover:text-agri-500 transition-colors">ML Architecture</a>
            <a href="#testimonials" className="hover:text-agri-500 transition-colors">Success Stories</a>
            <a href="#contact" className="hover:text-agri-500 transition-colors">Support</a>
          </div>

          <div>
            © {new Date().getFullYear()} AI Agrow. Production Build. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};