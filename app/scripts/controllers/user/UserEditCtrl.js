app.controller('UserEditCtrl', function ($scope, $modalInstance, user) {
 // $scope.user = user;
 //  $scope.submit = function() {
 //    $scope.user.$update(function(data) {
 //                            dialog.close($scope.user);      
 //                          });
 //   };
 //  $scope.cancel = function() {
 //    dialog.close('cancel');
 //  };
  $scope.user = user;

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    dialog.close('cancel');
  };
});