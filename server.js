const express = require ('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI
  || 'mongodb://localhost/images_app_dev');


// Routes
const blogRouter = require(__dirname + '/routes/blog_routes.js');

app.use('/api', blogRouter);
app.use(express.static(__dirname + '/build'));

const PORT = process.env.PORT || 3000;

module.exports = exports = (port) => {
  return app.listen(port || PORT,
    () => {console.log('server up' + ` PORT: ${port || PORT}`);});
};
