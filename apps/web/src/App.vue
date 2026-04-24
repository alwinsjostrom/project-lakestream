<script setup>
import Navbar from './components/navigation/Navbar.vue';
// import { Hello } from '@repo/ui';
</script>

<template>
    <div class="h-dvh flex flex-col bg-surface-default">
        <Navbar />

        <main class="grow px-6 py-4">
            <RouterView />
        </main>
    </div>
</template>
