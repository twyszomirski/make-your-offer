'use strict';

angular.module('makeYourOffer.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html'
  });
}]);

