import Vue from 'vue'
import App from './App.vue'
import blocksets from 'blocksets-vue'

Vue.use(blocksets)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
