<template>
    <div class="goods-item"  >
      <div class="goodsitem"

           v-for="(item,index) in goodslist"
           @click="itemClick(item)">
        <img :src="showImages(index)" alt="" @load="imagesLoad">
        <div>
          <p class="title">{{item.title }} </p>
          <div class="goodsitempc">
            <span class="price">{{item.price}}￥ </span>
            <span class="collect">
              <i class="collect-icon"> </i> {{item.cfav}}</span>
          </div>

        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "goodsTiem",
        props:{
          goodslist:{
          type:Array,
          default(){
            return []
          }
        },
      },
      data(){
          return{
            itemgoods:null,
          }
      },
      methods:{
        imagesLoad(){
          console.log('监听图片');
          //事件总线
          this.$bus.$emit('itemImgLoad',)

        },
        itemClick(item){

          this.itemgoods = item.iid
          this.$router.push('/detail/' + this.itemgoods)
          // console.log(this.goodslist)
        },
        showImages(index){
          return this.goodslist[index].image || this.goodslist[index].show.img
        },
      },
      computed:{

      },
    }
</script>

<style scoped>
.goods-item{
  margin-top: 10px;
  /*column-count: 2;*/
  /*column-gap: 0;*/
  /*width: 100%;*/
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*overflow: hidden;*/
  /*justify-content: space-around;*/
  /*text-align: center;*/
  /*margin-top: 10px;*/
  -moz-column-count:2; /* Firefox */
  -webkit-column-count:2; /* Safari 和 Chrome */
  column-count:2;
  -moz-column-gap: 0em;
  -webkit-column-gap: 0em;
  column-gap: 0em;
  text-align: center;
}
.goodsitem{
  /*width: 50%;*/
  /*padding-bottom: 5px;*/
  padding: 0em;
  margin: 0 0 0em 0;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;

}
.goodsitem img{
  width: 90%;
  border-radius: 5px;
}
.title{

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.1rem;
  padding: 3px 0;
}
.goodsitempc{
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;

}
.price{
  color: red;
  font-size: 1.2rem;
}
.collect-icon{
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../../assets/image/common/home/collect_icon.png) no-repeat;
  background-size: cover;
  vertical-align: bottom;
}

</style>
