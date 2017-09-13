import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'
import accounting from './accounting'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.filter('currency', function (money) {
  return accounting.formatMoney(money)
})
