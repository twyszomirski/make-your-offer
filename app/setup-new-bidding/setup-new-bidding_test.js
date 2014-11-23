'use strict';

describe('makeYourOffer.setup-new-bidding module', function() {

  beforeEach(module('makeYourOffer.setup-new-bidding'));

  describe('setupNewBiddingCtrl controller', function(){

    it('should ....', inject(function($rootScope,$controller) {
      //spec body
      var setupNewBiddingCtrl = $controller('SetupNewBiddingCtrl',{$scope: $rootScope.$new()});
      expect(setupNewBiddingCtrl).toBeDefined();
    }));

  });
});

