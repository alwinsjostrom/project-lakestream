<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import Button from "primevue/button";

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
        <Button
            label="Log in"
            :severity="auth.isAuthenticated ? 'secondary' : 'primary'"
            @click="handleLogin"
        />

        <Button
            label="Log out"
            :severity="auth.isAuthenticated ? 'danger' : 'secondary'"
            @click="handleLogout"
        />
    </div>
</template>
