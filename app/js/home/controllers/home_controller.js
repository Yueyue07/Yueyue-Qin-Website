module.exports = function(app) {
  app.controller('HomeAnimation', function($scope, $timeout) {
    $timeout(function() {
      $scope.progressValue = 66;
    }, 200);
  });
};
