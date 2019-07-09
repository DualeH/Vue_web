<template>
  <div class="app-header">
    <div class="app-header-inner">
      <div class="nav">
        <div class="nav-inner">
          <router-link class="brand" to="/">
            <img src="@/assets/images/cnodejs_light.svg" alt />
          </router-link>
          <el-button type="text" @click="aboutDialogVisible = true">关于</el-button>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="aboutDialogVisible">
      <div>
        <p>这是一个Vue项目：cnodejs.org社区的Vue版</p>
        <p>技术栈</p>
        <ul>
          <li>Vue.js</li>
          <li>Vue-router</li>
          <li>Vue-source</li>
          <li>Element</li>
        </ul>
        <a href="https://github.com/DualeH/Vue_web" taget="_blanket">源代码</a>
        <span>
          <strong>Star Star Star</strong>
        </span>
        <br />
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app-headers',
  data() {
    return {
      aboutDialogVisible: false
    }
  },
  methods: {

  }
}
</script>

<style>
.app-header {
  width: 100%;
  background: #444;
}
.app-header .app-header-inner {
  min-width: 960px;
  max-width: 1400px;
  margin: 0 auto;
}
.app-header .app-header-inner .nav {
  width: 100%;
}
.app-header .app-header-inner .nav .nav-inner {
  justify-content: space-between;
  display: flex;
}
.app-header .nav-inner .brand {
  display: inline-block;
  width: 120px;
  height: 34px;
  padding: 3px 20px;
  line-height: 34px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
</style>
