<template>
  <div class="secDiv">
    1
    <div class="profile">
      <div>
        <img :src="userInfo.avatar_url" :title="userInfo.loginname" alt />
        <span>{{ userInfo.loginname }}</span>
      </div>
      <p>积分： {{ userInfo.score }}</p>
      <p>Github： https://github.com/{{userInfo.githubUsername}}</p>
      <p>注册时间：{{ userInfo.create_at }}</p>
    </div>
    <p>最近创建的话题</p>
    <div class="recentTopics">
      <div v-for="(item,index) of userInfo.recent_topics" :key="index">
        <template v-if="index < 6">
          <img :src="item.author.avatar_url" :title="item.author.loginname" />
          <router-link :to="{name: 'ArticleRoute', params:{id:item.id}}">{{item.title}}</router-link>
        </template>
      </div>
    </div>
    <p>最近参与的话题</p>
    <div class="recentReplies">
      <div v-for="(item,index) of userInfo.recent_replies" :key="index">
        <template v-if="index < 6">
          <router-link :to="{name: 'UserRout', params:{name: item.author.loginname}}">
            <img :src="item.author.avatar_url" :title="item.author.loginname" />
          </router-link>
          <router-link :to="{name: 'ArticleRoute', params:{id:item.id}}">{{item.title}}</router-link>
        </template>
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

<style >
</style>