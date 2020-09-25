const mongoose = require('mongoose')
const swiperSchema = new mongoose.Schema({
  swiperimg:{
    type: Array
  }
})

const Swiper = mongoose.model('swiper', swiperSchema)
// Swiper.create({})
module.exports = {
  Swiper
}
