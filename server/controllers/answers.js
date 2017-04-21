var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  index: function(req, res) {
    console.log('finding answers..');
    Answer.find({_question: req.params.id}, function(err, answers){
      if (err) {
        console.log(err);
      } else {
        res.json(answers);
      }
    })
  },

  create: function(req, res) {
    console.log('reached server side answer create');
    Answer.create(req.body, function(err, answer) {
      if(err) {
        res.json(err)
      } else {
        res.json(answer);
      }
    })
    // Question.findOne({_id: req.params.id}, function(err, question){
    //   console.log('found question', question);
    //   if (err) {
    //     console.log('Error finding question to answer');
    //     res.json(err);
    //   } else {
    //     var answer = new Answer(req.body);
    //     console.log(answer);
    //     answer._question = question._id;
    //     console.log('question.answers:', question.answers);
    //     answer.save(function(err) {
    //       if (err) {
    //         res.json(err);
    //         console.log('Error saving answer');
    //       } else {
    //         console.log('attempting to push new answer to question answers array', question.answers);
    //         // question.answers.push(answer);
    //         question.save(function(err) {
    //           res.json({message: "Successfully pushed answer to question"})
    //         })
    //       }
    //     })
    //   }
    // })
  },
  like: function(req, res) {
    Answer.findOne({_id: req.params.id}, function(err, answer){
      if (err) {
        console.log('error finding answer to like');
        res.json(err);
      } else {
        answer.likes = req.body.likes;
        answer.save(function(err, updatedAnswer) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            res.json(updatedAnswer);
          }
        })
      }
    })
  }
}
