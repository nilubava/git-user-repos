'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  onPrepare: function() {
    browser.manage().window().setSize(1600, 1000);
  },

  framework: 'jasmine',
  resultJsonOutputFile: 'reports/e2e-results.json',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',
  allScriptsTimeout: 60000,
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // specs: [paths.e2e + '/**/*.js'],
     suites: {
         suite1: paths.e2e + '/**/spec1.js',
         suite2: paths.e2e + '/**/spec2.js'
     },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
      isVerbose: true,
      includeStackTrace: true
  }
};
