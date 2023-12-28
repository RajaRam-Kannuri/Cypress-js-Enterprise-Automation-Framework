/// <reference types="cypress" />
import { throttle } from "cypress/types/lodash";
import Login from "../../support/pageObjects/Login_PO"
import { threeSeconds } from "../../support/utils";

const dataSet = require('../testData/login.json')

describe('login into accurics application', () => {
  const testSuiteName = Cypress.env('suiteName');
  //before(() => { cleanSlate() })
  beforeEach(() => {
  })

  dataSet.forEach(jsonData=> {
    if(jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        const login = new Login
        const url = Cypress.config().baseUrl
        cy.visit(url)
        cy.wait(threeSeconds)
        login.login(url);
        cy.wait(threeSeconds)
        cy.get("#nav-policies-container").click({ force: true })
        cy.wait(threeSeconds)
      })
    }
  })
})