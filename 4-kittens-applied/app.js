var app = angular.module('myApp', []);

app.directive('kitten', function() {

  return {
      restrict: 'E',
      scope: {},
      template: "<img src='http://{{domain}}/{{width}}/{{height}}'>",
      link: function (scope, element, attr) {
          scope.domain = "placekitten.com";
          scope.width = attr.width;
          scope.height = attr.height;

          element.on('click', function(){
            scope.$apply(function(){
              element.find('img').addClass('animated tada');
              scope.domain = 'placebeard.it';
            });
          });
      }
  };

});