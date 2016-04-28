module.exports = function(app) {
  app.controller('WriteBlogs', ['$scope', 'multiPartForm', function($scope
   , multiPartForm) {
     $scope.customer = {};
     $scope.Submit = function(customer) {
       var uploadUrl = '/api/blogs';
       console.log(scope.customer);
       multiPartForm.post(uploadUrl, customer);
     };

  }]);
};
