<template>
  <div class="home">
    <app-header></app-header>
    <div class="main">
      <div class="sidebar"></div>
      <div class="content">
        <div class="panel">
          <div class="header">
            panel-header
          </div>
          <div class="inner">
            <div class="cell" v-for="item in content" :key="item.id">
              <a class="user_avatar pull-left" href="">
                <img :src='item.author.avatar_url' :title='item.loginname'>
              </a>
              <span class="reply_count pull-left">{{item.reply_count}}</span>
              <router-link :to='{name:"ArticleRoute",params:{id:item.id}}' class="topic_title">{{item.title}}</router-link>
              <span class="topic_time pull-right">{{item.create_at}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      content: [],
      params: {
        page: 1,
        limit: 10,
        mdrender: 'false',
      }
    }
  },
  mounted() {
    this.$get('/v1/topics', this.params)
      .then(res => {
        console.log(res)
        this.content = res
      })

  }
}
</script>
<style>
.home {
  position: relative;
  height: 100%;
}
</style>

