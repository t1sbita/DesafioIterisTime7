import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicial from '../views/Inicial'
import VendedoresLista from '../views/VendedoresLista'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial,
  },
  {
    path: '/listaVendedores',
    name: 'VendedoresLista',
    component: VendedoresLista,
    
  }
]

const router = new VueRouter({
  routes
})

export default router
