import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import EventBus from "./eventBus";
import VueDragscroll from "vue-dragscroll";

import { TroisJSVuePlugin } from "troisjs";

const app = createApp(App);
app.config.globalProperties.$EventBus = EventBus;
app.use(router).use(VueDragscroll).use(TroisJSVuePlugin).mount("#app");
