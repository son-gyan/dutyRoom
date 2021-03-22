// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Es6Promise from 'es6-promise'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import api from './api'
Vue.use(api)
Es6Promise.polyfill()
import 'element-ui/lib/theme-chalk/index.css'; 
import '@/assets/css/element-cover.less'
import element from './element/index'
Vue.use(element)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
