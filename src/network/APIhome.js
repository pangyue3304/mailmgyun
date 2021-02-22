import {request} from "./request";


export  default {
  home:{
    getHomeMultidata(){
      return request({
        url:'/home/multidata'
      });
    },
    getHomeGoode(type,page){
      return request({
        url:'/home/data',
        params:{
          type,
          page
        }
      });
    }
  },
  detail:{
    getItem(iid){
      return request({
        url:'/detail',
        params:{
          iid
        }

      });
    },
   recommend(){
     return request({
       url:'/recommend',


     });
   }
  },

}
