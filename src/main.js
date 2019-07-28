import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.notifyOnErrors = false;

new Vue({
  el: '#app',
  render: h => h(App),
})
