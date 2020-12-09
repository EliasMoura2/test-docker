'user strict'

const express = require('express');

const app = express()

app.set('port', process.env.PORT || 3000)

const port = app.get('port')

console.log(process.env)

app.get('/', (req ,res) => {
  res.send(`Hello from node ${process.version}`)
})

app.listen(port, () => {
  console.log(`Server listening on port = ${port}`)
})

process.on('SIGINT', signal => {
  console.log(`Process exiting due to ${signal}`)
  process.exit(0)
})