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
      {
        path: "funds",
        name: "funds",
        component: () => import("@/views/funds.vue"),
      },
      {
        path: "employees",
        name: "employees",
        component: () => import("@/views/employees.vue"),
      },
      {
        path: "projects",
        name: "projects",
        component: () => import("@/views/projects.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/settings.vue"),
      },
    ],
  },
];
