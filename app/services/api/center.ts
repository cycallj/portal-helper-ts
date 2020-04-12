import http from '@services/http'

export default {
  getSupportQuestions: (data: any) => {
    return http.post('/support/getSupportQuestions.do', data)
  },
  getSupportAnswer: (data: any) => {
    return http.post('/support/getSupportAnswer.do', data)
  },
  searchQuestion: (data: any) => {
    return http.post('/support/searchQuestion.do', data)
  },
}
