import Vue from 'vue'
import App from './App.vue'
import chaosui from 'chaosui-vue'

Vue.use(chaosui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
