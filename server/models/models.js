var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  user: {type: String, required: true},
  question: {type: String, required: true, minlength: 10},
  description: {type: String},
  answers: {type: Number, default: 0}
});

var AnswerSchema = new Schema({
  user: {type: String, required: true},
  answer: {type: String, required: true, minlength: 5},
  details: {type: String},
  likes: {type: Number},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'}
});

var Question = mongoose.model('Question', QuestionSchema);
var Answer = mongoose.model('Answer', AnswerSchema);
