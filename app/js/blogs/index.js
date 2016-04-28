module.exports = function(app) {
  require('./services/multi_part_form')(app);
  require('./controllers/write_blogs_controller')(app);
  require('./directives/file_model')(app);
};
