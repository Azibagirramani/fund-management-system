const routes = [
  {
    path: "/auth",
    component: () => import("./Auth.index.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("./Login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("./Register.vue"),
      },
    ],
  },
];

export default routes;
