import React from 'react';
import { UserPlus, ShieldWarning, Database } from '@phosphor-icons/react';

const AuditLogs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Audit History</h1>
          <p className="text-sm text-slate-500">Traceable record of activities.</p>
        </div>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        <div className="relative flex items-center gap-4 md:justify-between md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <UserPlus weight="bold" />
          </div>
          <div className="flex-1 md:w-[45%] bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="font-bold text-sm">New Staff Member</div>
              <time className="text-indigo-500 text-xs">12:05 PM</time>
            </div>
            <p className="text-slate-500 text-xs">Sarah Jenkins added as PM.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;

