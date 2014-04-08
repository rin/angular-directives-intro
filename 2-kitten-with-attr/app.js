var app = angular.module('myApp', []);

app.directive('kitten', function () {
  return {
      restrict: 'E',
      replace: true,
      template: "<img src='http://placekitten.com/100'>",
      link: function (scope, element, attr) {
          var url = "http://placekitten.com/";
          var width = attr.width || 100;
          var source = url + [width, attr.height].join('/');

          element.attr('src', source);
      }
  };
});