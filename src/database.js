const mongoose = require('mongoose')

// conexion mongo local
// const MONGODB_URI = 'mongodb://localhost/db-docker-node'

// conexion mongo dentro de docker
const MONGODB_URI = 'mongodb://mongo/mydatabase'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((db) => console.log(`Database is CONNECTED to${db.connection.host}`))
  .catch((err)=> console.error(err))