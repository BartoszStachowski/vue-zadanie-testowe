<template>
    <div class="bg-gray-800 hover:bg-gray-700 rounded-xl p-5 text-white">
        <h3 class="font-semibold text-lg text-emerald-400">{{ name }}</h3>
        <p class="text-sm text-gray-400">@{{ username }}</p>
        <p class="text-sm text-gray-300">{{ email }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    username: String,
    email: String,
});
</script>
