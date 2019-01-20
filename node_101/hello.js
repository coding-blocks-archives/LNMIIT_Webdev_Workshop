const express = require('express')
const app = express()


app.get('/', (req, res) => {
  if (req.query.name) {
    res.send('Hello ' + req.query.name)
  } else {
    res.send('Goodbye')
  }
})

app.listen(3000)
