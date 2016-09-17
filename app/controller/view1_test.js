'use strict';

describe('libraryApp module', function() {

  beforeEach(module('libraryApp'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('homeController');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});