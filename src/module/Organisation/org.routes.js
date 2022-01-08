const routes = [
  {
    path: "/organisation",
    component: () => import("./index.vue"),
    children: [
      {
        path: "Dashboard",
        component: () => import("../../views/dashboard.vue"),
      },
      {
        path: "setup",
        component: () => import("../Setup/index.vue"),
      },
    ],
  },
];

export default routes;
