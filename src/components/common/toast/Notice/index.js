
import Notice from './Notice'
const obj = {}
obj.install = function (Vue) {
  // document.body.appendChild(Toast.$el)
  // 1创建组件构造器
  const toastContrustor =  Vue.extend(Notice)
  // 2.new的方法 根据组件构造器，可以拿出来一个组件对象
  const notice = new toastContrustor()
  // 3. 将组件对象手动的挂在到某一个元素上
  notice.$mount(document.createElement('div'))
  // toast.$el 对应的就是div
  document.body.appendChild(notice.$el)
  Vue.prototype.$notice= notice;
}
export default obj
