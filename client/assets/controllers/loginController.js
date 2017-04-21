app.controller('loginController', function($scope, questionFactory, $location) {
  $scope.user = "";

  $scope.login = function() {
    console.log('login button clicked!!', $scope.user)
    questionFactory.login($scope.user, function(){
      $location.url('/');
    });
  }
})
