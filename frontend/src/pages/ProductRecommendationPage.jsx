import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowLeft, RefreshCw, Layers } from 'lucide-react';

import { ProductCard } from '../components/recommendation/ProductCard';
import { ProductFilterBar } from '../components/recommendation/ProductFilterBar';
import { ProductDetailModal } from '../components/recommendation/ProductDetailModal';

export const ProductRecommendationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputContext, setInputContext] = useState({
    rawMaterial: 'Mangoes',
    quantity: '2500 kg',
    budget: '$5,000',
    location: 'Nashik, Maharashtra'
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Commodities');
  const [sortBy, setSortBy] = useState('score');
  const [minScore, setMinScore] = useState(70);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (location.state?.inputData) {
      const data = location.state.inputData;
      setInputContext({
        rawMaterial: data.rawMaterial,
        quantity: `${data.quantity} ${data.unit}`,
        budget: `$${data.budget}`,
        location: data.location
      });
    }
  }, [location.state]);

  const allProducts = [
    {
      id: 1,
      productName: 'Organic Mango Juice Concentrate',
      rawMaterial: 'Mangoes',
      category: 'Fruits',
      recommendationScore: 95,
      profitMargin: 42.5,
      demandScore: 94,
      processingCost: 2400,
      expectedRevenue: 5800,
      marketTrend: '+14.2% YoY',
      yieldRatio: '1 kg → 0.75 L Juice',
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=80',
      steps: [
        'Extract pulp using high-shear industrial pulper',
        'Pasteurize at 85°C to preserve shelf life',
        'Standardize brix content and package in tetrapacks',
        'Ship to urban distributor hubs in Western Region'
      ]
    },
    {
      id: 2,
      productName: 'Premium Mango Pulp',
      rawMaterial: 'Mangoes',
      category: 'Fruits',
      recommendationScore: 91,
      profitMargin: 38.0,
      demandScore: 89,
      processingCost: 1800,
      expectedRevenue: 4200,
      marketTrend: '+9.8% YoY',
      yieldRatio: '1 kg → 0.60 kg Pulp',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80',
      steps: [
        'Wash raw Alphonso/Kesar mangoes',
        'De-stone and strain fiber',
        'Aseptic filling into steel drums for bakery clients'
      ]
    },
    {
      id: 3,
      productName: 'Sun-Dried Tomato Puree',
      rawMaterial: 'Tomatoes',
      category: 'Vegetables',
      recommendationScore: 88,
      profitMargin: 36.5,
      demandScore: 86,
      processingCost: 1500,
      expectedRevenue: 3400,
      marketTrend: '+12.1% YoY',
      yieldRatio: '1 kg → 0.40 kg Puree',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80',
      steps: [
        'Thermal reduction of tomato water content',
        'Blend with natural preservatives',
        'Hot-fill into glass jars for retail markets'
      ]
    },
    {
      id: 4,
      productName: 'Spiced Tomato Ketchup',
      rawMaterial: 'Tomatoes',
      category: 'Vegetables',
      recommendationScore: 84,
      profitMargin: 31.0,
      demandScore: 82,
      processingCost: 1200,
      expectedRevenue: 2800,
      marketTrend: '+7.4% YoY',
      yieldRatio: '1 kg → 0.55 kg Ketchup',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
      steps: [
        'Concentrate tomato paste with vinegar & spices',
        'Homogenize under high pressure',
        'Bottle in squeeze containers for food service chains'
      ]
    },
    {
      id: 5,
      productName: 'Artisanal Paneer Cheese',
      rawMaterial: 'Milk',
      category: 'Dairy',
      recommendationScore: 92,
      profitMargin: 40.2,
      demandScore: 93,
      processingCost: 3100,
      expectedRevenue: 7200,
      marketTrend: '+15.6% YoY',
      yieldRatio: '10 L → 1.8 kg Paneer',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
      steps: [
        'Acid coagulation of fresh whole milk at 82°C',
        'Press whey liquid using hydraulic cheese press',
        'Vacuum seal blocks for cold chain delivery'
      ]
    },
    {
      id: 6,
      productName: 'Organic Sparkling Apple Cider',
      rawMaterial: 'Apples',
      category: 'Fruits',
      recommendationScore: 86,
      profitMargin: 34.8,
      demandScore: 85,
      processingCost: 2800,
      expectedRevenue: 6100,
      marketTrend: '+11.0% YoY',
      yieldRatio: '1 kg → 0.65 L Cider',
      image: 'https://images.unsplash.com/photo-1568569350060-e85d7882a012?w=600&auto=format&fit=crop&q=80',
      steps: [
        'Crush apples and clarify juice',
        'Light carbonation and bottle conditioning',
        'Distribute to premium urban supermarkets'
      ]
    }
  ];

  // Filter & Sort Pipeline
  const filteredProducts = allProducts
    .filter((item) => {
      const matchesSearch = item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.rawMaterial.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Commodities' || item.category === selectedCategory;
      const matchesScore = item.recommendationScore >= minScore;
      return matchesSearch && matchesCategory && matchesScore;
    })
    .sort((a, b) => {
      if (sortBy === 'score') return b.recommendationScore - a.recommendationScore;
      if (sortBy === 'profit') return b.profitMargin - a.profitMargin;
      if (sortBy === 'demand') return b.demandScore - a.demandScore;
      if (sortBy === 'cost') return a.processingCost - b.processingCost;
      return 0;
    });

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Banner with Active Profile Bar */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Hybrid Recommendation Model Active[cite: 1, 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Value-Added Product Recommendations
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Ranked product candidate list generated for <span className="font-bold text-emerald-400">{inputContext.rawMaterial}</span> ({inputContext.quantity}) located in {inputContext.location}[cite: 1].
            </p>
          </div>

          <button
            onClick={() => navigate('/farmer-input')}
            className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 backdrop-blur-md transition-all flex items-center gap-2 shrink-0"
          >
            <RefreshCw className="w-4 h-4" /> Edit Farmer Inputs
          </button>
        </div>
      </div>

      {/* Filter Bar Component */}
      <ProductFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        minScore={minScore}
        setMinScore={setMinScore}
      />

      {/* Recommended Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onSelect={(item) => setSelectedProduct(item)}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel p-12 rounded-3xl text-center max-w-md mx-auto my-8">
          <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            No Recommended Products Match Filters
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Try lowering the minimum AI score slider or search for a different commodity.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All Commodities');
              setMinScore(50);
            }}
            className="px-5 py-2.5 rounded-xl bg-agri-600 text-white font-bold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Deep Analysis Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
};