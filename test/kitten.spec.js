'use strict';

describe('kitten', function(){
  var $compile = null;
  var $scope   = null;
  var template = null;

  // mock our app
  beforeEach(module("myApp"));

  // this is was Angular usually does when it bootstraps an app
  beforeEach(inject(function($injector) {
    $compile = $injector.get("$compile");
    $scope = $injector.get("$rootScope").$new();
    template = '<div><kitten></kitten></div>';
  }));

  var $output = function() {
    return $compile(template)($scope);
  };

  it("replaces <kitten> tag with an image tag", function() {
    var output = $output();
    expect(output.find("img").length).toEqual(1);
    expect(output.find("kitten").length).toEqual(0);
  });

  it("has a source attribute", function() {
    var image = $output().find("img");
    expect(image.attr("src").length).toBeGreaterThan(1);
  });

  it("defaults to the width and height of '100'", function() {
    var image = $output().find("img");
    expect(image.attr("src")).toEqual("http://placekitten.com/100/")
  });

  it("uses given height and width attributes", function() {
    template = '<div><kitten width="200" height="100"></kitten></div>';
    var image = $output().find("img");
    expect(image.attr("src")).toEqual("http://placekitten.com/200/100")
  });

  // it("fails this test", function() {
  //   expect(false).toBeTrue();
  // });

});