'use strict';

angular.module('LibrApp').controller('UserShowCtrl', function ($scope, $http) {

    $scope.rowCollection = [];

    $scope.columnCollection = [
        { label: 'First Name', 	map: 'name', validationAttrs: 'required', validationMsgs: '<span class="error" ng-show="smartTableValidForm.FirstName.$error.required">Required!</span>' },
        { label: 'Last Name', 	map: 'Last' },
        { label: 'User Name', 	map: 'UserName', validationAttrs: 'required' },
        { label: 'Password', 	map: 'Password', noList: true, editType: 'password' },
        { label: 'Customer', 	map: 'CustId', optionsUrl: '/GetCusts', editType: 'radio' },
        { label: 'Role', 		map: 'RoleId', optionsUrl: '/GetRoles', editType: 'select', defaultTemplate: '<option value="" ng-hide="dataRow[column.map]">---</option>', validationAttrs: 'required', validationMsgs: '<span class="error" ng-show="smartTableValidForm.RoleId.$error.required">Required!</span>' }, // NOTE: small hack which enables defaultTemplate option :)
        { label: 'E-mail', 		map: 'Email', editType: 'email' },
        { label: 'Cell Phone', 	map: 'Mobilephone', noEdit: true, validationAttrs: 'required' },
        { label: 'Locked', 		map: 'IsLocked', cellTemplate: '<input disabled type="checkbox" name="{{column.map}}" ng-model="dataRow[column.map]">', editType: 'checkbox', noAdd: true }
    ];

    $scope.globalConfig = {
        isPaginationEnabled: false,
        isGlobalSearchActivated: true,
        itemsByPage: 10,
        selectionMode: 'single',
        actions: {
            list: 	{ url: 'https://librappapiserver1-c9-gerardogrimaldi.c9.io/api/users' 	},
            edit: 	{ url: '/EditUser', title: 'Edit User', desc: 'Edit', iconClass: '' }, 
            add: 	{ url: '/AddUser', 	title: 'Add User', buttonClass: 'pull-right', iconClass: 'icon-plus', desc: ' Add User' }, // TODO: zkontrolovat default description
            remove: { url: '/DelUser', 	title: 'Confirmation Dialog', msg: 'Do you really want to delete the user?' }
        }
    };

});