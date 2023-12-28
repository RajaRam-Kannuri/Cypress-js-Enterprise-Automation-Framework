/// <reference types="cypress" />
import Login from "../../support/pageObjects/Login_PO"
import ProjectRepository from "../../support/pageObjects/ProjectRepository_PO"
import { cyUtils } from '../../support';

const dataSet = require('../testData/projectRepositoryNewProjectRuntime.json')

describe('create a new project at runtime and connect to Repo', () => {
  const testSuiteName = Cypress.env('suiteName');
  const url = Cypress.config().baseUrl;
  beforeEach(() => {
    cy.visit(url)
  })

  dataSet.forEach(jsonData=> {
    if(jsonData.suite.includes(testSuiteName)) {
      it(jsonData.testcasename, () => {
        const login = new Login
        const projectRepository = new ProjectRepository
        login.login(url);
        const projectName = `${cyUtils.getSpecBasedNamePrefix() + Date.now()}`
        projectRepository.onboardRepoWithoutRepoConfig(jsonData.repositoryName, projectName, jsonData.repoType, jsonData.isNewProject, jsonData.projectType)
        projectRepository.verifyTheRepositoryConnection(projectName)
      })
    }
  })
})