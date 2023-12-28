/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import Policies from "../../support/pageObjects/Policies_PO"
import BaseActions from "../../support/pageObjects/BaseActions"
import ProjectConnectionAndTab from "../../support/pageObjects/ProjectTab_PO"
import { eightSeconds } from "../../support/utils"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
const dataSet = require('../testData/Reports.json')
import { cyUtils } from '../../support';


describe('validate the policies', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  beforeEach(() => {
    cy.visit(url)
  })

  dataSet.forEach(userData => {
    if (userData.suite.includes(testSuiteName)) {
      it(userData.testcasename, () => {
        const login = new Login
        const policies = new Policies
        const baseAction = new BaseActions
        const projectTab = new ProjectConnectionAndTab
        const projectRepository = new ProjectRepository
        const projectConnection = new ProjectConnection
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        login.login(url)
        projectConnection.createProjectAndValidate(projectName, userData.projectType)
        projectRepository.onboardRepoWithoutRepoConfig(userData.repositoryName, projectName, userData.repoType, userData.isNewProject, userData.projectType)
        projectTab.searchPolicyNameAndValidate(userData.policyName, userData.lowSeverityPolicyName, userData.mediumSeverityPolicyName)
        cy.wait(eightSeconds)
        projectTab.verifyThePoliciesInTable(userData.policyName)
        projectTab.navigateAndValidateComplianceBencmarksPolicies()
        

      })
    }
  })
})