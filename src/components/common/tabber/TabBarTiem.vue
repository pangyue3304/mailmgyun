<template>

    <div class="tab-bar-item" @click="itemClick()">
      <div v-if="!isActive">  <slot name="item-icon"></slot>  </div>
      <div v-else>  <slot name="item-icon-active"></slot>  </div>
      <div :style="activeStyle">  <slot name="item-text"></slot> </div>

    </div>


</template>

<script>
    export default {
        name: "TabBarTiem",
      props:{
        path:{
          type:String,
        },
        activeColor:{
          type: String,
          default:'#FF00DF',
        }
      },
      data(){
          return{

          }
      },
      computed:{ //属性 不加括号
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? { color:this.activeColor} : {}
        }
      },
      methods:{//方法 要加（）
        itemClick(){
          this.$router.replace(this.path);
        },

      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
