<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'gf6mes',
  };
</script>

<style>
  /* CSS */
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .el-tabs--bottom .el-tabs__header.is-bottom {
    width: 100%;
  }

  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
</style>