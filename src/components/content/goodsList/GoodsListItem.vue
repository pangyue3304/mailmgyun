<template>
	<div class="goods-list-item goodsitem" @click="itemLink">
<!--    图片使用懒加载-->
		<img  v-lazy="showImg" class="goods-list-img"  @load="itemImgLoad">
		<div class="goods-list-text">
			<div class="goods-list-name one-txt-cut title">{{goodsItem.title}}</div>
			<div class="goods-list-price goodsitempc">
				<div class="text-pink price">{{goodsItem.price}}</div>
				<div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			itemImgLoad() {
				// if(this.$route.path.indexOf('/home') >=0){
				// 	this.$bus.$emit('homeItemImgLoad');
				// }else if(this.$route.path.indexOf('/detail') >=0){
				// 	this.$bus.$emit('detailItemImgLoad');
				// }
				this.$bus.$emit('itemImgLoad');
				// console.log('this.$route.path.indexOf');
			},
			itemLink() {
				this.$router.push('/detail/' + this.goodsItem.iid)
			}
		},
		computed: {
			showImg(){
				return this.goodsItem.image || this.goodsItem.show.img;
			}
		}
	}
</script>

<style scoped>
	/*.goods-list-item {*/
	/*	width: 49%;*/
	/*	height: auto;*/
	/*	padding-top: 6px;*/
	/*	font-size: 14px;*/


	/*}*/
  /*.goods-list-img{*/
  /*  width: 100%;*/
  /*  height: auto;*/
  /*  border-radius: 4px;*/
  /*}*/
  /*.goods-list-price {*/
  /*  display: flex;*/
  /*  justify-content: space-between;*/
  /*  margin: 6px 0;*/
  /*}*/
  /*  .collect-icon {*/
  /*    display: inline-block;*/
  /*    width: 20px;*/
  /*    height: 20px;*/
  /*    background: url(../../../assets/image/common/home/collect_icon.png) no-repeat;*/
  /*    background-size: cover;*/
  /*    vertical-align: bottom;*/
  /*  }*/
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
