/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/UI_010_NonplanbasedMultiscanAWSCloud.json')

describe('Create project and on board multi repo and initiate aws cloud account on the go negative and validate kpis', () => {
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
          const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
          projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
         projectConnection.connectAwsAccountWithInvalidCred(jsonData.arnValueInvalid, jsonData.externalIdInvalid, projectName)
        })
        it(jsonData.testcasename, () => {
          const projectConnection = new ProjectConnection
          const projectRepository = new ProjectRepository
          const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
          projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
          projectRepository.onboardMultiRepoConfig(jsonData.repositoryName,jsonData.repositoryName2, projectName, jsonData.repoType, jsonData.iacEngineType, jsonData.version, jsonData.remediationType, jsonData.isPlanBasedSetup,
              jsonData.parameterPlanBasedSetupKey, jsonData.parameterPlanBasedSetupValue)
          projectRepository.verifyTheMultiRepositoryConnection(projectName,jsonData.repositoryName)
          projectConnection.connectAwsAccountWithProject(jsonData.arnValue, jsonData.externalId, projectName)
          projectConnection.verifyTheConnectionCreated(projectName)
          projectConnection.initiateCloudScan()
          projectConnection.navigateAndVerifyTheFailingPoliciesAndResources(jsonData.failingPoliciesThresholdValue, jsonData.resourcesThresholdValue, projectName)
        })
      }
    })
  })
  