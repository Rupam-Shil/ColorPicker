import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Gradient from "../views/Gradient.vue";
import Palette from "../views/palette.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gradient",
    name: "Gradient",
    component: Gradient,
  },
  {
    path: "/palette",
    name: "Palette",
    component: Palette,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
