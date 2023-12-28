/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import BaseActions from "../../support/pageObjects/BaseActions"
import Integration from "../../support/pageObjects/Integration_PO"
import { cyUtils } from '../../support';


const dataSet = require('../testData/Integration.json')

describe('Validate Integrations page actions', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  beforeEach(() => {
    cy.visit(url)
  })

  dataSet.forEach(jsonData => {
    if (jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        const login = new Login
        login.login(url);
        const integration = new Integration
        integration.clickIntegrationsLink()
        integration.clickCardTeraformCloud()
        integration.setUrlInTeraformPopUp(jsonData.urlEndPointName)
        integration.setHmacInTeraformPopUp(jsonData.textBoxHAMC)
        integration.validateTeraformPopUpEndPointUrl()
        integration.validateTeraformPopUpHmac()
        integration.closeTeraformPopUp()
      })
    }
  })
})