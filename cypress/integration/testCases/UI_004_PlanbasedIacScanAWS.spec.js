/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/UI_004_PlanbasedIacScanAWS.json')

describe('Plan based IaC scan  with cloud account associated (AWS) - Validate KPIs', () => {
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
      it(jsonData.testcasename, () => {
        const projectConnection = new ProjectConnection
        const projectRepository = new ProjectRepository
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectRepository.onboardRepoWithPlanbasedRepoConfig(jsonData.repositoryName, projectName, jsonData.repoType, jsonData.iacEngineType, jsonData.version, jsonData.remediationType, jsonData.isPlanBasedSetup)
        projectRepository.verifyTheRepositoryConnection(projectName,jsonData.repositoryName)
        projectRepository.navigateAndVerifyTheRepoWithProject(projectName)
        projectRepository.navigateAndVerifyingRepoFailingPoliciesAndResources(jsonData.iacScanFailingPoliciesThresholdValue,jsonData.iacScanResourcesThresholdValue,projectName)
      })
    }
  })
})