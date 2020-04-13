// const http = require('http')
// const debug = require('debug')('gw:server')

let app = require('./app')

let port = 3000
//方法一：old pattern
app.listen(port, () => console.log('Example app listening on port 3000!'))

//方法二：http
// app.set('port', port)
// let server = http.createServer(app)
// server.listen(port, function () {
//   console.log('App (dev) is now running on port' + port)
// })
// server.on('error', onError)
// server.on('listening', onListening)

//方法三：http2
// app.use(logger('dev'))
// let options = {
//     key: fs.readFileSync('./ca/buduhuisi.key'),
//     cert: fs.readFileSync('./ca/buduhuisi.crt'),
//     protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ]
// }
// http2.createServer(options, app).listen(port, () => {
//     console.log(`Server is listening on https://127.0.0.1:` + port + ` .You can open the URL in the browser.`)
// })

/**
 * Event listener for HTTP server "error" event.
 */
// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error
//   }

//   let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges')
//       process.exit(1)
//       break
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use')
//       process.exit(1)
//       break
//     default:
//       throw error
//   }
// }

/**
 * Event listener for HTTP server "listening" event.
 */
// function onListening() {
//   let addr = server.address()
//   let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
//   debug('Listening on ' + bind)
// }
