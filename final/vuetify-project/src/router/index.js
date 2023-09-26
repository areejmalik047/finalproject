// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "signup" */ "@/components/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("@/components/LogIn.vue"),
  },
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },

      {
        path: "/about",
        name: "AboutUs",
        component: () => import("@/components/AboutUs.vue"),
      },
      {
        path: "/product",
        name: "ProductPage",
        component: () => import("@/views/ProductPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
