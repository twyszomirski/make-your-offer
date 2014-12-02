'use strict';

angular.module('makeYourOffer.bid-on-existing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bid-on-existing/:bidId', {
    templateUrl: 'bid-on-existing/bid-on-existing.html',
    controller: 'BidOnExistingCtrl'
  });
}])

.controller('BidOnExistingCtrl', function($scope, $routeParams) {
      $scope.bidId = $routeParams.bidId;
});
