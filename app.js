/**
 * Created by Ezhangyu_dev on 2017/7/19.
 */
const express = require('express')
const path = require('path')
let app = express()

// 提供静态资源
app.use(express.static(path.join(__dirname, './dist')))
// 配置body-parser
// 处理application/x-www-form-urlencoded的 parser
// 设置跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , token')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})
app.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
  let uri = 'http://localhost:' + 8080
  console.log('Listening at ' + uri + '\n')
})