<template>
  <div>
    <NavBar class="cart-nav" backColor="#FF8E97">
      <div slot="center" class="cart-nav-center"> 购物车 <span> ({{this.cartLength}}) </span> </div>
    </NavBar>
    <CartChildrenItem></CartChildrenItem>
    <MainTabber class="main-tabber"></MainTabber>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import CartBottomBar from "./cartChildren/CartBottomBar";
  import NavBar from "../../components/common/navbar/NavBar";
  import MainTabber from "../../components/content/MainTabber/MainTabber";
  import CartChildrenItem from "./cartChildren/CartChildrenItem";
  import {createNamespacedHelpers} from "vuex";
  let { mapState, mapActions,MapMutations,mapGetters }=createNamespacedHelpers('cart');
    export default {
        name: "cart",
      components:{MainTabber,NavBar,CartChildrenItem,CartBottomBar},
      data(){
          return{
            cartNumber:null,
          }
      },
      computed:{
        ...mapState(['cartList']),
        ...mapGetters(['cartLength'])
      },
      methods:{

      },

    }
</script>

<style scoped>
.cart-nav-center{
  font-size: 1.2rem;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  position: relative;
}
</style>
