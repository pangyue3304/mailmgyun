<template>
  <div id="detail-root">
    <childrenNavbar class="detailnavbar"></childrenNavbar>
    <Scroll class="des-content" ref="scroll">
      <detailswiper :top-images="topImages"></detailswiper>
      <DetailBaseIndo :goods="goods"></DetailBaseIndo>
      <DetailShonBase :shop="shop"></DetailShonBase>
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></DetailGoodsInfo>
      <DetailPramaInfo :paramInfo="paramInfo"></DetailPramaInfo>
      <recomendInfo :recomend-info="recomendInfo"></recomendInfo>
      <goodsList :goods="recommendList"></goodsList>
    </Scroll>

  </div>
</template>

<script>
  import {itemListMixin} from "../../assets/js/mixin";

  import Scroll from "../../components/common/scroll/Scroll";
  import DetailPramaInfo from "./childrenNavbar/DetailPramaInfo";
  import DetailGoodsInfo from "./childrenNavbar/DetailGoodsInfo";
  import DetailBaseIndo from "./childrenNavbar/DetailBaseIndo";
  import DetailShonBase from "./childrenNavbar/DetailShonBase";
  import childrenNavbar from "./childrenNavbar/childrenNavbar";
  import recomendInfo from "./childrenNavbar/recomendInfo";
  import { Goods, Shop, Param, } from '../../assets/js/detail'
  import detailswiper from "./childrenNavbar/detailswiper";
  import goodsList from '../../components/content/goodsList/GoodsList'
  import { createNamespacedHelpers} from 'vuex';
  import {debounce} from "../../components/common/debounce/debounce";
  let { mapState, mapActions,MapMutations,mapGetters }=createNamespacedHelpers('home');
    export default {
      name: "detail",
      components:{childrenNavbar,detailswiper,
        DetailBaseIndo,
        DetailShonBase,Scroll,DetailGoodsInfo,
        DetailPramaInfo,recomendInfo,goodsList},
      data(){return{
        iid:null,
        topImages:null,
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        recomendInfo:[],
        recommendList:{},
        itemImgListener:null,

      }},
      mixins:[itemListMixin],
      methods:{
        ...mapActions(['getDetailTiem','getDetailCommend',]),
        //图片 加载完成之后刷新scroll
        goodsImgLoad(){
          this.$refs.scroll.refresh();
        }
      },
      created() {
        console.log(this.$route)
        console.log('85555522')
        console.log('组件被创新')
        this.iid =  this.$route.params.iid;

        this.getDetailTiem(this.iid).then((res)=>{
          console.log(res)
          const data =  res.result
          //获取轮播图
          this.topImages = data.itemInfo.topImages
         //获取商品详情
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
          //商家信息
          this.shop = new Shop(data.shopInfo)
          //下面的图片
          this.detailInfo = data.detailInfo;
          //参数信息
          this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
          this.recomendInfo = data.rate.list;
        });
        this.getDetailCommend().then((res)=>{
          this.recommendList = res
        })

      },
      mounted() {
        console.log(this.$refs.scroll);
        console.log('组件挂载');
        // const newRefresh = debounce(this.$refs.scroll.refresh,50)
        // this.itemImgListener=()=>{
        //   newRefresh()
        // }
        // //事件监听
        // this.$bus.$on('itemImageLoad',this.itemImgListener);

      },
      destroyed() {
        console.log('组件消失')
        //取消监听
        this.$bus.$off('itemImageLoad',this.itemImgListener);
      },

    }
</script>

<style scoped>
#detail-root{
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.des-content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
  .detailnavbar{
    background-color: #fff;
    position: relative;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 11;
  }
</style>
