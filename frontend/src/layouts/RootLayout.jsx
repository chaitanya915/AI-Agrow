import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const RootLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-[#070d18] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};