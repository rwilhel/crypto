<template lang="html">
  <div class="row">
      <div class="jumbotron col-xs-offset-2 col-xs-8">
        <p>
          A quick and spooky way to see the top cryptocurrencies by market cap!
        </p>
      </div>
  </div>

  <div id="table">
    <table class="table table-hover">
      <thead class="thead-inverse">
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price [USD]</th>
          <th>1H</th>
          <th>1D</th>
          <th>1W</th>
          <th>Market Cap[USD]</th>
        </tr>
      </thead>
      <tbody>
        <tr v-cloak v-for='coin in coins'>
          <td>{{ coin.rank }}</td>
          <td>{{ coin.name }}</td>
          <td>{{ coin.symbol }}</td>
          <td>{{ coin.price_usd | currency }}</td>
          <td v-bind:style="getColor(coin.percent_change_1h)">
            <span v-if='coin.percent_change_1h > 0'>+</span>{{ coin.percent_change_1h }}%
          </td>
          <td v-bind:style="getColor(coin.percent_change_24h)">
            <span v-if='coin.percent_change_24h > 0'>+</span>{{ coin.percent_change_24h }}%
          </td>
          <td v-bind:style="getColor(coin.percent_change_7d)">
            <span v-if='coin.percent_change_7d > 0'>+</span>{{ coin.percent_change_7d }}%
          </td>
          <td>{{ coin.market_cap_usd | currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppNav from './AppNav'
import { isLoggedIn } from '../../utils/auth'
import { getCoins } from '../../utils/crypto-api'

export default {
  name: 'coins',
  components: {
    AppNav
  },
  data: {
    coins: []
  },
  methods: {
    isLoggedIn () {
      return isLoggedIn()
    },
    getCoins () {
      getCoins().then((coins) => {
        this.getCoins = coins
      })
    },
    getColor: (num) => {
      return num > 0 ? 'color: green;' : 'color: red;'
    }
  },
  mounted () {
    this.getCoins()
  }
}

setInterval(() => {
  app.getCoins()
}, update_interval)
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .jumbotron p {
    font-size: 2em;
  }

  .jumbotron {
    margin-top: 5em;
    margin-bottom: 5em;
  }
</style>
