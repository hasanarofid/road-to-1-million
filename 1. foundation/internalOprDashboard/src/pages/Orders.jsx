import React from 'react';
import { MagnifyingGlass, Funnel, DownloadSimple, DotsThreeOutline, ShoppingBag } from '@phosphor-icons/react';

const Orders = () => {
  const orders = [
    { id: '#ORD-7721', customer: 'Budi Santoso', item: 'MacBook Air M3', status: 'Shipped', total: 'Rp 18.500.000', date: '29 Dec 2025' },
    { id: '#ORD-7720', customer: 'Ani Wijaya', item: 'Smart Display X-20', status: 'Processing', total: 'Rp 2.400.000', date: '28 Dec 2025' },
    { id: '#ORD-7719', customer: 'Citra Kirana', item: 'Smart Watch Pro', status: 'Pending', total: 'Rp 3.200.000', date: '28 Dec 2025' },
    { id: '#ORD-7718', customer: 'Dedi Kurniawan', item: 'Laptop Pro 14', status: 'Delivered', total: 'Rp 25.000.000', date: '27 Dec 2025' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shipped': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Processing': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'Pending': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Delivered': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Order Management</h1>
          <p className="text-slate-500 text-sm mt-1">Track and manage customer orders and fulfillment workflow.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-white dark:hover:bg-slate-800 transition">
            <DownloadSimple weight="bold" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <MagnifyingGlass weight="bold" />
            </span>
            <input 
              type="text" 
              placeholder="Search by ID, customer, or item..." 
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition" 
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition">
            <Funnel weight="bold" className="text-lg" />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Total Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                  <td className="px-6 py-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">{order.id}</td>
                  <td className="px-6 py-4 text-sm font-semibold">{order.customer}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-md">
                        <ShoppingBag weight="bold" className="text-slate-500" />
                      </div>
                      <span className="text-sm font-medium">{order.item}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                      <DotsThreeOutline weight="bold" className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

