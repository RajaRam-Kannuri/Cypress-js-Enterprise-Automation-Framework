///<reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import { threeSeconds } from "../../support/utils"
const dataSet = require('../testData/UI_002_projectRepoCloud.json')
import { cyUtils } from '../../support';


describe('Verify delete project and repo functionality', () => {
  const login = new Login
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  before(() => {
    const projectConnection = new ProjectConnection
    cy.visit(url)
    const deleteprj = cyUtils.getSpecBasedNamePrefix()
    login.login(url).then(() => { projectConnection.deleteProjectsAndRepos(deleteprj) })
    const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
    projectConnection.createTestDataForProjectCreation(projectName)
  })
  dataSet.forEach(jsonData => {
    if (jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        cy.wait(threeSeconds)
        const projectconnection = new ProjectConnection
        projectconnection.projectConnectionTab()
        projectconnection.verifyProjectDeleteMessage()
        projectconnection.verifyRepoDeleteMessage()
      })
    }
  })
  
  
})
