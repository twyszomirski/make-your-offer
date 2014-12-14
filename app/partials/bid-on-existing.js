'use strict';

angular.module('makeYourOffer.bid-on-existing', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/bid-on-existing/:bidId', {
            templateUrl: 'partials/bid-on-existing.html',
            controller: 'BidOnExistingCtrl',
            resolve: {

                something: function ($q, $timeout, $rootScope) {

                    var defer = $q.defer();

                    if ($rootScope.fbInitialized && $rootScope.loggedIn) {

                        return defer.resolve();
                    }

                    waitForFB(defer, $rootScope);


                    return defer.promise;

                    function waitForFB(defer, $rootScope) {
                        $timeout(function () {
                            if (!$rootScope.fbInitialized) {
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

    .controller('BidOnExistingCtrl', function ($scope, $routeParams) {
        $scope.bidId = $routeParams.bidId;
    });
