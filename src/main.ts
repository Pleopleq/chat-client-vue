import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/routes";
import "./style.css";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
