// adminRoutes.js
import { createRouter } from "vue-router";
import AdminDashboard from '../components/Admin/AdminDashboard.vue';
import adminInfo from '../views/admin/adminInfo.vue'

// import AdminUsers from '../components/Admin/AdminUsers.vue';

const adminRoutes = [
  {
    path: '/admin/dashboard',
    name: '/admin/dashboard',
    component: AdminDashboard,
    // meta: { requiresAuth: true, isAdmin: true } // Example of meta fields for authentication and authorization
  },
  {
    path: "/admin/adminInfo",
    name: "/admin/adminInfo",
    component: adminInfo,
  },
//   {
//     path: '/admin/users',
//     name: 'AdminUsers',
//     component: AdminUsers,
//     meta: { requiresAuth: true, isAdmin: true }
//   },
  // More admin routes can be added here
];

export default adminRoutes;
