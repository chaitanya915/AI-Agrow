import React from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ProfileMenu } from './ProfileMenu';

export const Topbar = ({ toggleMobileSidebar, onOpenNotifications }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-20 bg-white/70 dark:bg-[#070d18]/70 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-8 flex items-center justify-between transition-colors">
      
      {/* Mobile Toggle & Search Field */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
          aria-label="Open Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full hidden sm:block">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search commodities, predicted prices, suppliers..."
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-agri-500/40 transition-all"
          />
        </div>
      </div>

      {/* Action Controls & Profile Menu */}
      <div className="flex items-center gap-3">
        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-agri-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Notifications Trigger */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-agri-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500" />
        </button>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

        {/* Profile Menu Dropdown */}
        <ProfileMenu />
      </div>

    </header>
  );
};