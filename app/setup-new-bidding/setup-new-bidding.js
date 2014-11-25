'use strict';

angular.module('makeYourOffer.setup-new-bidding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setup-new-bidding', {
    templateUrl: 'setup-new-bidding/setup-new-bidding.html',
    controller: 'SetupNewBiddingCtrl'
  });
}])

.controller('SetupNewBiddingCtrl', function($scope) {
	  $scope.newBidding = "";
      $scope.participants = [{ name : ""},{ name: ""}]

      $scope.addParticipant = function(){
        $scope.participants.push({ name : ""});
      }

      $scope.removeParticipant = function(index){
        $scope.participants.splice(index,1);
      }

});
