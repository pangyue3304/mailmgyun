import {debounce} from "../../components/common/debounce/debounce";
//滚入
export  const  itemListMixin={
    mounted() {
    // const newRefresh = debounce(this.$refs.scroll.refresh,50)
    // this.itemImgListener=()=>{
    //   newRefresh()
    // }
    // //事件监听
    // this.$bus.$on('itemImageLoad',this.itemImgListener);
      const newRefresh = debounce(this.$refs.scroll.refresh,50)
      this.itemImgListener = ()=>{
        newRefresh()
      }
      this.$bus.$on('itemImgLoad',this.itemImgListener);
    console.log('我是滚入')
  }
}
