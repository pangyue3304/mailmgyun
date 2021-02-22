<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imagesLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper,SwiperItem } from '../../../components/common/swiper'
    export default {
        name: "HomeSwiper",
      components:{Swiper,SwiperItem  },
      props:{
          banners:{
            type:Array,
            default(){
              return[]
            }
          },
      },
      data(){
          return{
            isLoad:false
          }
      },
      methods:{
          //监听图片加载完成
        imagesLoad(){
          if(!this.isLoad){
            //发射图片加载完成事件；
            this.$emit('swiperImagesLoad');
            this.isLoad = true
          }

        }
      }
    }
</script>

<style scoped>

</style>
