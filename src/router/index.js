import  Vue from  'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home=() =>import('../pages/home/Home');
const Category=() =>import('../pages/category/Category');
const Cart =()=>import('../pages/cart/Cart');
const Profile=() =>import('../pages/profile/Profile');

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
  },

  {
    path:'/profile',
    component:Profile,
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})
export  default router
