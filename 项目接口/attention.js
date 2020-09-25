const mongoose = require('mongoose')
const attentionSchema = mongoose.Schema({
  userid: {
    type:String
  },
  attentionid: {
    type: String
  }
})

const Attention = mongoose.model('attention', attentionSchema)

module.exports = {
  Attention
}

