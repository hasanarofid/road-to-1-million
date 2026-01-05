<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import StatCard from '@/Components/StatCard.vue';
import VueApexCharts from 'vue3-apexcharts';
import { computed } from 'vue';

const props = defineProps({
    stats: Object,
    recentOrders: Array,
    recentActivities: Array,
    chartData: Array,
    actionCenter: Object,
});

const chartOptions = {
    chart: {
        type: 'area',
        toolbar: { show: false },
        animations: { enabled: false }
    },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        }
    },
    dataLabels: { enabled: false },
    grid: { borderColor: '#f1f1f1' },
    xaxis: {
        categories: props.chartData.map(d => d.date),
        labels: { style: { colors: '#9ca3af' } }
    },
    yaxis: { labels: { style: { colors: '#9ca3af' } } },
    colors: ['#4f46e5'],
};

const series = [{
    name: 'Revenue',
    data: props.chartData.map(d => d.revenue)
}];

const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value);
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Operational Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                
                <!-- 1. KPI Summary Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard 
                        title="Today's Orders" 
                        :value="stats.today_orders"
                    >
                        <template #icon>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </template>
                    </StatCard>
                    <StatCard 
                        title="Monthly Revenue" 
                        :value="formatCurrency(stats.monthly_revenue)"
                    >
                        <template #icon>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </template>
                    </StatCard>
                    <StatCard 
                        title="Inventory Alerts" 
                        :value="stats.low_stock_alerts"
                        :alert="stats.low_stock_alerts > 0"
                    >
                        <template #icon>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        </template>
                    </StatCard>
                    <StatCard 
                        title="Pending Approvals" 
                        :value="stats.pending_approvals"
                        :alert="stats.pending_approvals > 5"
                    >
                        <template #icon>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </template>
                    </StatCard>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- 2. Operational Timeline -->
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Recent Orders</h3>
                                <button class="text-sm text-indigo-600 hover:text-indigo-500 font-medium">View all</button>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead class="bg-gray-50 dark:bg-gray-900/50 text-xs text-gray-500 uppercase">
                                        <tr>
                                            <th class="px-6 py-3">Order #</th>
                                            <th class="px-6 py-3">Customer</th>
                                            <th class="px-6 py-3">Amount</th>
                                            <th class="px-6 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr v-for="order in recentOrders" :key="order.id" class="text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ order.order_number }}</td>
                                            <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ order.customer_name }}</td>
                                            <td class="px-6 py-4 text-gray-900 dark:text-white">{{ formatCurrency(order.total_amount) }}</td>
                                            <td class="px-6 py-4">
                                                <span :class="[
                                                    'px-2 py-1 rounded-full text-xs font-semibold',
                                                    order.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                ]">
                                                    {{ order.status }}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 3. Performance Analytics Chart -->
                        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6">Revenue Trend (Last 7 Days)</h3>
                            <VueApexCharts height="300" :options="chartOptions" :series="series" />
                        </div>
                    </div>

                    <!-- 4. Action Center -->
                    <div class="space-y-6">
                        <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Action Center</h3>
                            
                            <!-- Pending Approvals -->
                            <div class="space-y-4">
                                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Pending Approvals</h4>
                                <div v-if="actionCenter.approvals.length === 0" class="text-sm text-gray-500">No pending approvals</div>
                                <div v-for="approval in actionCenter.approvals" :key="approval.id" 
                                    class="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="text-sm font-bold text-orange-900 dark:text-orange-200 capitalize">{{ approval.request_type }}</p>
                                            <p class="text-xs text-orange-700 dark:text-orange-400 mt-1">Requested by {{ approval.requester.name }}</p>
                                        </div>
                                        <button class="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border border-orange-300 dark:border-orange-700 shadow-sm hover:bg-orange-100 transition-colors">Review</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Low Stock Warnings -->
                            <div class="mt-8 space-y-4">
                                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Critical Inventory</h4>
                                <div v-if="actionCenter.inventory.length === 0" class="text-sm text-gray-500">No critical stock warnings</div>
                                <div v-for="item in actionCenter.inventory" :key="item.id" 
                                    class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <p class="text-sm font-bold text-red-900 dark:text-red-200">{{ item.item_name }}</p>
                                            <p class="text-xs text-red-700 dark:text-red-400">Only {{ item.stock_quantity }} remaining</p>
                                        </div>
                                        <button class="text-xs bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors font-medium">Restock</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Staff Activities -->
                            <div class="mt-8 space-y-4">
                                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Recent Activity</h4>
                                <div class="flow-root">
                                    <ul role="list" class="-mb-8">
                                        <li v-for="(activity, idx) in recentActivities" :key="activity.id">
                                            <div class="relative pb-8">
                                                <span v-if="idx !== recentActivities.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
                                                <div class="relative flex space-x-3">
                                                    <div>
                                                        <span class="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                                                            <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                        </span>
                                                    </div>
                                                    <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                        <div>
                                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                                <span class="font-bold text-gray-900 dark:text-white">{{ activity.user.name }}</span> {{ activity.description }}
                                                            </p>
                                                        </div>
                                                        <div class="whitespace-nowrap text-right text-xs text-gray-400">
                                                            <time :datetime="activity.created_at">{{ new Date(activity.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}</time>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
</template>
