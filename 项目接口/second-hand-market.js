const mongoose = require('mongoose')
const marketSchema = new mongoose.Schema({
  userid:{
    type:Number
  },
  shopname:{
    type: String
  },
  desc: {
    type: String
  },
  avatar: {
    type: String
  },
  img: {
    type: Array,
  },
  username: {
    type: String
  },
  price: {
    type: Number
  },
  email: {
    type: String
  },
  shoptype: {
    type: String
  }
})

const SecHand = mongoose.model('secondhandmarket', marketSchema)
SecHand.create({
  userid:123456,
  shopname: 'ipone',
  price: 199,
  desc: 'adsda',
  username: 'pansy',
  email: 'pansy0706@gmail.com',
  shoptype: '数码'
})
module.exports = {
  SecHand
}
