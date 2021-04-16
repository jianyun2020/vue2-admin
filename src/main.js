/*
 * @Author: jianyun2020
 * @Date: 2021-04-15 15:25:25
 * @LastEditTime: 2021-04-16 13:21:03
 * @Description: 入口文件
 * @FilePath: \vue2-admin\src\main.js
 */
import Vue from 'vue'
// import Cookies from 'js-cookie'

import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

// import * as filters from './filters' // global filters

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
