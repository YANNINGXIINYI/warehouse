const mongoose = require('mongoose')
const wallSchema = new mongoose.Schema({
  userid:{
    type: String
  },
  username: {
    type: String,
  },
  email: {
    type: String
  },
  avatar: {
    type: String
  },
  message: {
    type: String
  },
  comment: {
    type: String
  },
  timer: {
    type: String
  },
  img: {
    type: Array
  },
  schoolid: {
    type: Number
  },
  like: {
    type: Number,
    default: 0
  },
  forward: {
    type: Number,
    default: 0
  }
})

const lifeMessage = mongoose.model('lifewall',wallSchema)

// lifeMessage.create({
//   userid: 'fhufdshf',
//   message: 'sdhfiuahfiush',
//   schoolid: 1233
// })
module.exports = {
  lifeMessage
}
