var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app) {

  app.get('/questions', questions.index);
  app.post('/questions', questions.create);
  app.get('/questions/:id', questions.show);

  app.get('/answers/:id', answers.index);
  app.post('/answers/:id', answers.create);
  app.post('/answers/:id/like', answers.like);

}
