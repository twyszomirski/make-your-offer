'use strict';

angular.module('makeYourOffer.setup-new-bidding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup-new-bidding', {
    templateUrl: 'setup-new-bidding/setup-new-bidding.html',
    controller: 'SetupNewBiddingCtrl'
  });
}])

.controller('SetupNewBiddingCtrl', function($scope, $location) {
	  $scope.newBidding = "";
      $scope.participants = [{ name : ""},{ name: ""}]

      $scope.addParticipant = function(){
        $scope.participants.push({ name : ""});
      }

      $scope.removeParticipant = function(index){
        $scope.participants.splice(index,1);
      }

      $scope.canRemove = function(){
         return $scope.participants.length <= 2;
      }

      $scope.createBidding = function(){
          $location.path('/bid-on-existing/19');
      }

})
