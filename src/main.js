import Vue from 'vue'
import App from './App.vue'
import './assets/css/theme-1.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
