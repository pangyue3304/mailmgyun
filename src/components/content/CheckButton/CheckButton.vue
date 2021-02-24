<template>
  <div class="checkbutton" :class="{isChecked:isChecked}">
    <img src="../../../assets/image/common/detail/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .checkbutton{
    background-color: #eeeeee;
    border-radius: 50%;
    border:solid 1px #aaa;
    overflow: hidden;

  }
  .checkbutton img{
    width: 22px;
    height: 22px;
  }
  .isChecked{
    border-color: #ff5777;
    border-radius: 50%;
    background-color: #ff5777;
  }
</style>
