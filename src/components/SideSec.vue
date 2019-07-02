<template>
  <div class="secDiv">
    <div>
      <img :src="userInfo.avatar_url" />
      <span>{{userInfo.loginname}}</span>
    </div>
    <p>分数：{{userInfo.score}}</p>
    <p>Github: https://github.com/{{userInfo.githubUsername}}</p>
  </div>
</template>

<script>
export default {
  name: 'SideSection',
  data() {
    return {
      userInfo: {
        avatar_url: '',

      },
    };
  },
  created() {
    this.$get(`/v1${this.$route.path}`)
      .then((res) => {
        const user = res.author.loginname;
        return this.$get(`/v1/user/${user}`);
      })
      .then(res => {
        this.userInfo = res;
      })
  },
};
</script>

<style scoped>
.secDiv {
  width: 20%;
  height: 30rem;
  background: #fff;
  border: 1px solid #ddd;
  word-break: break-all;
  font-size: 21px;
}

img {
  width: 6rem;
  height: 6rem;
}
</style>