/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

// To support multiple config files
const path = require("path");
const fs = require("fs-extra");
function getConfigurationFileByEnvName(env) {
  const fileLocation = path.resolve("cypress/config", `${env}-config.json`);
  console.log(`BAT: Using ${env} config. Set appropriate parameters here - cypress/config/${env}-config.json, otherwise the tests will fail.`)
  return fs.readJson(fileLocation);
}

module.exports = (on, config) => {
  // require('cypress-mochawesome-reporter/plugin')(on)

  // To support multiple config files
  const envFile = config.env.configFile || "devenv";
  return getConfigurationFileByEnvName(envFile);
}