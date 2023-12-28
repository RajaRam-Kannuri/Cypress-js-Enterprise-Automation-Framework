/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import BaseActions from "../../support/pageObjects/BaseActions"
import { cyUtils } from '../../../cypress/support';
import 'cypress-wait-until';

const dataSet = require('../testData/project.json')

describe('create a new project and validate', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  beforeEach(() => {
    cy.visit(url)
  })

  dataSet.forEach(jsonData=> {
    if(jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        const login = new Login
        const projectConnection = new ProjectConnection
        //TO-DO check the default timeout for the locator to not present
        login.login(url);
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectConnection.searchData("repositories", "acqa-repo1-aws-tf12-part2.git")
      })
    }
  })
})