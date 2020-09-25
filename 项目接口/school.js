const mongoose = require('mongoose')
const schoolSchema = new mongoose.Schema({
  schoolname: {
    type: String,
    unique: true
  },
  schoolid: {
    type: Number,
    unique: true
  }
})
const School = mongoose.model('school',schoolSchema)

module.exports ={
  School
}
