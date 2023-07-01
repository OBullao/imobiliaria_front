import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/produto',
    name: 'produto',
    component: () => import(/* webpackChunkName: "produto" */ '../views/ProdutoView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/dados',
    name: 'dados',
    component: () => import(/* webpackChunkName: "dados" */ '../views/DadosView.vue')
  }
  ,
  {
    path: '/dadosDeAnuncio',
    name: 'dados-anuncio-views',
    component: () => import(/* webpackChunkName: "dados" */ '../views/DadosView.vue')
  },
  {
    path: '/dadosDePropriedade',
    name: 'dados-propriedade-adm-views',
    component: () => import(/* webpackChunkName: "dados" */ '../views/DadosView.vue')
  },
  {
    path: '/propriedade/Formulario',
    name: 'propriedade-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/DadosView.vue'),
    children: [
      {
        path: '/propriedade/formulario',
        name: 'propriedade-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/DadosView.vue')
      },
      {
        path: '/propriedade/formulario',
        name: 'propriedade-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/DadosView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
