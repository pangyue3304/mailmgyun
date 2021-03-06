import  Vue from  'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home=() =>import('../pages/home/Home');
const Category=() =>import('../pages/category/Category');
const Cart =()=>import('../pages/cart/Cart');
const Profile=() =>import('../pages/profile/Profile');
const Detail=() =>import('../pages/detail/detail');
const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
    meta:{keepAlive:true,}
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
    meta:{keepAlive:true,}
  },

  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail/:iid',
    component:Detail,
    name: 'Detail',

  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})
export  default router
