import React, { useState } from 'react';
import { Search, UserCheck, UserX, Trash2, Filter, Shield } from 'lucide-react';

export const ManageFarmersTable = ({ farmers, onToggleStatus, onDeleteFarmer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');

  const filteredFarmers = farmers.filter((f) => {
    const matchesSearch = f.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All Roles' || f.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark space-y-4">
      {/* Header & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Farmer & User Accounts Directory
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Manage user permissions, review crop queries, and toggle active status[cite: 3, 5]
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search farmer name, email..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>

          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-3 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-agri-500"
          >
            <option value="All Roles">All Roles</option>
            <option value="Farmer">Farmer</option>
            <option value="Agri-Entrepreneur">Agri-Entrepreneur</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Primary Commodity</th>
              <th className="py-3 px-4">Queries Run</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 font-medium">
            {filteredFarmers.map((f) => (
              <tr key={f.id} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img src={f.avatar} alt={f.fullName} className="w-8 h-8 rounded-xl object-cover border border-slate-200 dark:border-slate-700" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">{f.fullName}</span>
                      <span className="text-[10px] text-slate-400">{f.email}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">
                    {f.role}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{f.location}</td>
                <td className="py-3.5 px-4 text-slate-900 dark:text-white font-bold">{f.primaryCrop}</td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-bold">{f.queriesCount}</td>
                <td className="py-3.5 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    f.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  }`}>
                    {f.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onToggleStatus(f.id)}
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-agri-600 dark:hover:text-emerald-400 transition-colors"
                      title="Toggle Account Status"
                    >
                      {f.status === 'Active' ? <UserX className="w-4 h-4 text-amber-500" /> : <UserCheck className="w-4 h-4 text-emerald-500" />}
                    </button>
                    <button
                      onClick={() => onDeleteFarmer(f.id)}
                      className="p-1.5 rounded-xl bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 transition-colors"
                      title="Delete Account"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};