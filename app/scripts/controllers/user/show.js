'use strict';

angular.module('LibrApp').controller('UserShowCtrl', function ($scope, $http) {

    $scope.queryUsers = function() {
        $http({method: 'GET', data : JSON.stringify($scope.user), url: 'https://librappapiserver1-c9-gerardogrimaldi.c9.io/api/users/' }).//'http://api.gerardogrimaldi.com/api/user/create/'}).
            success(function(data, status, headers, config) {
                $scope.users = data;
                toastr.success("Cargando datos...");
            }).
            error(function(data, status, headers, config) {
                toastr.error("Error " + data.message + " " + status);
            });
        }

    $scope.queryUsers();

    $scope.editUser = function(club) {
        $scope.myDialog = $dialog.dialog({dialogFade: false, resolve: {user: function(){return angular.copy(user);}}});
        $scope.myDialog.open('club/club_edit.tpl.html', 'ClubEditCtrl').then(function(result){
            if (result === 'cancel'){}
            else {
                 $scope.queryUsers();
                //$scope.users = ClubRes.query();
            }
        });  
    };
    $scope.gridOptions = { 
        data: 'users',
        columnDefs: [
            {field:'name', displayName:'Name'}, 
            {field:'email', displayName:'E-mail'},
            {displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit(row.entity)" >Edit</button> '},
            {displayName: 'Delete', cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-primary" ng-click="delete(row.entity)" >Delete</button> '}
        ],
        multiSelect: false,
    };
});