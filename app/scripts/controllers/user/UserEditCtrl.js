app.controller('UserEditCtrl', function ($scope, $modal, $user) {

  $scope.items = user;

  $scope.selected = {
    item: $scope.items
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});