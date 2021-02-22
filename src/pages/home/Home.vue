<template>
  <div id="home">

      <NavBar class="home-nav" backColor="#FF8E97">
        <div slot="center" class="home-nav-center"> 购物街 </div>
      </NavBar>
    <TabContral @tabClick="tabClick"
                ref="tabContral1"
                class="tab-control"
                v-show="isTabFixed"
                :titles="['流行','新款','精品']">

    </TabContral>
      <Scroll class="is-wrapper" ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true" @pullingUp="LoadMore">
        <HomeSwiper @swiperImagesLoad="swiperImagesLoad"  :banners="bannerList"></HomeSwiper>
        <HomeRecomedView :recomend="recommendsList"></HomeRecomedView>
        <home-feature-view></home-feature-view>
        <TabContral @tabClick="tabClick"
                    ref="tabContral2" class="tab-control"
                    :titles="['流行','新款','精品']">

        </TabContral>
<!--        <Goods>-->
<!--          <goodsTiem :goodslist="FeatureGoods"></goodsTiem>-->
<!--        </Goods>-->
        <goodsList :goods="FeatureGoods"></goodsList>
      </Scroll>
<!--    使用native给组件添加点击事件在使用组件的页面中-->
     <backtop @click.native="backClick" v-show="isShowBackTop"></backtop>





    <MainTabber class="main-tabber"></MainTabber>
  </div>
</template>

<script>
  import {itemListMixin} from "../../assets/js/mixin";
  import goodsList from '../../components/content/goodsList/GoodsList'
  import {debounce} from "../../components/common/debounce/debounce";
  import HomeSwiper from "./childrenComponents/HomeSwiper";
  import MainTabber from "../../components/content/MainTabber/MainTabber";
  import HomeRecomedView from "./childrenComponents/HomeRecomedView";
  import HomeFeatureView from "./childrenComponents/HomeFeatureView";
  import NavBar from "../../components/common/navbar/NavBar";
  import TabBar from "../../components/common/tabber/TabBar";
  import TabContral from "../../components/content/tabControl/TabContral";
  // import Goods from "../../components/content/goods/Goods";
  import backtop from  "../../components/content/backtop/BackTop";
  // import goodsTiem from "../../components/content/goods/goodsTiem";
  import Scroll from "../../components/common/scroll/Scroll";
  import { createNamespacedHelpers} from 'vuex';
  let { mapState, mapActions,MapMutations,mapGetters }=createNamespacedHelpers('home');
    export default {
      name: "Home",
      data(){
        return{
          bannerList:[],
          recommendsList:[],
          popularList:[],
          typeHome:{
            'pop':{ page:1},
            'new':{ page:1},
            'sell':{page:1}
          },
          currentType:0,
          scroll:null,
          isShowBackTop:false,
          csList:[ 'pop' ],
          isTabFixed:false,
          isTabHeight:0,
          saveY:0,
          itemImgListener: null
        }
      },
      mixins:[itemListMixin],
      components:{NavBar,HomeSwiper,
        HomeRecomedView,
        MainTabber,HomeFeatureView,TabBar,TabContral,Scroll,backtop,goodsList
      },
      computed:{
        ...mapState(['FeatureGoods']),
        // ...mapGetters([])
      },
      methods:{
        ...mapActions(['getHomeDate','getHomeGoode','getHomeGoodeInit','getDetailTiem']),
        GetHomeData(){
          this.getHomeDate().then((res)=>{
            this.bannerList = res.data.banner.list;
            this.recommendsList = res.data.recommend.list;
            this.popularList = res.data.dKeyword.list;
          });
        },
        GetHomeActionsCick(type){
          let pages =this.typeHome[type].page;
         if(type !== this.csList[this.csList.length-2]){
           this.typeHome[type].page =1;
           this.getHomeGoode([type,this.typeHome[type].page]);
         }
             //为啥type要加中括号
        },
        GetHomeActions(type) {
          this.typeHome[type].page += 1;
          this.getHomeGoode([type, this.typeHome[type].page]);
        },
        tabClick(index){
            switch (index) {
              case 0:
                this.currentType = 'pop'
                    break
              case 1:
                this.currentType = 'new'
                break
              case 2:
                this.currentType = 'sell'
                break
            }
            this.$refs.tabContral1.currentIndex = index
          this.$refs.tabContral2.currentIndex = index
          this.csList.push( this.currentType);
          this.GetHomeActionsCick(this.currentType)
        },
        //上拉加载

        contentScroll(position){
          //判断返回顶部函数是否显示
          this.isShowBackTop = (-position.y) > 500;
          //判断是否吸顶(学习写法)
            this.isTabFixed=(-position.y) > this.isTabHeight ;
        },
        //上拉加载更多
        LoadMore(){
          this.GetHomeActions(this.currentType)

          this.$refs.scroll.finishPullUp()
        },
        backClick(){
          //调用组件内的方法（设定refs）
          this.$refs.scroll.scrollTo(0,0)
        },
        //在图片加载完成之后获取top，使用swiper发射的img加载完成的事件
        //获取tabcontrol的offsettop
        //所有组件都有一个属性$el,用于获取组件中的元素
        swiperImagesLoad(){
          //获取tabcontral2的高度
         this.isTabHeight = this.$refs.tabContral2.$el.offsetTop
        }

      },

      created() {
        console.log('组件被创建')
          this.GetHomeData()
          this.GetHomeActionsCick('pop')
        this.currentType = 'pop';
        console.log(this.$route)

      },
      //挂载到实例上之后调用此函数
      mounted() {
        // const newRefresh = debounce(this.$refs.scroll.refresh,50)
        // this.itemImgListener = ()=>{
        //   newRefresh()
        // }
        // this.$bus.$on('itemImgLoad',this.itemImgListener);
      },

      activated() {
        this.$refs.scroll.scrollTo(0,this.saveY,0);
        console.log(this.$refs.scroll)
        this.$refs.scroll.refresh()
      },
      deactivated() {
        //离开时记录位置
        this.saveY = this.$refs.scroll.getScrollY()
        console.log(this.$refs.scroll.scroll);
        this.$bus.$off('itemImgLoad',this.itemImgListener);
      }

    }
</script>

<style scoped>
  #home{

    height: 100vh;
    position: relative;
  }
.home-nav{
/*position: fixed;*/
/*  top: 0;*/
/*  right: 0;*/
/*  left: 0;*/
/*  z-index: 8;*/
}
  .home-nav-center{
    color: #ffffff;
    font-size: 1.2rem;
    text-align: center;
  }
  .tab-control{
    position: relative;
    z-index: 8;
    top: -2px;
    background-color: #FFFFFF;
  }
  .iscroll-content{

  }
  .is-wrapper{

    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

  }

</style>
