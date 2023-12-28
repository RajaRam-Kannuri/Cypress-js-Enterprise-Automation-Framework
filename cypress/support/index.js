// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

require('cypress-xpath')

beforeEach(function () {
  let testSuite = Cypress.env('SUITE');
  if (!testSuite) {
    return;
  }

  const testName = Cypress.mocha.getRunner().test.fullTitle();
  testSuite = "<" + testSuite + ">"
  if (!testName.includes(testSuite)) {
    this.skip();
  }
})

export const Env = {
  LOCAL: 'local',
  DEV: 'devenv',
  TEST: 'stagetwo',
  PROD: 'app',
}

const getFixtureFile = (req) => {
  return `cypress/fixtures/${req.url.substring(req.url.lastIndexOf('/api/') + 5).replace(/\//g, '_')}_${req.method.toLowerCase()}.json`;
}

function getSpecBasedNamePrefix() {
  var specBasedNamePrefix = Cypress.spec.name.split("/")
  specBasedNamePrefix = "BAT_" + specBasedNamePrefix[specBasedNamePrefix.length - 1].replace(".spec.js", "") + "-"
  return specBasedNamePrefix
}

export const cyUtils = {
  getSpecBasedNamePrefix,
  getFixtureFile,
};
