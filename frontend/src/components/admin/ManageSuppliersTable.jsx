import React, { useState } from 'react';
import { Search, ShieldCheck, Star, MapPin, CheckCircle, Clock } from 'lucide-react';

export const ManageSuppliersTable = ({ suppliers, onToggleVerification }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuppliers = suppliers.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Processing Suppliers & Partners
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Verify facility credentials and audit ratings used by Weighted Scoring[cite: 1]
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search supplier name..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-agri-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider">
              <th className="py-3 px-4">Supplier Name</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Daily Capacity</th>
              <th className="py-3 px-4">Status Badge</th>
              <th className="py-3 px-4 text-right">Verification Toggle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 font-medium">
            {filteredSuppliers.map((s) => (
              <tr key={s.id} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{s.name}</td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-agri-500 shrink-0" />
                  {s.location}
                </td>
                <td className="py-3.5 px-4 text-amber-500 font-black flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" /> {s.rating}
                </td>
                <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-semibold">{s.dailyCapacity}</td>
                <td className="py-3.5 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    s.isVerified
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  }`}>
                    {s.isVerified ? 'Verified Enterprise' : 'Pending Review'}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button
                    onClick={() => onToggleVerification(s.id)}
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                      s.isVerified
                        ? 'bg-rose-500/10 text-rose-600 hover:bg-rose-500/20'
                        : 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20'
                    }`}
                  >
                    {s.isVerified ? 'Revoke Verification' : 'Approve & Verify'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};