const mongoose = require('mongoose')

const url = process.env.MONGODB_URI //'mongodb://admin:yjltxy129725@150.109.115.190:27017/yjl'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => {
  console.log('connected to MongoDB')
})
.catch(err => {
  console.log('error connecting to MongoDB: ', err.message)
})

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  number: {
    type: String,
    minlength: 11,
    maxlength: 11,
    required: true
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person