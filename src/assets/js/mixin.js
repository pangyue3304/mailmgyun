import {debounce} from "../../components/common/debounce/debounce";
//滚入
export  const  itemListMixin={
  data(){
    return{
      itemImgListenter:null,
      newRefresh:null,
    }
  },
    mounted() {

      this.newRefresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener = ()=>{
       this.newRefresh()
      }
      this.$bus.$on('itemImgLoad',this.itemImgListener);
    console.log('我是滚入')
  }
}
import BackTop from  "../../components/content/backtop/BackTop";
export  const backTopMixin = {
  components:{BackTop},
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backClick(){
      //调用组件内的方法（设定refs）
      this.$refs.scroll.scrollTo(0,0,300)
    },

  },
}
