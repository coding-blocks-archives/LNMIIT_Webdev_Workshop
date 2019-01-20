const express = require('express')
const app = express()

let tasks = []

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next()
})

app.get('/', (req, res) => {
  res.send(tasks)
})

app.get('/add', (req, res) => {
  tasks.push(req.query.task)
  res.send(tasks)
})


app.listen(4444)
