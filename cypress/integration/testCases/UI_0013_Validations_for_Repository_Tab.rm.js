/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import ProjectConnectionsTab from "../../support/pageObjects/ProjectsAndConnectionsTab_PO"
import { cyUtils } from '../../support';
import { threeSeconds } from "../../support/utils";


const dataSet = require('../testData/UI_010_NonplanbasedMultiscanAWSCloud.json')

describe('UI_013_Validations_for_Repository_Tab', () => {
    const testSuiteName = Cypress.env('suiteName');
    const url = Cypress.config().baseUrl;
    before(() => { 
      const login = new Login
      const projectConnection = new ProjectConnection
      cy.visit(url)
      const deleteprj = cyUtils.getSpecBasedNamePrefix()
      login.login(url).then(() => { projectConnection.deleteProjectsAndRepos(deleteprj) }) 
    })
    let projectRepository, projectConnection, projectName,projectConnectionsTab
    dataSet.forEach(jsonData => {
        if (jsonData.suite.includes(testSuiteName)) {
          it("Validate Delete option from the repository Tab", () => {
            projectRepository = new ProjectRepository
            projectConnection = new ProjectConnection
            projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
            projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
            projectRepository.onboardMultiRepoConfig(jsonData.repositoryName,jsonData.repositoryName2, projectName, jsonData.repoType, jsonData.iacEngineType, jsonData.version, jsonData.remediationType, jsonData.isPlanBasedSetup,
            jsonData.parameterPlanBasedSetupKey, jsonData.parameterPlanBasedSetupValue)
            projectConnectionsTab = new ProjectConnectionsTab
            projectConnectionsTab.repositoryTabValidateDelete()
          })
          it("Validate sorting option from the repository Tab", () => {
            projectConnectionsTab = new ProjectConnectionsTab
            projectConnectionsTab.repositoryTabValidateSorting()
          })
          it("Validate Assign Project option for single project from the repository Tab", () => {
            projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
            projectConnectionsTab = new ProjectConnectionsTab
            projectConnection = new ProjectConnection
            cy.wait(threeSeconds)
            projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
            projectConnectionsTab.repositoryTabAssignProjectforSingleRepo() 
          })
          it("Validate Assign Project option for multiple projects from the repository Tab", () => {
            projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
            projectConnectionsTab = new ProjectConnectionsTab
            projectConnection = new ProjectConnection
            projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
            projectConnectionsTab.repositoryTabAssignProjectformultipleRepo()
          })
        }
      })

})