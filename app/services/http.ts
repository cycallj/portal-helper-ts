import axios from 'axios'
import qs from 'qs'

const debugUrl = '/api'
const productUrl = 'http://www.fhd001.com' // TODO:https?

// const http = {
//   post: {},
// }

const request = (type: string, url: string, obj: any) => {
  // const realUrl = module.hot ? debugUrl + url : productUrl + url;
  const realUrl = productUrl + url

  return new Promise((success, failure) => {
    let data = ''
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        data += key + '=' + JSON.stringify(obj[key]) + '&'
      } else {
        data += key + '=' + encodeURIComponent(obj[key]) + '&'
      }
    }
    fetch(realUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      },
      method: type,
      body: data,
      credentials: 'include',
    })
      .then(
        (response) => {
          return response.json()
        },
        (error) => {
          console.log('ajax fetch error')
          failure(error)
        }
      )
      .then(
        (json) => {
          if (json && json.rcode === 0) {
            success(json)
          } else {
            failure(json)
          }
        },
        (error) => {
          console.log('ajax promise error')
          failure(error)
        }
      )
      .catch((error) => {
        console.log('ajax catch error')
        failure(error)
      })
  })
}

// http.post = (url: string, obj: any) => {
//   return request('POST', url, obj)
// }

export default {
  post: (url: string, obj: any) => {
    return request('POST', url, obj)
  },
}
