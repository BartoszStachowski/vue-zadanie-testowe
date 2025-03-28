import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '../interfaces/User';

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]);
    const error = ref<string | null>(null);
    const isLoading = ref<boolean>(false);

    const url = 'https://jsonplaceholder.typicode.com/users';
    const fakeUrl = 'https://jsonplacesholder.typicode.com/users';

    const getUsers = async (simulateError: boolean = false) => {
        isLoading.value = true;
        error.value = null;

        try {
            const res = await fetch(simulateError ? fakeUrl : url);

            if (!res.ok) {
                error.value = `Failed to fetch users: ${res.status} ${res.statusText}`;
                return;
            }

            users.value = await res.json();
        } catch (err: unknown) {
            if (err instanceof Error) {
                error.value = err.message;
            } else {
                error.value = 'An unknown error occurred';
            }
        } finally {
            isLoading.value = false;
        }
    };

    return {
        users,
        error,
        isLoading,
        getUsers,
    };
});
