/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/projectRepositoryWithConfig.json')

describe('create a new project and connect to Repo with configuration', () => {
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
        const projectRepository = new ProjectRepository
        login.login(url);
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectRepository.onboardRepoWithRepoConfig(jsonData.repositoryName, projectName, jsonData.repoType, jsonData.iacEngineType,
              jsonData.version, jsonData.remediationType, jsonData.isPlanBasedSetup, jsonData.parameterPlanBasedSetupKey, 
              jsonData.parameterPlanBasedSetupValue)
        projectRepository.verifyTheRepositoryConnection(projectName)
        projectRepository.navigateAndVerifyTheFailingPoliciesAndResources(jsonData.iacScanFailingPoliciesThresholdValue, jsonData.iacScanResourcesThresholdValue, projectName)
        projectRepository.navigateAndVerifyTheRepoValuesInFlyout(projectName, jsonData.iacEngineType, jsonData.parameterPlanBasedSetupKey, 
          jsonData.parameterPlanBasedSetupValue)
      })
    }
  })
})