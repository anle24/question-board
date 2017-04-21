app.controller('answerController', function($scope, questionFactory, $location, $routeParams) {
  $scope.user = questionFactory.user;
  $scope.newAnswer = {};
  $scope.question = {};

  console.log('answer controller loaded');

  function getQuestion(){
    questionFactory.getQuestion($routeParams.id).then(function(data){
      $scope.question = data;
    })
  }

  getQuestion();

  console.log('current question object: ', $scope.question);

  $scope.createAnswer = function() {
    $scope.newAnswer.user = $scope.user;
    $scope.newAnswer._question = $scope.question;
    console.log('answer button pressed!');
    console.log('submitting new answer', $scope.newAnswer);
    questionFactory.createAnswer($scope.newAnswer, $scope.question._id);
  }
})
