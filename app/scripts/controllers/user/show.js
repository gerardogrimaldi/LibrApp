'use strict';

angular.module('LibrApp').controller('UserShowCtrl', function ($scope, $http) {

    $scope.loadUsers = function() {
        $http({method: 'GET', data : JSON.stringify($scope.user), url: 'https://librappapiserver1-c9-gerardogrimaldi.c9.io/api/users/' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
            success(function(data, status, headers, config) {
                $scope.model = data;
                toastr.success("Cargando datos...");
            }).
            error(function(data, status, headers, config) {
                toastr.error("Error " + data.message + " " + status);
            });
        }

    $scope.loadUsers();

    $scope.gridOptions = { 
        data: 'model',
        columnDefs: [
        {field:'name', displayName:'Name'}, 
        {field:'email', displayName:'E-mail'}
        ]
    };
});