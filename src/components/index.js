import appHeader from './headers/app-header'
const Components = {
  install: function (Vue) {
    Vue.component('app-header', appHeader)
  }
}

export default Components;