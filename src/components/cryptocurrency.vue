<template lang="html">
  <div>
    <div class="row">
      <div class="jumbotron img-responsive container">
        <div class="horizontal div1">
          <div class="vertical logo">
            <img src="static/img/logo_glow.png" alt="logo">
          </div>
        </div>
        <h2>
          VIEW THE TOP CRYPTOCURRENCIES BY MARKET CAP!
        </h2>
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
  </div>
</template>

<script>
import AppNav from './AppNav'
import { isLoggedIn } from '../../utils/auth'
import { getCoins } from '../../utils/crypto-api'

let updateInterval = 60 * 1000

export default {
  name: 'coins',
  components: {
    AppNav
  },
  data () {
    return {
      coins: []
    }
  },
  methods: {
    isLoggedIn () {
      return isLoggedIn()
    },
    getCoins () {
      const self = this
      getCoins().then((coins) => {
        debugger
        self.coins = coins
      })
    },
    getColor: (num) => {
      return num > 0 ? 'color: #4dac26;' : 'color: #7b3294;'
    }
  },
  mounted () {
    this.getCoins()
  }
}

setInterval(() => {
  getCoins()
}, updateInterval)

</script>

<style scoped>

  h2 {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: black;
    font-weight: bold;
    text-shadow: white 0.1em 0.1em 0.2em;
  }

  div.horizontal {
    display: flex;
    justify-content: center;
  }

  div.vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
