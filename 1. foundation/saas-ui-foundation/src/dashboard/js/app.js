/**
 * OpsCenter - Shared Components & Logic
 * Handles: Sidebar, Header, Dark Mode, and Responsive Sidebar
 */

const OpsCenter = {
    // Current theme
    theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),

    // Initialize theme on page load (call this immediately in <head>)
    initTheme() {
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },

    // Toggle theme
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.initTheme();
    },

    // Get base path based on depth
    getBasePath() {
        return window.location.pathname.includes('/pages/') ? '../' : '';
    },

    // Render Sidebar
    renderSidebar(activePage = 'dashboard') {
        const base = this.getBasePath();
        const navItems = [
            { id: 'dashboard', label: 'Dashboard', icon: 'ph-squares-four', href: `${base}index.html` },
            { id: 'inventory', label: 'Inventory', icon: 'ph-package', href: `${base}pages/inventory.html` },
            { id: 'orders', label: 'Orders', icon: 'ph-shopping-cart-simple', href: '#' },
        ];

        const managementItems = [
            { id: 'users', label: 'Staff & Users', icon: 'ph-users', href: `${base}pages/users.html` },
            { id: 'roles', label: 'Roles & Permissions', icon: 'ph-shield-check', href: '#' },
            { id: 'audit-logs', label: 'Audit Logs', icon: 'ph-clipboard-text', href: `${base}pages/audit-logs.html` },
        ];

        const renderLinks = (items) => items.map(item => `
            <a href="${item.href}" class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition ${activePage === item.id ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                <i class="ph-bold ${item.icon} text-lg"></i>
                ${item.label}
            </a>
        `).join('');

        const sidebarHTML = `
            <div id="sidebar-backdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 hidden opacity-0 md:hidden transition-all duration-300"></div>
            <aside id="sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col -translate-x-full md:translate-x-0 md:static transition-transform duration-300 shadow-2xl md:shadow-none">
                <div class="flex items-center justify-between h-16 px-6 border-b border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                            <i class="ph-bold ph-lightning text-xl"></i>
                        </div>
                        <span class="text-xl font-bold tracking-tight">OpsCenter</span>
                    </div>
                    <button id="close-sidebar" class="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none cursor-pointer z-[60]">
                        <i class="ph-bold ph-x text-2xl pointer-events-none"></i>
                    </button>
                </div>

                <div class="flex-1 overflow-y-auto py-6 px-4 space-y-8">
                    <div>
                        <h3 class="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Main Menu</h3>
                        <nav class="space-y-1">${renderLinks(navItems)}</nav>
                    </div>
                    <div>
                        <h3 class="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Management</h3>
                        <nav class="space-y-1">${renderLinks(managementItems)}</nav>
                    </div>
                </div>

                <div class="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-3 p-2">
                        <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" class="w-10 h-10 rounded-full" alt="Profile">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-semibold truncate">Admin User</p>
                            <p class="text-xs text-slate-500 truncate">Super Admin</p>
                        </div>
                        <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <i class="ph-bold ph-sign-out text-lg"></i>
                        </button>
                    </div>
                </div>
            </aside>
        `;
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    },

    // Render Header
    renderHeader(title) {
        const headerHTML = `
            <header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-8 shrink-0">
                <div class="flex items-center gap-4 flex-1">
                    <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                        <i class="ph-bold ph-list text-xl"></i>
                    </button>
                    <h2 class="text-lg font-bold md:hidden">${title}</h2>
                    <div class="relative w-full max-w-md hidden md:block">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                            <i class="ph-bold ph-magnifying-glass"></i>
                        </span>
                        <input type="text" placeholder="Search data..." class="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition">
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <button id="theme-toggle" class="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                        <i class="ph-bold ph-moon dark:hidden"></i>
                        <i class="ph-bold ph-sun hidden dark:block"></i>
                    </button>
                    <div class="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
                    <button class="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                        <i class="ph-bold ph-bell text-xl"></i>
                        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                    </button>
                </div>
            </header>
        `;
        document.querySelector('main').insertAdjacentHTML('afterbegin', headerHTML);
    },

    // Initialize all interactions
    initInteractions() {
        const sidebar = document.getElementById('sidebar');
        const sidebarBackdrop = document.getElementById('sidebar-backdrop');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeSidebarBtn = document.getElementById('close-sidebar');
        const themeToggle = document.getElementById('theme-toggle');

        const toggleSidebar = () => {
            const isOpen = !sidebar.classList.contains('-translate-x-full');
            if (isOpen) {
                sidebar.classList.add('-translate-x-full');
                sidebarBackdrop.classList.add('opacity-0');
                setTimeout(() => sidebarBackdrop.classList.add('hidden'), 300);
            } else {
                sidebarBackdrop.classList.remove('hidden');
                setTimeout(() => {
                    sidebar.classList.remove('-translate-x-full');
                    sidebarBackdrop.classList.remove('opacity-0');
                }, 10);
            }
        };

        if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
        if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
        if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', toggleSidebar);
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
};

// Immediate execution of theme to prevent flash
OpsCenter.initTheme();
