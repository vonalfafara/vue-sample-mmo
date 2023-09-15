import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import News from "./views/News.vue";
import MMOs from "./views/MMOs.vue";
import MMO from "./views/MMO.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/mmos",
    component: MMOs,
  },
  {
    path: "/mmos/:gameId",
    component: MMO,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
