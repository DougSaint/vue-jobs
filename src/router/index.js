// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/job-details/:id",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Detalhes da Vaga",
        component: () => import("@/views/JobDetails.vue"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
