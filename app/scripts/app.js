'use strict';

var app = angular.module('LibrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',            {templateUrl: 'views/main.html',        controller: 'MainCtrl'})
      .when('/user',        {templateUrl: 'views/user/index.html',  controller: 'LoginCtrl'})
      .when('/user/create', {templateUrl: 'views/user/create.html', controller: 'UserCreateCtrl'})
      .otherwise({redirectTo: '/'});
    //$locationProvider.html5Mode(true);
  }]);

app.config(['$httpProvider', function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);