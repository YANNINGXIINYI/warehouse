const mongoose = require('mongoose')
const shopSchema = new mongoose.Schema({
  schoolid:{
    type: Number
  },
  shopname:{
    type: String
  },
  desc: {
    type: String
  },
  img: {
    type: String,
  },
  price: {
    type: Number
  },
  shoptype: {
    type: String
  }
})

const Shop = mongoose.model('shop', shopSchema)
// Shop.create({
//   schoolid: 123,
//   shopname: 'ipone',
//   price: 199,
//   desc: 'adsda',
//   shoptype: '数码'
// })
module.exports = {
  Shop
}
