import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "two",
        component: () => import("@/views/two.vue"),
        children: [
          {
            path: "three",
            component: () => import("@/views/three.vue"),
          },
        ]
      },
      {
        path: "two-other",
        component: () => import("@/views/two-other.vue"),
        children: [
          {
            path: "three-other",
            component: () => import("@/views/three-other.vue"),
          },
        ]
      },
      {
        path: "twos-other",
        component: () => import("@/views/twos-other.vue"),
        children: [
          {
            path: "threes-other",
            component: () => import("@/views/threes-other.vue"),
          },
        ]
      },
      {
        path: "twos",
        component: () => import("@/views/twos.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
