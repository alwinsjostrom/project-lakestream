import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import { router } from "./router/index.js";

import './style.css'

const primevueOptions = {
    theme: {
        preset: Aura,
        options: {
            prefix: 'au',
            darkModeSelector: 'system',
            cssLayer: false,
        },
    },
};

const app = createApp(App);
app.use(router);
app.use(PrimeVue, primevueOptions);
app.mount('#app');
