/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import { cyUtils } from '../../support';
import 'cypress-wait-until';

const dataSet = require('../testData/UI_003_ProjectCreateUpdateDelete.json')

describe('create a new project and validate and update and delete and also checking with negative scenarios', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  before(() => {
    const login = new Login
    const projectConnection = new ProjectConnection
    cy.visit(url)
    const deleteprj = cyUtils.getSpecBasedNamePrefix()
    login.login(url).then(() => { projectConnection.deleteProjectsAndRepos(deleteprj) })
    const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
    //projectConnection.createTestDataForProjectCreation(projectName)
  })

  let projectName, projectConnection
  dataSet.forEach(jsonData => {
    if (jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        projectConnection = new ProjectConnection
        projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        const updateprojectname = `${cyUtils.getSpecBasedNamePrefix() + 1234}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
        projectConnection.updateProjectNameAndDelete(updateprojectname, projectName)
      })
      it('verify the user is able to create project with empty name', () => {
        projectConnection = new ProjectConnection
        projectConnection.negativeValidationForProjectName()
      })
      it("verify the user is able to create project with maximum letters", () => {
        cy.get('[data-cy="appbarCancelButton"]').click({force : true})
        cy. wait(10000)
        projectConnection = new ProjectConnection
        projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now() + Date.now() + 123456}`
        projectConnection.createProjectAndValidate1(projectName, jsonData.projectType)
      })
      it("verify the user is able to create with only special characters", () => {
        projectConnection = new ProjectConnection
        projectName = `${'@#+%&*' + Date.now()}`
        projectConnection.createProjectAndValidate(projectName, jsonData.projectType)
      })
    }
  })

})