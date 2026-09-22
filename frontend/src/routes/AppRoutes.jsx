import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { WelcomePage } from '../pages/WelcomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { OtpPage } from '../pages/OtpPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PlaceholderPage } from '../pages/PlaceholderPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Public Landing Page */}
        <Route index element={<WelcomePage />} />
        
        {/* Authentication Pages */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="otp-verification" element={<OtpPage />} />

        {/* Authenticated Dashboard Layout Shell */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="farmer-input" element={<PlaceholderPage title="Farmer Details Input Form" />} />
          <Route path="recommendation" element={<PlaceholderPage title="Hybrid Product Recommendation" />} />
          <Route path="demand-prediction" element={<PlaceholderPage title="XGBoost Demand Forecasting" />} />
          <Route path="price-prediction" element={<PlaceholderPage title="LSTM Price Prediction Engine" />} />
          <Route path="supplier-recommendation" element={<PlaceholderPage title="Weighted Supplier Scoring" />} />
          <Route path="profitability-analysis" element={<PlaceholderPage title="Financial Profitability Engine" />} />
          <Route path="market-intelligence" element={<PlaceholderPage title="TOPSIS Market Analytics" />} />
          <Route path="reports" element={<PlaceholderPage title="PDF Business Report Generator" />} />
          <Route path="profile" element={<PlaceholderPage title="Farmer Profile & Settings" />} />
          <Route path="admin" element={<PlaceholderPage title="Admin Control Center" />} />
        </Route>

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};