'use strict';

describe('makeYourOffer.setup-new-bidding module', function() {

  beforeEach(module('makeYourOffer.setup-new-bidding'));

  describe('setupNewBiddingCtrl controller', function(){

    it('should ....', inject(function($rootScope,$controller) {
      var myScope = $rootScope.$new();
      var setupNewBiddingCtrl = $controller('SetupNewBiddingCtrl',{$scope: $rootScope.$new()});
      expect(setupNewBiddingCtrl).toBeDefined();

    }));

    it('It should have initially 2 participants', inject(function($rootScope,$controller) {
      var myScope = $rootScope.$new();
      var setupNewBiddingCtrl = $controller('SetupNewBiddingCtrl',{$scope: myScope});
      expect(myScope.participants.length).toBe(2);
    }));

    it('Add function should add new participant with each call', inject(function($rootScope,$controller) {
      var myScope = $rootScope.$new();
      var setupNewBiddingCtrl = $controller('SetupNewBiddingCtrl',{$scope: myScope});

      expect(myScope.participants.length).toBe(2);

      myScope.addParticipant();

      expect(myScope.participants.length).toBe(3);

      myScope.addParticipant();

      expect(myScope.participants.length).toBe(4);

    }));

    it('Remove function should remove participant at a given index', inject(function($rootScope,$controller) {
      var myScope = $rootScope.$new();
      var setupNewBiddingCtrl = $controller('SetupNewBiddingCtrl',{$scope: myScope});

      expect(myScope.participants.length).toBe(2);

      myScope.addParticipant();
      myScope.addParticipant();

      expect(myScope.participants.length).toBe(4);

      myScope.removeParticipant(0);

      expect(myScope.participants.length).toBe(3);

      myScope.removeParticipant(0);

      expect(myScope.participants.length).toBe(2);

      myScope.removeParticipant(1);

      expect(myScope.participants.length).toBe(1);




    }));

  });
});

