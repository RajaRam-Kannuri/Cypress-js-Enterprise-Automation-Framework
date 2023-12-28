/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/UI_007_NonPlanedBasedIaCScancftRepo.json')

describe('UI-007: Non-Plan based IaC scan (cft repo - search and select) without cloud account associated - Validate KPIs', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  before(() => { 
    const login = new Login
    const projectConnection = new ProjectConnection
    cy.visit(url)
    const deleteprj = cyUtils.getSpecBasedNamePrefix()
    login.login(url).then(() => { projectConnection.deleteProjectsAndRepos(deleteprj) }) 
  })

  dataSet.forEach(jsonData => {
    if (jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        const projectRepository = new ProjectRepository
        const projectConnection = new ProjectConnection
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectRepository.onboardRepoWithRepoConfig(jsonData.repositoryName, projectName, jsonData.repoType, jsonData.iacEngineType,
          jsonData.version, jsonData.remediationType, jsonData.isPlanBasedSetup, jsonData.parameterPlanBasedSetupKey,
          jsonData.parameterPlanBasedSetupValue)
        projectRepository.verifyTheRepositoryConnection(projectName,jsonData.repositoryName)
        projectRepository.navigateAndVerifyTheFailingPoliciesAndResources(jsonData.iacScanFailingPoliciesThresholdValue, jsonData.iacScanResourcesThresholdValue, projectName)
      })
    }
  })
})