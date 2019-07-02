<template>
  <div id="app">
    <app-header></app-header>
    <div id="main">
    <router-view name="main" />
    <router-view name="side" />
    </div>
  </div>
</template>

<style>
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 23px;
}
#main{
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
