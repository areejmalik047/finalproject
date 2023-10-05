// Composables
import ProductDetailsVue from "@/components/ProductDetails.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
        path: "/about",
        name: "AboutUs",
        component: () => import("@/components/AboutUs.vue"),
      },
      {
        path: "/product",
        name: "ProductPage",
        component: () => import("@/views/ProductPage.vue"),
      },
      {
        path: "/product/:id",
        name: "ProductDetails",
        component: ProductDetailsVue,
      },
     
      {
        path: "/addtocart/:id",
        name: "AddtoCart",
        component: () => import("@/components/AddtoCart.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("@/layouts/Admin/AdminDashboard.vue"),
    children: [
      {
        path: "/book",
        name: "BookInfo",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/admin/BookInfo.vue"
          ),
      },
      {
        path: "/user",
        name: "UserInfo",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/admin/UserInfo.vue"
          ),
      },
      {
        path: "/order",
        name: "OrderInfo",
        component: () => import("@/components/admin/OrderInfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
