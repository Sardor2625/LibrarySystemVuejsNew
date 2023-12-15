import { createRouter, createWebHistory } from "vue-router";
import adminRoutes from './adminRoutes'
import studentRoutes from './studentRoutes'
import { HomeView, RegisterView,LoginView,BooksView,ManageStudentsView,OrderedbooksView,UploadBooksView,studentbooks,studentorderedbooks} from "@/views";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoutes,
    ...studentRoutes,
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login", 
      name: "login",
      component: LoginView,
    },
    {
      path: "/books",
      name: "Books",
      component: BooksView,
    },
    {
      path: "/managestudents",
      name: "managestudents",
      component: ManageStudentsView,
    },
    {
      path: "/orderedbooks",
      name: "orderedbooks",
      component: OrderedbooksView,
    },
    {
      path: "/uploadbooks",
      name: "uploadbooks",
      component: UploadBooksView,
    },
    {
      path: "/studentorderedbooks",
      name: "studentorderedbooks",
      component: studentorderedbooks,
    },
   
  ],
});

export default router;
