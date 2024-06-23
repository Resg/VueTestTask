import { createApp } from 'vue';
import App from './App.vue';
import { store } from '@/store';
import './style.scss';
import '@fontsource/roboto';

const app = createApp(App);
app.use(store);
app.mount('#app');
