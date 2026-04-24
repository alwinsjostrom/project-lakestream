<script setup>
import { useAuthStore } from "../../stores/auth";
import { useRouter } from 'vue-router';
import Button from "primevue/button";

const auth = useAuthStore();
const router = useRouter();

const handleLogin = () => {
    auth.login();
};

const handleLogout = () => {
    auth.logout();
    router.push('/login');
};
</script>

<template>
    <header class="flex justify-between items-center px-6 py-4 border-b border-divider-secondary">
        <RouterLink to="/">
            <img
                src="/icon.svg"
                class="h-10 w-10"
            >
        </RouterLink>
        
        <nav class="flex items-center gap-2">
            <RouterLink to="/">
                <Button
                    label="Home"
                    severity="secondary"
                    :disabled="!auth.isAuthenticated"
                />
            </RouterLink>

            <RouterLink to="/about">
                <Button
                    label="About"
                    severity="secondary"
                    :disabled="!auth.isAuthenticated"
                />
            </RouterLink>

            <Button
                v-if="auth.isAuthenticated"
                label="Log out"
                severity="danger"
                @click="handleLogout"
            />
            <Button
                v-else
                label="Log in"
                @click="handleLogin"
            />
        </nav>
    </header>
</template>
