/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/UI_011_OnboardCloud.json')

describe('create and connect a new project to Azure and validate the connection', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  before(() => { 
    const login = new Login
    const projectConnection = new ProjectConnection
    cy.visit(url)
    const deleteprj = cyUtils.getSpecBasedNamePrefix()
    login.login(url).then(() => { projectConnection.deleteProjectsAndRepos(deleteprj) }) 
  })
  
  dataSet.forEach(jsonData=> {
    if(jsonData.suite.includes(testSuiteName)) {
      it("Verify the user is able to onboard Azure Account on go Positive", () => {
        const projectConnection = new ProjectConnection
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        if(jsonData.projectType.toLowerCase() === "aws") {
          projectConnection.connectAwsAccountWithProject(jsonData.arnValue, jsonData.externalId, projectName)
        } else if(jsonData.projectType === "azure") {
          projectConnection.connectAzureProject(jsonData.clientId, jsonData.secretValue, jsonData.tenantId, projectName)
        } else if(jsonData.projectType === "gcp") {
          projectConnection.connectGcpAccountWithProject(projectName)
        }
       projectConnection.verifyTheConnectionCreated(projectName)
       projectConnection.initiateAzureScan(projectName)
       projectConnection.failingPoliciesResources(jsonData.failingPoliciesThresholdValue, jsonData.resourcesThresholdValue, projectName)
     })
     it("Verify the user is able to onboard Azure Account on go Negative", () => {
        const projectConnection = new ProjectConnection
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        if(jsonData.projectType.toLowerCase() === "aws") {
          projectConnection.connectAwsAccountWithProject(jsonData.arnValue, jsonData.externalId, projectName)
        } else if(jsonData.projectType === "azure") {
          projectConnection.connectAzure(jsonData.clientId_invalid, jsonData.secretValue_invalid, jsonData.tenantId_invalid,)
        } else if(jsonData.projectType === "gcp") {
          projectConnection.connectGcpAccountWithProject(projectName)
        }
     })
    }
  })
})