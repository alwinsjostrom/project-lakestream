import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore(
    'auth',
    () => {
        const isAuthenticated = ref(false);
        const user = ref(null);

        function login() {
            isAuthenticated.value = true;
            user.value = { id: 1 };
        }

        function logout() {
            isAuthenticated.value = false;
            user.value = null;
        }

        return { isAuthenticated, user, login, logout };
    },
    {
        persist: true,
    }
);
