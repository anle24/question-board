app.controller('questionController', function($scope, questionFactory, $location){
  console.log('question controller loaded');
  if (questionFactory.user == "") {
    $location.url('/index')
  } else {
    console.log('factory user exists', questionFactory.user);
    $scope.user = questionFactory.user;
    $scope.newQuestion = {};
    console.log('current user set to factory user', $scope.user);

    $scope.createQuestion = function() {
      console.log('create question button clicked');
      $scope.newQuestion.user = $scope.user;
      console.log('form data:', $scope.newQuestion)
      questionFactory.createQuestion($scope.newQuestion).then(function(data) {
        if (data.err) {
          console.log(data.err);
        } else {
          $location.url('/')
        }
      })
    }
  }
})
