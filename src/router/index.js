import Vue from 'vue'
import Router from 'vue-router'
import CryptoCurrency from '@/components/cryptoCurrency'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CryptoCurrency',
      component: CryptoCurrency
    }
  ]
})
