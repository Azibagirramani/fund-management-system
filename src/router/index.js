import Vue from "vue";
import Router from "vue-router";

// import Setup from "../module/Setup/index.vue";

// routes
import AuthRoutes from "../module/Auth/auth.routes";
import OrgRoutes from "../module/Organisation/org.routes.js";
import DashboardRoutes from "../views/dashboardRoutes.js";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/landing",
    },
    {
      path: "/landing",
      component: () => import("../views/landing.vue"),
    },
    ...AuthRoutes,
    ...OrgRoutes,
    ...DashboardRoutes,
  ],
});
