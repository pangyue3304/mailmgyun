<template>
 <div class="detail-recomend" v-if="Object.keys(recomendInfo).length !== 0">
   <div class="detail-recomend-top">
     <span>用户评价</span>
     <span> 更多 </span>
   </div>
   <div class="detail-recomend-shop" v-for="item in recomendInfo">
     <div class="detail-recomend-shopyop">
       <img :src="item.user.avatar" alt="">
       <span>{{item.user.uname}}</span>
     </div>
     <div class="detail-recomend-shopbot">
       <p>{{item.content}}</p>
       <div class="detail-recomend-shopbot-time">
         <span class="timer">{{item.created | showDate}}</span>
         <span> {{item.style}}</span>
       </div>
       <div class="flex">
         <div class="detail-recomend-shopbot-img" v-for="img in item.images">
           <img :src="img" alt="">
         </div>
       </div>

     </div>
   </div>
 </div>
</template>

<script>
  import {formatDate} from "../../../assets/js/untils";

  export default {
    name: 'DetailCommentInfo',
    props: {
      recomendInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters:{
      showDate(value){
        const data = new Date(value * 1000)
        return formatDate(data,'yyyy-MM-dd')
      }
    }
  }
</script>

<style  scoped>
  .detail-recomend{
    padding: 10px 4px;
  }
  .detail-recomend-top{
    padding: 10px 10px;
  }
  .detail-recomend-top{
    display: flex;
    justify-content: space-between;
  }
  .detail-recomend-top span{
    /*flex: 1;*/
    font-weight:bold;
  }
  .detail-recomend-shop{
    padding: 0 8px;

  }
  .detail-recomend-shopyop{
    display: flex;
    vertical-align: center;
    justify-items: center;
  }
  .detail-recomend-shopyop img{
    width: 50px;
    height: 50px;
  }
  .detail-recomend-shopyop span{
    line-height: 50px;
    font-weight: bold;
    font-size: 1.2rem;
    padding-left: 10px;
  }
  .detail-recomend-shopbot p{
    line-height: 1.5;
    font-size: 1rem;
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
  }
  .detail-recomend-shopbot-img{
    width: 80px;
    height: 80px;
    padding: 0 3px;
  }
  .detail-recomend-shopbot-img img{
    width: 80px;
    height: 80px;
  }
  .detail-recomend-shopbot-time{
    padding: 5px 0;
  }
  /*.comment-info-wrap {*/
  /*  padding: 0 8px;*/
  /*  font-size: 14px;*/
  /*  border-bottom: 4px solid #ececec;*/

  /*  }*/
  /*.comment-title {*/
  /*  justify-content: space-between;*/
  /*  border-bottom: 1px solid #ececec;*/
  /*  padding: 10px 4px;*/
  /*}*/
  /*.comment-user-info {*/
  /*  padding: 10px 0;*/
  /*}*/
  /*.avatar {*/
  /*  width: 40px;*/
  /*  height: 40px;*/
  /*  border-radius: 100%;*/
  /*  margin-right: 10px;*/
  /*  vertical-align: middle;*/
  /*}*/
  /*  .comment-text {*/
  /*    line-height: 20px;*/
  /*  }*/
  /*  .comment-goods-info {*/
  /*    color: #999;*/
  /*    margin: 4px 0;*/

  /*  }*/
  /*.comment-time {*/
  /*  margin-right: 10px;*/
  /*}*/
  /*.comment-info-images {*/

  /*}*/
  /*.comment-info-images img{*/
  /*  width: 60px;*/
  /*  height: 60px;*/
  /*  margin-right: 6px;*/
  /*}*/


</style>
