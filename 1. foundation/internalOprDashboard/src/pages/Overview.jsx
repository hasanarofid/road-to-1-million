import React from 'react';
import { Package, ClockCounterClockwise, UsersThree, WarningCircle, TrendUp, TrendDown, DownloadSimple, Plus } from '@phosphor-icons/react';

const KpiCard = ({ title, value, change, trend, icon: Icon, colorClass }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-lg ${colorClass}`}>
        <Icon weight="bold" className="text-2xl" />
      </div>
      <span className={`text-xs font-bold flex items-center gap-1 ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
        {change} {trend === 'up' ? <TrendUp weight="bold" /> : <TrendDown weight="bold" />}
      </span>
    </div>
    <p className="text-sm font-medium text-slate-500">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

const Overview = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Operational Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor your business performance and staff activities in real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-white dark:hover:bg-slate-800 transition">
            <DownloadSimple weight="bold" />
            Export
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20">
            <Plus weight="bold" />
            New Operation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          title="Total Inventory" 
          value="1,284" 
          change="+12%" 
          trend="up" 
          icon={Package} 
          colorClass="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" 
        />
        <KpiCard 
          title="Pending Approvals" 
          value="14" 
          change="-2%" 
          trend="down" 
          icon={ClockCounterClockwise} 
          colorClass="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" 
        />
        <KpiCard 
          title="Active Staff" 
          value="42" 
          change="+5%" 
          trend="up" 
          icon={UsersThree} 
          colorClass="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" 
        />
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
              <WarningCircle weight="bold" className="text-2xl" />
            </div>
            <span className="text-xs font-bold text-orange-500">Critical</span>
          </div>
          <p className="text-sm font-medium text-slate-500">System Alerts</p>
          <h3 className="text-2xl font-bold mt-1">3</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold">Recent Operations</h3>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Description</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                  <td className="px-6 py-4 text-sm font-semibold">#OPS-9281</td>
                  <td className="px-6 py-4 text-sm">Inventory stock-out: Laptop Pro 14</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-md text-xs font-bold">Completed</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">2 mins ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

