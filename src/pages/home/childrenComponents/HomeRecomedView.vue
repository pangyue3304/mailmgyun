<template>
  <div>
    <div class="recommend-wrap">
      <div class="recommend-item" v-for="item in recomend">
        <a :href="item.link">
          <img :src="item.image" alt="" class="recommend-img">
          <div> {{item.title}}</div>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "HomeRecomedView",
      props:{
          recomend:{
            type:Array,
            default() {
              return [];
            }
          },
      }
    }
</script>

<style scoped>
  /*.recommend-wrap {*/
  /*  display: flex;*/
  /*  background-color: #fff;*/
  /*  font-size: 12px;*/
  /*  padding: 10px 0 20px;*/
  /*  border-bottom: 10px solid #ededed;*/
  /*}*/
  /*.recommend-item {*/
  /*  flex: 1;*/
  /*  text-align: center;*/
  /*}*/
  /*.recommend-img {*/
  /*  width: 70px;*/
  /*  height: 70px;*/
  /*  margin-bottom: 10px;*/
  /*}*/
  .recommend-wrap{
      display: flex;
      background-color: #fff;
      font-size: 12px;
      padding: 10px 0 20px;
      border-bottom: 10px solid #ededed;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
  }
  .recommend-img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
