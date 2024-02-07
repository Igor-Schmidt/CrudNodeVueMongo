import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Create New User',
    component: () => import('../components/create-employee/CreateNewUser.vue'),
  },
  {
    path: '/list-employee',
    name: 'List Users',
    component: () => import('../components/list-employee/ListUsers.vue'),
  },
  {
    path: '/edit-employee/:_id',
    name: 'Edit User',
    component: () => import('../components/edit-employee/EditUser.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
