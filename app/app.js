'use strict';

// Declare app level module which depends on views, and components
    angular.module('makeYourOffer', [
        'ngRoute',
        'makeYourOffer.login',
        'makeYourOffer.setup-new-bidding',
        'makeYourOffer.bid-on-existing',
        'makeYourOffer.version',
        'ui.bootstrap'
    ]).
    run(function ($rootScope, $location, $window, $timeout) {

            $rootScope.$on('$routeChangeError', function (event, next, current) {
                if (!(next.templateUrl === "login/login.html")) {
                    $location.path('/login')
                }

            });

            $rootScope.user = {};
            $rootScope.loggedIn = false;
            $rootScope.fbInitialized = false;


            $window.fbAsyncInit = function() {
                FB.init({

                    appId: '361819630659077',

                    channelUrl: 'app/channel.html',

                    version    : 'v2.2',

                    status: true,

                    cookie: true,

                    xfbml: true
                });

                watchLoginChange();
                $rootScope.fbInitialized = true;

            };

            (function(d){
                // load the Facebook javascript SDK
                var js,
                    id = 'facebook-jssdk',
                    ref = d.getElementsByTagName('script')[0];

                if (d.getElementById(id)) {
                    return;
                }

                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";

                ref.parentNode.insertBefore(js, ref);

            }(document));


            function watchLoginChange() {

                FB.Event.subscribe('auth.authResponseChange', function(response) {
                    if (response.status === 'connected') {
                        $rootScope.loggedIn = true;
                        getUserInfo();
                    }
                    else {


                    }

                });

            };


            function getUserInfo() {

                FB.api('/me', function(response) {

                    $rootScope.$apply(function() {

                        $rootScope.user = response;
                        console.log(response);
                    });
                });
            };


      }).
      config(['$routeProvider', function ($routeProvider) {
          $routeProvider.otherwise({
              redirectTo: '/setup-new-bidding'
          });
      }]);


