'use strict';

angular.module('LibrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html',   controller: 'MainCtrl'})
      .when('/login', {templateUrl: 'views/signin/login.html', controller: 'LoginCtrl'})
      .otherwise({redirectTo: '/'});
    //$locationProvider.html5Mode(true);
  }]);
 