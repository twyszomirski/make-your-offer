'use strict';

describe('makeYourOffer.bid-on-existing module', function() {

  beforeEach(module('makeYourOffer.bid-on-existing'));

  describe('BidOnExistingCtrl controller', function(){

    it('should ....', inject(function($controller, $rootScope, $routeParams) {
      //spec body
      var bidOnExistingCtrl = $controller('BidOnExistingCtrl', {$scope : $rootScope.$new(),$routeParams : $routeParams });
      expect(bidOnExistingCtrl).toBeDefined();
    }));

  });
});
