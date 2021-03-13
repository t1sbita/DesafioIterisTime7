import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicial from '../views/Inicial'
import VendedoresLista from '../views/VendedoresLista'
import SobreNos from '../views/SobreNos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial,
  },
  {
    path: '/SobreNos',
    name: 'SobreNos',
    component: SobreNos,
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

