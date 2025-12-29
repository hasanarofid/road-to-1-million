import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Lightning, 
  SquaresFour, 
  Package, 
  Users, 
  ShieldCheck, 
  ClipboardText, 
  List, 
  X, 
  Moon, 
  Sun, 
  Bell, 
  MagnifyingGlass,
  SignOut,
  ShoppingCartSimple
} from '@phosphor-icons/react';
import { useTheme } from '../context/ThemeContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: SquaresFour, href: '/overview' },
    { id: 'inventory', label: 'Inventory', icon: Package, href: '/inventory' },
    { id: 'orders', label: 'Orders', icon: ShoppingCartSimple, href: '/orders' },
  ];

  const managementItems = [
    { id: 'users', label: 'Staff & Users', icon: Users, href: '/users' },
    { id: 'roles', label: 'Roles & Permissions', icon: ShieldCheck, href: '/roles' },
    { id: 'audit-logs', label: 'Audit Logs', icon: ClipboardText, href: '/audit-logs' },
  ];

  const NavLink = ({ item }) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        to={item.href}
        onClick={() => setIsSidebarOpen(false)}
        className={cn(
          "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition",
          isActive 
            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" 
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
        )}
      >
        <item.icon weight="bold" className="text-lg" />
        {item.label}
      </Link>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Sidebar Backdrop (Mobile) */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 md:static md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Lightning weight="bold" className="text-xl" />
            </div>
            <span className="text-xl font-bold tracking-tight">OpsCenter</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X weight="bold" className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          <div>
            <h3 className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Main Menu</h3>
            <nav className="space-y-1">
              {navItems.map(item => <NavLink key={item.id} item={item} />)}
            </nav>
          </div>
          <div>
            <h3 class="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Management</h3>
            <nav className="space-y-1">
              {managementItems.map(item => <NavLink key={item.id} item={item} />)}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" className="w-10 h-10 rounded-full" alt="Profile" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">Super Admin</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <SignOut weight="bold" className="text-lg" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              <List weight="bold" className="text-xl" />
            </button>
            <div className="relative w-full max-w-md hidden md:block">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <MagnifyingGlass weight="bold" />
              </span>
              <input 
                type="text" 
                placeholder="Search data..." 
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition" 
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              {theme === 'dark' ? <Sun weight="bold" /> : <Moon weight="bold" />}
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
              <Bell weight="bold" className="text-xl" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

