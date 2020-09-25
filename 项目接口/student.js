const mongoose = require('mongoose')
const stuSchema = new mongoose.Schema({
  stuname: {
    type: String,
  },
  idcard: {
    type: Number,
    unique: true
  },
  stuid: {
    type: Number,
    unique: true
  }
})

const Student = mongoose.model('student', stuSchema)

module.exports = {
  Student
}
