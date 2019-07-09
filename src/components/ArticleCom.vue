<template>
  <div class="main">
    <div class="panel">
      <div class="panel-header">
        <div class="topic-title">
          {{ article.title }}
        </div>
        <div class="topic-info">
          <span>发布于：{{createdTime}}</span>
          <router-link
            class="marginSpan"
            :to="{name: 'UserRoute',params:{name: article.author.loginname}}"
          >作者：{{article.author.loginname}}</router-link>
          <span class="marginSpan">浏览量：{{article.visit_count}}</span>
          <span class="marginSpan">来自：{{article.tab}}</span>
        </div>
      </div>
      <div class="panel-body">
        <div v-html="article.content" id="content"></div>
      </div>
    </div>

    <div class="panel" id="reply">
      <div v-for="reply in article.replies" :key="reply.id" class="replySec">
        <router-link :to="{name: 'UserRoute', params: {name: reply.author.loginname}}"></router-link>
        <img class="avatar_img" :src="reply.author.avatar_url" />
        <div>
          <div class="replyUp">
            <span class="replyName">{{reply.author.loginname}}</span>
            <span>{{dealCommentTime(reply.create_at)}}</span>
            <span v-if="reply.ups.length > 0" class="thumbsClass">
              <!-- <icon name="thumbs-up" scale="2"></icon> -->
              <span>{{reply.ups.length}}</span>
            </span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        author: {
          loginname: '',
        },
        visit_count: '',
        tab: '',
        content: '',
        create_at: '2017-04-130000',
      },
    }
  },
  computed: {
    createdTime() {
      return String(this.article.create_at).match(/.{10}/)[0];
    },
  },
  methods: {
    dealCommentTime(time) {
      return String(time).match(/.{16}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
    },
  },
  components: {

  },
  mounted() {
    this.$get(`/v1${this.$route.path}`, this.params)
      .then(res => {
        this.article = res
      })
  }
}
</script>
<style>
@import url(../assets/styles/markdown-github.css);
#content img {
  max-width: 100%;
  max-height: 100%;
}
.panel {
  margin-top: 0;
}
.topic-title{
  font-size: 2rem;
}
.topic-info{
  padding-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
}
.marginSpan {
  margin: 0 0.5rem;
}
.replySec {
  box-sizing: border-box;
  display: flex;
  border-bottom: 2px solid #c0ccda;
  width: 100%;
  margin: 0.5rem auto;
  padding: 1rem 0;
}
</style>

<style scoped>
#reply {
  display: flex;
  flex-direction: column;
}

#reply img {
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
}

.replySec > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
  justify-content: space-around;
}

.replySec p {
  color: black;
}

.replyUp {
  width: 100%;
}

.replySec .replyName {
  color: #475669;
  font-size: 20px;
}

</style>