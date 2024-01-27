const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model("post", postSchema)