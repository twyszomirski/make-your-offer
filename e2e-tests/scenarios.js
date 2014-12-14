'use strict';

var ptor,
    user='FACEBOOK_USERNAME',
    pass='FACEBOOK_PASSWORD';

function doLogin() {
    ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;
    ptor.get('index.html');

    browser.driver.wait(function () {
        return ptor.isElementPresent(by.xpath('//span/iframe'));
    }, 5000);


    var driver = ptor.driver;
    ptor.switchTo().frame(driver.findElement(by.xpath('//span/iframe')));

    driver.findElement(by.id('u_0_1')).click();

    var handlesPromise = ptor.getAllWindowHandles();

    handlesPromise
        .then(function (handles) {
            return ptor.switchTo().window(handles[1]);
        }).then(function (handle) {
            browser.driver.findElement(by.id('email')).sendKeys(user);
            browser.driver.findElement(by.id('pass')).sendKeys(pass);
            browser.driver.findElement(by.id('u_0_1')).click();

            ptor.getAllWindowHandles().then(function (handles) {
                return ptor.switchTo().window(handles[0]);
            });
        });

    ptor.get('index.html');
}

describe('make your offer', function () {

    beforeEach(function () {
        doLogin();
    });

    it('should automatically redirect to /setup-new-bidding when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/setup-new-bidding");
    });

});

describe('setup-new-bidding', function() {

    beforeEach(function() {
        browser.get('index.html#/setup-new-bidding');
        protractor.getInstance().sleep(1000);
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


describe('bid-on-existing', function() {

    beforeEach(function() {
        browser.get('index.html#/bid-on-existing/19');
    });


    it('should render bid-on-existing when user navigates to /bid-on-existing', function() {
        expect(element.all(by.css('section h1')).first().getText()).
            toMatch(/You are bidding on 19/);
    });

});

