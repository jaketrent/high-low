var express = require('express')
var gzippo = require('gzippo')

var app = express()

app.use(gzippo.staticGzip(__dirname))

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server listening on ' + port + '...')
})
