import { createRouter, createWebHistory } from "vue-router";
import { HomeView, RegisterView, LoginView, AdminView,BooksView } from "@/views";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:  'home',
      component: HomeView,
    },
    {
        path: '/register',
        name:  'register',
        component: RegisterView,
      },
      {
        path: '/login',
        name:  'login',
        component: LoginView,
      },
      {
        path: '/Admin',
        name:  'Admin',
        component: AdminView,
      },
      {
        path: '/Books',
        name:  'Books',
        component: BooksView,
      },
  ],
})

export default router;
