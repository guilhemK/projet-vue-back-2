import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminProducts from '../views/AdminProducts.vue'
import AdminCustomers from '../views/AdminCustomers.vue'
import AdminOrders from '../views/AdminOrders.vue'
import AddProduct from '../views/AddProduct.vue'
import AddCustomer from '../views/AddCustomer.vue'
import EditProduct from '../views/EditProduct.vue'
import EditCustomer from '../views/EditCustomer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: AdminDashboard
  },
  {
    path: '/skins',
    name: 'products',
    component: AdminProducts
  },
  {
    path: '/skins/ajouter',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/skins/modifier/:product_id',
    name: 'editProduct',
    component: EditProduct
  },
  {
    path: '/clients',
    name: 'customers',
    component: AdminCustomers
  },
  {
    path: '/clients/ajouter',
    name: 'addCustomer',
    component: AddCustomer
  },
  {
    path: '/clients/modifier/:product_id',
    name: 'editCustomer',
    component: EditCustomer
  },
  {
    path: '/commandes',
    name: 'orders',
    component: AdminOrders
  }
]

const router = new VueRouter({
  routes
})

export default router
