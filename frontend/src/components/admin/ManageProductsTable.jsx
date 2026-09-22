import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Sprout } from 'lucide-react';

export const ManageProductsTable = ({ products, onAddProduct, onDeleteProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((p) =>
    p.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.rawMaterial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-apple dark:shadow-apple-dark space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Value-Added Product Catalog
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Catalog of processing pipelines used by the Hybrid Recommendation System[cite: 1]
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-agri-500"
            />
          </div>

          <button
            onClick={onAddProduct}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-agri-700 to-emerald-600 text-white font-bold text-xs shadow-md flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-400 font-extrabold uppercase tracking-wider">
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Raw Material</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Avg Processing Cost</th>
              <th className="py-3 px-4">Expected Profit Margin</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 font-medium">
            {filteredProducts.map((p) => (
              <tr key={p.id} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                  <div className="flex items-center gap-2.5">
                    <Sprout className="w-4 h-4 text-agri-500 shrink-0" />
                    <span>{p.productName}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-semibold">{p.rawMaterial}</td>
                <td className="py-3.5 px-4 text-slate-500">{p.category}</td>
                <td className="py-3.5 px-4 text-slate-900 dark:text-white font-bold">${p.processingCost}</td>
                <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-extrabold">+{p.profitMargin}%</td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => alert(`Edit ${p.productName}`)}
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-agri-600 transition-colors"
                      title="Edit Product"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDeleteProduct(p.id)}
                      className="p-1.5 rounded-xl bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 transition-colors"
                      title="Delete Product"
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