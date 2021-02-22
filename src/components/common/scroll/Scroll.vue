<template>
  <div ref="wrapper" class="wrappwe">
      <!--    ref可以绑定在父组件页面使用的子组件上，
      通过this.$refs.name对父组件中使用的子组件进行操作（获取到的是组件对象）-->
      <!--  还可以绑定在元素上this.$refs.name获取元素-->
      <div class="content" >
        <slot></slot>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
      name: "Scroll",
      props:{
        //驼峰名在使用是变成小写加横岗
        probeType:{
          type:Number,
          default:0
        },
        //上拉加载配置
        pullUpLoad:{
          type:Boolean,
          default: false
        },
      },
      data(){
          return{
            scroll:null,

          }

      },
      mounted(){

          this.scroll = new BScroll(this.$refs.wrapper,{
              click:true,
              probeType: this.probeType,
              pullUpLoad:this.pullUpLoad,
          });
        // console.log(this.scroll)

          this.scroll.on('scroll',(position)=>{this.$emit('scroll',position)
        });
          //监听上拉加载
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            console.log('上拉加载更多');
            this.$emit('pullingUp')
          });
        }

      },
      methods:{
        scrollTo(x,y,timer=300){
          //监听滚动函数
         this.scroll && this.scroll.scrollTo(x,y,timer)
        },
        //刷新高度
        refresh(){
          this.scroll.refresh()
        },
        //调用上拉加载更多
        finishPullUp(){
          //回调上拉加载更多
          this.scroll && this.scroll.finishPullUp()
        },
        //获取当前y值
        getScrollY(){
          //如果有值，保存，没有值直接返回0
          return this.scroll ? this.scroll.y : 0;
        },
      }
    }
</script>

<style scoped>

</style>
