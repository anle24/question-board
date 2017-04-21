app.controller('showController', function($scope, questionFactory, $location, $routeParams) {
  if (questionFactory.user == "") {
    $location.url('/index');
  } else {
    $scope.user = questionFactory.user;
    $scope.question = {};

    function getQuestion(){
      questionFactory.getQuestion($routeParams.id).then(function(data){
        $scope.question = data;
      }).then(questionFactory.getAnswers($routeParams.id).then(function(data){
        console.log('trying to get answers', data);
        $scope.answers = data;
      }))
    }

    getQuestion();

    $scope.likeAnswer = function(answer) {
      answer.likes++;
      questionFactory.update($scope.question).then(getQuestion);
    }
  }
})
