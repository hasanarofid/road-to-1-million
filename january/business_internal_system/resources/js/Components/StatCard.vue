<script setup>
defineProps({
    title: String,
    value: [String, Number],
    icon: String,
    trend: String,
    trendColor: {
        type: String,
        default: 'text-gray-500'
    },
    alert: Boolean
});
</script>

<template>
    <div :class="[
        'p-6 bg-white dark:bg-gray-800 rounded-xl border transition-all duration-200',
        alert ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 dark:border-gray-700'
    ]">
        <div class="flex items-center justify-between">
            <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ title }}</p>
                <h3 class="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{{ value }}</h3>
            </div>
            <div :class="[
                'p-3 rounded-lg',
                alert ? 'bg-red-100 text-red-600' : 'bg-indigo-100 text-indigo-600'
            ]">
                <slot name="icon"></slot>
            </div>
        </div>
        <div v-if="trend" class="mt-4 flex items-center">
            <span :class="['text-xs font-semibold', trendColor]">{{ trend }}</span>
            <span class="text-xs text-gray-400 ml-2">vs last period</span>
        </div>
    </div>
</template>

