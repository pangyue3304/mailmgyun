<template>
  <div class="cart-list">
    <Scroll class="is-wrapper" ref="scroll">
      <CartChildenItems
        v-for="(item,index) in cartList"
        :key="index"
        :itemInfo="item">

      </CartChildenItems>

    </Scroll>

  </div>
</template>

<script>
  import {createNamespacedHelpers} from "vuex";
  import Scroll from "../../../components/common/scroll/Scroll";
  import CartChildenItems from "./CartChildenItems";
  let { mapState, mapActions,MapMutations,mapGetters }=createNamespacedHelpers('cart');
    export default {
      name: "CartChildrenItem",
      components:{Scroll,CartChildenItems},
      computed:{
        ...mapState(['cartList']),

      },
      activated() {
        this.$refs.scroll.refresh()
      },
    }
</script>

<style scoped>
.cart-list{
  font-size: 2rem;
  height: 100vh;

}
.is-wrapper{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 89px;
}
</style>
