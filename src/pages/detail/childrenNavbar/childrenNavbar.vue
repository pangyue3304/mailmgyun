<template>
  <div class="detailnav-root">
    <NavBar  backColor="#fff">
        <div slot="left" @click="$router.back();">
          <img src="../../../assets/image/common/fanhui.png" alt="">
        </div>
        <div slot="center" class="title">
          <div class="title-item"
               v-for="(item,index) in titles" @click="toggleItem(index)" :class="{active: index === currentIndex}"> {{item}} </div>
        </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "detail",
    components:{NavBar  },
    data(){
      return{
        titles: ['商品','参数','评论','推荐'],
        currentIndex:0,

    }},
    computed:{

    },
    methods:{
      toggleItem(index){
        this.currentIndex = index;
        this.$emit('childrenavclick',index)
      },
    }

  }
</script>

<style scoped>
.title{
  display: flex;
}
  .title-item{
    flex: 1;

    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
  }
  .left img{
    width: 50px;
  }
</style>
