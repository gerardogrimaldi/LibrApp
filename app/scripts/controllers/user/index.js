'use strict';

angular.module('LibrApp').controller('IndexUserCtrl', function ($scope, $http, Restangular) {

	
    $scope.user = {
        'name': null, 
        'email':null,
        'password':null
    }

    var baseUsers = Restangular.all('user');
	
    $scope.getUsers = function(){
        baseUsers.getList().then(function (users) {
            $scope.allUsers = users;
            $(".ui.active.dimmer").removeClass("active").addClass("disable");
        }, function errorCallback() {
            alert("Oops error from server :(");
        });    
    }
    
    $scope.gridOptions = { 
    data: 'allUsers',
    columnDefs: [
        {field:'name', displayName:'Name'}, 
        {field:'email', displayName:'E-mail'},
        {displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn btn-sm btn-primary" ng-click="editUser(row.entity)" >Edit</button> '},
        {displayName: 'Delete', cellTemplate: '<button id="deleteBtn" type="button" class="btn btn-sm btn-primary" ng-click="deleteUser(row.entity)" >Delete</button> '}
        ],
        multiSelect: false,
    };

    $scope.createUser = function() {
    
        $('.ui.modal').modal('show');
    }

    $scope.modalOK = function() {
        $(".ui.active.dimmer").removeClass("disable").addClass("active");
            baseUsers.post($scope.user).then(function () {
            $scope.user = {
                'name': null, 
                'email':null,
                'password':null
                }    
            $scope.getUsers();
            $(".ui.active.dimmer").removeClass("active").addClass("disable");
            },  function errorCallback() {
                alert("Oops error from server :(");
            });
        $('.ui.modal').modal('hide');
    }
});
