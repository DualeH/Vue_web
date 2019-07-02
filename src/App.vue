<template>
  <div id="app">
    <router-view name="main" />
    <router-view name="sidebar" />
  </div>
</template>

<style>
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 23px;
}
</style>
