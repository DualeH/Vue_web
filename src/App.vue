<template>
  <div id="app">
    <app-header></app-header>
    <div id="main" class="main-section">
      <router-view name="main" />
      <router-view name="side" />
    </div>
  </div>
</template>

<style>
#app {
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
#main {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
