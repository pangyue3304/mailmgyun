<template>
  <div id="detail-root">
    <childrenNavbar ref="nav" class="detailnavbar" @childrenavclick="childrenavclick"></childrenNavbar>
    <Scroll class="des-content" ref="scroll" :probe-type="3"
            @scroll="contnetScroll">
      <detailswiper :top-images="topImages"></detailswiper>
      <DetailBaseIndo :goods="goods"></DetailBaseIndo>
      <DetailShonBase :shop="shop"></DetailShonBase>
      <DetailGoodsInfo  :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></DetailGoodsInfo>
      <DetailPramaInfo ref="params" :paramInfo="paramInfo"></DetailPramaInfo>
      <recomendInfo ref="commend" :recomend-info="recomendInfo"></recomendInfo>
      <goodsList  ref="recommend" :goods="recommendList"></goodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
    <DetailButtom @addCart="addToCart"></DetailButtom>
  </div>
</template>

<script>
  import {itemListMixin,backTopMixin} from "../../assets/js/mixin";
import DetailButtom from "./childrenNavbar/DetailButtom";
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
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

  export default {
      name: "detail",
      components:{childrenNavbar,detailswiper,
        DetailBaseIndo,
        DetailShonBase,Scroll,DetailGoodsInfo,DetailButtom,
        DetailPramaInfo,recomendInfo,goodsList},
      data(){return{
        iid:null,
        topImages:null,
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        recomendInfo:[],
        recommendList:[],
        itemImgListener:null,
        themTopWhy:[],
        themTopWhys:null,
        currentIndex:null,

      }},
      mixins:[itemListMixin,backTopMixin],
      methods:{
        ...mapActions('home',['getDetailTiem','getDetailCommend',]),
        ...mapActions('cart',['addCart',]),
        //图片 加载完成之后刷新scroll
        goodsImgLoad(){
          //父子组件监听图片加载完成事件
          this.newRefresh();
          //图片加载完成之后 data被赋值完之后是一个函数
          this.themTopWhys();
          // this.themTopWhy=[];
          // this.themTopWhy.push(0);
          // this.themTopWhy.push(this.$refs.params.$el.offsetTop);
          // this.themTopWhy.push(this.$refs.commend.$el.offsetTop);
          // this.themTopWhy.push(this.$refs.recommend.$el.offsetTop)
        },
        //监听navbar点击
        childrenavclick(index){
          console.log(index)
          this.$refs.scroll.scrollTo(0,-this.themTopWhy[index],500)
        },
        contnetScroll(position){
          const positionY = -position.y;
          let length = this.themTopWhy.length;
         for(let i=0; i<length;i++){
            if(this.currentIndex !== i &&((i<length - 1 && positionY >=this.themTopWhy[i] && positionY <this.themTopWhy[i+1]) ||
              (i=== length - 1 && positionY >= this.themTopWhy[i]))){
              this.currentIndex=i;
              this.$refs.nav.currentIndex = this.currentIndex
            }

         }
          this.isShowBackTop = (-position.y) > 500;
        },
        //添加购物车
        addToCart(){
          //获取购物车需要展示的信息
          const product= {};
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.lowNowPrice;
          product.iid = this.iid;

          //将商品添加到购物车
          this.addCart(product).then(res=>{
            this.$notice.show(res,2000)
          });

        },

      },
      created() {
        console.log(this.$route)

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
        });
        //上面的东西渲染完回调
        // this.$nextTick(()=>{
        //   //在东西渲染之后拿到值（dom已经被渲染完，但是图片依然没有加载完）
        //   this.themTopWhy=[];
        //   this.themTopWhy.push(0);
        //   this.themTopWhy.push(this.$refs.params.$el.offsetTop);
        //   this.themTopWhy.push(this.$refs.commend.$el.offsetTop);
        //   this.themTopWhy.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.themTopWhy)
        // })
        //进行防抖
        this.themTopWhys=debounce(()=>{
          this.themTopWhy=[];
          this.themTopWhy.push(0);
          this.themTopWhy.push(this.$refs.params.$el.offsetTop);
          this.themTopWhy.push(this.$refs.commend.$el.offsetTop);
          this.themTopWhy.push(this.$refs.recommend.$el.offsetTop);
          console.log(this.themTopWhy)
        },500)

      },
      mounted() {
        console.log(this.$refs.scroll);
          //总线监听事件
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
      updated(){
        //更新时调用
        // this.themTopWhy=[];
        // this.themTopWhy.push(0);
        // this.themTopWhy.push(this.$refs.params.$el.offsetTop);
        // this.themTopWhy.push(this.$refs.commend.$el.offsetTop);
        // this.themTopWhy.push(this.$refs.recommend.$el.offsetTop)

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
