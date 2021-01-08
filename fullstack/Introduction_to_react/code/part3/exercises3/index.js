// const {
//   request, response
// } = require("express");

const { response, request } = require('express');
const express = require('express');
const app = express()
const logger = require('morgan') // 日志中间件
app.use(express.json())
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

let persons = [
  {
    id: 1,
    name: 'aaa',
    number: '12345698741'
  },
  {
    id: 2,
    name: 'bbb',
    number: '12345698741'
  },
  {
    id: 3,
    name: 'ccc',
    number: '12345698741'
  }

]

const generateId = () => {
  const id = Math.random() * 10000
  return parseInt(id, 10)
}

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/info', (request, response) => {
  const time = new Date()
  const info = `<p>Phonebook has info for ${persons.length} people</p>
  <p>${time}</p>
  `
  response.send(info)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  const hasPerson = persons.find(person => person.name === body.name)
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }

  if (hasPerson) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(newPerson)
  response.json(persons)

})


const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})