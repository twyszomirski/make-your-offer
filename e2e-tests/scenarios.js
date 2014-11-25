'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('make your offer', function() {

  browser.get('index.html');

  it('should automatically redirect to /setup-new-bidding when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/setup-new-bidding");
  });


  describe('setup-new-bidding', function() {

    beforeEach(function() {
      browser.get('index.html#/setup-new-bidding');
    });


    it('should render setup-new-bidding when user navigates to /setup-new-bidding', function() {
      expect(element.all(by.css('section h1')).first().getText()).
        toMatch(/Create a new bidding/);

      expect(element.all(by.css('section p')).first().getText()).
          toMatch(/Define name for the bidding and add minimum two participants/);
    });

    it('should render one input for bidding name and two for participants initially', function() {
      expect(element.all(by.css('.input-lg')).count()).
          toBe(3);

    });

    it('should add one input for each click on Add Participant button', function() {
      expect(element.all(by.css('.input-lg')).count()).
          toBe(3);

      element(by.id('addParticipant')).click();

      expect(element.all(by.css('.input-lg')).count()).
          toBe(4);

    });

    it('should remove one input for each click on ReMove button', function() {
      expect(element.all(by.css('.input-lg')).count()).
          toBe(3);

      element(by.id('addParticipant')).click();

      expect(element.all(by.css('.input-lg')).count()).
          toBe(4);

      element(by.id('removeParticipant2')).click();

      expect(element.all(by.css('.input-lg')).count()).
          toBe(3);


    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
