import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import WishlistView from "@/views/WishlistView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/category/:id",
      name: "Category",
      component: CategoryView,
      props: true,
    },
    {
      path: "/wishlist",
      name: "Wishlist",
      component: WishlistView,
    },
  ],
});

export default router;
