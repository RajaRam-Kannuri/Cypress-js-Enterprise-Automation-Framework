/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/projectConnection.json')

describe('create and connect a new project to AWS and validate the connection', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  beforeEach(() => {
    cy.visit(url)
  })

  dataSet.forEach(jsonData => {
    if (jsonData.suite.includes(testSuiteName)) {

      it(jsonData.testcasename, () => {
        if (!jsonData.arnValue) this.skip
        const login = new Login
        const projectConnection = new ProjectConnection
        login.login(url);
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectConnection.connectAwsAccountWithProject(jsonData.arnValue, jsonData.externalId, projectName)
        projectConnection.verifyTheConnectionCreated(projectName)
      })

      //Azure
      it("Test Case 2:", () => {
        //if (!jsonData.tenantId) this.skip 
        const login = new Login
        const projectConnection = new ProjectConnection
        login.login(url);
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, "azure")
        projectConnection.connectAzureAccountWithProject(jsonData.clientId, jsonData.secretValue, jsonData.tenantId, projectName)
        projectConnection.verifyTheConnectionCreated(projectName)
      })

      //GCP
      // it(jsonData.testcasename, () => {
      //   if (!jsonData.arnValue) this.skip 
      //   const login = new Login
      //   const projectConnection = new ProjectConnection
      //   login.login(url);
      //   const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
      //   projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
      //   projectConnection.connectGcpAccountWithProject(projectName)
      //   projectConnection.verifyTheConnectionCreated(projectName)
      // })

    }
  })
})