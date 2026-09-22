import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  LayoutDashboard, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  LineChart, 
  Truck, 
  PieChart, 
  BarChart3, 
  FileSpreadsheet, 
  User, 
  ShieldCheck, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Sidebar = ({ isCollapsed, toggleSidebar, isMobileOpen, closeMobileSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('agrow_jwt_token');
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: '/farmer-input', label: 'Input Details', icon: <FileText className="w-5 h-5" /> },
    { path: '/recommendation', label: 'Product AI', icon: <Sparkles className="w-5 h-5" /> },
    { path: '/demand-prediction', label: 'Demand Predictor', icon: <TrendingUp className="w-5 h-5" /> },
    { path: '/price-prediction', label: 'Price Predictor', icon: <LineChart className="w-5 h-5" /> },
    { path: '/supplier-recommendation', label: 'Suppliers', icon: <Truck className="w-5 h-5" /> },
    { path: '/profitability-analysis', label: 'Profitability', icon: <PieChart className="w-5 h-5" /> },
    { path: '/market-intelligence', label: 'Market Intel', icon: <BarChart3 className="w-5 h-5" /> },
    { path: '/reports', label: 'PDF Reports', icon: <FileSpreadsheet className="w-5 h-5" /> },
    { path: '/profile', label: 'Profile & Settings', icon: <User className="w-5 h-5" /> },
    { path: '/admin', label: 'Admin Center', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-4">
      {/* Brand & Toggle Header */}
      <div>
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-slate-200/60 dark:border-slate-800/80">
          <div 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 cursor-pointer overflow-hidden"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-agri-700 via-agri-600 to-emerald-400 flex items-center justify-center text-white shrink-0 shadow-lg shadow-agri-600/30">
              <Sprout className="w-6 h-6" />
            </div>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="whitespace-nowrap"
              >
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  AI Agrow
                </span>
                <span className="block text-[9px] font-extrabold text-agri-600 dark:text-agri-400 uppercase tracking-wider">
                  Farmer System
                </span>
              </motion.div>
            )}
          </div>

          <button
            onClick={toggleSidebar}
            className="hidden lg:flex p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-agri-600 dark:hover:text-agri-400 transition-colors"
            aria-label="Toggle Sidebar"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileSidebar}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl font-semibold text-xs transition-all relative group ${
                  isActive 
                    ? 'bg-gradient-to-r from-agri-700 to-emerald-600 text-white shadow-lg shadow-agri-700/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className={`shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-agri-600 dark:group-hover:text-emerald-400'}`}>
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="truncate tracking-wide">{item.label}</span>
                )}

                {/* Tooltip for collapsed desktop view */}
                {isCollapsed && (
                  <div className="absolute left-16 hidden lg:group-hover:block bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl z-50">
                    {item.label}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout Action */}
      <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-2xl font-semibold text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-all group"
        >
          <LogOut className="w-5 h-5 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside 
        className={`hidden lg:block fixed top-0 left-0 bottom-0 z-40 bg-white/80 dark:bg-[#080e1a]/90 backdrop-blur-xl border-r border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Backdrop & Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            onClick={closeMobileSidebar} 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
          />
          <aside className="relative w-72 max-w-[80vw] bg-white dark:bg-[#080e1a] h-full shadow-2xl z-10">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};