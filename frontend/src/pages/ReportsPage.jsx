import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText } from 'lucide-react';

import { ReportSummaryCard } from '../components/reports/ReportSummaryCard';
import { PDFReportPreview } from '../components/reports/PDFReportPreview';
import { ReportDownloadControls } from '../components/reports/ReportDownloadControls';

export const ReportsPage = () => {
  const componentRef = useRef();

  const reportData = {
    reportId: 'AGROW-2026-8842',
    farmerName: 'Rohit Patil',
    location: 'Nashik District, Maharashtra',
    commodity: 'Fresh Mangoes',
    quantity: '2,500 kg',
    budget: 5000,
    recommendedProduct: 'Organic Mango Juice Concentrate',
    recommendationScore: 95,
    profitMargin: 42.5,
    demandScore: 94,
    peakDemandMonth: 'July 2026',
    peakPrice: 43.80,
    peakWindow: 'Day 22 - Day 27',
    totalCost: 5400,
    expectedRevenue: 12000,
    netProfit: 6600,
    roi: 122.2,
    breakEvenPrice: '2.16',
    supplierName: 'AgriCorp Processing Hub Nashik',
    supplierLocation: 'Nashik Industrial Zone, MH',
    supplierDistance: 18,
    targetMarket: 'Vashi APMC Market, Mumbai',
    topsisScore: '0.942',
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    const csvRows = [
      ['Metric', 'Value'],
      ['Report ID', reportData.reportId],
      ['Farmer Name', reportData.farmerName],
      ['Commodity', reportData.commodity],
      ['Quantity', reportData.quantity],
      ['Recommended Product', reportData.recommendedProduct],
      ['Net Profit ($)', reportData.netProfit],
      ['ROI (%)', reportData.roi],
      ['Supplier', reportData.supplierName],
      ['Target Market', reportData.targetMarket],
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `AI_Agrow_Report_${reportData.reportId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-agri-900 via-agri-800 to-slate-900 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> PDF Executive Report Synthesis Engine[cite: 2]
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Executive Business Proposal & PDF Generator
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Consolidate hybrid recommendations, price forecasts, ROI calculations, and market rankings into an official PDF report[cite: 2].
            </p>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <ReportSummaryCard reportData={reportData} />

      {/* Download & Print Controls */}
      <ReportDownloadControls onPrint={handlePrint} onExportCSV={handleExportCSV} />

      {/* Live PDF Printable Document Preview */}
      <PDFReportPreview reportData={reportData} componentRef={componentRef} />

    </div>
  );
};