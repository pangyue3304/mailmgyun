import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store/inedx";

import notice from './components/common/toast/Notice/index';
Vue.use(notice);
// 解决移动端的300ms延迟:安装 导入 使用
import  FastClick from'fastclick'

FastClick.attach(document.body)
//图片懒加载问题 1.安装2.导入 3.use4.在图片上使用 img : src ==>v-lazy
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload,{
// loading:require()
})


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
