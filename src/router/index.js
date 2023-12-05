import { createRouter, createWebHistory } from "vue-router";
import { HomeView, RegisterView,LoginView,BooksView,ManageStudentsView,OrderedbooksView,UploadBooksView,studentbooks} from "@/views";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/studentbooks",
      name: "studentbooks",
      component: studentbooks,
    },
  ],
});

export default router;
