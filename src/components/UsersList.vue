<template>
    <button class="mb-10" @click="userStore.getUsers(true)">
        Simulate 404 error
    </button>

    <template v-if="userStore.isLoading">
        <p class="text-center text-gray-400">Loading...</p>
    </template>

    <template v-else>
        <div v-if="userStore.error">
            <ErrorBanner :msg="userStore.error" />
        </div>

        <div v-else class="flex flex-col gap-3 bg-gray-900 min-h-screen">
            <UserItem
                v-for="user in userStore.users"
                :key="user.id"
                :name="user.name"
                :email="user.email"
                :username="user.username"
            />
        </div>
    </template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '../stores/userStore.ts';
import ErrorBanner from '../components/ErrorBanner.vue';
import UserItem from '../components/UserItem.vue';

const userStore = useUserStore();

onMounted(() => {
    userStore.getUsers();
});
</script>
