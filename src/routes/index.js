// const { Router } = require('express')
// const router = Router()
const router = require('express').Router()

router.get('/', (req, res) => {
  res.json( { message: 'Hello world!', data: `Hello from node ${process.version}` } )
})

module.exports = router