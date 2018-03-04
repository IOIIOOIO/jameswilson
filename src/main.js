import Vue from 'vue'
import App from './App'
import router from './router'
import VueClazyLoad from 'vue-clazy-load';
// import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '/static/img/program-icons/photoshop.png',
//   loading: '/static/img/program-icons/javascript.png',
//   observer: true,
//   attempt: 1
// })

Vue.use(VueClazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#js-app',
  router,
  components: { App },
  template: '<App/>',
})
