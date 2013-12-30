'use strict';

angular.module('LibrApp').controller('LoginCtrl', function ($scope, $http) {

  $http({method: 'GET', url: 'http://127.0.0.1:3000/api/user/'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      }).
      error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});