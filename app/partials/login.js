'use strict';

angular.module('makeYourOffer.login', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });
    }])
    .controller('LoginCtrl', function ($rootScope) {
        FB.XFBML.parse();
    });