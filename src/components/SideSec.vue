<template>
  <div class="side">
    <div class="panel">
      <div>
        <img class="avatar_img" :src="userInfo.avatar_url" />
        <p class="username">{{userInfo.loginname}}</p>
      </div>
      <div class="userinfo-inner">
        <p>
          积分：
          <span class="color-active">{{userInfo.score}}</span>
        </p>
        <p>
          Github:
          <a
            class="color-active"
            :href="'http://github.com/'+ userInfo.githubUsername"
            target="_blank"
            rel="noopener noreferrer"
          >{{ userInfo.githubUsername }}</a>
        </p>
      </div>
    </div>
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
.panel {
  margin-top: 0;
  font-size: 21px;
}
.username {
  text-align: center;
  margin-bottom: 10px;
}
.avatar_img {
  display: block;
  width: 6rem;
  height: 6rem;
  border-radius: 6rem;
  margin: 20px auto 5px;
}
.userinfo-inner {
  padding: 0 10px;
}
.userinfo-inner p {
  margin: 5px 0;
  font-size: 16px;
}
</style>