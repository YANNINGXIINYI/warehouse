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

const Message = mongoose.model('confession_wall',wallSchema)

// Message.create({
//   userid: 'fhufdshf',
//   message: 'sdhfiuahfiush',
//   schoolid: 1233
// })
module.exports = {
  Message
}
