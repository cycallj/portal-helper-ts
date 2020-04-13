const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const axios = require('axios')
const Qs = require('qs') //Qs.parse() 将URL解析成对象的形式 ; Qs.stringify()将对象 序列化成URL的形式，以&进行拼接

const app = express()
const host = 'www.fhd001.com'
const publicPath = '../'

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let webpackConfig = require('../webpack-config/webpack.config.js')
let compiler = webpack(webpackConfig)
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }, //console统计日志带颜色输出
    lazy: false, //是否懒人加载模式。true表示不监控源码修改状态，收到请求才执行webpack的build。false表示监控源码状态，配套使用的watchOptions可以设置与之相关的参数。
  })
)
app.use(webpackHotMiddleware(compiler))

let router = express.Router()
router.use(
  '/api',
  function (req, res, next) {
    req.headers.host = host
    req.headers.origin = host //localhost访问 可选
    // console.log('headers:', req.headers)
    // console.log('url:', req.url) //"/home/getNewList.do"
    // console.log('body:', req.body) //{page:1, pageSize:10}
    let url = 'http://' + host + req.url.replace('/api', '')
    console.log(url)

    axios({
      method: 'post',
      url: url,
      data: Qs.stringify(req.body),
      headers: req.headers,
    }).then(
      (json) => {
        res.send(json.data)
      },
      (json) => {
        // console.log(json)
        res.send('404')
      }
    )

    // next();
  },
  function (req, res, next) {}
)

app.use('/', router)

module.exports = app
