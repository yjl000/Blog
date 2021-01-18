const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGODB_URI
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const personSchema = new mongoose.Schema({
  name: String,
  date: Date,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: 'txy',
  date: new Date(),
  number: '15295888903'
})

Person.find({}).then(res => {
  res.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})

// person.save().then(result => {
//   console.log('person saved!')
//   mongoose.connection.close()
// })