import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from "vue";
import Home from "./views/Home.vue";
import CityInformation from "./views/CityInformation.vue";
import App from "./App.vue";
import reset from "reset-css";

const routes = [
  { path: "/", component: Home },
  {
    path: "/weather/:city",
    component: CityInformation,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(reset).mount("#app");
