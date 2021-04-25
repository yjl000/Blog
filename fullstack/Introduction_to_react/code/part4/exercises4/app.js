const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
// 错误处理库，使用这个库，可以不用try catch处理async await的错误
require('express-async-errors')
const blogsRouter = require('./controllers/blog')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true})
  .then(() => {
    logger.info('connected to mongoDB')
  })
  .catch((err) => {
    logger.error('error connecting to MongoDB: ', err.meaasge)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)


app.use('/api/blogs', blogsRouter)

app.use(middleware.unknowmEndpoint)
app.use(middleware.errorHandler)

module.exports = app