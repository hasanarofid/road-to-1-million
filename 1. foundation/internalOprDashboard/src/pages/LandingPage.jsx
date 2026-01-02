import React from 'react';
import { Link } from 'react-router-dom';
import { Lightning, ShieldCheck, ChartLineUp, UsersThree, ArrowRight, DeviceMobile } from '@phosphor-icons/react';

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Lightning weight="bold" />
          </div>
          <span className="text-xl font-bold tracking-tight dark:text-white">OpsCenter</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition">Sign In</Link>
          <Link to="/register" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-8 ring-1 ring-indigo-200 dark:ring-indigo-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v2.0 is now live
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Everything you need to <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Scale Your Operations</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
          Stop using Excel and WhatsApp for business ops. OpsCenter provides a unified dashboard for inventory, orders, and staff management with real-time audit logs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            Start Free Trial <ArrowRight weight="bold" />
          </Link>
          <Link to="/login" className="px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
            View Demo
          </Link>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
        <div className="group">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <ShieldCheck weight="bold" className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold dark:text-white mb-3">Enterprise Security</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Role-based access control and detailed audit logs keep your data safe and traceable.</p>
        </div>
        <div className="group">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <ChartLineUp weight="bold" className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold dark:text-white mb-3">Real-time Analytics</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Monitor KPIs, inventory levels, and order fulfillment speed in a single unified view.</p>
        </div>
        <div className="group">
          <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
            <UsersThree weight="bold" className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold dark:text-white mb-3">Staff Management</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Collaborate with your team easily with custom roles and permission workflows.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 dark:border-slate-900 py-12 text-center text-slate-400 text-sm">
        &copy; 2025 OpsCenter Systems. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;

