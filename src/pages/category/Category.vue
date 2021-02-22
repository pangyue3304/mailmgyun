<template>
  <div class="categry">
    <div class="wrapper" ref="bs-wrapper">
      <ul>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
        <li>哈哈哈哈哈</li>
      </ul>
    </div>
    <MainTabber></MainTabber>
  </div>

</template>

<script>
  import  BScroll from 'better-scroll'
  import MainTabber from "../../components/content/MainTabber/MainTabber";
    export default {
        name: "Category",
      data(){
          return{
            scroll:null
          }
      },
      components:{MainTabber },
      created() {

      },
      //组件挂载完之后；
      mounted(){
          this.scroll= new BScroll(document.querySelector('.wrapper'),{
            probeType:3, //监听滚动位置
            pullUpLoad:true, //开启上拉加载

          });


      },
    }
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: #ff8198;
  overflow: hidden;
}
</style>
