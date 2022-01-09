export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard.vue"),
    children: [
      {
        path: "",
        name: "overview",
        component: () => import("@/views/overview.vue"),
      },
    ],
  },
];
