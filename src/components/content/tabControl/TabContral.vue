<template>
    <div class="tab-contral">
        <div v-for="(item,index) in titles" @click="toggleClass(index)"
             class="tab-contral-item" :class="{active:index === currentIndex}">
          <span> {{item}} </span>
        </div>
    </div>
</template>

<script>
    export default {
      name: "TabContral",
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          },
      },
      data(){
        return{
          currentIndex:0
        }
      },
      computed:{

      },
      methods:{
        toggleClass(index){
          this.currentIndex = index;
          //点击时发送点击事件 传入的参数是index
          this.$emit('tabClick',index)
        },

      }
    }
</script>

<style scoped>
.tab-contral{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 1.2rem;
}
.tab-contral-item{
  flex: 1;

}
.tab-contral-item span{
  padding: 5px 5px;
  box-sizing: border-box;
}
  .active span{
    color:var(--color-high-text) ;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
