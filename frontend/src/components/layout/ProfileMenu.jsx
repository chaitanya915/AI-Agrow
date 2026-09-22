import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, ShieldCheck, LogOut, ChevronDown, Sparkles } from 'lucide-react';

export const ProfileMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('agrow_jwt_token');
    navigate('/login');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
      >
        <img
          src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=150&auto=format&fit=crop&q=80"
          alt="Rohit Patil"
          className="w-9 h-9 rounded-xl object-cover border-2 border-agri-500/40"
        />
        <div className="hidden sm:block text-left">
          <span className="block text-xs font-extrabold text-slate-900 dark:text-white leading-tight">
            Rohit Patil
          </span>
          <span className="block text-[10px] font-semibold text-agri-600 dark:text-emerald-400">
            Farmer / Enterprise
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-[#0b1322] border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50"
          >
            <div className="p-3 border-b border-slate-200/80 dark:border-slate-800/80">
              <p className="text-xs font-bold text-slate-900 dark:text-white">Rohit Patil</p>
              <p className="text-[11px] text-slate-400 truncate">rohit@example.com</p>
              <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-agri-500/10 text-agri-600 dark:text-emerald-400 text-[10px] font-bold">
                <Sparkles className="w-3 h-3" /> Active Plan
              </span>
            </div>

            <div className="py-1">
              <button
                onClick={() => { setIsOpen(false); navigate('/profile'); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <User className="w-4 h-4 text-slate-400" />
                Profile & Account
              </button>
              <button
                onClick={() => { setIsOpen(false); navigate('/admin'); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                Admin Panel
              </button>
            </div>

            <div className="pt-1 border-t border-slate-200/80 dark:border-slate-800/80">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};