var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
  index: function(req, res) {
    Question.find({}, function(err, questions) {
      res.json(questions);
    })
  },
  show: function(req, res) {
    Question.findOne({_id: req.params.id})
    .populate('answers').exec(function(err, question) {
      res.json(question);
    })
  },
  create: function(req, res) {
    Question.create(req.body, function(err, question) {
      if (err) {
        res.json(err)
      } else {
        res.json(question);
      }
    })
  }
}
