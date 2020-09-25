const mongoose = require('mongoose')
const typeSchema = new mongoose.Schema({
  typename: {
    type: String
  }
})

const Stype = mongoose.model('societiestype',typeSchema)
// Stype.create({})
module.exports = {
  Stype
}
