import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

import LoginView from '../views/Login.vue';
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';

const routes = [
    {
        path: '/login',
        component: LoginView,
    },
    {
        path: '/',
        component: HomeView,
        meta: { requiresAuth: true },
    },
    {
        path: '/about',
        component: AboutView,
        meta: { requiresAuth: true },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: (to) => '/',
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();

    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});
