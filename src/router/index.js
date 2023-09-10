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
        component: () => import("@/views/JobDetailsView.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/about",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Conseguir mais resultados",
        component: () => import("@/views/AboutView.vue"),
        props: true,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: () => import("@/views/NotFoundView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
