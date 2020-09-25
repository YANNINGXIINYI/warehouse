const mongoose = require('mongoose')
const newsSchema = new mongoose.Schema({
  schoolid: {
    type: Number
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  img: {
    type: Array
  },
  date: {
    type: String
  }
})

const SchoolNews = mongoose.model('schoolnews',newsSchema)

module.exports = {
  SchoolNews
}
