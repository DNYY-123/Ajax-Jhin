const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded())

// 访问静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.get('/first', (req, res) => {
  res.send('Hello Jhin')
})

app.get('/responseDate', (req, res) => {
  res.send(
    {
      "name": "zhangsan",
      "age": 12,
      "famale": "women"
    }
  )
})

app.get('/get', (req, res) => {
  res.send(req.query)
})

app.post('/post', (req, res) => {
  res.send(req.body)
})


app.listen(3000)

console.log("服务器启动成功")