const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
require('dotenv').config()
const cors = require('cors')
const logger = require('morgan') // 日志中间件
const Person = require('./model/person');
const { request, response } = require('express');

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, './build')));


// logger('tiny')

// app.use(logger(':method :url :status :res[content-length] - :response-time mss'))
// 自定义日志格式内容
app.use(logger((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms', JSON.stringify(req.body)
  ].join(' ')
}))


app.get('/', (request, response) => {
  const html = fs.readFileSync(path.resolve(__dirname, './build/index.html'), 'utf-8');
  response.send(html)
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(res => {
    response.json(res)
  })
  
})

app.get('/api/info', (request, response) => {
  Person.find({}).then(res => {
    const time = new Date()
    const info = `<p>Phonebook has info for ${res.length} people</p>
    <p>${time}</p>
    `
    response.send(info)
  })
  
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  }).catch(err => {
    next(err)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(err => next(err))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  // const hasPerson = persons.find(person => person.name === body.name)
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }

  // if (hasPerson) {
  //   return response.status(400).json({
  //     error: 'name must be unique'
  //   })
  // }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
    date: new Date()
  })

  newPerson.save().then(savedPerson => {
    response.json(savedPerson)
  })
  .catch(err => next(err))

})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
  .then(updatedPerson => {
    response.json(updatedPerson)
  })
  .catch(err => {
    next(err)
  })
})

const unkonownEndPoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(unkonownEndPoint)

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({error: 'malformatted id'})
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})