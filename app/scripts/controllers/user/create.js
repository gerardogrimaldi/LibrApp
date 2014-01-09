'use strict';

angular.module('LibrApp').controller('UserCreateCtrl', function ($scope, $http) {

  	$scope.createUser = function() {
		$http({method: 'POST', data : $scope.user, url: 'https://librappapiserver-c9-gerardogrimaldi.c9.io/api/create/' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
			success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			}).
		  	error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			});
		}
});