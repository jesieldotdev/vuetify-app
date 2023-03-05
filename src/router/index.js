import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue')
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: () => import('../views/Vendas.vue')
    },
    {
      path: '/estoque',
      name: 'estoque',
      component: () => import('../views/Estoque.vue')
    },
    {
      path: '/addproduto',
      name: 'addproduto',
      component: () => import('../views/AddProduto.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/Clientes.vue')
    },
    
    {
      path: '/addcliente',
      name: 'addclientes',
      component: () => import('../views/addCliente.vue')
    },
    {
      path: '/config',
      name: 'configuracoes',
      component: () => import('../views/Config.vue')
    }
  ]
})

export default router
