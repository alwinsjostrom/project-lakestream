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
    <header class="flex justify-between items-center p-4 border-b">
        <span>Title</span>
        
        <nav class="flex items-center gap-2">
            <RouterLink to="/">
                <Button
                    label="Home"
                    severity="secondary"
                />
            </RouterLink>

            <RouterLink to="/about">
                <Button
                    label="About"
                    severity="secondary"
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
