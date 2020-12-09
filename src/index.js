'user strict'
const app = require('./app')

app.set('port', process.env.PORT || 4000)

const port = app.get('port')

// console.log(process.env)

// app.get('/', (req ,res) => {
//   res.send(`Hello from node ${process.version}`)
// })

// app.listen(port, () => {
//   console.log(`Server listening on port = ${port}`)
// })
async function main(){
  await app.listen(port)
  console.log(`Server listening on port = ${port}`)
}

main()

// process.on('SIGINT', signal => {
//   console.log(`Process exiting due to ${signal}`)
//   process.exit(0)
// })