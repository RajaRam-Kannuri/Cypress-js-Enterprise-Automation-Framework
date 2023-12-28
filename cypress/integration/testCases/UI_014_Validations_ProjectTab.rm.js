/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import BaseActions from "../../support/pageObjects/BaseActions"
import ProjectConnectionAndTab from "../../support/pageObjects/ProjectTab_PO"
import { cyUtils } from '../../../cypress/support';
import 'cypress-wait-until';

const dataSet = require('../testData/UI_014_UIComponents_Projecttab.json')

describe('UI_014_Validations_ProjectTab', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl
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
        const projectTab = new ProjectConnectionAndTab
        cy.wait(8000)
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectTab.navigateAndSavePolicies(jsonData.policyName)
        projectTab.verifyProjectUIComponents(projectName)
      })
    }
  })
  
})