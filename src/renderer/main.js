import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 导入插件
import "./plugins/element.js";

// 挂载 API
import * as api from "./api";
Vue.prototype.$http = api.default; //放入全局

// i18n 国际化
import i18n from './language'

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
