<template>
  <div class="main">
    <div class="panel">
      <div class="flex-cell topic_cell" v-for="item of content" :key="item.id">
        <router-link :to="{name: 'UserRoute', params: {name: item.author.loginname}}">
          <img class="avatar_img" :src="item.author.avatar_url" :title="item.author.loginname" />
        </router-link>
        <router-link
          class="cell_topic_title over_title"
          :to="{name: 'ArticleRoute',params:{id:item.id}}"
        >{{item.title}}</router-link>
        <span class="cell_reply">
          <router-link
            class=""
            :to="{name: 'ArticleRoute',params:{id:item.id}}"
          >回复：{{item.reply_count}}</router-link>
        </span>
        <span class="">
          <router-link
            class=""
            :to="{name: 'ArticleRoute',params:{id:item.id}}"
          >创建于：{{dealTime}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [],
      item: {
        create_at: '2017-02-22T11:32:43.547Z',
      },
      params: {
        page: 1,
        limit: 0,
        mdrender: 'false',
      }
    }
  },
  computed: {
    dealTime() {
      return String(this.item.create_at).match(/.{10}/)[0];
    },
  },
  methods: {
    scrollMethod() {
      const sumH = document.body.scrollHeight;
      const viewH = document.documentElement.clientHeight;
      const scrollH = document.body.scrollTop;
      if (viewH + scrollH === sumH) {
        this.getData();
      }
    },
    getData() {
      this.params.limit += 20;
      this.$get('/v1/topics', { params: this.params })
        .then(res => {
          this.content = res
        })
    }

  },
  components: {

  },
  mounted() {
    this.getData();
    window.addEventListener('scroll', this.scrollMethod);
  }
}
</script>

<style scoped>
.topic_cell{
  margin: 10px 0;
}
.cell_topic_title {
  width: 65%;
  margin-left: 20px;
  padding: 0 10px;
  color: #42b983;
}
.cell_reply{
  width: 110px;
}
.cell_create_at{
  width: 120px;
}
</style>
