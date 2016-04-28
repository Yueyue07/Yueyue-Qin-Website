const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  title: { type: String, default: 'Title' },
  author: { type: String, default: 'Yueyue Qin' },
  time: { type: Date, default: Date.now },
  tags: { type: Array, default: ['JavaScript'] },
  body: { type: String, default: 'Boday' },
  images: []
});

var Image = module.exports = exports = mongoose.model('Blog', blogSchema);
