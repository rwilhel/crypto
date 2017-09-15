import Vue from 'vue'
import App from './App'
import router from './router'
import accounting from './accounting'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.filter('currency', function (money) {
  return accounting.formatMoney(money)
})
