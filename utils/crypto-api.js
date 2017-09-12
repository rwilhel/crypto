import axios from 'axios'

const BASE_URL = 'https://api.coinmarketcap.com'

function getCoins() {
  const url = `${BASE_URL}/v1/ticker/?limit=500`

  return axios.get(url).then(response => response.data)
}

export { getCoins }; 
