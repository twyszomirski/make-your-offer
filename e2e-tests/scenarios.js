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
      expect(element.all(by.css('h1')).first().getText()).
        toMatch(/Create a new bidding/);

      expect(element.all(by.css('header p')).first().getText()).
          toMatch(/Define name for the bidding and add minimum two participants/);
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
