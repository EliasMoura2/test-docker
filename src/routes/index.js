// const { Router } = require('express')
// const router = Router()
const router = require('express').Router()

router.get('/', (req, res) => {
  res.json( { message: 'Hello worlddddd!', data: `Hello from node ${process.version}` } )
})

module.exports = router