import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Request from './plugin/request'
import Components from './components'

import '@/assets/styles/reset.css'							// 重置样式
import '@/assets/styles/main.css'							  // 主样式文件

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Request);
Vue.use(Components);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
