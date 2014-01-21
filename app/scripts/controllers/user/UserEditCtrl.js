
/**
 * We define a controller for the edit action
 */
.controller('ClubEditCtrl', function ClubEditController($scope, ClubRes, dialog, user) {
  $scope.user = user;
  $scope.submit = function() {
    $scope.user.$update(function(data) {
                            dialog.close($scope.user);      
                          });
   };

  $scope.cancel = function() {
    dialog.close('cancel');
  };
})