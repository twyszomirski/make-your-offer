'use strict';

// Declare app level module which depends on views, and components
angular.module('makeYourOffer', [
  'ngRoute',
  'makeYourOffer.view1',
  'makeYourOffer.view2',
  'makeYourOffer.version',
  'ui.bootstrap'	
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
