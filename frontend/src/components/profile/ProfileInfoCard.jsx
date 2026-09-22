import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit3, ShieldCheck } from 'lucide-react';

export const ProfileInfoCard = ({ user, onEditProfile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-panel p-8 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between items-center text-center space-y-6"
    >
      <div className="space-y-4 w-full flex flex-col items-center">
        {/* Avatar Display */}
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.fullName}
            className="w-28 h-28 rounded-3xl object-cover border-4 border-agri-500/30 shadow-xl"
          />
          <div className="absolute -bottom-2 -right-2 p-2 rounded-2xl bg-emerald-500 text-white shadow-md">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        {/* User Details */}
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {user.fullName}
          </h2>
          <span className="inline-block mt-1 px-3 py-1 rounded-full bg-agri-500/10 text-agri-600 dark:text-emerald-400 text-xs font-bold border border-agri-500/20 capitalize">
            {user.role}
          </span>
        </div>

        {/* Contact Metadata */}
        <div className="w-full space-y-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-agri-500" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">{user.location}</span>
          </div>
        </div>
      </div>

      {/* Edit Profile Action Button */}
      <button
        onClick={onEditProfile}
        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 hover:from-agri-600 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-agri-600/25 transition-all flex items-center justify-center gap-2"
      >
        <Edit3 className="w-4 h-4" />
        <span>Edit Profile</span>
      </button>
    </motion.div>
  );
};