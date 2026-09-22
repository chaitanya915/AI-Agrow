import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Sprout, Truck, BarChart3 } from 'lucide-react';

import { AdminStatsCards } from '../components/admin/AdminStatsCards';
import { ManageFarmersTable } from '../components/admin/ManageFarmersTable';
import { ManageProductsTable } from '../components/admin/ManageProductsTable';
import { ManageSuppliersTable } from '../components/admin/ManageSuppliersTable';
import { PlatformAnalyticsCharts } from '../components/admin/PlatformAnalyticsCharts';

export const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('farmers'); // farmers, products, suppliers, analytics

  const [stats, setStats] = useState({
    totalFarmers: 1248,
    totalProducts: 42,
    verifiedSuppliers: 18,
    monthlyQueries: 5800,
  });

  const [farmers, setFarmers] = useState([
    { id: 1, fullName: 'Rohit Patil', email: 'rohit@example.com', role: 'Farmer', location: 'Nashik, MH', primaryCrop: 'Mangoes', queriesCount: 14, status: 'Active', avatar: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=150&auto=format&fit=crop&q=80' },
    { id: 2, fullName: 'Sonia Verma', email: 'sonia@agrifood.com', role: 'Agri-Entrepreneur', location: 'Punjab', primaryCrop: 'Tomatoes', queriesCount: 28, status: 'Active', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
    { id: 3, fullName: 'Vikram Singh', email: 'vikram@mandi.org', role: 'Farmer', location: 'Central MP', primaryCrop: 'Soybeans', queriesCount: 6, status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { id: 4, fullName: 'Ananya Deshmukh', email: 'ananya@dairy.in', role: 'Agri-Entrepreneur', location: 'Karnataka', primaryCrop: 'Milk', queriesCount: 19, status: 'Suspended', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  ]);

  const [products, setProducts] = useState([
    { id: 1, productName: 'Organic Mango Juice Concentrate', rawMaterial: 'Mangoes', category: 'Fruits', processingCost: 2400, profitMargin: 42.5 },
    { id: 2, productName: 'Sun-Dried Tomato Puree', rawMaterial: 'Tomatoes', category: 'Vegetables', processingCost: 1500, profitMargin: 36.5 },
    { id: 3, productName: 'Artisanal Paneer Cheese', rawMaterial: 'Milk', category: 'Dairy', processingCost: 3100, profitMargin: 40.2 },
    { id: 4, productName: 'Organic Sparkling Apple Cider', rawMaterial: 'Apples', category: 'Fruits', processingCost: 2800, profitMargin: 34.8 },
  ]);

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'AgriCorp Processing Hub Nashik', location: 'Nashik, MH', rating: 4.9, dailyCapacity: '25,000 kg / day', isVerified: true },
    { id: 2, name: 'Pimpalgaon Agro-Extracts Ltd.', location: 'Pimpalgaon, MH', rating: 4.7, dailyCapacity: '18,000 kg / day', isVerified: true },
    { id: 3, name: 'Sahyadri Dairy & Cheese Works', location: 'Kolar, KA', rating: 4.8, dailyCapacity: '40,000 L / day', isVerified: true },
    { id: 4, name: 'Valley Press Fruit Cidery', location: 'Shimla, HP', rating: 4.5, dailyCapacity: '12,000 L / day', isVerified: false },
  ]);

  const handleToggleFarmerStatus = (id) => {
    setFarmers((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: f.status === 'Active' ? 'Suspended' : 'Active' } : f))
    );
  };

  const handleDeleteFarmer = (id) => {
    setFarmers((prev) => prev.filter((f) => f.id !== id));
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddProduct = () => {
    const newProd = {
      id: Date.now(),
      productName: 'New Processing Line',
      rawMaterial: 'Soybeans',
      category: 'Grains',
      processingCost: 1800,
      profitMargin: 32.0,
    };
    setProducts([newProd, ...products]);
  };

  const handleToggleSupplierVerification = (id) => {
    setSuppliers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isVerified: !s.isVerified } : s))
    );
  };

  const tabs = [
    { id: 'farmers', label: 'Manage Farmers', icon: <Users className="w-4 h-4" /> },
    { id: 'products', label: 'Product Catalog', icon: <Sprout className="w-4 h-4" /> },
    { id: 'suppliers', label: 'Supplier Partners', icon: <Truck className="w-4 h-4" /> },
    { id: 'analytics', label: 'Platform Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> Administrative Control Center
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Platform Administration
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Audit farmer profiles, manage value-added product definitions, verify supplier partners, and inspect machine learning model accuracy metrics[cite: 5].
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <AdminStatsCards stats={stats} />

      {/* Tab Controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-agri-700 to-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'farmers' && (
          <ManageFarmersTable
            farmers={farmers}
            onToggleStatus={handleToggleFarmerStatus}
            onDeleteFarmer={handleDeleteFarmer}
          />
        )}

        {activeTab === 'products' && (
          <ManageProductsTable
            products={products}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {activeTab === 'suppliers' && (
          <ManageSuppliersTable
            suppliers={suppliers}
            onToggleVerification={handleToggleSupplierVerification}
          />
        )}

        {activeTab === 'analytics' && <PlatformAnalyticsCharts />}
      </motion.div>
    </div>
  );
};