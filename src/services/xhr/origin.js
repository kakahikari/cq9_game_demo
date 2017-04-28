import { ERROR_CODES, XHR_TIMEOUT } from './config'
import { API_URL, TOKEN } from '@/config'
import axios from 'axios'

const xhr = async ({ context, url = '/', method = 'get', data = null }) => {
  return new Promise((resolve, reject) => {
    const outOfSite = url.includes('://')
    const actionUrl = outOfSite ? url : API_URL + '/' + url
    let options = {
      method: method,
      url: actionUrl,
      data: data,
      timeout: XHR_TIMEOUT,
      headers: {
        'Authorization': TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios(options).then((res) => {
      if (res.data.status.code === '0') {
        return resolve(res.data.data)
      }
      console.warn && console.warn(ERROR_CODES[res.data.status.message])
      return reject(res.data.status.message)
    })
    .catch((error) => {
      if (error.response) {
        return reject('http-' + error.response.status)
      } else if (error.code === 'ECONNABORTED') {
        return reject('v-timeout')
      } else {
        console.warn && console.warn(error.message)
      }
    })
  })
}

export default xhr
