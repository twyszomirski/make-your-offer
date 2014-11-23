'use strict';

angular.module('makeYourOffer.setup-new-bidding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup-new-bidding', {
    templateUrl: 'setup-new-bidding/setup-new-bidding.html',
    controller: 'SetupNewBiddingCtrl'
  });
}])

.controller('SetupNewBiddingCtrl', function($scope) {
	$scope.singleModel = 1;
});
