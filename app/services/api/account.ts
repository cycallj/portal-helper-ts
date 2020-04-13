import http from '@services/http'

export default {
  getUserAll: () => {
    return http.post('/account/getUserAll.do', null)
  },
}
