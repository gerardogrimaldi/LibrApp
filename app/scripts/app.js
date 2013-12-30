'use strict';

angular.module('LibrApp', [
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
 