import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Bell, 
  Globe, 
  Moon, 
  Sun, 
  ChevronRight, 
  LogOut 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const AccountSettingsCard = ({ 
  onChangePassword, 
  onNotificationToggle, 
  onLogout 
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="glass-panel p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between space-y-6"
    >
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Account Settings
        </h3>

        <div className="space-y-2">
          {/* Change Password Option */}
          <button
            onClick={onChangePassword}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-agri-500/40 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-agri-600 dark:group-hover:text-emerald-400 transition-colors">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Change Password
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Notification Preferences */}
          <button
            onClick={onNotificationToggle}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-agri-500/40 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-agri-600 dark:group-hover:text-emerald-400 transition-colors">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Notification Preferences
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Language Selection */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Language
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              English <ChevronRight className="w-4 h-4 text-slate-400" />
            </span>
          </div>

          {/* Theme Control Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {theme === 'dark' ? <Moon className="w-4 h-4 text-emerald-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Theme
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-agri-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1"
            >
              <span className="capitalize">{theme}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Logout Action Box */}
      <button
        onClick={onLogout}
        className="w-full py-3.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-bold text-xs transition-all flex items-center justify-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </motion.div>
  );
};