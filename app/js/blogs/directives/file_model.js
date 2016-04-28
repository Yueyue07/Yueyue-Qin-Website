module.exports = function(app) {
  app.directive('fileModel', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        console.log(scope);
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', () => {
          scope.$apply(() => {
            modelSetter(scope, element[0].files[0]);
            console.log(element[0].files[0]);
            console.log(scope.customer.files);
	        });
       });
      }
    };
  }]);
};
