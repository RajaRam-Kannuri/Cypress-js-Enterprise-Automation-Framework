/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/projectConnectionInitiateScanAndValidate.json')

describe('create and connect a new project to AWS and initiate the scan and validate the scan results', () => {
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
        login.login(url);
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        if(jsonData.projectType.toLowerCase() === "aws") {
          projectConnection.connectAwsAccountWithProject(jsonData.arnValue, jsonData.externalId, projectName)
        } else if(jsonData.projectType === "azure") {
          projectConnection.connectAzureAccountWithProject(jsonData.clientId, jsonData.secretValue, jsonData.tenantId, projectName)
        } else if(jsonData.projectType === "gcp") {
          projectConnection.connectGcpAccountWithProject(projectName)
        }
        projectConnection.verifyTheConnectionCreated(projectName)
        projectConnection.initiateCloudScan()
        projectConnection.navigateAndVerifyTheFailingPoliciesAndResources(jsonData.failingPoliciesThresholdValue, jsonData.resourcesThresholdValue, projectName)
      })
    }
  })
})