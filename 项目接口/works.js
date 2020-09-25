const mongoose = require('mongoose')
const workSchema = new mongoose.Schema({
  company: {
    type: String,
  },
  wage: {
    type: Number,
  },
  time: {
    type: String
  },
  content: {
    type: String
  },
  adress: {
    type: String
  },
  date: {
    type: String
  },
  quantity: {
    type: Number
  }
})

const Work = mongoose.model('work', workSchema)
// Work.create({
//   company: '阿里巴巴',
//   wage: 188,
//   time: '2020-8-10~2020-8-11',
//   content: '打酱油',
//   adress: 'M78',
//   date: '2020-8-9',
//   quantity: 10
// })

module.exports = {
  Work
}

