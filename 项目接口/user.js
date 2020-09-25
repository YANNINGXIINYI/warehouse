const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  stuid: {
    type: Number
  },
  avatar: {
    type: String
  },
  phonenum: {
    type: Number
  },
  school: {
    type: String
  },
  sex: {
    type: String
  },
  idcard: {
    type: Number
  },
  name: {
    type: String
  },
  reputation: {
    type: Number,
    default: 100
  },
  usertype: {
    type: Number,
    default: 0
  }
})

const User = mongoose.model('User',userSchema)
// async function createUser(){
//   const salt = await bcrypt.genSalt(10)
//   const pwd = await bcrypt.hash('123456',salt)
//   const user = await User.create({
//     username: 'admin',
//     password: pwd,
//     email: 'pansy0706@gmail.com'
//   })
// }
// createUser()
module.exports = {
  User
}
