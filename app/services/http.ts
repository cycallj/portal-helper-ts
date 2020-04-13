import qs from 'qs'

const debugUrl = '/api'
const productUrl = 'http://www.fhd001.com' // TODO:https?

const request = (type: string, url: string, obj: any) => {
  // const realUrl = module.hot ? debugUrl + url : productUrl + url;
  // const realUrl = productUrl + url
  const realUrl = debugUrl + url

  return new Promise((success, failure) => {
    fetch(realUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      },
      method: type,
      body: qs.stringify(obj),
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
            success(json.data)
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

export default {
  post: (url: string, obj: any) => {
    return request('POST', url, obj)
  },
}
