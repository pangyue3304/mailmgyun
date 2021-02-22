<template>

    <swiper class="detailswiper">
      <swiper-item v-for="item in topImages">

          <img :src="item" alt="">

      </swiper-item>
    </swiper>


</template>

<script>
  import { Swiper,SwiperItem } from '../../../components/common/swiper'
    export default {
      name: "detailswiper",
      components:{Swiper,SwiperItem  },
      props:{
        topImages:{
          type:Array,
          default(){
            return []
          }
        },
      },
    }
</script>

<style scoped>
.detailswiper{
  height: 420px;
  overflow: hidden;
}
.detailswiper img{
  height: 100%;
}
</style>
