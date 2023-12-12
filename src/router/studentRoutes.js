// studentRoutes.js
import { createRouter } from "vue-router";
import studentDashboard from '../components/Student/StudentDashboard.vue';
import studentbooks from '../views/student/studentbooks.vue'
import studentInfo from '../views/student/studentInfo.vue'

// import AdminUsers from '../components/Admin/AdminUsers.vue';

const studentRoutes = [
  {
    path: '/student/dashboard',
    name: '/student/dashboard',
    component: studentDashboard,
    // meta: { requiresAuth: true, isAdmin: true } // Example of meta fields for authentication and authorization
  },
  {
    path: "/studentbooks",
    name: "studentbooks",
    component: studentbooks,
  },
  {
    path: "/student/studentInfo",
    name: "/student/studentInfo",
    component: studentInfo,
  },

//   {
//     path: '/admin/users',
//     name: 'AdminUsers',
//     component: AdminUsers,
//     meta: { requiresAuth: true, isAdmin: true }
//   },
  // More admin routes can be added here
];

export default studentRoutes;
