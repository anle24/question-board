app.controller('dashboardController', function($scope, questionFactory, $location) {
  if (questionFactory.user == "") {
      $location.url('/index');
  } else {
    console.log('dashboard controller loaded!')
    $scope.user = questionFactory.user;
    $scope.questions = [];
    console.log('setting current user to factory user', $scope.user);

    questionFactory.getQuestions().then(function(data) {
      if(data.err){
        console.log(data.err);
      } else {
      $scope.questions = data;
      }
    })
  }
})
