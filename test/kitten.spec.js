'use strict';

describe('kitten', function(){
  var $compile;
  var $scope;
  var template;

  // setup our app for testing
  beforeEach(module("myApp"));

  // inject services required for testing the directive
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
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
    expect(image.attr("src")).toEqual("http://placekitten.com/200/100")
  });

  // it("fails this test", function() {
  //   expect(false).toBeTrue();
  // });

});