const mongoose = require('mongoose')
const societiesSchema = new mongoose.Schema({
  schoolid: {
    type: Number
  },
  societyname:{
    type: String
  },
  introduction: {
    type: String
  },
  img: {
    type: Array
  }
})

const Society = mongoose.model('society',societiesSchema)
// Society.create({
//   schoolid: 123,
//   societyname: '动漫社',
//   introduction: '欧拉欧拉欧拉欧拉欧拉'
// })

module.exports = {
  Society
}
