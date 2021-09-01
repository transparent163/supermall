import Vue from "vue";
import VueRouter from 'vue-router'

// 安装插件
Vue.use(VueRouter)

const Home = () => import("../views/home/Home")
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]
// chunagjianrouter
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router