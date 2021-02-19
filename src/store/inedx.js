import Vue from 'vue';
import Vuex from 'vuex';

import home from './home';
import category from './category';
import  cart from'./cart';
import  profile from  './profile'

Vue.use(Vuex);
const store =new Vuex.Store({
  modules:{ home,category,cart,profile, },
  state:{},
  getters:{},
  mutations:{},
  actions:{}
})

export  default store
