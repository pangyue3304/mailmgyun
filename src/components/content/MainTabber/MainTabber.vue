<template>
  <TabBar>
    <TabBarTiem path="/home" activeColor="red">
      <img slot="item-icon" src="../../../assets/image/common/1.png" alt="" >
      <img slot="item-icon-active" src="../../../assets/image/common/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarTiem>
    <TabBarTiem path="/category">
      <img slot="item-icon" src="../../../assets/image/common/category.png" alt="" >
      <img slot="item-icon-active" src="../../../assets/image/common/category-active.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarTiem>
    <TabBarTiem path="/cart">
      <img slot="item-icon" src="../../../assets/image/common/cart.png" alt="" >
      <img slot="item-icon-active" src="../../../assets/image/common/cart-active.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarTiem>
    <TabBarTiem path="/profile">
      <img slot="item-icon" src="../../../assets/image/common/mine.png" alt="" >
      <img slot="item-icon-active"  src="../../../assets/image/common/mine-active.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarTiem>
  </TabBar>
</template>

<script>
  import TabBar  from "../../common/tabber/TabBar";
  import TabBarTiem from "../../common/tabber/TabBarTiem";
    export default {
      name: "MainTabber",
      components:{ TabBar,TabBarTiem },
    }
</script>

<style scoped>

</style>
