// registering our app
var app = angular.module('myApp', []);

app.directive('kitten', function () {
  return {
    restrict: 'E',
    replace: false,
    template: "<img src='http://placekitten.com/400/300'>"
  };
});