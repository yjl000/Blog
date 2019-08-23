import Vue from 'vue'
import App from './App.vue'
import countdown from './lib/countdown'
Vue.use(countdown)

new Vue({
  el: '#app',
  render: h => h(App)
})
