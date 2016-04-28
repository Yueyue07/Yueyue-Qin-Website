module.exports = exports = function(err, res) {
  console.log(err);
  return res.status(500).json({ msg: 'Server Error' });
};
