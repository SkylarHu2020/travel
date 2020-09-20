// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 整个项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
// import 'swiper/swiper-bundle.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

var VueAwesomeSwiper = require('vue-awesome-swiper')

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
