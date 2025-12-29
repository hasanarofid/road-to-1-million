import React from 'react';
import { ShieldCheck, ShieldWarning, LockKey, Users, DotsThreeOutline, Plus } from '@phosphor-icons/react';

const Roles = () => {
  const roles = [
    { 
      id: 1, 
      name: 'Super Admin', 
      description: 'Full access to all system features and settings.', 
      usersCount: 2, 
      permissions: ['All Access', 'User Management', 'Financial Access', 'System Settings'],
      color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
    },
    { 
      id: 2, 
      name: 'Operations Manager', 
      description: 'Manage workflow, inventory, and staff activities.', 
      usersCount: 5, 
      permissions: ['Inventory Management', 'Order Processing', 'Staff Activity Monitoring'],
      color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
    },
    { 
      id: 3, 
      name: 'Staff / Editor', 
      description: 'Standard access for operational data entry and updates.', 
      usersCount: 35, 
      permissions: ['View Dashboard', 'Update Inventory', 'Create Orders'],
      color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Roles & Permissions</h1>
          <p className="text-slate-500 text-sm mt-1">Define access levels and security policies for your team.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/25">
          <Plus weight="bold" />
          Create New Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${role.color}`}>
                  <ShieldCheck weight="bold" className="text-2xl" />
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                  <DotsThreeOutline weight="bold" />
                </button>
              </div>
              <h3 className="text-lg font-bold mb-2">{role.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{role.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span>Permissions</span>
                  <span>{role.permissions.length} Enabled</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((perm, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[10px] font-bold">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-500">
                <Users weight="bold" />
                <span className="text-xs font-semibold">{role.usersCount} Assigned Users</span>
              </div>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-500 transition">
                Edit Access
              </button>
            </div>
          </div>
        ))}

        {/* Add Role Placeholder */}
        <button className="group border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-indigo-500 hover:bg-indigo-50/10 transition-all min-h-[300px]">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
            <Plus weight="bold" className="text-xl" />
          </div>
          <div className="text-center">
            <p className="font-bold text-slate-600 dark:text-slate-400 group-hover:text-indigo-600">Add New Policy</p>
            <p className="text-xs text-slate-500 mt-1">Define custom permissions</p>
          </div>
        </button>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 rounded-2xl p-6 flex gap-4">
        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-orange-500 shadow-sm shrink-0 h-fit">
          <LockKey weight="bold" className="text-xl" />
        </div>
        <div>
          <h4 className="font-bold text-orange-900 dark:text-orange-400">Security Recommendation</h4>
          <p className="text-sm text-orange-800/80 dark:text-orange-400/80 mt-1">
            Always follow the Principle of Least Privilege (PoLP). Assign only the minimum necessary permissions to each role to reduce security risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roles;

