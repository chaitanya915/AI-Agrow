import React, { useState } from 'react';
import { 
  Printer, 
  Download, 
  Mail, 
  Share2, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export const ReportDownloadControls = ({ onPrint, onExportCSV }) => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 2000);
  };

  return (
    <div className="glass-panel p-6 rounded-3xl shadow-apple dark:shadow-apple-dark border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Export & Share Options
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Download PDF document, export metrics to CSV, or send directly via email
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        <button
          onClick={onExportCSV}
          className="px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> Export CSV
        </button>

        <button
          onClick={handleSendEmail}
          className="px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
        >
          {emailSent ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sent!
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" /> Email PDF
            </>
          )}
        </button>

        <button
          onClick={onPrint}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-agri-700 via-agri-600 to-emerald-600 text-white font-bold text-xs shadow-lg shadow-agri-600/25 flex items-center gap-2 hover:from-agri-600 hover:to-emerald-500 transition-all"
        >
          <Printer className="w-4 h-4" /> Download / Print PDF
        </button>
      </div>
    </div>
  );
};