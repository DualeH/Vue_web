<template>
  <div class="app-headers">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="container">
          <a href="/" class="brand">
            <img src="@/assets/images/cnodejs_light.svg" alt>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-headers',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.app-headers {
  width: 100%;
  background: #444;
}
.app-headers .navbar {
  padding: 5px;
}
.app-headers .navbar .container {
  width: 100%;
  min-width: 960px;
  max-width: 1400px;
  margin: 0 auto;
}
.app-headers .navbar .brand {
  display: block;
  width: 120px;
  height: 34px;
  padding: 3px 20px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
}
</style>
