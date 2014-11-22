'use strict';

describe('makeYourOffer.view1 module', function() {

  beforeEach(module('makeYourOffer.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($rootScope,$controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl',{$scope: $rootScope.$new()});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});

