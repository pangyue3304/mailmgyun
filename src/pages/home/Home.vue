<template>
  <div id="home">

      <NavBar class="home-nav" backColor="#FF8E97">
        <div slot="center" class="home-nav-center"> 购物街 </div>
      </NavBar>
      <HomeSwiper :banners="bannerList"></HomeSwiper>
      <HomeRecomedView :recomend="recommendsList"></HomeRecomedView>
      <home-feature-view></home-feature-view>

      <MainTabber class="main-tabber"></MainTabber>
      <TabContral @tabClick="tabClick" class="tab-control" :titles="['流行','新款','精品']"></TabContral>
      <Goods>
        <goodsTiem :goodslist="FeatureGoods"></goodsTiem>
      </Goods>

  </div>
</template>

<script>

  import HomeSwiper from "./childrenComponents/HomeSwiper";
  import MainTabber from "../../components/content/MainTabber/MainTabber";
  import HomeRecomedView from "./childrenComponents/HomeRecomedView";
  import HomeFeatureView from "./childrenComponents/HomeFeatureView";
  import NavBar from "../../components/common/navbar/NavBar";
  import TabBar from "../../components/common/tabber/TabBar";
  import TabContral from "../../components/content/tabControl/TabContral";
  import Goods from "../../components/content/goods/Goods";
  import goodsTiem from "../../components/content/goods/goodsTiem";
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

        }
      },
      components:{NavBar,HomeSwiper,
        HomeRecomedView,
        MainTabber,HomeFeatureView,TabBar,TabContral,Goods,goodsTiem
      },
      computed:{
        ...mapState(['FeatureGoods']),
        // ...mapGetters([])
      },
      methods:{
        ...mapActions(['getHomeDate','getHomeGoode','getHomeGoodeInit']),
        GetHomeData(){
          this.getHomeDate().then((res)=>{
            this.bannerList = res.data.banner.list;
            this.recommendsList = res.data.recommend.list;
            this.popularList = res.data.dKeyword.list;
          });
        },
        GetHomeActions(type){
          this.getHomeGoode([type,this.typeHome[type].page]);
          console.log(type)
          if(this.FeatureGoods.length>30){
            this.typeHome[type].page +=1;
            console.log(hhh)
          }else  this.typeHome[type].page =1;
             //为啥type要加中括号
          console.log(this.typeHome[this.currentType].page)
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
         this.GetHomeActions(this.currentType)
        }
      },
      created() {
          this.GetHomeData()
          this.GetHomeActions('pop')
      }

    }
</script>

<style scoped>
  #home{
    padding-top: 43px;
  }
.home-nav{
position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 8;
}
  .home-nav-center{
    color: #ffffff;
    font-size: 1.2rem;
    text-align: center;
  }
  .tab-control{
    position: sticky;
    top:44px;
    background-color: #FFFFFF;
  }
</style>
