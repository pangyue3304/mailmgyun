<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 49px;
    box-shadow: 0 -1px 8px -1px rgba(0,0,0,0.3);
    background-color: #e0e0e0;

  }

</style>
