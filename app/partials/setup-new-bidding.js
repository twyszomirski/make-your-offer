'use strict';

angular.module('makeYourOffer.setup-new-bidding', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/setup-new-bidding', {
            templateUrl: 'partials/setup-new-bidding.html',
            controller: 'SetupNewBiddingCtrl',
            resolve: {

                something: function ($q, $timeout, $rootScope) {

                    var defer = $q.defer();

                    if ($rootScope.fbInitialized && $rootScope.loggedIn) {
                        return defer.resolve();
                    }

                    waitForFB(defer, $rootScope);


                    return defer.promise;

                    function waitForFB(defer,$rootScope) {
                        $timeout(function () {
                            if(!$rootScope.fbInitialized){
                                waitForFB(defer, $rootScope);
                                return;
                            }

                            FB.getLoginStatus(function (response) {
                                if (response.status === 'connected') {
                                    $rootScope.loggedIn = true;
                                    defer.resolve();
                                }
                                else {
                                    $rootScope.loggedIn = false;
                                    defer.reject();
                                }
                            });

                        }, 10);

                    }

                }

            }




        });
    }])

    .controller('SetupNewBiddingCtrl', function ($scope, $location) {
        $scope.newBidding = "";
        $scope.participants = [{name: ""}, {name: ""}]

        $scope.addParticipant = function () {
            $scope.participants.push({name: ""});
        }

        $scope.removeParticipant = function (index) {
            $scope.participants.splice(index, 1);
        }

        $scope.canRemove = function () {
            return $scope.participants.length <= 2;
        }

        $scope.createBidding = function () {
            $location.path('/bid-on-existing/19');
        }

    });

