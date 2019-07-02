<template>
  <div class="main">
    <div class="content">
      <div class="content-inner">
        <div class="content-header">
          panel-header
        </div>
        <div class="content-body">
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
      
    }
  },
  mounted() {
    

  }
}
</script>
<style>
.home {
  position: relative;
  height: 100%;
}
</style>

