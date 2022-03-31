import { createRouter,createWebHistory } from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Shopcart = () => import('@/views/shopcart/Shopcart.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const GoodsDetail = () => import('@/views/goodsDetail/GoodsDetail.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    name:'detail',
    component:GoodsDetail
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router