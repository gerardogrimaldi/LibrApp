'use strict';

angular.module('LibrApp').controller('UserShowCtrl', function ($scope, $http, dialog) {

    $scope.queryUsers = function() {
        $http({method: 'GET', data : JSON.stringify($scope.user), url: 'https://librappapiserver1-c9-gerardogrimaldi.c9.io/api/users/' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
            success(function(data, status, headers, config) {
                $scope.users = data.Users;
                toastr.success("Cargando datos...");
            }).
            error(function(data, status, headers, config) {
                toastr.error("Error " + data.message + " " + status);
            });
        }

    $scope.queryUsers();

    $scope.editUser = function(user) {

        $scope.myDialog = $dialog.dialog({dialogFade: false, resolve: {user: function(){return angular.copy(user);}}});
        $scope.myDialog.open('/views/partials/user_edit.tpl.html', 'UserEditCtrl').then(function(result){
            if (result === 'cancel'){}
            else {
                 $scope.queryUsers();
            }
        });  
    };
    $scope.gridOptions = { 
        data: 'users',
        columnDefs: [
            {field:'name', displayName:'Name'}, 
            {field:'email', displayName:'E-mail'},
            {displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn btn-sm btn-primary" ng-click="editUser(row.entity)" >Edit</button> '},
            {displayName: 'Delete', cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-sm btn-primary" ng-click="delete(row.entity)" >Delete</button> '}
        ],
        multiSelect: false,
    };
});