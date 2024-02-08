import { createRouter, createWebHistory } from 'vue-router';
import NProgess from 'nprogress';

const routes = [
  {
    //  Página New User POST
    path: '/new-user',
    name: 'newuser',
    component: () => import('../components/create-user/CreateNewUser.vue'),
  },
  {
    //  Página List Users Get all
    path: '/list-user',
    name: 'list',
    component: () => import('../components/list-user/ListUsers.vue'),
  },
  {
    //  Página Edit User by ID Put/Update
    path: '/edit-user/:id',
    name: 'edituser',
    component: () => import('../components/edit-user/EditUser.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  //  Quando houver o carregamento de uma pagina en usar NProgress
  if (to.name) { // Qualquel pagina
    NProgess.start(); //  Começa a barra a carregar
  }
  next();
});

router.afterEach((to, from) => {
  //  Completa a animação da rota usando o progress bar
  NProgess.done();
});

export default router;
