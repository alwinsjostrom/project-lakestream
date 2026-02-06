import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import './style.css'

const primevueOptions = {
    theme: {
        preset: Aura
    },
};

const app = createApp(App);
app.use(PrimeVue, primevueOptions);
app.mount('#app');
