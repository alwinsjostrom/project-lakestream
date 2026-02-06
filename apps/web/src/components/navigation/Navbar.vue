<script setup>
import { useAuthStore } from '../../stores/auth.js';
const auth = useAuthStore();
</script>

<template>
    <header class="flex justify-between items-center p-4">
        <span>
            Authenticated: {{ !!auth.isAuthenticated }}
        </span>
        
        <nav class="flex items-center gap-2">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>
