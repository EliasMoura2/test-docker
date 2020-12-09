const express = require('express')
const morgan = require('morgan')

const app= express()

app.use(morgan("dev"))

// routes
app.use('/api/v1/', require('./routes/index'))


module.exports = app