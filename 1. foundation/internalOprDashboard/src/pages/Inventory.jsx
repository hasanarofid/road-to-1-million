import React from 'react';
import { Truck, CheckCircle, DotsThree } from '@phosphor-icons/react';

const Inventory = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-600/20">
          <p className="text-indigo-100 text-sm font-medium">In Production</p>
          <h3 className="text-3xl font-bold mt-1">128 Items</h3>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Quality Check</p>
          <h3 className="text-3xl font-bold mt-1">24 Items</h3>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Ready to Ship</p>
          <h3 className="text-3xl font-bold mt-1">842 Items</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Requested</h4>
            <span className="bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full text-[10px] font-bold">12</span>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500 transition cursor-pointer group">
            <h5 className="text-sm font-bold group-hover:text-indigo-600 transition">MacBook Air M3 Bulk</h5>
            <p className="text-xs text-slate-500 mt-1">Logistics Team</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">In Production</h4>
            <span className="bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full text-[10px] font-bold">5</span>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border-l-4 border-l-indigo-500 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h5 className="text-sm font-bold">Smart Display X-20</h5>
            <div className="mt-4">
              <div className="flex justify-between text-[10px] mb-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1">
                <div className="bg-indigo-500 h-1 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

