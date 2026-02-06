<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const handleLogin = () => {
    auth.login();
    router.push('/');
};

const handleLogout = () => {
    auth.logout();
    router.push('/login');
};
</script>

<template>
    <div class="flex items-center gap-2">
        <button @click="handleLogin">
            Log in
        </button>
        
        <button @click="handleLogout">
            Log out
        </button>
    </div>
</template>
