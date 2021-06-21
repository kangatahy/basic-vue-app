import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
