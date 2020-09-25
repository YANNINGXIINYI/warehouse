const mongoose = require('mongoose')
const shopSchema = new mongoose.Schema({
  typename: {
    type: String
  }
})

const shopType = mongoose.model('shoptype', shopSchema)

module.exports = {
  shopType
}
