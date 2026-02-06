import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
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
app.use(PrimeVue, primevueOptions);
app.mount('#app');
