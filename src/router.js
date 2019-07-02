import Vue from 'vue'
import Router from 'vue-router'

import MainSec from '@/components/MainSec'
import SideSec from '@/components/SideSec'
import UserCom from '@/components/UserCom'

// import Home from './views/Home.vue'
import ArticleCom from '@/components/ArticleCom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'RootPath',
      components: {
        main: MainSec
      },
    },
    {
      path: '/topic/:id',
      name: 'ArticleRoute',
      components: {
        main: ArticleCom,
        side: SideSec
      },
    },
    {
      path: '/user/:name',
      name: 'UserRoute',
      component: UserCom,
    },
  ]
})