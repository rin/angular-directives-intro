var app = angular.module('myApp', []);

app.directive('kitten', function() {

  function placeholderURL(url, width, height){
    return url + [width || 100, height].join('/');
  }

  return {
      restrict: 'E',
      replace: true,
      template: "<img src='http://placekitten.com/100'>",
      link: function (scope, element, attr) {
          var url = "http://placekitten.com/";
          var source = placeholderURL(url, attr.width, attr.height);

          element.attr('src', source);

          element.on('click', function(){
            var url = 'http://www.placebeard.it/';
            var source = placeholderURL(url, attr.width, attr.height);

            element.addClass('animated tada');
            element.attr('src', source);
          });
      }
  };

});