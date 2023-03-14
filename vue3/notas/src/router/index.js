import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/principal',
    name: 'principal',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrincipalView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/carrera',
    name: 'carrera',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarreraView.vue')
  },
  {
    path: '/carrera/:id/editar',
    name: 'editarCarrera',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarreraEditarView.vue')
  },
  {
    path: '/materia',
    name: 'materia',
    component: () => import(/* webpackChunkName: "about" */ '../views/MateriaView.vue')
  },
  {
    path: '/materia/:id/editar',
    name: 'editarMateria',
    component: () => import(/* webpackChunkName: "about" */ '../views/MateriaEditarView.vue')
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: () => import(/* webpackChunkName: "about" */ '../views/EstudianteView.vue')
  },
  {
    path: '/estudiante/:id/editar',
    name: 'editarEstudiante',
    component: () => import(/* webpackChunkName: "about" */ '../views/EstudianteEditarView.vue')
  },
  {
    path: '/notas',
    name: 'notas',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotasView.vue')
  },
  {
    path: '/notas/:id/editar',
    name: 'editarNotas',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotasEditarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
