import APIhome from "../network/APIhome";
export  default {
  namespaced: true,
  state: {
    cartList:[]
  },
  getters: {
    cartLength(state){
      return   state.cartList.length
    },
  },
  mutations: {
    //mutation用来改变state里面的东西
    //尽可能单一
    _addCounter(state,payload){
      payload.count+=1
    },
    _addCart(state,payload){
      payload.checked = true;
      state.cartList.push(payload);

    }
  },
  actions: {
    addCart({commit,state},payload){
        return new Promise((resolve,reject)=>{
          let oldProduct = state.cartList.find(function(item){
            return item.iid === payload.iid
          })
          if(oldProduct){
            commit('_addCounter',oldProduct);
            resolve('商品数量加一')
          }else{
            payload.count = 1
            //传过来的是一个对象，可以通过. 来添加属性
            commit('_addCart',payload)
            resolve('商品添加成功')
          }
        })



    },
  }
}
