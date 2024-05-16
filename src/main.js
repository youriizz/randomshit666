import "./assets/main.css";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import EventBus from './eventBus';

const app = createApp(App);
app.config.globalProperties.$EventBus = EventBus;
app.use(router).mount('#app');


