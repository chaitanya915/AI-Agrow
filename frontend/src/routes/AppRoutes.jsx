import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { PlaceholderPage } from '../pages/PlaceholderPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Public Routes */}
        <Route index element={<PlaceholderPage title="Welcome to AI Agrow" />} />
        <Route path="login" element={<PlaceholderPage title="Farmer & Partner Login" />} />
        <Route path="register" element={<PlaceholderPage title="Register Account" />} />
        <Route path="forgot-password" element={<PlaceholderPage title="Reset Password" />} />
        <Route path="otp-verification" element={<PlaceholderPage title="OTP Verification" />} />

        {/* Dashboard Routes */}
        <Route path="dashboard" element={<PlaceholderPage title="Executive Business Dashboard" />} />
        <Route path="recommendation" element={<PlaceholderPage title="Hybrid Product Recommendation" />} />
        <Route path="demand-prediction" element={<PlaceholderPage title="XGBoost Demand Forecasting" />} />
        <Route path="price-prediction" element={<PlaceholderPage title="LSTM Price Prediction Engine" />} />
        <Route path="supplier-recommendation" element={<PlaceholderPage title="Weighted Supplier Scoring" />} />
        <Route path="profitability-analysis" element={<PlaceholderPage title="Financial Profitability Engine" />} />
        <Route path="market-intelligence" element={<PlaceholderPage title="TOPSIS Market Analytics" />} />
        <Route path="reports" element={<PlaceholderPage title="PDF Business Report Generator" />} />
        <Route path="profile" element={<PlaceholderPage title="Farmer Profile & Settings" />} />
        
        {/* Admin Routes */}
        <Route path="admin" element={<PlaceholderPage title="Admin Control Center" />} />

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};