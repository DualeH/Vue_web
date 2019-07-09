<template>
  <div class="main">
    <div class="panel">
      <span>
        <img class="user-img" :src="userInfo.avatar_url" :title="userInfo.loginname" alt />
        {{ userInfo.loginname }}
      </span>
      <p>积分： {{ userInfo.score }}</p>
      <p>Github： https://github.com/{{userInfo.githubUsername}}</p>
      <p>注册时间：{{ userInfo.create_at }}</p>
    </div>
    <div class="panel">
      <div class="panel-title">最近创建的话题</div>
      <div>
        <div v-for="(item,index) of userInfo.recent_topics" :key="index">
          <template v-if="index < 6">
            <a href>
              <img class="avatar" :src="item.author.avatar_url" :title="item.author.loginname" />
            </a>
            <router-link :to="{name: 'ArticleRoute', params:{id:item.id}}">{{item.title}}</router-link>
          </template>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-title">最近参与的话题</div>
      <div class="panel-content">
        <div v-for="(item,index) of userInfo.recent_replies" :key="index">
          <div class="flex-cell">
            <router-link :to="{name: 'UserRout', params:{name: item.author.loginname}}">
              <img class="avatar_img" :src="item.author.avatar_url" :title="item.author.loginname" />
            </router-link>
            <router-link :to="{name: 'ArticleRoute', params:{id:item.id}}">{{item.title}}</router-link>
          </div>
          <div class="divider inside-divider"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    this.$get(`/v1${this.$route.path}`)
      .then(res => {
        this.userInfo = res
      })
  }
};
</script>

<style scoped>
.user-img {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin-right: 20px;
}
</style>