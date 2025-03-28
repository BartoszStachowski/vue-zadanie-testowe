<template>
    <div
        class="bg-red-900/20 border border-red-600 text-red-300 px-6 py-4 rounded-xl max-w-xl mx-auto text-center"
    >
        {{ msg }}
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        msg?: string;
    }>(),
    {
        msg: 'Something went wrong. Please try again later.',
    }
);
</script>
