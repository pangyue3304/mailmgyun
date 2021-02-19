import APIhome from "../network/APIhome";
export  default {
  namespaced: true,
  state:{
    FeatureGoods:[],
    sort:'pop'
  },
  getters:{

  },
  mutations:{
    popList(state,payload){
       state.FeatureGoods.push(...payload.list);
        state.sort = payload.sort;
    },
    newList(state,payload){
      state.FeatureGoods=[];
      state.FeatureGoods.push(...payload.list);
      state.sort='';
      state.sort = payload.sort;
    }
  },
  actions:{
      getHomeDate(){
        return APIhome.home.getHomeMultidata().then(res=>{

          return Promise.resolve( res.data);
        })
      },
    getHomeGoodeInit({commit},payload){
        console.log(payload)
        return APIhome.home.getHomeGoode(payload[0],payload[1]).then(res=>{
          console.log(res.data);

          commit('popList',res.data.data);

        })
    },
    getHomeGoode({state,commit},payload){
      console.log(payload)
      return APIhome.home.getHomeGoode(payload[0],payload[1]).then(res=>{
        console.log(res.data)
        if(res.data.data.sort === state.sort){
          commit('popList',res.data.data);
        }
        else{
          commit('newList',res.data.data);
        }


      })
    }
  },
}
