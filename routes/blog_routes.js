const express = require('express');
const jsonParser = require('body-parser').json();
const Blog = require(__dirname + '/../models/blog.js');
const handleDBError = require(__dirname + '/../lib/handle_db_error');
const blogRouter = module.exports = exports = express.Router();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });

blogRouter.post('/blogs', upload.array('photos', 12), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.status(200).json({ msg: 'success' });
});
