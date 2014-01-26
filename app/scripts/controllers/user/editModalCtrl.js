app.controller('editModalCtrl', function ($scope, $modalInstance, items) {
  $scope.user = items;
  $scope.selected = {
    user: $scope.user[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.user);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});