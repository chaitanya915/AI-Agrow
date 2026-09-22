import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, TrendingUp, Sparkles, AlertTriangle, CheckCircle } from 'lucide-react';

export const NotificationPanel = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'price',
      title: 'Mandi Price Spike',
      message: 'Tomato prices in Nashik Mandi jumped +14.2% today ($32/kg).',
      time: '12m ago',
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
      unread: true
    },
    {
      id: 2,
      type: 'recommendation',
      title: 'New Value Opportunity',
      message: 'High demand forecast detected for Mango Juice concentrate in Western Region.',
      time: '1h ago',
      icon: <Sparkles className="w-4 h-4 text-agri-500" />,
      unread: true
    },
    {
      id: 3,
      type: 'supplier',
      title: 'Supplier Verification',
      message: 'AgriCorp Processing Facility updated seasonal rates and availability.',
      time: '3h ago',
      icon: <CheckCircle className="w-4 h-4 text-blue-500" />,
      unread: false
    },
    {
      id: 4,
      type: 'system',
      title: 'Storage Advisory',
      message: 'High humidity predicted in Northern Maharashtra. Review cold store availability.',
      time: '5h ago',
      icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
      unread: false
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-[#0b1322] border-l border-slate-200 dark:border-slate-800 z-50 shadow-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-agri-500/10 text-agri-600 dark:text-emerald-400">
                    <Bell className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Market Alerts
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 overflow-y-auto max-h-[75vh] pr-1">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      item.unread
                        ? 'bg-agri-500/5 dark:bg-agri-500/10 border-agri-500/20'
                        : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                      {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              Mark All as Read
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};