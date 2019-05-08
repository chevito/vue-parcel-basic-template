// main libraries
import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
// local configurations
import store from './vuex'
import router from './router'
// style and resources
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
