make-your-offer
===============

Small app that enables two (or more) parties exchange their ideas on the price of something (make a bidding:))

### Install Dependencies

`npm` is preconfigured to automatically run `bower` so simply do:

```
npm install
```

### Run the Application

To start the preconfigured server run: 

```
npm start
```

Browse to the app at `http://localhost:8000/app/index.html`.

## Testing

There are two kinds of tests: Unit tests and End to End tests.

### Running Unit Tests

These are written in [Jasmine][jasmine], which is run with the [Karma Test Runner [karma]. 

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

In order torun the tests:

```
npm test
```


### End to end testing

The end-to-end tests are also written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

Protractor also needs WebDriver.

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Running e2e tests:

```
npm run protractor
```


