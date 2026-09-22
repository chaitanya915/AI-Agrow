import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Truck, Layers, ArrowRight } from 'lucide-react';

import { SupplierCard } from '../components/supplier/SupplierCard';
import { SupplierFilterBar } from '../components/supplier/SupplierFilterBar';
import { SupplierDetailModal } from '../components/supplier/SupplierDetailModal';

export const SupplierRecommendationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [maxDistance, setMaxDistance] = useState(100);
  const [minRating, setMinRating] = useState(4.0);
  const [sortBy, setSortBy] = useState('score');
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const suppliers = [
    {
      id: 1,
      name: 'AgriCorp Processing Hub Nashik',
      location: 'Nashik Industrial Zone, MH',
      distanceKm: 18,
      rating: 4.9,
      pricePerKg: 0.85,
      reliability: 98,
      weightedScore: 94,
      specialization: 'Fruit Pulping & Juice Extraction',
      dailyCapacity: '25,000 kg / day',
      minOrderQty: '500 kg',
      verifiedStatus: 'Verified Enterprise',
      certifications: ['FSSAI Certified', 'ISO 22000 Food Safety', 'Cold Chain Ready'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Pimpalgaon Agro-Extracts Ltd.',
      location: 'Pimpalgaon APMC Hub, MH',
      distanceKm: 34,
      rating: 4.7,
      pricePerKg: 0.78,
      reliability: 95,
      weightedScore: 91,
      specialization: 'Tomato Puree & Sauce Bottling',
      dailyCapacity: '18,000 kg / day',
      minOrderQty: '1,000 kg',
      verifiedStatus: 'Verified Enterprise',
      certifications: ['FSSAI Certified', 'HACCP Compliant'],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Sahyadri Dairy & Cheese Works',
      location: 'Kolar Highway District, KA',
      distanceKm: 62,
      rating: 4.8,
      pricePerKg: 1.20,
      reliability: 96,
      weightedScore: 88,
      specialization: 'Paneer Coagulation & Whey Extraction',
      dailyCapacity: '40,000 L / day',
      minOrderQty: '250 L',
      verifiedStatus: 'Verified Partner',
      certifications: ['Organic Milk Handler', 'FSSAI Certified'],
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Valley Press Fruit Cidery',
      location: 'Shimla Agro Estate, HP',
      distanceKm: 85,
      rating: 4.5,
      pricePerKg: 0.92,
      reliability: 91,
      weightedScore: 84,
      specialization: 'Apple Clarification & Cider Bottling',
      dailyCapacity: '12,000 L / day',
      minOrderQty: '300 L',
      verifiedStatus: 'Verified Partner',
      certifications: ['FSSAI Certified'],
      image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600&auto=format&fit=crop&q=80'
    }
  ];

  // Filter & Sort Pipeline
  const filteredSuppliers = suppliers
    .filter((sup) => {
      const matchesSearch = sup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            sup.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            sup.specialization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistance = sup.distanceKm <= maxDistance;
      const matchesRating = sup.rating >= minRating;
      return matchesSearch && matchesDistance && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === 'score') return b.weightedScore - a.weightedScore;
      if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
      if (sortBy === 'price') return a.pricePerKg - b.pricePerKg;
      if (sortBy === 'reliability') return b.reliability - a.reliability;
      return 0;
    });

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Locked Algorithm: Weighted Scoring Model[cite: 1, 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Optimal Supplier & Processor Matching
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Suppliers ranked using custom weights for Price (35%), Distance (25%), Reliability (20%), and Rating (20%)[cite: 2].
            </p>
          </div>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <SupplierFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        maxDistance={maxDistance}
        setMaxDistance={setMaxDistance}
        minRating={minRating}
        setMinRating={setMinRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Supplier Grid */}
      {filteredSuppliers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier, idx) => (
            <SupplierCard
              key={supplier.id}
              supplier={supplier}
              index={idx}
              onSelect={(item) => setSelectedSupplier(item)}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel p-12 rounded-3xl text-center max-w-md mx-auto my-8">
          <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            No Suppliers Match Active Filters
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Try expanding the freight radius slider or reducing the minimum rating threshold.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setMaxDistance(150);
              setMinRating(3.5);
            }}
            className="px-5 py-2.5 rounded-xl bg-agri-600 text-white font-bold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal Drawer */}
      <SupplierDetailModal
        supplier={selectedSupplier}
        onClose={() => setSelectedSupplier(null)}
      />

    </div>
  );
};