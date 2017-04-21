app.factory('questionFactory', function($http) {
  var factory = {};
  factory.user = "";

  factory.login = function(name, callback) {
    factory.user = name;
    callback();
  }

  factory.getQuestions = function() {
    return $http.get('/questions').then(function(res) {
      return res.data;
    })
  };

  factory.getQuestion = function(id) {
    return $http.get('/questions/' + id).then(function(res) {
      return res.data;
    })
  };

  factory.createQuestion = function(newQuestion) {
    return $http.post('/questions', newQuestion).then(function(res) {
      if(res.data.err) {
        console.log(res.data.err, 'Error creating new question');
      }
      return res.data;
    })
  };

  factory.createAnswer = function(newAnswer, id) {
    console.log('reached factory to create answer..');
    console.log('newAnswer Object', newAnswer);
    console.log('question id:', id);
    return $http.post('/answers/' + id, newAnswer).then(function(res) {
      if(res.data.err){
        console.log(res.data.err)
      }
      return res.data;
    })
  };

  factory.getAnswers = function(id) {
    return $http.get('/answers/' + id).then(function(res) {
      return res.data;
    })
  }

  factory.likeAnswer = function(likedAnswer) {
    return $http.post('/answers/like' + likedAnswer._id, likedAnswer)
  }

  return factory;
})
