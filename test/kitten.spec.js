'use strict';

describe('kitten', function(){
  var $compile;
  var $scope;
  var $timeout;
  var template;

  // setup our app for testing
  beforeEach(module("myApp"));

  // inject services required for testing the directive
  beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $timeout = _$timeout_;
    template = '<kitten></kitten>';
  }));

  var render = function() {
    return $compile(template)($scope);
  };

  it("replaces <kitten> tag with an image tag", function() {
    expect(render().find("img").length).toEqual(1);
    expect(render().find("kitten").length).toEqual(0);
  });

  it("has a source attribute", function() {
    var image = render().find("img");
    expect(image.attr("src").length).toBeGreaterThan(1);
  });

  it("defaults to the width and height of '100'", function() {
    var image = render().find("img");
    expect(image.attr("src")).toEqual("http://placekitten.com/100/")
  });

  it("uses given height and width attributes", function() {
    template = '<div><kitten width="200" height="100"></kitten></div>';
    var image = render().find("img");
    expect(image.attr("src")).toEqual("http://placekitten.com/200/100");
  });

  // it("fails this test", function() {
  //   expect(false).toBeTrue();
  // });

  it("changes on click", function() {
    var element = render();
    var image = element.find("img");
    element.triggerHandler('click­');

    $timeout(function(){
      expect(image.hasClass('tada')).toBe(true);
      expect(image.attr('src')).toEqual("http://placebeard.it/200/100");
    }, 100);
  });

});