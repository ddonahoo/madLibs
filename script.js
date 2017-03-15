var app = angular.module('madlibApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/userinput', {
    controller: 'myController',
    templateUrl: 'userinput.html'
  })
.when ('/viewmadlib', {
  controller: 'secondController',
  templateUrl: 'viewmadlib.html'
});

$locationProvider.hashPrefix('')

});

app.controller('myController', function($scope, $location, myFactory) {
  $scope.sendInfo =  function(propernoun, number1, noun1, adjective1, adjective2, number2, adjective3, noun2, number3, verb, adjective4) {


    myFactory.pass(propernoun, number1, noun1, adjective1, adjective2, number2, adjective3, noun2, number3, verb, adjective4);

    $location.path('/viewmadlib');
    }
});

app.controller('secondController', function($scope, myFactory) {

  $scope.userInfo = myFactory.result ();

});
