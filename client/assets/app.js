var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/index', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/new_question', {
    templateUrl: 'partials/question.html',
    controller: 'questionController'
  })
  .when('/question/:id', {
    templateUrl: 'partials/show.html',
    controller: 'showController'
  })
  .when('/question/:id/new_answer', {
    templateUrl: 'partials/answer.html',
    controller: 'answerController'
  })
  .otherwise({
    redirect: '/'
  });
});
